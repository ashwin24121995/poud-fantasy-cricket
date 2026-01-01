import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Brain, Shield, BarChart3, Award } from "lucide-react";

export default function HowItWorks() {
  return (
    <PublicLayout>
      <div className="container py-12 max-w-5xl">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Fantasy Cricket Works on POUD
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about playing skill-based fantasy cricket
          </p>
        </div>

        <div className="space-y-12">
          {/* What is Fantasy Cricket */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                🏏 What Is Fantasy Cricket?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fantasy cricket lets you step into the role of a virtual team selector. Instead of just watching the match, you assemble your own team using real players from the actual fixture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your chosen players earn points based on their real-time performance — runs scored, wickets taken, catches made, strike rate, and more. You compete with others to see whose team performs best.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On POUD, this entire experience is <strong>completely free and strategy-based</strong>. No payments. No luck. No financial risk — just pure cricketing decisions and skill-driven results.
              </p>
            </CardContent>
          </Card>

          {/* How POUD Works */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                ⚙️ How Does POUD Fantasy Work?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                POUD Fantasy Sports is a web-based platform where your cricket expertise drives everything. There are no payments, no premium upgrades, and no chance-based elements. All features are free and accessible from the moment you join.
              </p>
              <ol className="space-y-3 text-muted-foreground pl-6">
                <li className="leading-relaxed">
                  <strong>1. Pick a Match:</strong> Choose from upcoming or live cricket fixtures available on POUD.
                </li>
                <li className="leading-relaxed">
                  <strong>2. Draft Your Fantasy XI:</strong> Build your team of 11 real players using your 100-point budget. Balance your picks across batters, bowlers, all-rounders, and a keeper.
                </li>
                <li className="leading-relaxed">
                  <strong>3. Join the Contest – Always Free:</strong> Enter any contest at no cost. No wallets, coins, or credits required. Everyone plays with the same access.
                </li>
                <li className="leading-relaxed">
                  <strong>4. Follow Live Performance:</strong> As the match unfolds, your selected players earn points based on real-time performance — runs, wickets, strike rate, and more.
                </li>
                <li className="leading-relaxed">
                  <strong>5. Climb the Rankings:</strong> Your leaderboard rank reflects your decisions, not your spending. There are no cash rewards — only recognition, placement, and pride.
                </li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                At POUD, your only investment is your time and cricketing skill — not money.
              </p>
            </CardContent>
          </Card>

          {/* Strategy Over Chance */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                🧠 Strategy Over Chance — Always
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                POUD Fantasy Sports is built entirely on skill. Every point you earn is the result of your decisions — from team selection to captaincy choices. There are no random outcomes, no hidden mechanics, and no optional boosts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your results are determined solely by how well you know the game and how thoughtfully you build your fantasy XI.
              </p>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li>✅ Select players based on real form, venue stats, and matchup logic.</li>
                <li>✅ Create a balanced squad within your 100-point budget.</li>
                <li>✅ Assign Captain and Vice-Captain roles wisely — they carry bonus impact.</li>
                <li>✅ Watch out for team announcements, pitch reports, and injuries.</li>
              </ul>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> The <strong>100-point budget</strong> is a team-building rule used only within the fantasy game. These points are completely fictional — they do not represent money, coins, credits, or any real-world value.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Each player in the match is assigned a virtual point value based on recent cricket form and balance needs. Your challenge is to build the most strategic team of 11 players — including batters, bowlers, all-rounders, and a wicketkeeper — without crossing the 100-point limit.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  This rule ensures fairness by preventing teams from selecting only star players. It's not about spending or saving — it's about making smart cricket choices. These points cannot be collected, stored, transferred, or used outside of team selection.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                There are no shortcuts or random wins. Just smart decisions, strategic planning, and your cricket expertise — that's what drives success on POUD.
              </p>
            </CardContent>
          </Card>

          {/* Scoring System */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                📊 How Points Are Scored
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On POUD Fantasy Sports, your score is driven entirely by the real-world match performance of your selected players. Our scoring system is fully transparent — no hidden rules, no random bonuses, and no unpredictable outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every run scored, wicket taken, or catch made contributes directly to your total. Here's how your players earn points:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li className="leading-relaxed">
                  🏏 <strong>Batting:</strong> Runs scored, strike rate bonuses, boundaries (4s & 6s), and milestones like 50 or 100 runs.
                </li>
                <li className="leading-relaxed">
                  🎯 <strong>Bowling:</strong> Wickets taken, economy rate efficiency, dot balls delivered, and maiden overs.
                </li>
                <li className="leading-relaxed">
                  🧤 <strong>Fielding:</strong> Points for catches, stumpings, and run-outs made by your team members.
                </li>
                <li className="leading-relaxed">
                  ⭐ <strong>Captain & Vice-Captain:</strong> Your Captain earns 2x points; Vice-Captain earns 1.5x — choose wisely.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The full scoring breakdown is visible before every contest, so you can select your team strategically. There are no surprise modifiers, no chance-based bonuses, and no paid upgrades that affect results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Success on POUD depends on one thing: your ability to read the match, analyze form, and choose the right players at the right time.
              </p>
            </CardContent>
          </Card>

          {/* Knowledge = Success */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                🎓 Knowledge = Success
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On POUD, your rank on the leaderboard reflects one thing: your cricketing intelligence. We don't offer cash rewards, paid upgrades, or shortcut advantages. What matters here is your ability to study the game and make informed decisions — just like a real coach or selector would.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you analyze pitch reports, compare player stats, or follow team news, your insights are what separate you from others. Luck plays no role. There's no buying your way to the top.
              </p>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li>📊 Follow real match analytics, not guesswork.</li>
                <li>🧠 Understand player roles and match dynamics.</li>
                <li>🎯 Draft smart, not popular — trust your instincts.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Your skill, strategy, and timing determine your place on the leaderboard — not your wallet. That's what makes POUD different from every other fantasy platform.
              </p>
            </CardContent>
          </Card>

          {/* Fair Play */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                🛡️ Fair Play & Integrity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                POUD Fantasy Sports is a skill-first platform — not a game of chance, not a money-driven app, and not a rewards-based competition. Every user plays on the exact same terms, with no paid advantages or hidden mechanics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To protect fairness and honest play, we've put strong safeguards in place across all contests. These systems ensure that only genuine, strategic users compete — and that no one gains unfair advantage through loopholes or tricks.
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li className="leading-relaxed">
                  🧑‍💻 <strong>No Multi-Accounts:</strong> Every player is limited to one account. We monitor activity and block duplicate or automated entries.
                </li>
                <li className="leading-relaxed">
                  📊 <strong>No Random Outcomes:</strong> If two users have the same final score, tie-breakers are based on valid cricket logic — like better economy rate or fewer extras.
                </li>
                <li className="leading-relaxed">
                  🚫 <strong>No Credit, Coins, or Refunds:</strong> POUD is always free. If a match is canceled, your entry simply resets — no fake currency involved.
                </li>
                <li className="leading-relaxed">
                  📮 <strong>Fast & Fair Review:</strong> We resolve any gameplay or fairness concerns within 24 hours via our support system.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Fairness isn't just a policy — it's part of the game design. POUD was built to let true cricket fans enjoy fantasy sports without money, manipulation, or pressure.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              🎯 Ready to Put Your Cricket Knowledge to the Test?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join POUD today and experience fantasy cricket the way it should be — free, fair, and skill-based.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
