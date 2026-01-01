import PublicLayout from "@/components/PublicLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is POUD really completely free?",
      answer: "Yes! POUD is 100% free to use. There are no registration fees, no contest entry fees, no subscriptions, and no hidden charges. You can create teams, join contests, and compete without ever spending a rupee."
    },
    {
      question: "Do I need to pay to win prizes?",
      answer: "POUD doesn't offer cash prizes or monetary rewards. We're a skill-based platform focused on competition, rankings, and bragging rights. Since there's no money involved, there's also no financial risk."
    },
    {
      question: "How do I create a fantasy team?",
      answer: "Select an upcoming or live match, then choose 11 players within your 100-point budget. Your team must include batsmen, bowlers, all-rounders, and a wicketkeeper. Assign a captain (2x points) and vice-captain (1.5x points) to maximize your score."
    },
    {
      question: "What is the 100-point budget?",
      answer: "The 100-point budget is a fictional constraint used only for team selection. Each player has a point value based on their recent form. These points are not real currency — they're just a game mechanic to ensure balanced team composition and prevent everyone from picking only star players."
    },
    {
      question: "How are points calculated?",
      answer: "Points are earned based on real match performance: runs scored, wickets taken, catches, strike rates, economy rates, and milestones (50s, 100s, etc.). Your captain earns 2x points and vice-captain earns 1.5x points. The full scoring breakdown is available before each contest."
    },
    {
      question: "Can I create multiple accounts?",
      answer: "No. Each user is allowed only one account. We actively monitor for multi-accounting and will block duplicate accounts to ensure fair play for all users."
    },
    {
      question: "What happens if a match is cancelled?",
      answer: "If a match is cancelled or abandoned, your team entry is simply reset. Since there's no money involved, there are no refunds or credits to process — you can just create a new team for another match."
    },
    {
      question: "Is POUD legal in India?",
      answer: "Yes, POUD is legal in most of India. However, we're not available in states where fantasy sports platforms are restricted: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu. Users must be 18 or older to participate."
    },
    {
      question: "How do I join a contest?",
      answer: "After creating your fantasy team, browse available contests for that match and click 'Join'. All contests are free to enter. You can join multiple contests with the same team or create different teams for different contests."
    },
    {
      question: "Can I edit my team after joining a contest?",
      answer: "You can edit your team until the match starts or the contest entry deadline passes (whichever comes first). Once the match begins, team lineups are locked and cannot be changed."
    },
    {
      question: "What if two teams have the same points?",
      answer: "Tie-breakers are based on cricket logic: better economy rate, fewer extras conceded, earlier team creation time, etc. There are no random tie-breakers — everything is transparent and skill-based."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes. We follow industry-standard security practices to protect your data. We don't collect payment information (since everything is free), and we don't share your personal details with third parties. Read our Privacy Policy for full details."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach us at support@rostermindsports.com. We aim to respond to all queries within 24 hours. For urgent issues related to fairness or technical problems, we prioritize those requests."
    },
    {
      question: "Can I play on mobile?",
      answer: "Yes! POUD is a web-based platform that works on any device with a modern browser — desktop, tablet, or mobile. There's no app to download; just visit our website and start playing."
    },
    {
      question: "What cricket formats are supported?",
      answer: "We support T20, ODI, T10, and Test match formats. The scoring rules are tailored to each format to ensure fair and accurate point calculations based on the match type."
    },
    {
      question: "Are there any ads on POUD?",
      answer: "No. POUD is completely ad-free. We don't show advertisements, sponsored content, or promotional banners. Our platform is focused entirely on providing a clean, distraction-free fantasy cricket experience."
    },
    {
      question: "What makes POUD different from other fantasy platforms?",
      answer: "Unlike other platforms, POUD is completely free (no entry fees), has no cash prizes (no financial risk), and is purely skill-based (no luck or paid advantages). We're built for cricket fans who want to compete based on knowledge, not wallet size."
    },
    {
      question: "Can I play with friends?",
      answer: "Yes! You can create private contests and invite your friends to compete against each other. Private contests work the same way as public ones — completely free and skill-based."
    },
  ];

  return (
    <PublicLayout>
      <div className="container py-12 max-w-4xl">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about POUD
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            We're here to help! Reach out to our support team.
          </p>
          <a
            href="mailto:support@rostermindsports.com"
            className="text-primary font-semibold hover:underline"
          >
            support@rostermindsports.com
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}
