import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import { BoxReveal } from "./magicui/box-reveal";
import Image from "next/image";

interface ServicesHeaderProps {
  title: string;
  titleDescription: string | React.ReactElement;
  titleImage: string;
  header: string;
}

function ServicesHeader({
  title,
  titleDescription,
  titleImage,
  header,
}: ServicesHeaderProps) {
  return (
    <>
      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text={header}
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
        <div className="col-span-1 md:col-span-4 space-y-4  p-6 md:p-8">
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-2">
              {title}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <div className="text-base md:text-lg font-light tracking-wide text-justify">
              {titleDescription}
            </div>
          </BoxReveal>
        </div>

        <figure className="col-span-1 md:col-span-2 w-full h-64 md:min-h-[260] relative">
          <Image
            src={titleImage}
            alt={`${title} related image`}
            fill
            className="object-cover rounded"
          />
        </figure>
      </div>
    </>
  );
}

export default ServicesHeader;
