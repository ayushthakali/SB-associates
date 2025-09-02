import ServicePageCard from "@/components/ServicePageCard";
import FooterAnimation from "@/components/FooterAnimation";
import ServicesHeader from "@/components/ServicesHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Services | S.B. Thakali & Associates",
  description:
    "Commercial and corporate law services in Pokhara. Company registration, liquidation, legal documentation, and compliance by S.B. Thakali & Associates.",
  alternates: {
    canonical: "/services/legal",
  },
  openGraph: {
    title: "Legal Services | S.B. Thakali & Associates",
    description:
      "Commercial and corporate law services in Pokhara. Company registration, liquidation, legal documentation, and compliance by S.B. Thakali & Associates.",
    url: "/services/legal",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Services | S.B. Thakali & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Services | S.B. Thakali & Associates",
    description:
      "Commercial and corporate law services in Pokhara. Company registration, liquidation, legal documentation, and compliance by S.B. Thakali & Associates.",
    images: ["/preview.jpg"],
  },
};

function Legal() {
  const legalServices = [
    {
      title: "Company Registration",
      icon: "🏢",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We assist clients in the seamless formation of companies,
          partnerships, and other business entities. Our services cover the
          entire registration process with the relevant government bodies,
          ensuring full compliance with the latest legal requirements.
        </p>
      ),
    },
    {
      title: "Company Liquidation",
      icon: "📦",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          Whether due to strategic restructuring or other business decisions, we
          offer expert guidance in the voluntary and legal closure of companies.
          Our team ensures that the process is handled efficiently, minimizing
          legal and financial risks.
        </p>
      ),
    },
    {
      title: "Amendment of Legal Documents",
      icon: "📝",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          Businesses evolve — and so must their legal documents. We support
          companies in making amendments to Memorandum of Association (MoA),
          Articles of Association (AoA), partnership deeds, and other
          foundational documents.
        </p>
      ),
    },
    {
      title: "Share Lagaat (Share Certificate Issuance)",
      icon: "📜",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We provide services related to the preparation and issuance of Share
          Lagaats (Share Certificates), ensuring accuracy and compliance with
          regulatory requirements for shareholding documentation.
        </p>
      ),
    },
    {
      title: "Legal Registrations Across Departments",
      icon: "✅",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          Our firm helps businesses with registration and compliance in various
          regulatory bodies and departments like Tax Registration (VAT/PAN),
          Social Security Fund (SSF), Department of Industry (DoI), Office of
          the Company Registrar (OCR), Local level trade/ business licenses and
          more, depending on your sector and specific needs.
        </p>
      ),
    },
    {
      title: "Other Commercial Legal Services",
      icon: "⚖️",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We also offer advisory and documentation services related to: Drafting
          and vetting commercial agreements, License and permit applications,
          Regulatory compliance, Legal opinion and due diligence for investments
          and partnerships.
        </p>
      ),
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, we understand that a strong legal foundation is essential for any business to thrive. Our Commercial Law services support businesses at every stage — from incorporation to liquidation, ensuring compliance and sustainable growth.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Legal"
        titleDescription={titleDescription}
        titleImage="/legalservice.jpg"
        header="Services"
      />

      <div className="grid space-y-12 space-x-8 mx-auto py-20 px-6 md:px-12 max-w-6xl">
        {legalServices.map((service) => (
          <FooterAnimation key={service.title}>
            <ServicePageCard
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          </FooterAnimation>
        ))}
      </div>
    </div>
  );
}

export default Legal;
