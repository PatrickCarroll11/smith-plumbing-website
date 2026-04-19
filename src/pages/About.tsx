import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Smith Plumbing — quality Plumber service you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Smith Plumbing is a reputable plumbing service provider based in Dublin. Our team of skilled and certified plumbers is committed to delivering reliable and efficient solutions to all your plumbing needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We pride ourselves on quality workmanship and exceptional customer service..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="space-y-4 mb-10">
            {[{"title":"Quality Materials","desc":"We use only the best materials for durable results."},{"title":"Competitive Pricing","desc":"Affordable services without compromising quality."},{"title":"Professional Team","desc":"Our skilled team ensures top-quality service."},{"title":"Wide Coverage","desc":"Serving Dublin and surrounding areas."},{"title":"Customer Satisfaction","desc":"We prioritize our customers' needs and satisfaction."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
