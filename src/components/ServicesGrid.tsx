import { Wrench, Search, Droplets, Flame, Bath, PipelineIcon } from "lucide-react";
import { Wrench as WrenchIcon, SearchCode, Waves, Thermometer, ShowerHead, Cable } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services to solve urgent issues.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Accurate detection and repair of leaks to prevent damage.",
  },
  {
    icon: Waves,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to prevent blockages.",
  },
  {
    icon: Thermometer,
    title: "Boiler Services",
    description: "Comprehensive boiler installation and maintenance services.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Installations",
    description: "Expert bathroom installations and renovations.",
  },
  {
    icon: Cable,
    title: "Pipe Repairs",
    description: "Efficient repair and replacement of damaged pipes.",
  },
];

const ServicesGrid = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From emergency call-outs to full bathroom installations, we deliver expert plumbing solutions across Dublin and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="group p-6 rounded-lg border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-green-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;