import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageUrl?: string;
  description?: string | React.ReactElement;
  onlyImage?: boolean;
  isAudit?: boolean;
}

function ServiceCard({
  title,
  imageUrl,
  description = "",
  onlyImage = false,
  isAudit = false,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden grid md:grid-cols-8 ${
        isAudit ? "md:min-h-80" : "min-h-60"
      } `}
    >
      {imageUrl && (
        <figure
          className={`md:col-span-3 w-full relative h-44 md:h-full ${
            onlyImage ? "md:col-span-8 rounded-lg" : ""
          }`}
        >
          <Image
            src={imageUrl}
            alt={`${title} image`}
            fill
            className="object-cover rounded-l-lg"
          />
        </figure>
      )}

      {!onlyImage && (
        <div
          className={` md:col-span-5 px-8 flex flex-col ${
            imageUrl ? "" : "md:col-span-8 px-8 "
          } ${isAudit ? "py-8" : "pt-4 pb-8 md:py-8 "}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 mb-4">
            {title}
          </h2>
          <div className="text-sm md:text-base text-gray-700 leading-normal text-justify">
            {description}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
