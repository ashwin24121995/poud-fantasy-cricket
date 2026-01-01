import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicLayout from "@/components/PublicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  Calendar,
  Lock,
  Headphones,
  Eye,
  ShieldCheck,
  UserPlus,
  LogIn,
  Gamepad2,
} from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();

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
                  <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>No Financial Risk:</strong> Play responsibly—zero money involved.
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                {!isAuthenticated ? (
                  <>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Register Now
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href={getLoginUrl()}>
                        <LogIn className="mr-2 h-5 w-5" />
                        Login
                      </a>
                    </Button>
                  </>
                ) : (
                  <Button size="lg" asChild>
                    <a href="/dashboard">
                      <Trophy className="mr-2 h-5 w-5" />
                      Go to Dashboard
                    </a>
                  </Button>
                )}
              </div>

              <p className="text-sm text-muted-foreground">
                🚫 For users 18+ in India only. Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim, and Tamil Nadu.
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 text-center space-y-3">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Draft Your XI</h3>
                  <p className="text-sm text-muted-foreground">Pick players with skill, not guesswork.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 text-center space-y-3">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Track Live Scores</h3>
                  <p className="text-sm text-muted-foreground">Ball-by-ball scoring powered by real stats.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 text-center space-y-3">
                  <Gamepad2 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Play Free Contests</h3>
                  <p className="text-sm text-muted-foreground">Enter head-to-head and leaderboard games.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">Climb the Rankings</h3>
                  <p className="text-sm text-muted-foreground">Earn glory, not money—prove your knowledge.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose POUD Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose POUD?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Because cricket deserves better than luck, ads, or pay-to-play mechanics. Here's how we keep it pure and competitive:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <DollarSign className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Zero Fees, Full Access</h3>
                <p className="text-muted-foreground">
                  POUD is free forever. No subscriptions, no premium tiers, no tokens. Every contest is open to everyone, from Day 1—fair and square.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Lightbulb className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Skill Over Luck</h3>
                <p className="text-muted-foreground">
                  Draft your team using stats, matchups, and form—your decisions drive results. There's no dice-roll here—just smart strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Shield className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Safe & Fair Play</h3>
                <p className="text-muted-foreground">
                  No money involved means no financial risk. Play responsibly, compete fairly, and enjoy cricket the way it should be.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About POUD & Our Commitment</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              POUD is built for cricket purists: no fees, no ads, no gimmicks—just skill, transparency, and fair play.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Core Details */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Our Platform Philosophy</h3>
                    <p className="text-muted-foreground">
                      At POUD, we believe true fantasy cricket should reward your knowledge, not your wallet. That's why we've stripped away all pay-to-play barriers, ads, and hidden fees—so you can focus entirely on strategy, stats, and the thrill of competition.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">What You Can Expect</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zero Fees, Ever:</strong><br />
                          <span className="text-muted-foreground">Play every contest free of charge. No tokens, no subscriptions, no surprise charges.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <BarChart3 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Live Data & Analytics:</strong><br />
                          <span className="text-muted-foreground">Access real-time player stats, pitch reports, and dynamic leaderboards that update ball-by-ball.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Transparent Scoring:</strong><br />
                          <span className="text-muted-foreground">Our full scoring matrix is published publicly—every point, penalty, and bonus is clearly defined.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>No Financial Risk:</strong><br />
                          <span className="text-muted-foreground">This is purely skill-based. No money ever exchanges hands, so you can play responsibly.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Community & Support:</strong><br />
                          <span className="text-muted-foreground">Join public leagues or create private contests with friends. Our dedicated support team (real humans, no bots) is always here to help.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Who Can Play</h3>
                    <p className="text-muted-foreground mb-2">
                      POUD is open to adult cricket fans (18+) residing in India—except Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim, and Tamil Nadu—ensuring we comply with state regulations.
                    </p>
                    <p className="text-muted-foreground">
                      One account per person. We verify through secure sessions—no third-party trackers or cookies involved.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Gamepad2 className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Expert Drafting Tools</h4>
                  <p className="text-sm text-muted-foreground">Use head-to-head comparisons, player heatmaps, and form charts to build the strongest squad.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Deep Analytics</h4>
                  <p className="text-sm text-muted-foreground">In-depth breakdown of runs, wickets, strike rates, economy rates, and more.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Community Leagues</h4>
                  <p className="text-sm text-muted-foreground">Join thousands of fans nationwide or create private contests with friends in seconds.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Global Leaderboards</h4>
                  <p className="text-sm text-muted-foreground">See where you stand regionally and nationally—earn badges and recognition for top performance.</p>
                </CardContent>
              </Card>

              <Card className="border-2 col-span-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Headphones className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-semibold">Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground">Our support team is available via email—expect prompt, personalized assistance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Play</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes—no downloads, no payments. Just pure cricket action, step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">1. Pick a Match</h3>
                <p className="text-muted-foreground">
                  Browse today's live or upcoming cricket matches. Choose one that you want to compete in—single or multi-match contests available.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Users className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">2. Draft Your Team</h3>
                <p className="text-muted-foreground">
                  Use your 100-point budget to select 11 players: batters, bowlers, keepers, and all-rounders. Balance your team smartly for maximum points.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Gamepad2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">3. Join a Contest</h3>
                <p className="text-muted-foreground">
                  Enter free public contests or create private ones with friends. No tokens, no fees—just real-time skill-based play.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center space-y-4">
                <Trophy className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">4. Climb the Leaderboard</h3>
                <p className="text-muted-foreground">
                  Track your performance live as the match unfolds. Your cricket sense earns you points—and a spot at the top.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Register & Start Playing */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Register & Start Playing</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              It takes less than 60 seconds to join POUD. Follow these three simple steps to draft your team and compete on pure skill—completely free.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1: Sign Up */}
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <UserPlus className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Step 1: Sign Up</h3>
                </div>
                <p className="text-muted-foreground">
                  Click "Register" in the navigation and complete these fields:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Pick a unique <strong>Username</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Enter a valid <strong>Email Address</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Choose a secure <strong>Password</strong>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  A verification email will be sent—click the link to activate your account. No fees, no delays.
                </p>
              </CardContent>
            </Card>

            {/* Step 2: Log In */}
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <LogIn className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Step 2: Log In</h3>
                </div>
                <p className="text-muted-foreground">
                  Visit "Login," enter your credentials, and access your dashboard.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Browse upcoming and live matches
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    View your active contests and rankings
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Securely log out when finished
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  All sessions are handled securely—no cookies or third-party tracking.
                </p>
              </CardContent>
            </Card>

            {/* Step 3: Draft & Compete */}
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Step 3: Draft & Compete</h3>
                </div>
                <p className="text-muted-foreground">
                  In your dashboard:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Select a match and enter the draft room
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Use your 100-point budget to pick 11 players
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Lock in your lineup before the match begins
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Watch live scoring and climb the leaderboard
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  No real-money transactions. Pure skill, pure fun.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notices Section */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container">
          <div className="text-center space-y-3">
            <p className="text-sm">
              ⚠️ <strong>Eligibility:</strong> You must be 18+ and located in India (excluding Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim & Tamil Nadu).
            </p>
            <p className="text-sm">
              🔐 <strong>Privacy First:</strong> We never show ads or use tracking cookies—just uninterrupted, skill-based fantasy cricket.
            </p>
            <p className="text-sm">
              💸 <strong>No Financial Risk:</strong> It's completely free to play—so play responsibly and enjoy the game.
            </p>
            <p className="text-sm">
              📧 <strong>Support:</strong> Questions? Email us anytime at <a href="mailto:support@poud.com" className="text-primary hover:underline">support@poud.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about playing on POUD, in clear detail.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What exactly is Fantasy Cricket on POUD?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Fantasy Cricket on POUD lets you build a virtual team of real-life players each week. You start with a fixed "budget" of 100 points to pick 11 players across batting, bowling, wicket-keeping, and all-rounder roles. As those players perform in actual matches—runs scored, wickets taken, catches, strike rates, economy rates—you earn corresponding points. The more accurately you predict performances, the higher you climb on the live leaderboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How is my score calculated—can I see the rules?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Absolutely. We publish our complete scoring matrix under "Scoring Rules" in the help menu. For example:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>+1 point per run</li>
                  <li>+20 points per wicket</li>
                  <li>+10 points per catch</li>
                  <li>Strike-rate bonuses for batters, economy bonuses for bowlers</li>
                  <li>Negative points for ducks or wides</li>
                </ul>
                <p className="mt-2">Every rule is transparent—no hidden formulas—so you know exactly how each action translates to points.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How do I join or create a contest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">After drafting your XI, click "Join Contest." You can:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Select from public contests—open to all users</li>
                  <li>Create private contests—invite friends via a unique link</li>
                </ul>
                <p className="mt-2">Because it's free, there's no limit on entries: join multiple contests or try different strategies simultaneously.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Are there any fees or in-game purchases?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No fees, ever. POUD is 100% free-to-play. There are no subscriptions, no tokens, no micro-transactions, and no advertisements. We're funded independently so you can compete purely on cricketing skill.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I win cash or prizes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                POUD does not award real-money prizes. Instead, you earn points, badges, and bragging rights. Our leaderboards highlight top performers regionally and nationally, rewarding your expertise and consistency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How secure is my data?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We store only your username, email, and password hash in our secure session system. We do not use tracking cookies, we do not sell your data, and we never display third-party ads. Your privacy and trust are paramount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What happens if I forget my password?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Click "Forgot Password," enter your username and email, and you'll receive a secure reset link within seconds. Follow that link to choose a new password—no downtime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can I play on mobile or desktop?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                POUD is fully web-based—no downloads required. Simply open our site in any modern browser on desktop or mobile. We optimize layouts responsively for smooth play on all screen sizes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What types of contests are available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-2">Choose from:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Head-to-Head:</strong> One-on-one matches</li>
                  <li><strong>Leagues:</strong> Multi-player contests for larger groups</li>
                  <li><strong>Custom Private:</strong> Create invite-only rooms with friends</li>
                </ul>
                <p className="mt-2">Since all are free, you can join as many as you like.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🔴 Live Matches</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Join ongoing matches and compete in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards - will be populated with API data */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">● LIVE</span>
                  <span className="text-sm text-muted-foreground">T20</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team A</span>
                    <span className="text-lg font-bold">145/6 (15.2)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team B</span>
                    <span className="text-sm text-muted-foreground">Yet to bat</span>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  <Clock className="mr-2 h-4 w-4" />
                  Match In Progress
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">● LIVE</span>
                  <span className="text-sm text-muted-foreground">ODI</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team C</span>
                    <span className="text-lg font-bold">278/8 (48.5)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team D</span>
                    <span className="text-sm text-muted-foreground">Yet to bat</span>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  <Clock className="mr-2 h-4 w-4" />
                  Match In Progress
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">● LIVE</span>
                  <span className="text-sm text-muted-foreground">TEST</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team E</span>
                    <span className="text-lg font-bold">412/7d</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team F</span>
                    <span className="text-lg font-bold">189/4 (65.3)</span>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  <Clock className="mr-2 h-4 w-4" />
                  Match In Progress
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              💡 Live match data will be populated when API is integrated
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📅 Upcoming Matches</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Create your team and join contests before the match starts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards - will be populated with API data */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">UPCOMING</span>
                  <span className="text-sm text-muted-foreground">T20</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team G</span>
                    <span className="text-sm text-muted-foreground">vs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team H</span>
                  </div>
                </div>
                <div className="text-center py-2 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Starts in 2 hours</p>
                  <p className="text-xs text-muted-foreground">Today, 7:30 PM IST</p>
                </div>
                <Button className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Create Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">UPCOMING</span>
                  <span className="text-sm text-muted-foreground">ODI</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team I</span>
                    <span className="text-sm text-muted-foreground">vs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team J</span>
                  </div>
                </div>
                <div className="text-center py-2 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Starts tomorrow</p>
                  <p className="text-xs text-muted-foreground">Jan 2, 2:00 PM IST</p>
                </div>
                <Button className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Create Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">UPCOMING</span>
                  <span className="text-sm text-muted-foreground">T20</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team K</span>
                    <span className="text-sm text-muted-foreground">vs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Team L</span>
                  </div>
                </div>
                <div className="text-center py-2 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Starts in 5 hours</p>
                  <p className="text-xs text-muted-foreground">Today, 10:30 PM IST</p>
                </div>
                <Button className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Create Team
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              💡 Upcoming match data will be populated when API is integrated
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Test Your Cricket IQ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join POUD now: 100% free, skill-based fantasy cricket—no fees, no luck, no financial risk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {!isAuthenticated ? (
              <>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Register Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href={getLoginUrl()}>
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </a>
                </Button>
              </>
            ) : (
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="/dashboard">
                  <Trophy className="mr-2 h-5 w-5" />
                  Go to Dashboard
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
