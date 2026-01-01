import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

interface AgeGateProps {
  onPass: () => void;
}

const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
  "Tamil Nadu"
];

export default function AgeGate({ onPass }: AgeGateProps) {
  const [showError, setShowError] = useState(false);

  const handleAgeConfirm = (isAdult: boolean) => {
    if (isAdult) {
      onPass();
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-2">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/poud-logo.png" alt="POUD" className="h-12 w-auto" />
              <div>
                <CardTitle className="text-2xl">Welcome to POUD</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Age Verification Required</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              18+ · India Only
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <CardDescription className="text-base">
              POUD is only for users who are 18+ and located in India, in regions where fantasy sports is allowed.
            </CardDescription>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Are you 18 years or older?</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="h-14 text-lg font-semibold"
                  onClick={() => handleAgeConfirm(true)}
                >
                  Yes, I am 18+
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 text-lg font-semibold"
                  onClick={() => handleAgeConfirm(false)}
                >
                  No
                </Button>
              </div>
            </div>

            {showError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  You must be 18 or older and located in an eligible region in India to use POUD.
                </AlertDescription>
              </Alert>
            )}

            <div className="text-xs text-muted-foreground space-y-2">
              <p>
                By continuing you confirm eligibility (18+, India where fantasy sports is allowed) and agree to our Terms & Privacy.
              </p>
              <p>
                <strong>Not available in:</strong> {RESTRICTED_STATES.join(", ")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
