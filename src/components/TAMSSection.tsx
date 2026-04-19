import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const badges = [
  "Certified Plumbers",
  "Fully Insured",
  "Local Experts",
];

export default function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Icon Circle */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trust Our Certified Plumbers
        </h2>

        {/* Body Text */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Our team is fully certified and insured, providing peace of mind with
          every service. Trust us for reliable and professional plumbing
          solutions.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-md transition-all duration-200 mb-12"
          >
            Ask About Our Services
          </Button>
        </Link>

        {/* Badge Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-primary/10 shadow-sm p-6"
            >
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-gray-800 font-semibold text-base">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}