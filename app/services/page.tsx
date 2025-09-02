import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";
import ServicesSection from "@/components/homeComponents/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | S.B. Thakali & Associates",
  description:
    "Explore professional services in Accounting, Audit, Tax, Legal, and Advisory provided by S.B. Thakali & Associates, trusted Chartered Accountants in Pokhara, Nepal.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | S.B. Thakali & Associates",
    description:
      "Explore professional services in Accounting, Audit, Tax, Legal, and Advisory by S.B. Thakali & Associates.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "S.B. Thakali & Associates Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | S.B. Thakali & Associates",
    description:
      "Explore professional services in Accounting, Audit, Tax, Legal, and Advisory by S.B. Thakali & Associates.",
    images: ["/preview.jpg"],
  },
};

function Services() {
  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text="Services"
          className="text-black text-xl md:text-3xl uppercase tracking-widest font-light"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="bg-white grid md:grid-cols-6 items-center py-10 px-4 md:px-28 gap-12">
        <div className="col-span-1 md:col-span-4 space-y-6">
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-2">
              What we offer
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              In today’s fast-paced business world, having trusted expertise at
              your side is more important than ever. At S.B. Thakali &
              Associates, we deliver comprehensive services designed to help
              your business stay ahead. From auditing and assurance to legal
              guidance and strategic tax solutions, we combine professionalism
              with practical insights to ensure your business thrives.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              We take pride in understanding your unique challenges and
              providing solutions that are tailored, actionable, and
              results-driven. Our team works closely with you to ensure
              compliance, optimize performance, and unlock growth opportunities.
              With a focus on integrity, precision, and innovation, we aim to be
              more than advisors—we strive to be your trusted partners in
              success.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              Explore our services below and see how we can empower your
              business to achieve its full potential.
            </p>
          </BoxReveal>
        </div>

        <figure className="col-span-1 md:col-span-2 w-full h-60 md:h-full relative">
          <Image
            src="/CA.jpg"
            alt="Chartered Accountant illustration"
            fill
            className="object-cover rounded-xl"
          />
        </figure>
      </div>

      <ServicesSection showHeader={false} />
    </div>
  );
}

export default Services;
