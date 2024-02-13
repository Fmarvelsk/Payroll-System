import dataUrl from "@/lib/dataUrl";
import Image from "next/image";

const cardData = [
  {
    icon: "/images/vector-pc.svg",
    title: "Mobility",
  },
  {
    icon: "/images/vector-connect.svg",
    title: "Flexibility",
  },
  {
    icon: "/images/vector-award.svg",
    title: "Reliability",
  },
  {
    icon: "/images/vector-secure.svg",
    title: "Security",
  },
];

const Values = () => {
  return (
    <section className="py-5 font-inter">
      <div className="py-5">
        <div className="text-sm font-bold tracking-widest text-center uppercase text-primary-opacity-sample">
          OUR VALUES
        </div>
        <h4 className="text-3xl font-extrabold text-center sm:text-4xl text-primary-black">
          We believe in:
        </h4>

        <div className="flex flex-wrap justify-center gap-12 py-20">
          {cardData.map((item, i) => (
            <div
              key={i}
              className="w-[240px] flex flex-col justify-between gap-4">
              <div className="relative w-9 h-9">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  placeholder="blur"
                  blurDataURL={dataUrl}
                />
              </div>
              <h5 className="text-2xl sm:text-[36px] font-extrabold text-primary-black">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
