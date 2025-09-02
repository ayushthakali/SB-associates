import ServicesHeader from "@/components/ServicesHeader";
import ServiceCard from "@/components/ServiceCard";
import FooterAnimation from "@/components/FooterAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | S.B. Thakali & Associates",
  description:
    "Discover the industries served by S.B. Thakali & Associates, including Consumer, Energy, Government, IT, Healthcare, Tourism, and Infrastructure. Expert audit, tax, and advisory services tailored to each sector.",
  keywords: [
    "Industries",
    "Consumer Business",
    "Energy",
    "Government",
    "IT",
    "Healthcare",
    "Tourism",
    "Infrastructure",
    "Accounting",
    "Audit",
    "Tax",
    "Advisory",
    "Chartered Accountants",
    "Pokhara",
    "Nepal",
  ],
  alternates: {
    canonical: "/services/industries",
  },
  openGraph: {
    title: "Industries We Serve | S.B. Thakali & Associates",
    description:
      "Discover the industries served by S.B. Thakali & Associates, including Consumer, Energy, Government, IT, Healthcare, Tourism, and Infrastructure. Expert audit, tax, and advisory services tailored to each sector.",
    url: "/services/industries",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Industries We Serve | S.B. Thakali & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | S.B. Thakali & Associates",
    description:
      "Discover the industries served by S.B. Thakali & Associates, including Consumer, Energy, Government, IT, Healthcare, Tourism, and Infrastructure. Expert audit, tax, and advisory services tailored to each sector.",
    images: ["/preview.jpg"],
  },
};

function Industry() {
  const industriesElements = [
    {
      title: "Consumer Business",
      description:
        "We support retail, wholesale, and consumer-focused enterprises with tax, audit, and advisory services that improve financial management, ensure compliance, and help businesses adapt to evolving market demands.",
      imageUrl: "/consumer.jpg",
    },
    {
      title: "Energy, Resources & Industrial",
      description:
        "From manufacturing to energy and industrial operations, we assist organizations in addressing regulatory requirements, cost optimization, and sustainable growth strategies.",
      imageUrl: "/energy.jpg",
    },
    {
      title: "Government & Public Sector",
      description:
        "We work with government bodies and public institutions to enhance transparency, accountability, and efficiency, ensuring public resources are managed effectively and responsibly.",
      imageUrl: "/government.jpg",
    },
    {
      title: "IT & Telecommunication",
      description:
        "Our team provides financial, tax, and compliance solutions for IT and telecom businesses, helping them scale sustainably while managing complex regulations and fast-changing technologies.",
      imageUrl: "/IT.jpg",
    },
    {
      title: "Life Sciences & Healthcare",
      description:
        "We assist hospitals, clinics, and life science organizations with compliance, financial planning, and governance, supporting the delivery of reliable healthcare services.",
      imageUrl: "/healthcare.jpg",
    },
    {
      title: "Tourism & Hospitality",
      description:
        "We provide financial advisory, audit, and tax support to hotels, travel companies, and hospitality businesses, enabling them to thrive in a highly competitive and seasonal market.",
      imageUrl: "/tourism.jpg",
    },
    {
      title: "Capital Projects & Infrastructure",
      description:
        "From construction to large-scale infrastructure projects, we deliver financial oversight, risk management, and compliance solutions that ensure projects remain viable and sustainable.",
      imageUrl: "/hydropower.jpg",
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, we recognize that each industry faces unique regulatory, financial, and operational challenges. With our sector-specific expertise, we provide tailored audit, tax, and advisory solutions that help organizations achieve compliance, improve efficiency, and unlock sustainable growth. From established enterprises to emerging sectors, our experience ensures that we deliver insights and strategies aligned with your business environment.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Industries We Serve"
        titleDescription={titleDescription}
        titleImage="/industries.jpg"
        header="Industries"
      />

      <div className="max-w-4xl md:max-w-5xl px-4 mx-auto py-20 space-y-20">
        {industriesElements.map((industry) => (
          <FooterAnimation key={industry.title}>
            <ServiceCard
              title={industry.title}
              imageUrl={industry.imageUrl}
              description={industry.description}
            />
          </FooterAnimation>
        ))}
      </div>
    </div>
  );
}

export default Industry;
