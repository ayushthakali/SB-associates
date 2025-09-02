import FooterAnimation from "@/components/FooterAnimation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Service {
  title: string;
  imageUrl: string;
  description: string;
}

function ServicesSection({ showHeader = true }) {
  const services: Service[] = [
    {
      title: "Advisory",
      imageUrl: "/advisory.jpg",
      description:
        "Incisive, tailored advice – from a team that understands you and your business.",
    },
    {
      title: "Audit & Assurance",
      imageUrl: "/audit.jpg",
      description:
        "Independent insights that bring transparency and confidence, ensuring trust at every stage of your business journey.",
    },
    {
      title: "Legal",
      imageUrl: "/legal.jpg",
      description:
        "Clear, practical legal guidance to safeguard your interests and provide confidence in every decision.",
    },

    {
      title: "Tax",
      imageUrl: "/tax.jpg",
      description:
        "Expert tax planning and compliance support designed to optimize your position and keep you ahead of changing regulations.",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {showHeader && (
          <FooterAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to meet your business
                and personal needs
              </p>
            </div>
          </FooterAnimation>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FooterAnimation key={index}>
              <div
                className="bg-cover bg-center rounded-2xl max-h-80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              >
                <div className="bg-black/40 backdrop-blur-sm p-12 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "")}`}
                      className="text-[#C9EC51] font-semibold hover:text-white cursor-pointer flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FooterAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
