import ServicePageCard from "@/components/ServicePageCard";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterAnimation from "@/components/FooterAnimation";
import ServicesHeader from "@/components/ServicesHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFRS Services | S.B. Thakali & Associates",
  description:
    "Comprehensive advisory and support services for Nepal Financial Reporting Standards (NFRS) implementation. Enhance financial transparency, compliance, and credibility with S.B. Thakali & Associates.",
  keywords: [
    "NFRS",
    "Nepal Financial Reporting Standards",
    "IFRS",
    "Accounting",
    "Compliance",
    "Financial Reporting Nepal",
  ],
  alternates: {
    canonical: "/services/nfrs",
  },
  openGraph: {
    title: "NFRS Services | S.B. Thakali & Associates",
    description:
      "Comprehensive advisory and support services for Nepal Financial Reporting Standards (NFRS) implementation. Enhance financial transparency, compliance, and credibility with S.B. Thakali & Associates.",
    url: "/services/nfrs",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "NFRS Services | S.B. Thakali & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFRS Services | S.B. Thakali & Associates",
    description:
      "Comprehensive advisory and support services for Nepal Financial Reporting Standards (NFRS) implementation. Enhance financial transparency, compliance, and credibility with S.B. Thakali & Associates.",
    images: ["/preview.jpg"],
  },
};

function NFRS() {
  const NFRSServices = [
    {
      title: "NFRS Gap Assessment",
      icon: "🔍",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          We conduct a detailed analysis of your current financial reporting
          practices to identify differences with NFRS and areas needing
          adjustment.
        </p>
      ),
    },
    {
      title: "Staff Training & Awareness",
      icon: "👥",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          We deliver tailored training programs to accounting, finance, and
          management teams, ensuring they fully understand NFRS principles and
          implications.
        </p>
      ),
    },
    {
      title: "Financial Statement Preparation",
      icon: "📄",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          We help you prepare NFRS-compliant financial statements with proper
          notes and disclosures, including transitional adjustments.
        </p>
      ),
    },
    {
      title: "Ongoing Support",
      icon: "🛟",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          We provide post-implementation support, advisory for new standards,
          audit preparation, and disclosure reviews.
        </p>
      ),
    },
    {
      title: "Conversion of Accounting Policies",
      icon: "🔄",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          Our team helps update your existing accounting policies to align with
          relevant NFRS or NFRS for SMEs standards, including treatment of:
          Financial instruments, Revenue recognition, Leases (NFRS 16),
          Impairment and fair value assessments, Group accounting, and more.
        </p>
      ),
    },
    {
      title: "Implementation Roadmap & Planning",
      icon: "🗺",
      description: (
        <p className="text-justify text-gray-700 tracking-wide">
          We create a custom roadmap outlining how your organization will
          transition to NFRS or NFRS for SMEs, with defined timelines,
          resources, and action items.
        </p>
      ),
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, we offer comprehensive advisory and support services for the implementation of Nepal Financial Reporting Standards (NFRS) — Nepal’s localized version of the International Financial Reporting Standards (IFRS). NFRS adoption enhances financial transparency, comparability, and credibility, helping your business meet both local and international expectations. We assist businesses throughout their NFRS journey, offering the following NFRS services.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="NFRS"
        titleDescription={titleDescription}
        titleImage="/nfrs.avif"
        header="Services"
      />

      <div className="grid space-y-12 mx-auto py-16 px-6 md:px-12 max-w-7xl">
        {NFRSServices.map((service) => (
          <FooterAnimation key={service.title}>
            <ServicePageCard
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          </FooterAnimation>
        ))}
      </div>

      <div className="bg-white grid md:grid-cols-6 items-center py-10 md:px-28 gap-12">
        <div className="col-span-1 md:col-span-4 space-y-4 p-6 md:p-8">
          <BoxReveal boxColor="#b7b5d8ff" duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-2">
              NFRS Implementation Timeline in Nepal
            </h1>
          </BoxReveal>
          <BoxReveal boxColor="#b7b5d8ff" duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify mb-4">
              The Accounting Standards Board (ASB) Nepal introduced NFRS in a
              phased manner. Different entities are required to comply based on
              their classification and scale:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-light tracking-wide text-justify">
              <li>
                <strong>Listed Companies:</strong> FY 2015/16
              </li>
              <li>
                <strong>
                  Class A, B, C Financial Institutions (Banks & FIs):
                </strong>{" "}
                FY 2015/16
              </li>
              <li>
                <strong>Insurance Companies:</strong> FY 2016/17
              </li>
              <li>
                <strong>
                  State-Owned Enterprises (turnover &gt; Rs. 1 billion):
                </strong>{" "}
                FY 2016/17
              </li>
              <li>
                <strong>Other State-Owned Enterprises:</strong> FY 2017/18
              </li>
              <li>
                <strong>Other Public Interest Entities:</strong> FY 2018/19
              </li>
              <li>
                <strong>SMEs – NFRS for SMEs:</strong> FY 2020/21
              </li>
            </ul>
          </BoxReveal>
        </div>

        <div className="col-span-1 md:col-span-2 w-full rounded-lg shadow-xl p-8 text-justify font-light tracking-wide">
          <FooterAnimation>
            <strong>Note:</strong> SMEs are required to adopt{" "}
            <em>NFRS for SMEs</em>, a simplified framework that reduces
            complexity while maintaining compliance with core reporting
            standards. This is applicable to entities that are not public
            interest entities and meet thresholds set by ASB Nepal.
          </FooterAnimation>
        </div>
      </div>
    </div>
  );
}

export default NFRS;
