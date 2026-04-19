import { Phone, Droplets, Wind, Flame, Bath, Wrench, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Emergency Plumbing",
    seo: "Emergency Plumber Dublin",
    description:
      "Our emergency plumbing services are available 24/7 to address urgent plumbing issues promptly. Trust us to handle any emergency with expertise and speed.",
    features: [
      "24/7 Availability",
      "Quick Response",
      "Experienced Technicians",
      "Fully Equipped",
      "Customer Satisfaction",
    ],
    icon: Phone,
  },
  {
    title: "Leak Detection",
    seo: "Leak Detection Dublin",
    description:
      "We provide precise leak detection services to prevent water damage and unnecessary costs. Our advanced technology ensures accurate results.",
    features: [
      "Advanced Technology",
      "Non-Invasive",
      "Cost-Effective",
      "Experienced Professionals",
      "Preventive Solutions",
    ],
    icon: Droplets,
  },
  {
    title: "Drain Cleaning",
    seo: "Drain Cleaning Dublin",
    description:
      "Our professional drain cleaning services ensure your drains are clear and functioning properly, preventing blockages and backups.",
    features: [
      "Thorough Cleaning",
      "Prevent Blockages",
      "Eco-Friendly Solutions",
      "Experienced Team",
      "Fast Service",
    ],
    icon: Wind,
  },
  {
    title: "Boiler Services",
    seo: "Boiler Services Dublin",
    description:
      "We offer comprehensive boiler services including installation, maintenance, and repairs to keep your heating system efficient and safe.",
    features: [
      "Installation",
      "Maintenance",
      "Repair",
      "Energy Efficiency",
      "Safety Checks",
    ],
    icon: Flame,
  },
  {
    title: "Bathroom Installations",
    seo: "Bathroom Installations Dublin",
    description:
      "Our expert team provides complete bathroom installation services, from planning and design to final touches, ensuring a beautiful and functional space.",
    features: [
      "Design Consultation",
      "Quality Fixtures",
      "Expert Installation",
      "Custom Solutions",
      "Attention to Detail",
    ],
    icon: Bath,
  },
  {
    title: "Pipe Repairs",
    seo: "Pipe Repairs Dublin",
    description:
      "We offer efficient and effective pipe repair services to fix leaks, bursts, and other issues, ensuring your plumbing system operates smoothly.",
    features: [
      "Leak Repairs",
      "Burst Pipes",
      "Replacement",
      "Durable Materials",
      "Skilled Technicians",
    ],
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive plumbing services for homes and businesses across Dublin and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Left */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Icon className="w-8 h-8 text-blue-700" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                    </div>
                    <span className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                      {service.seo}
                    </span>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Right */}
                  <div className="md:w-1/2 bg-blue-50 p-8 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;