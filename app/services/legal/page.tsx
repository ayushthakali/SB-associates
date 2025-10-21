import ServicePageCard from "@/components/ServicePageCard";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
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
  // const legalServices = [
  //   {
  //     title: "Company Registration",
  //     icon: "🏢",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         We assist clients in the seamless formation of companies,
  //         partnerships, and other business entities. Our services cover the
  //         entire registration process with the relevant government bodies,
  //         ensuring full compliance with the latest legal requirements.
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Company Liquidation",
  //     icon: "📦",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         Whether due to strategic restructuring or other business decisions, we
  //         offer expert guidance in the voluntary and legal closure of companies.
  //         Our team ensures that the process is handled efficiently, minimizing
  //         legal and financial risks.
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Amendment of Legal Documents",
  //     icon: "📝",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         Businesses evolve — and so must their legal documents. We support
  //         companies in making amendments to Memorandum of Association (MoA),
  //         Articles of Association (AoA), partnership deeds, and other
  //         foundational documents.
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Share Lagaat (Share Certificate Issuance)",
  //     icon: "📜",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         We provide services related to the preparation and issuance of Share
  //         Lagaats (Share Certificates), ensuring accuracy and compliance with
  //         regulatory requirements for shareholding documentation.
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Legal Registrations Across Departments",
  //     icon: "✅",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         Our firm helps businesses with registration and compliance in various
  //         regulatory bodies and departments like Tax Registration (VAT/PAN),
  //         Social Security Fund (SSF), Department of Industry (DoI), Office of
  //         the Company Registrar (OCR), Local level trade/ business licenses and
  //         more, depending on your sector and specific needs.
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Other Commercial Legal Services",
  //     icon: "⚖️",
  //     description: (
  //       <p className="text-justify text-gray-800 tracking-wide">
  //         We also offer advisory and documentation services related to: Drafting
  //         and vetting commercial agreements, License and permit applications,
  //         Regulatory compliance, Legal opinion and due diligence for investments
  //         and partnerships.
  //       </p>
  //     ),
  //   },
  // ];

  const legalServices = [
    {
      id: 1,
      title: "Office of Company Registrar",
      icon: "💰",
      overview:
        "At S.B. Thakali & Associates, we offer reliable and efficient corporate services to support your business through every stage.",
      services: [
        {
          name: "Company Registration",
          description:
            "End-to-end assistance with registering your company in full compliance with legal requirements.",
        },
        {
          name: "MOA & AOA Amendments",
          description:
            "Preparation and filing of changes to your Memorandum and Articles of Association.",
        },
        {
          name: "Share Certificate Issuance (Share Lagaat)",
          description:
            "Support in drafting and issuing official share certificates to shareholders.",
        },
        {
          name: "Company Liquidation",
          description:
            "Complete guidance through the legal and administrative process of closing a company.",
        },
      ],
    },
  ];

  const titleDescription = (
    <div>
      At S.B. Thakali & Associates, we understand that a strong legal foundation
      is essential for any business to thrive. Our following Commercial legal
      services support businesses at every stage — from incorporation to
      liquidation, ensuring compliance and sustainable growth:
      <ul className="list-disc ml-5">
        <li>Company Registration, Update, Ammendment and Liquidation</li>
        <li>Tax Registration, Return Filing and Closure </li>
        <li>
          Business Licensing and Other Departments Registration like EXIM Code,
          Department of Industries and so on.
        </li>
      </ul>
    </div>
  );

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Legal"
        titleDescription={titleDescription}
        titleImage="/legalservice.jpg"
        header="Services"
      />

      {/* <div className="grid space-y-12 space-x-8 mx-auto py-20 px-6 md:px-12 max-w-6xl">
        {legalServices.map((service) => (
          <FooterAnimation key={service.title}>
            <ServicePageCard
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          </FooterAnimation>
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12 ">
          {legalServices.map((service) => (
            <FooterAnimation key={service.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 animation-transform duration-400 ease-in">
                <div className=" bg-gradient-to-br from-[#2B303A] to-gray-700 px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  {service.overview && (
                    <p className="text-white mt-2 text-sm leading-relaxed ">
                      {service.overview}
                    </p>
                  )}
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.services.map((subService, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-[#C9EC51] pl-4 py-2"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {subService.name}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
                          {subService.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FooterAnimation>
          ))}
        </div>
      </div>

      <div className="bg-white items-center py-8 md:px-28 gap-12">
        <div className=" space-y-4 p-6 md:p-8">
          <BoxReveal boxColor="#b7b5d8ff" duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-2">
              Foreign Direct Investment (FDI) Advisory
            </h1>
          </BoxReveal>
          <BoxReveal boxColor="#b7b5d8ff" duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify mb-4">
              Nepal is an emerging destination for foreign investors, and at
              S.B. Thakali & Associates, we specialize in facilitating Foreign
              Direct Investment (FDI) by providing comprehensive legal,
              regulatory, and procedural support.<br></br>
              We assist foreign investors in navigating the complexities of FDI
              approvals, company setup, and compliance requirements in line with
              Nepalese laws like Foreign Investment and Technology Transfer Act,
              2019 (2075), Companies Act, 2006 (2063), Industrial Enterprises
              Act, 2020 (2076) and so on.<br></br>
              Our FDI Services Include:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-light tracking-wide text-justify">
              <li>
                Guidance on investment opportunities and sectors open to FDI
              </li>
              <li>
                Assistance in obtaining approvals from the Department of
                Industry (DOI) and other regulatory bodies
              </li>
              <li>
                Support in preparing and submitting required documents for FDI
                registration
              </li>
              <li>
                Liaison with government authorities throughout the investment
                process
              </li>
              <li>
                Structuring of joint ventures, wholly-owned subsidiaries, or
                branch/liaison offices
              </li>
            </ul>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}

export default Legal;
