import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicLayout from "@/components/PublicLayout";
import AgeGate from "@/components/AgeGate";
import { getLoginUrl } from "@/const";
import {
  Trophy,
  Users,
  BarChart3,
  Award,
  DollarSign,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  CheckCircle2,
  Clock,
  Zap,
  Globe,
  Star,
} from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [gatePass, setGatePass] = useState<boolean>(false);

  // Check if user has passed the gate before
  useEffect(() => {
    const passed = localStorage.getItem("ageGatePassed");
    if (passed === "true") {
      setGatePass(true);
    }
  }, []);

  const handleGatePass = () => {
    localStorage.setItem("ageGatePassed", "true");
    setGatePass(true);
  };

  if (!gatePass) {
    return <AgeGate onPass={handleGatePass} />;
  }

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                🏏 Play Fantasy Cricket
                <br />
                <span className="text-primary">Where Skill Rules the Game</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Welcome to <strong>POUD</strong>—India's premier fantasy cricket platform built entirely on skill. No payments. No luck. No ads. Just strategy, knowledge, and pure competition.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Always Free:</strong> Join and play without ever paying a rupee.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Skill Decides Outcomes:</strong> No randomness—only smart cricket decisions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Pure Play, Total Fun:</strong> No payments, no ads—just the sport you love.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>No Financial Risk:</strong> Play responsibly—zero money involved.
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                {isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button size="lg" className="text-lg px-8">
                      <Trophy className="mr-2 h-5 w-5" />
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <a href={getLoginUrl()}>
                      <Button size="lg" className="text-lg px-8">
                        <Users className="mr-2 h-5 w-5" />
                        Register Now
                      </Button>
                    </a>
                    <a href={getLoginUrl()}>
                      <Button variant="outline" size="lg" className="text-lg px-8">
                        Login
                      </Button>
                    </a>
                  </>
                )}
              </div>

              <p className="text-sm text-muted-foreground">
                🚫 For users 18+ in India only. Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim, and Tamil Nadu.
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Draft Your XI</h3>
                  <p className="text-sm text-muted-foreground">
                    Pick players with skill, not guesswork.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Track Live Scores</h3>
                  <p className="text-sm text-muted-foreground">
                    Ball-by-ball scoring powered by real stats.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <Target className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Play Free Contests</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter head-to-head and leaderboard games.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Climb the Rankings</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn glory, not money—prove your knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose POUD Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose POUD?
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Because cricket deserves better than luck, ads, or pay-to-play mechanics. POUD is built by cricket fans, for cricket fans—keeping the game pure, competitive, and accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <DollarSign className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Zero Fees, Full Access</h3>
                <p className="text-muted-foreground">
                  POUD is free forever. No subscriptions, no premium tiers, no tokens, no hidden charges. Every contest is open to everyone, from Day 1—completely fair and square.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <Lightbulb className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Skill Over Luck</h3>
                <p className="text-muted-foreground">
                  Draft your team using stats, matchups, and form—your decisions drive results. There's no dice-roll here—just smart strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <Shield className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Safe & Fair Play</h3>
                <p className="text-muted-foreground">
                  No multi-accounts, no bots, no manipulation. Every user plays on equal terms with transparent rules and instant support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Get started in minutes and compete with cricket fans across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Pick a Match",
                description: "Choose from upcoming or live cricket fixtures across all major tournaments and leagues.",
              },
              {
                step: "2",
                title: "Draft Your XI",
                description: "Build your team of 11 players using your 100-point budget strategically.",
              },
              {
                step: "3",
                title: "Join Contest",
                description: "Enter any contest at no cost. No wallets or credits required.",
              },
              {
                step: "4",
                title: "Track & Win",
                description: "Follow live scores and climb the leaderboard based on your team's performance.",
              },
            ].map((item) => (
              <Card key={item.step} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold pt-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More About Fantasy Cricket
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="ghost">
                  View FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-amber-600 text-white">
        <div className="container text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Put Your Cricket Knowledge to the Test?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of cricket fans playing skill-based fantasy sports. No payments, no luck—just pure strategy.
          </p>
          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Trophy className="mr-2 h-5 w-5" />
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <a href={getLoginUrl()}>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Users className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </a>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
