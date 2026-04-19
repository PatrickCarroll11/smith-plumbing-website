import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shed.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
            Expert Plumbing Services,<br />in Dublin
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Reliable and efficient plumbing solutions for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="tel:0871234567">
                <Phone className="h-5 w-5" />
                Call 087 123 4567
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
