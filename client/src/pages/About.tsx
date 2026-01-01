import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Users, Target } from "lucide-react";

export default function About() {
  return (
    <PublicLayout>
      <div className="container py-12 max-w-5xl">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About POUD</h1>
          <p className="text-lg text-muted-foreground">
            India's first 100% free, skill-only fantasy cricket platform
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                POUD Fantasy Sports was created to bring back the true spirit of fantasy cricket — where skill, strategy, and cricket knowledge matter more than anything else. We believe that fantasy sports should be accessible to everyone, without financial barriers or pay-to-win mechanics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform is built on three core principles: it's completely free, entirely skill-based, and totally transparent. No hidden fees, no premium tiers, no luck-based mechanics — just pure cricket strategy and competition.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                What Makes Us Different
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% Free Forever</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No registration fees, no contest entry fees, no subscriptions. POUD is completely free to play, and it always will be. We don't believe in creating financial barriers to enjoying fantasy cricket.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pure Skill-Based Competition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your success on POUD depends entirely on your cricket knowledge and strategic decisions. There are no random elements, no luck-based mechanics, and no paid advantages. Everyone competes on equal terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Financial Risk</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Since POUD involves no money whatsoever, there's zero financial risk. Play for fun, glory, and bragging rights — not for cash prizes. This makes our platform completely safe and stress-free.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparent & Fair</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our scoring system is completely transparent, with clear rules published before every contest. We actively prevent multi-accounting, bot usage, and any form of cheating to ensure fair play for all users.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                Who We Serve
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                POUD is designed for cricket enthusiasts across India who want to test their knowledge and strategic thinking without any financial involvement. Whether you're a casual fan or a cricket statistics expert, our platform provides a level playing field where your understanding of the game is what matters most.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're available to users aged 18 and above in eligible regions of India, excluding states where fantasy sports platforms are restricted by law (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to maintaining POUD as a safe, fair, and enjoyable platform for all cricket fans. We continuously monitor for any unfair practices, respond quickly to user concerns, and ensure that our platform remains true to its core values of accessibility, skill-based competition, and transparency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                POUD is an independent fan platform and is not affiliated with the BCCI, ICC, IPL, or any official cricket organization. We're simply cricket fans building a platform for other cricket fans to enjoy the game in a new way.
              </p>
            </CardContent>
          </Card>

          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">Join the POUD Community</h3>
            <p className="text-lg text-muted-foreground">
              Experience fantasy cricket the way it should be — free, fair, and focused on skill.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
