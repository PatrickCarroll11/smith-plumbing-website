import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Certified Plumbers",
  "Fully Insured",
  "Local Experts",
];

const TAMSSection = () => {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-brand-green-light flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trust Our Certified Plumbers
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Our team is fully certified and insured, providing peace of mind with
          every service. Trust us for reliable and professional plumbing solutions.
        </p>

        <Button asChild size="lg" className="mb-12 px-8 py-6 h-auto text-lg font-semibold shadow-lg">
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {badges.map((badge) => (
            <div key={badge} className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="font-semibold text-base">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TAMSSection;
