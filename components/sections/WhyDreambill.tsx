const cardData = [
  {
    title: "1.25min",
    description: "First response time with 24/7 in-app support",
  },
  {
    title: "200+",
    description: "Owned entities worldwide to hire and pay anywhere",
  },
  {
    title: "100+",
    description: "In-house tax, payroll and legal specialists",
  },
  {
    title: "86hrs",
    description: "Saved by customers monthly automating HR admin",
  },
  {
    title: "15+",
    description: "Flexible payment methods to pay your team",
  },
  {
    title: "$210,000+",
    description: "Of entity set up costs saved per country",
  },
];

const WhyDreambill = () => {
  return (
    <div className="px-2 py-20 sm:px-20 bg-header-tertiary rounded-[20px]">
      <h2 className="text-4xl font-bold text-center sm:text-5xl font-inter text-primary">
        Why Choose Dreambill
      </h2>
      <p className="text-lg sm:text-xl text-center max-w-[700px] mx-auto block py-5">
        Our guaranteed top-tier service and industry-leading worldwide coverage
        provide peace of mind for any global team.
      </p>

      <div className="flex flex-wrap justify-center w-full py-16 font-inter">
        {cardData.map((card, i) => (
          <div key={i} className="w-[340px] px-10 py-4 ">
            <h4 className="py-1 text-4xl font-bold text-center sm:text-5xl text-primary">
              {card.title}
            </h4>
            <p className="py-2 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDreambill;
