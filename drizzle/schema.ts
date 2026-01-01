import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, index } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extended with fantasy sports specific fields.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  
  // Fantasy sports specific fields
  username: varchar("username", { length: 100 }).unique(),
  phoneNumber: varchar("phoneNumber", { length: 20 }),
  state: varchar("state", { length: 100 }), // Indian state for restrictions
  language: mysqlEnum("language", ["en", "hi"]).default("en"),
  ageVerified: boolean("ageVerified").default(false),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

/**
 * Cricket matches table
 */
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  externalMatchId: varchar("externalMatchId", { length: 100 }).unique(), // From API
  title: varchar("title", { length: 255 }).notNull(),
  team1: varchar("team1", { length: 100 }).notNull(),
  team2: varchar("team2", { length: 100 }).notNull(),
  team1Logo: text("team1Logo"),
  team2Logo: text("team2Logo"),
  venue: varchar("venue", { length: 255 }),
  matchType: mysqlEnum("matchType", ["T20", "ODI", "Test", "T10"]).notNull(),
  status: mysqlEnum("status", ["upcoming", "live", "completed", "cancelled"]).default("upcoming").notNull(),
  startTime: timestamp("startTime").notNull(),
  endTime: timestamp("endTime"),
  result: text("result"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
  startTimeIdx: index("start_time_idx").on(table.startTime),
}));

/**
 * Cricket players table
 */
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  externalPlayerId: varchar("externalPlayerId", { length: 100 }).unique(), // From API
  name: varchar("name", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["batsman", "bowler", "allrounder", "wicketkeeper"]).notNull(),
  team: varchar("team", { length: 100 }).notNull(),
  photo: text("photo"),
  fantasyPoints: decimal("fantasyPoints", { precision: 10, scale: 2 }).default("8.0"), // Budget points for team selection
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  teamIdx: index("team_idx").on(table.team),
  roleIdx: index("role_idx").on(table.role),
}));

/**
 * Match players - Links players to specific matches with their stats
 */
export const matchPlayers = mysqlTable("match_players", {
  id: int("id").autoincrement().primaryKey(),
  matchId: int("matchId").notNull().references(() => matches.id, { onDelete: "cascade" }),
  playerId: int("playerId").notNull().references(() => players.id, { onDelete: "cascade" }),
  
  // Batting stats
  runs: int("runs").default(0),
  ballsFaced: int("ballsFaced").default(0),
  fours: int("fours").default(0),
  sixes: int("sixes").default(0),
  strikeRate: decimal("strikeRate", { precision: 6, scale: 2 }),
  
  // Bowling stats
  wickets: int("wickets").default(0),
  oversBowled: decimal("oversBowled", { precision: 4, scale: 1 }).default("0.0"),
  runsConceded: int("runsConceded").default(0),
  maidens: int("maidens").default(0),
  economyRate: decimal("economyRate", { precision: 5, scale: 2 }),
  
  // Fielding stats
  catches: int("catches").default(0),
  stumpings: int("stumpings").default(0),
  runOuts: int("runOuts").default(0),
  
  // Fantasy points earned in this match
  pointsEarned: decimal("pointsEarned", { precision: 10, scale: 2 }).default("0.0"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  matchIdx: index("match_idx").on(table.matchId),
  playerIdx: index("player_idx").on(table.playerId),
}));

/**
 * Contests - Different contest types users can join
 */
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: int("matchId").notNull().references(() => matches.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  contestType: mysqlEnum("contestType", ["public", "private", "head_to_head"]).default("public").notNull(),
  maxParticipants: int("maxParticipants").default(100),
  currentParticipants: int("currentParticipants").default(0),
  status: mysqlEnum("status", ["open", "full", "live", "completed"]).default("open").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  matchIdx: index("match_idx").on(table.matchId),
  statusIdx: index("status_idx").on(table.status),
}));

/**
 * Fantasy teams created by users
 */
export const fantasyTeams = mysqlTable("fantasy_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  matchId: int("matchId").notNull().references(() => matches.id, { onDelete: "cascade" }),
  contestId: int("contestId").references(() => contests.id, { onDelete: "cascade" }),
  teamName: varchar("teamName", { length: 255 }).notNull(),
  captainId: int("captainId").notNull().references(() => players.id),
  viceCaptainId: int("viceCaptainId").notNull().references(() => players.id),
  totalPoints: decimal("totalPoints", { precision: 10, scale: 2 }).default("0.0"),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userIdx: index("user_idx").on(table.userId),
  matchIdx: index("match_idx").on(table.matchId),
  contestIdx: index("contest_idx").on(table.contestId),
}));

/**
 * Fantasy team players - The 11 players selected in each fantasy team
 */
export const fantasyTeamPlayers = mysqlTable("fantasy_team_players", {
  id: int("id").autoincrement().primaryKey(),
  fantasyTeamId: int("fantasyTeamId").notNull().references(() => fantasyTeams.id, { onDelete: "cascade" }),
  playerId: int("playerId").notNull().references(() => players.id, { onDelete: "cascade" }),
  isCaptain: boolean("isCaptain").default(false),
  isViceCaptain: boolean("isViceCaptain").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  teamIdx: index("team_idx").on(table.fantasyTeamId),
  playerIdx: index("player_idx").on(table.playerId),
}));

/**
 * Contest entries - Tracks which teams are entered in which contests
 */
export const contestEntries = mysqlTable("contest_entries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull().references(() => contests.id, { onDelete: "cascade" }),
  fantasyTeamId: int("fantasyTeamId").notNull().references(() => fantasyTeams.id, { onDelete: "cascade" }),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  finalPoints: decimal("finalPoints", { precision: 10, scale: 2 }).default("0.0"),
  finalRank: int("finalRank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  contestIdx: index("contest_idx").on(table.contestId),
  userIdx: index("user_idx").on(table.userId),
}));

/**
 * Platform configuration - Admin settings
 */
export const platformConfig = mysqlTable("platform_config", {
  id: int("id").autoincrement().primaryKey(),
  configKey: varchar("configKey", { length: 100 }).notNull().unique(),
  configValue: text("configValue"),
  description: text("description"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Type exports
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;
export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;
export type MatchPlayer = typeof matchPlayers.$inferSelect;
export type InsertMatchPlayer = typeof matchPlayers.$inferInsert;
export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;
export type FantasyTeam = typeof fantasyTeams.$inferSelect;
export type InsertFantasyTeam = typeof fantasyTeams.$inferInsert;
export type FantasyTeamPlayer = typeof fantasyTeamPlayers.$inferSelect;
export type InsertFantasyTeamPlayer = typeof fantasyTeamPlayers.$inferInsert;
export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;
export type PlatformConfig = typeof platformConfig.$inferSelect;
export type InsertPlatformConfig = typeof platformConfig.$inferInsert;
