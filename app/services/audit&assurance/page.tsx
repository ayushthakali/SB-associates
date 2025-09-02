import ServicesHeader from "@/components/ServicesHeader";
import FooterAnimation from "@/components/FooterAnimation";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & Assurance Services | S.B. Thakali & Associates",
  description:
    "Professional Audit & Assurance services in Pokhara by S.B. Thakali & Associates. Enhance trust, transparency, and compliance for your organization.",
  alternates: {
    canonical: "/services/audit-assurance",
  },
  openGraph: {
    title: "Audit & Assurance Services | S.B. Thakali & Associates",
    description:
      "Professional Audit & Assurance services in Pokhara by S.B. Thakali & Associates. Enhance trust, transparency, and compliance for your organization.",
    url: "/services/audit&assurance",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Audit & Assurance Services | S.B. Thakali & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit & Assurance Services | S.B. Thakali & Associates",
    description:
      "Professional Audit & Assurance services in Pokhara by S.B. Thakali & Associates. Enhance trust, transparency, and compliance for your organization.",
    images: ["/preview.jpg"],
  },
};


interface Audit {
  title: string;
  description: React.ReactElement | string;
  imageUrl?: string;
  onlyImage?: boolean;
}

function AduitAssurance() {
  const AuditAssuranceServices: Audit[] = [
    {
      title: "External Audit",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We provide independent and objective external audit services to ensure
          your financial statements present a true and fair view in compliance
          with international accounting and auditing standards. Our audits help
          build stakeholder confidence and strengthen transparency.
        </p>
      ),
    },
    {
      title: "Internal Audit",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          Our internal audit services focus on evaluating and improving the
          effectiveness of your internal controls, governance, and risk
          management systems. We help organizations identify inefficiencies,
          strengthen compliance, and enhance operational performance.
        </p>
      ),
    },
    {
      title: "Certifications",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We offer certification services required for statutory, regulatory,
          and compliance purposes. Whether it’s validating financial information
          or issuing specific compliance certificates, our team ensures accuracy
          and credibility at every step.
        </p>
      ),
    },
    {
      title: "Project Audit",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          Our project audit services are tailored for donor-funded, development,
          and special projects. We ensure proper utilization of funds,
          accountability, and compliance with donor guidelines and regulatory
          requirements.
        </p>
      ),
    },
    {
      title: "",
      description: "",
      imageUrl: "/auditpage.jpg",
      onlyImage: true,
    },
    {
      title: "Assurance Engagements",
      description: (
        <p className="text-justify text-gray-800 tracking-wide">
          We provide independent assurance engagements beyond statutory audits,
          covering both financial and non-financial information. Our goal is to
          give stakeholders confidence in the integrity, accuracy, and
          reliability of the information they rely upon.
        </p>
      ),
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, our Audit & Assurance services are designed to enhance trust, accountability, and transparency in financial and operational reporting. We go beyond compliance to provide insights that help organizations strengthen governance, improve internal processes, and build confidence among stakeholders. Our tailored approach ensures that each engagement delivers both assurance and value.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Audit & Assurance"
        titleDescription={titleDescription}
        titleImage="/audit.jpg"
        header="Services"
      />

      <div className="grid md:grid-cols-3 gap-8 mx-auto py-16 px-6 md:px-12 max-w-7xl">
        {AuditAssuranceServices.map((service) => (
          <FooterAnimation key={service.title}>
            <ServiceCard
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              onlyImage={service.onlyImage}
              isAudit
            />
          </FooterAnimation>
        ))}
      </div>
    </div>
  );
}

export default AduitAssurance;
