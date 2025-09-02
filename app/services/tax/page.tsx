import ServicesHeader from "@/components/ServicesHeader";
import FooterAnimation from "@/components/FooterAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxation Services in Nepal | S.B. Thakali & Associates",
  description:
    "Expert taxation services under Nepal's legal framework. Income Tax, VAT, Customs Duty, Excise Duty, and advisory support for individuals and businesses by S.B. Thakali & Associates.",
  keywords: [
    "Tax",
    "Nepal",
    "IRD",
    "Income Tax",
    "VAT",
    "Tax Advisory",
    "Tax Filing",
    "Customs Duty",
    "Excise Duty",
    "S.B. Thakali & Associates",
  ],
  alternates: {
    canonical: "/services/tax",
  },
  openGraph: {
    title: "Taxation Services in Nepal | S.B. Thakali & Associates",
    description:
      "Expert taxation services under Nepal's legal framework. Income Tax, VAT, Customs Duty, Excise Duty, and advisory support for individuals and businesses by S.B. Thakali & Associates.",
    url: "/services/tax",
    type: "website",
    images: [
      {
        url: "/preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Taxation Services | S.B. Thakali & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxation Services in Nepal | S.B. Thakali & Associates",
    description:
      "Expert taxation services under Nepal's legal framework. Income Tax, VAT, Customs Duty, Excise Duty, and advisory support for individuals and businesses by S.B. Thakali & Associates.",
    images: ["/preview.jpg"],
  },
};


function Tax() {
  const titleDescription =
    "Our firm provides taxation services under Nepal's current legal framework, ensuring expert guidance and compliance across all direct and indirect taxes regulated by the Inland Revenue Department (IRD) under the Ministry of Finance. We support clients with tax planning, filing, advisory, and dispute resolution while keeping up with evolving tax policies. Our approach is designed to minimize risks, improve efficiency, and deliver practical solutions tailored to both individuals and businesses.";

  const taxServices = [
    {
      id: 1,
      title: "Income Tax",
      icon: "💰",
      services: [
        {
          name: "Preparation & Filing",
          description:
            "Accurate filing of Individual and Corporate Income Tax Returns, including Advance Tax and Final Returns.",
        },
        {
          name: "Tax Planning & Optimization",
          description:
            "Strategies tailored to Nepal's progressive tax slabs and allowances.",
        },
        {
          name: "TDS (Withholding Tax) Compliance",
          description:
            "Management of applicable TDS rates—including service fees (1.5% if recipient is VAT-registered or supplies exempt services, otherwise 15%), rents, royalties, contracts, transport, etc.",
        },
        {
          name: "Representation & Dispute Support",
          description:
            "Assistance with audit processes, objections, review, appeals, and advance rulings through IRD's formal channels.",
        },
      ],
    },
    {
      id: 2,
      title: "Value Added Tax (VAT)",
      icon: "📊",
      overview:
        "VAT is a major source of indirect revenue under the VAT Act, 2052 (1996), administered by the IRD.",
      services: [
        {
          name: "VAT Registration",
          description:
            "Mandatory when turnover exceeds NPR 50 lakh (goods) or NPR 20 lakh (services), or if operating in specified sectors (e.g., tourism, electronics, software, etc.)",
        },
        {
          name: "Registration Process",
          description:
            "Application, approval by a Tax Officer, issuance and display of registration certificate, and timely updates for any changes.",
        },
        {
          name: "Return Filing",
          description:
            "Monthly filings due within 25 days from the end of the Nepali month. Certain businesses (hotels, media) may file bi-monthly or quarterly.",
        },
        {
          name: "VAT Rate & Scope",
          description:
            "Standard rate: 13% on domestic supplies and imports. Zero‑rated (0%): exports and specified supplies. Exemptions: Basic goods/services (education, medicines, agriculture, air or passenger transport).",
        },
        {
          name: "Credit & Refund",
          description:
            "Input VAT can be credited against output VAT. Exporters with excess input VAT and ≥40% exports may claim refunds—interest applies if delayed.",
        },
      ],
    },
    {
      id: 3,
      title: "Customs Duty",
      icon: "🚢",
      overview:
        "Customs duty is levied on imported (and sometimes exported) goods, vital for businesses engaged in international trade.",
      services: [
        {
          name: "Classification & Valuation",
          description:
            "Correct assessment under Nepal Customs Tariff; rates range between 0–80%.",
        },
        {
          name: "Import Documentation & Filing",
          description:
            "Ensuring accurate customs declarations and certifications.",
        },
        {
          name: "Advisory on Exemptions & Special Duties",
          description:
            "Support for agriculture reform fees, special protective duties, anti-dumping, and safeguard duties as outlined in the Finance Act and Customs Rules.",
        },
        {
          name: "Cost Management",
          description:
            "Awareness of added charges like warehouse fees and demurrage that impact total import cost.",
        },
        {
          name: "Compliance & Dispute Support",
          description:
            "Liaison during customs audits, inquiries, and formal representation.",
        },
      ],
    },
    {
      id: 4,
      title: "Excise Duty",
      icon: "🏭",
      overview:
        "Governed by the Excise Duty Act, 2058 (2002), excise duty applies to selected domestically produced or imported goods. Recent expansion includes soft drinks (NPR 25 per liter), cosmetics, cold drinks, electronic cigarettes (30%), shaving machines, and utensils.",
      services: [
        {
          name: "Determining Applicability",
          description:
            "Identifying whether your product or service is subject to excise duty.",
        },
        {
          name: "Duty Calculations & Timing",
          description:
            "Duties based on factory price or customs values; payment due on discharge/import/manufacture or invoice date.",
        },
        {
          name: "Licensing & Compliance",
          description:
            "Assisting in obtaining and renewing excise licenses, avoiding penalties, and preventing cancellation.",
        },
        {
          name: "Return Filing & Record‑keeping",
          description:
            "Monthly excise returns within 25 days of the end of each month—even if no activity occurred—and maintaining compliance documentation.",
        },
        {
          name: "Audit & Appeal Support",
          description:
            "Representation during excise audits or assessments, and support with appeals if needed.",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
    

      <ServicesHeader
        title="Taxation Services (as per Nepalese law)"
        titleDescription={titleDescription}
        titleImage="/tax.jpg"
        header="Services"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12 ">
          {taxServices.map((service) => (
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
    </div>
  );
}

export default Tax;
