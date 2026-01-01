import { eq, and, desc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, users, matches, players, contests, fantasyTeams, 
  fantasyTeamPlayers, matchPlayers, contestEntries, platformConfig,
  Match, Player, Contest, FantasyTeam, MatchPlayer
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod", "username", "phoneNumber", "state"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.language !== undefined) {
      values.language = user.language;
      updateSet.language = user.language;
    }
    
    if (user.ageVerified !== undefined) {
      values.ageVerified = user.ageVerified;
      updateSet.ageVerified = user.ageVerified;
    }

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserProfile(userId: number, data: Partial<InsertUser>) {
  const db = await getDb();
  if (!db) return;

  await db.update(users).set(data).where(eq(users.id, userId));
}

// ========== MATCH OPERATIONS ==========

export async function getUpcomingMatches(limit: number = 10) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(eq(matches.status, 'upcoming'))
    .orderBy(matches.startTime)
    .limit(limit);
}

export async function getLiveMatches() {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(eq(matches.status, 'live'))
    .orderBy(matches.startTime);
}

export async function getMatchById(matchId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(matches).where(eq(matches.id, matchId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getCompletedMatches(limit: number = 20) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(eq(matches.status, 'completed'))
    .orderBy(desc(matches.startTime))
    .limit(limit);
}

// ========== PLAYER OPERATIONS ==========

export async function getPlayersByMatch(matchId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select({
      player: players,
      stats: matchPlayers
    })
    .from(matchPlayers)
    .innerJoin(players, eq(matchPlayers.playerId, players.id))
    .where(eq(matchPlayers.matchId, matchId));
}

export async function getPlayerById(playerId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getPlayersByTeam(team: string) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(players).where(eq(players.team, team));
}

// ========== CONTEST OPERATIONS ==========

export async function getContestsByMatch(matchId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(contests)
    .where(and(
      eq(contests.matchId, matchId),
      eq(contests.status, 'open')
    ));
}

export async function getContestById(contestId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(contests).where(eq(contests.id, contestId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ========== FANTASY TEAM OPERATIONS ==========

export async function getUserTeams(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select({
      team: fantasyTeams,
      match: matches
    })
    .from(fantasyTeams)
    .innerJoin(matches, eq(fantasyTeams.matchId, matches.id))
    .where(eq(fantasyTeams.userId, userId))
    .orderBy(desc(fantasyTeams.createdAt));
}

export async function getTeamById(teamId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(fantasyTeams).where(eq(fantasyTeams.id, teamId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getTeamPlayers(teamId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select({
      teamPlayer: fantasyTeamPlayers,
      player: players
    })
    .from(fantasyTeamPlayers)
    .innerJoin(players, eq(fantasyTeamPlayers.playerId, players.id))
    .where(eq(fantasyTeamPlayers.fantasyTeamId, teamId));
}

export async function createFantasyTeam(teamData: {
  userId: number;
  matchId: number;
  contestId?: number;
  teamName: string;
  captainId: number;
  viceCaptainId: number;
  playerIds: number[];
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Insert the fantasy team
  const [team] = await db.insert(fantasyTeams).values({
    userId: teamData.userId,
    matchId: teamData.matchId,
    contestId: teamData.contestId || null,
    teamName: teamData.teamName,
    captainId: teamData.captainId,
    viceCaptainId: teamData.viceCaptainId,
  });

  const teamId = team.insertId;

  // Insert team players
  const teamPlayers = teamData.playerIds.map(playerId => ({
    fantasyTeamId: teamId,
    playerId: playerId,
    isCaptain: playerId === teamData.captainId,
    isViceCaptain: playerId === teamData.viceCaptainId,
  }));

  await db.insert(fantasyTeamPlayers).values(teamPlayers);

  return teamId;
}

// ========== LEADERBOARD OPERATIONS ==========

export async function getContestLeaderboard(contestId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select({
      entry: contestEntries,
      team: fantasyTeams,
      user: users
    })
    .from(contestEntries)
    .innerJoin(fantasyTeams, eq(contestEntries.fantasyTeamId, fantasyTeams.id))
    .innerJoin(users, eq(contestEntries.userId, users.id))
    .where(eq(contestEntries.contestId, contestId))
    .orderBy(desc(contestEntries.finalPoints));
}

// ========== PLATFORM CONFIG OPERATIONS ==========

export async function getConfigValue(key: string) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(platformConfig).where(eq(platformConfig.configKey, key)).limit(1);
  return result.length > 0 ? result[0]?.configValue : null;
}

export async function setConfigValue(key: string, value: string, description?: string) {
  const db = await getDb();
  if (!db) return;

  await db.insert(platformConfig).values({
    configKey: key,
    configValue: value,
    description: description || null,
  }).onDuplicateKeyUpdate({
    set: { configValue: value, description: description || null }
  });
}

// ========== ADMIN OPERATIONS ==========

export async function getAllUsers(limit: number = 100) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(users).limit(limit);
}

export async function getAllMatches() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(matches).orderBy(desc(matches.startTime));
}

export async function getAllPlayers() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(players);
}
