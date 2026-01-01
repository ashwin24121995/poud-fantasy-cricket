# API Integration Guide for RosterMind Fantasy Sports

This document outlines how to integrate the external cricket match data API once the API credentials are provided.

## Overview

The RosterMind platform is designed to receive real-time cricket match data, player statistics, and live scores from an external API. The database schema and tRPC endpoints are already in place to handle this data.

## Database Schema Ready for API Data

The following tables are ready to receive data from the API:

### 1. **matches** table
- Stores match information (teams, venue, start time, status)
- Fields: `id`, `externalMatchId`, `title`, `team1`, `team2`, `matchType`, `venue`, `startTime`, `status`, `result`, `winnerTeam`

### 2. **players** table
- Stores player information and fantasy points
- Fields: `id`, `externalPlayerId`, `name`, `team`, `role`, `fantasyPoints`, `imageUrl`

### 3. **playerStats** table
- Stores detailed player performance statistics
- Fields: `matchId`, `playerId`, `runs`, `wickets`, `catches`, `strikeRate`, `economyRate`, `points`

### 4. **contests** table
- Stores contest information for each match
- Fields: `matchId`, `contestName`, `entryFee`, `prizePool`, `maxTeams`, `totalSpots`

## API Integration Points

### Required API Endpoints

When you provide the API, we'll need the following data:

1. **Get Upcoming Matches**
   - Endpoint: TBD
   - Purpose: Fetch list of upcoming cricket matches
   - Data needed: Match ID, teams, venue, start time, match type

2. **Get Live Matches**
   - Endpoint: TBD
   - Purpose: Fetch currently live matches
   - Data needed: Match ID, current score, overs, status

3. **Get Match Details**
   - Endpoint: TBD
   - Purpose: Fetch detailed information about a specific match
   - Data needed: Full match details, playing XI, toss info

4. **Get Players for Match**
   - Endpoint: TBD
   - Purpose: Fetch list of players available for a match
   - Data needed: Player ID, name, team, role, fantasy points value

5. **Get Live Player Stats**
   - Endpoint: TBD
   - Purpose: Fetch real-time player performance during a match
   - Data needed: Runs, wickets, catches, strike rate, economy rate

6. **Get Match Result**
   - Endpoint: TBD
   - Purpose: Fetch final result of a completed match
   - Data needed: Winner, margin, player of the match

## Implementation Steps

Once you provide the API credentials and documentation:

### Step 1: Create API Service Layer

Create `server/services/cricketApi.ts`:

```typescript
import axios from 'axios';

const API_BASE_URL = process.env.CRICKET_API_URL;
const API_KEY = process.env.CRICKET_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export async function fetchUpcomingMatches() {
  const response = await apiClient.get('/matches/upcoming');
  return response.data;
}

export async function fetchLiveMatches() {
  const response = await apiClient.get('/matches/live');
  return response.data;
}

export async function fetchMatchDetails(matchId: string) {
  const response = await apiClient.get(`/matches/${matchId}`);
  return response.data;
}

export async function fetchMatchPlayers(matchId: string) {
  const response = await apiClient.get(`/matches/${matchId}/players`);
  return response.data;
}

export async function fetchLivePlayerStats(matchId: string) {
  const response = await apiClient.get(`/matches/${matchId}/stats`);
  return response.data;
}
```

### Step 2: Create Data Sync Functions

Create `server/services/dataSync.ts`:

