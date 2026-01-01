import PublicLayout from "@/components/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <PublicLayout>
      <div className="container py-12 max-w-4xl">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help! Reach out with any questions or concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Mail className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                Send us an email and we'll respond within 24 hours
              </p>
              <a
                href="mailto:support@rostermindsports.com"
                className="text-primary font-medium hover:underline block"
              >
                support@rostermindsports.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                A-403, Prathmesh Tower<br />
                Raghuvanshi Mills Compound<br />
                Lower Parel West, Mumbai<br />
                Maharashtra 400013, India
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business days
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have questions about how RosterMind works, need help with your account, want to report a technical issue, or have suggestions for improving our platform, we'd love to hear from you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our support team is dedicated to ensuring you have the best possible experience on RosterMind Fantasy Sports. We take all feedback seriously and use it to continuously improve our platform.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-lg">What to Include in Your Message:</h3>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li>• Your registered email address or username (if applicable)</li>
                <li>• A clear description of your question or issue</li>
                <li>• Screenshots or error messages (if reporting a technical problem)</li>
                <li>• The match or contest ID (if your query relates to a specific game)</li>
              </ul>
            </div>

            <div className="pt-6 border-t">
              <h3 className="font-semibold text-lg mb-3">Common Inquiries:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Account Issues:</strong> Login problems, profile updates, account verification
                </div>
                <div>
                  <strong>Gameplay Questions:</strong> How to create teams, join contests, scoring rules
                </div>
                <div>
                  <strong>Technical Support:</strong> Website errors, display issues, performance problems
                </div>
                <div>
                  <strong>Fair Play Concerns:</strong> Reporting suspicious activity, rule violations
                </div>
              </div>
            </div>

            <div className="pt-6 text-center">
              <a
                href="mailto:support@rostermindsports.com"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
              >
                <Mail className="h-5 w-5" />
                support@rostermindsports.com
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> RosterMind is an independent fantasy sports platform and is not affiliated with the BCCI, ICC, IPL, or any official cricket organization. For inquiries related to official cricket matters, please contact the respective organizations directly.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
