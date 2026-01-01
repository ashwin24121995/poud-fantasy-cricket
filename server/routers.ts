import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import {
  getUserById,
  updateUserProfile,
  getUpcomingMatches,
  getLiveMatches,
  getMatchById,
  getCompletedMatches,
  getPlayersByMatch,
  getPlayerById,
  getContestsByMatch,
  getContestById,
  getUserTeams,
  getTeamById,
  getTeamPlayers,
  createFantasyTeam,
  getContestLeaderboard,
  getAllUsers,
  getAllMatches,
  getAllPlayers,
} from "./db";

// Admin-only procedure
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
    
    updateProfile: protectedProcedure
      .input(z.object({
        username: z.string().optional(),
        phoneNumber: z.string().optional(),
        state: z.string().optional(),
        language: z.enum(['en', 'hi']).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await updateUserProfile(ctx.user.id, input);
        return { success: true };
      }),
  }),

  matches: router({
    upcoming: publicProcedure
      .input(z.object({ limit: z.number().optional().default(10) }))
      .query(async ({ input }) => {
        return await getUpcomingMatches(input.limit);
      }),
    
    live: publicProcedure.query(async () => {
      return await getLiveMatches();
    }),
    
    completed: publicProcedure
      .input(z.object({ limit: z.number().optional().default(20) }))
      .query(async ({ input }) => {
        return await getCompletedMatches(input.limit);
      }),
    
    byId: publicProcedure
      .input(z.object({ matchId: z.number() }))
      .query(async ({ input }) => {
        const match = await getMatchById(input.matchId);
        if (!match) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Match not found' });
        }
        return match;
      }),
    
    players: publicProcedure
      .input(z.object({ matchId: z.number() }))
      .query(async ({ input }) => {
        return await getPlayersByMatch(input.matchId);
      }),
  }),

  players: router({
    byId: publicProcedure
      .input(z.object({ playerId: z.number() }))
      .query(async ({ input }) => {
        const player = await getPlayerById(input.playerId);
        if (!player) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Player not found' });
        }
        return player;
      }),
  }),

  contests: router({
    byMatch: publicProcedure
      .input(z.object({ matchId: z.number() }))
      .query(async ({ input }) => {
        return await getContestsByMatch(input.matchId);
      }),
    
    byId: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        const contest = await getContestById(input.contestId);
        if (!contest) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Contest not found' });
        }
        return contest;
      }),
    
    leaderboard: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        return await getContestLeaderboard(input.contestId);
      }),
  }),

  teams: router({
    myTeams: protectedProcedure.query(async ({ ctx }) => {
      return await getUserTeams(ctx.user.id);
    }),
    
    byId: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ input, ctx }) => {
        const team = await getTeamById(input.teamId);
        if (!team) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Team not found' });
        }
        // Verify ownership
        if (team.userId !== ctx.user.id && ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Access denied' });
        }
        return team;
      }),
    
    players: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ input, ctx }) => {
        const team = await getTeamById(input.teamId);
        if (!team) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'Team not found' });
        }
        // Verify ownership
        if (team.userId !== ctx.user.id && ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Access denied' });
        }
        return await getTeamPlayers(input.teamId);
      }),
    
    create: protectedProcedure
      .input(z.object({
        matchId: z.number(),
        contestId: z.number().optional(),
        teamName: z.string().min(1).max(255),
        captainId: z.number(),
        viceCaptainId: z.number(),
        playerIds: z.array(z.number()).length(11),
      }))
      .mutation(async ({ ctx, input }) => {
        // Validate that captain and vice-captain are in the player list
        if (!input.playerIds.includes(input.captainId)) {
          throw new TRPCError({ code: 'BAD_REQUEST', message: 'Captain must be in the team' });
        }
        if (!input.playerIds.includes(input.viceCaptainId)) {
          throw new TRPCError({ code: 'BAD_REQUEST', message: 'Vice-captain must be in the team' });
        }
        if (input.captainId === input.viceCaptainId) {
          throw new TRPCError({ code: 'BAD_REQUEST', message: 'Captain and vice-captain must be different' });
        }
        
        const teamId = await createFantasyTeam({
          userId: ctx.user.id,
          matchId: input.matchId,
          contestId: input.contestId,
          teamName: input.teamName,
          captainId: input.captainId,
          viceCaptainId: input.viceCaptainId,
          playerIds: input.playerIds,
        });
        
        return { teamId, success: true };
      }),
  }),

  admin: router({
    users: adminProcedure
      .input(z.object({ limit: z.number().optional().default(100) }))
      .query(async ({ input }) => {
        return await getAllUsers(input.limit);
      }),
    
    matches: adminProcedure.query(async () => {
      return await getAllMatches();
    }),
    
    players: adminProcedure.query(async () => {
      return await getAllPlayers();
    }),
  }),
});

export type AppRouter = typeof appRouter;
