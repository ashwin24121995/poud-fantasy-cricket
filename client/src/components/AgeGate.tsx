import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Trophy, AlertCircle } from "lucide-react";

interface AgeGateProps {
  onPass: (language: "en" | "hi") => void;
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

const translations = {
  en: {
    step1Title: "Choose your language",
    step1Desc: "Please choose your preferred language to continue. You'll see content and instructions tailored to your selection.",
    step2Title: "Are you 18 or older?",
    step2Desc: "POUD is only for users who are 18+ and located in India, in regions where fantasy sports is allowed.",
    yes: "Yes",
    no: "No",
    back: "← Back",
    error: "You must be 18 or older and located in an eligible region in India to use POUD.",
    disclaimer: "By continuing you confirm eligibility (18+, India where fantasy sports is allowed) and agree to our Terms & Privacy. Not available in",
    badge: "18+ · India Only",
    welcome: "Welcome to POUD"
  },
  hi: {
    step1Title: "अपनी भाषा चुनें",
    step1Desc: "कृपया जारी रखने के लिए अपनी पसंदीदा भाषा चुनें। आप अपने चयन के अनुरूप सामग्री और निर्देश देखेंगे।",
    step2Title: "क्या आप 18 वर्ष या उससे अधिक उम्र के हैं?",
    step2Desc: "POUD केवल उन उपयोगकर्ताओं के लिए है जो 18+ हैं और भारत में स्थित हैं, उन क्षेत्रों में जहां फैंटेसी स्पोर्ट्स की अनुमति है।",
    yes: "हाँ",
    no: "नहीं",
    back: "← वापस",
    error: "POUD का उपयोग करने के लिए आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए और भारत के पात्र क्षेत्र में स्थित होना चाहिए।",
    disclaimer: "जारी रखने से आप पात्रता (18+, भारत जहां फैंटेसी स्पोर्ट्स की अनुमति है) की पुष्टि करते हैं और हमारी शर्तों और गोपनीयता से सहमत होते हैं। उपलब्ध नहीं है",
    badge: "18+ · केवल भारत",
    welcome: "POUD में आपका स्वागत है"
  }
};

export default function AgeGate({ onPass }: AgeGateProps) {
  const [step, setStep] = useState<"language" | "age">("language");
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi">("en");
  const [showError, setShowError] = useState(false);

  const t = translations[selectedLanguage];

  const handleLanguageSelect = (lang: "en" | "hi") => {
    setSelectedLanguage(lang);
    setStep("age");
  };

  const handleAgeConfirm = (isAdult: boolean) => {
    if (isAdult) {
      onPass(selectedLanguage);
    } else {
      setShowError(true);
    }
  };

  const handleBack = () => {
    setStep("language");
    setShowError(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-2">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/poud-logo.png" alt="POUD" className="h-12 w-auto" />
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {step === "language" ? "Step 1" : "Step 2"} — {step === "language" ? t.step1Title : t.step2Title}
                </div>
                <CardTitle className="text-2xl mt-1">{t.welcome}</CardTitle>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {t.badge}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === "language" && (
            <div className="space-y-4">
              <CardDescription className="text-base">
                {t.step1Desc}
              </CardDescription>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-20 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => handleLanguageSelect("en")}
                >
                  English
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-20 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => handleLanguageSelect("hi")}
                >
                  हिन्दी (Hindi)
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                {t.disclaimer} {RESTRICTED_STATES.join(", ")}.
              </p>
            </div>
          )}

          {step === "age" && (
            <div className="space-y-4">
              <CardDescription className="text-base">
                {t.step2Desc}
              </CardDescription>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="flex-1 min-w-[120px]"
                  onClick={() => handleAgeConfirm(true)}
                >
                  {t.yes}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 min-w-[120px]"
                  onClick={() => handleAgeConfirm(false)}
                >
                  {t.no}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleBack}
                >
                  {t.back}
                </Button>
              </div>

              {showError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{t.error}</AlertDescription>
                </Alert>
              )}

              <p className="text-sm text-muted-foreground">
                {t.disclaimer} {RESTRICTED_STATES.join(", ")}.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