```typescript
import { getDb } from '../db';
import { matches, players, playerStats } from '../../drizzle/schema';
import { fetchUpcomingMatches, fetchMatchPlayers, fetchLivePlayerStats } from './cricketApi';

export async function syncMatches() {
  const db = await getDb();
  if (!db) return;

  const apiMatches = await fetchUpcomingMatches();
  
  for (const apiMatch of apiMatches) {
    await db.insert(matches).values({
      externalMatchId: apiMatch.id,
      title: apiMatch.title,
      team1: apiMatch.team1,
      team2: apiMatch.team2,
      matchType: apiMatch.type,
      venue: apiMatch.venue,
      startTime: new Date(apiMatch.startTime),
      status: 'upcoming',
    }).onDuplicateKeyUpdate({
      set: {
        status: apiMatch.status,
        result: apiMatch.result,
      },
    });
  }
}

export async function syncPlayers(matchId: number, externalMatchId: string) {
  const db = await getDb();
  if (!db) return;

  const apiPlayers = await fetchMatchPlayers(externalMatchId);
  
  for (const apiPlayer of apiPlayers) {
    await db.insert(players).values({
      externalPlayerId: apiPlayer.id,
      name: apiPlayer.name,
      team: apiPlayer.team,
      role: apiPlayer.role,
      fantasyPoints: apiPlayer.fantasyPoints,
      imageUrl: apiPlayer.imageUrl,
    }).onDuplicateKeyUpdate({
      set: {
        fantasyPoints: apiPlayer.fantasyPoints,
      },
    });
  }
}

export async function syncLiveStats(matchId: number, externalMatchId: string) {
  const db = await getDb();
  if (!db) return;

  const apiStats = await fetchLivePlayerStats(externalMatchId);
  
  for (const stat of apiStats) {
    const player = await db.select().from(players)
      .where(eq(players.externalPlayerId, stat.playerId))
      .limit(1);
    
    if (player[0]) {
      await db.insert(playerStats).values({
        matchId,
        playerId: player[0].id,
        runs: stat.runs,
        wickets: stat.wickets,
        catches: stat.catches,
        strikeRate: stat.strikeRate,
        economyRate: stat.economyRate,
        points: stat.fantasyPoints,
      }).onDuplicateKeyUpdate({
        set: {
          runs: stat.runs,
          wickets: stat.wickets,
          catches: stat.catches,
          strikeRate: stat.strikeRate,
          economyRate: stat.economyRate,
          points: stat.fantasyPoints,
        },
      });
    }
  }
}
```

### Step 3: Set Up Scheduled Jobs

Create `server/jobs/syncJob.ts`:

```typescript
import { syncMatches, syncLiveStats } from '../services/dataSync';

// Run every 5 minutes to sync match data
export async function startMatchSyncJob() {
  setInterval(async () => {
    try {
      await syncMatches();
      console.log('[Sync] Matches synced successfully');
    } catch (error) {
      console.error('[Sync] Failed to sync matches:', error);
    }
  }, 5 * 60 * 1000); // 5 minutes
}

// Run every 30 seconds to sync live match stats
export async function startLiveStatsSyncJob() {
  setInterval(async () => {
    try {
      // Get all live matches and sync their stats
      const db = await getDb();
      if (!db) return;
      
      const liveMatches = await db.select().from(matches)
        .where(eq(matches.status, 'live'));
      
      for (const match of liveMatches) {
        if (match.externalMatchId) {
          await syncLiveStats(match.id, match.externalMatchId);
        }
      }
      
      console.log('[Sync] Live stats synced successfully');
    } catch (error) {
      console.error('[Sync] Failed to sync live stats:', error);
    }
  }, 30 * 1000); // 30 seconds
}
```

### Step 4: Update Environment Variables

Add to `.env`:

```
CRICKET_API_URL=<API_BASE_URL>
CRICKET_API_KEY=<API_KEY>
```

### Step 5: Start Sync Jobs

Update `server/_core/index.ts` to start the sync jobs:

```typescript
import { startMatchSyncJob, startLiveStatsSyncJob } from '../jobs/syncJob';

// After server starts
startMatchSyncJob();
startLiveStatsSyncJob();
```

## Testing the Integration

1. Verify API credentials work by making a test request
2. Run the sync functions manually to populate initial data
3. Check the database to ensure data is being stored correctly
4. Test the frontend to ensure data displays properly
5. Monitor the sync jobs to ensure they run without errors

## Next Steps

Once you provide:
- API base URL
- API authentication credentials (API key, Bearer token, etc.)
- API documentation or example responses

I will:
1. Implement the API service layer
2. Create the data synchronization functions
3. Set up automated sync jobs
4. Test the integration end-to-end
5. Update the frontend to display real data

## Notes

- The current database schema uses MySQL/TiDB (Note: User prefers not to use MySQL, but this is the default for the template. Consider migrating to PostgreSQL if needed)
- All tRPC endpoints are already set up to query the database
- The frontend components are ready to display data once it's available
- No mock data is being used - all displays will show real API data once integrated
