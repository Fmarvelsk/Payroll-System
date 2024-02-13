import Image from "next/image";

const shortCardData = [
  {
    icon: "/images/dollar.svg",
    title: "Payroll & Expenses",
    description:
      "Our industry redefining payroll system automates your payroll and saves time for everyone.",
  },
  {
    icon: "/images/hire-people.svg",
    title: "Hiring & Onboarding",
    description:
      "An integrated hiring platform for teams to collaborate with recruiters and hire good talent.",
  },
  {
    icon: "/images/right.svg",
    title: "Performance & Culture",
    description:
      "An engaging culture driven by contextual feedback and organization aligned goals.",
  },
];

const HighPerformance = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-20">
      <h2 className=" text-4xl sm:text-5xl font-bold font-inter max-w-[860px] text-center">
        Everything you need to create a high performance culture
      </h2>
      <div className="flex flex-col justify-center gap-10 p-0 md:flex-wrap md:flex-row">
        {shortCardData.map((card, i) => (
          <div
            key={i}
            className="w-[280px] sm:w-[340px] p-10 font-nunito-sans bg-white shadow-small h-[340px]">
            <div className="w-[60px] h-[60px] rounded-full bg-header-secondary flex justify-center items-center">
              <Image src={card.icon} alt="ICON" width={32} height={32} />
            </div>
            <h4 className="py-1 mt-5 text-2xl font-bold text-header">
              {card.title}
            </h4>
            <div className="py-1 text-lg text-header-foreground">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighPerformance;
