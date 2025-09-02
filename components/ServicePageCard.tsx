interface ServicePageCardProps {
  title: string;
  description: string | React.ReactElement;
  icon: string;
}

function ServicePageCard({ title, description, icon }: ServicePageCardProps) {
  return (
    <div className=" bg-white shadow-xl rounded-lg transition-transform hover:scale-105 ease-in duration-400 ">
      <div className="flex items-center w-full bg-gradient-to-br from-[#2B303A] to-gray-700 p-4 rounded-t-lg">
        <span className="text-3xl mr-2">{icon}</span>
        <h3 className="text-2xl font-bold uppercase text-white">{title}</h3>
      </div>
      <div className="tracking-wide text-justify text-base md:text-lg py-4 px-6">
        {description}
      </div>
    </div>
  );
}

export default ServicePageCard;
