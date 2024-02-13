"use client";
import Image from "next/image";
import React, { useState } from "react";

const cardData = [
  {
    id: 0,
    title: "People data & Analytics",
    description:
      "Connect all your people together in one place and gain powerful insights",
    image: "/images/people-data-analytics.svg",
  },
  {
    id: 1,
    title: "Performance and Culture",
    description:
      "Create a culture of high performance teams and see your business scale",
    image: "/images/performance-culture.svg",
  },
  {
    id: 2,
    title: "Hiring and Onboarding",
    description:
      "Continue to hire and onboard great talent remotely during these times",
    image: "/images/hiring-onboarding.svg",
  },
];

const HRSection = () => {
  const [id, setId] = useState<number>(0);

  const showImage = cardData[id].image;
  const imageAlt = cardData[id].title;

  const toggleTab = (id: number) => {
    setId(id);
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-0 ">
      <div className="max-w-[340px] font-nunito-sans flex flex-col gap-3 px-9 sm:px-0">
        {cardData.map((card, i) => (
          <div
            key={i}
            className={`${
              id === card.id ? "bg-white shadow-large" : "hover:bg-neutral-100 "
            }  sm:h-[100px] py-4 pl-5 pr-10 cursor-pointer transition-all duration-150 ease-in-out`}
            onClick={() => toggleTab(card.id)}
            // className={`${
            //   i % 2 !== 0 ? "bg-white shadow-large" : " "
            // }  h-[100px] py-4 pl-5 pr-10`}
          >
            <h4
              className={`text-lg font-bold ${
                i % 2 !== 0 ? "text-primary" : "text-header"
              }`}>
              {card.title}
            </h4>
            <p className="text-sm text-header-foreground">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-[800px] px-2 sm:px-2.5 py-2.5 ">
        <Image src={showImage} width={800} height={530} alt={imageAlt} />
      </div>
    </div>
  );
};

export default HRSection;
