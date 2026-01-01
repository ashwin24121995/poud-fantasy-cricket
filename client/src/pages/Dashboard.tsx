import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicLayout from "@/components/PublicLayout";
import { Trophy, Users, Calendar, TrendingUp, Plus } from "lucide-react";
import { Link, Redirect } from "wouter";
import { getLoginUrl } from "@/const";

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const { data: myTeams, isLoading: teamsLoading } = trpc.teams.myTeams.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const { data: upcomingMatches, isLoading: matchesLoading } = trpc.matches.upcoming.useQuery({ limit: 5 });
  const { data: liveMatches, isLoading: liveLoading } = trpc.matches.live.useQuery();

  if (loading) {
    return (
      <PublicLayout>
        <div className="container py-20 text-center">
          <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </PublicLayout>
    );
  }

  if (!isAuthenticated) {
    if (typeof window !== "undefined") {
      window.location.href = getLoginUrl();
    }
    return null;
  }

  return (
    <PublicLayout>
      <div className="container py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user?.name || user?.username || "Player"}! 🏏
          </h1>
          <p className="text-muted-foreground">
            Manage your fantasy teams, join contests, and track your performance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">My Teams</p>
                  <p className="text-2xl font-bold">{myTeams?.length || 0}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Live Matches</p>
                  <p className="text-2xl font-bold">{liveMatches?.length || 0}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-2xl font-bold">{upcomingMatches?.length || 0}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rank</p>
                  <p className="text-2xl font-bold">-</p>
                </div>
                <Trophy className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="teams" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="teams">My Teams</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="contests">Contests</TabsTrigger>
          </TabsList>

          {/* My Teams Tab */}
          <TabsContent value="teams" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Fantasy Teams</h2>
              <Button disabled>
                <Plus className="mr-2 h-4 w-4" />
                Create Team
              </Button>
            </div>

            {teamsLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              </div>
            ) : myTeams && myTeams.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {myTeams.map((item) => (
                  <Card key={item.team.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        {item.team.teamName}
                      </CardTitle>
                      <CardDescription>
                        {item.match.team1} vs {item.match.team2}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Match Status:</span>
                          <span className="font-medium capitalize">{item.match.status}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Points:</span>
                          <span className="font-bold text-primary">{item.team.totalPoints}</span>
                        </div>
                        {item.team.rank && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rank:</span>
                            <span className="font-medium">#{item.team.rank}</span>
                          </div>
                        )}
                      </div>
                      <Button variant="outline" className="w-full mt-4" disabled>
                        View Team Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Teams Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first fantasy team to start competing!
                  </p>
                  <Button disabled>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Team
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-4">
            <h2 className="text-2xl font-bold">Available Matches</h2>

            {liveMatches && liveMatches.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Live Now
                </h3>
                <div className="grid gap-4">
                  {liveMatches.map((match) => (
                    <Card key={match.id} className="border-red-200 bg-red-50/50">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-semibold text-lg">
                              {match.team1} vs {match.team2}
                            </h4>
                            <p className="text-sm text-muted-foreground">{match.venue}</p>
                            <p className="text-xs text-muted-foreground">{match.matchType}</p>
                          </div>
                          <Button variant="destructive" disabled>
                            View Live
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {matchesLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              </div>
            ) : upcomingMatches && upcomingMatches.length > 0 ? (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Upcoming Matches</h3>
                <div className="grid gap-4">
                  {upcomingMatches.map((match) => (
                    <Card key={match.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-semibold text-lg">
                              {match.team1} vs {match.team2}
                            </h4>
                            <p className="text-sm text-muted-foreground">{match.venue}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(match.startTime).toLocaleString()} • {match.matchType}
                            </p>
                          </div>
                          <Button disabled>Create Team</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Matches Available</h3>
                  <p className="text-muted-foreground">
                    Check back soon for upcoming cricket matches!
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Contests Tab */}
          <TabsContent value="contests" className="space-y-4">
            <h2 className="text-2xl font-bold">Available Contests</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Active Contests</h3>
                <p className="text-muted-foreground">
                  Contests will appear here when matches are available. Create a team first!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PublicLayout>
  );
}
