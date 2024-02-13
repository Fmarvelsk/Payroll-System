import dataUrl from "@/lib/dataUrl";
import Image from "next/image";

const customersData = [
  {
    image: "/images/khm-engg.svg",
    name: "KHM Engineering",
  },
  {
    image: "/images/deal-street.svg",
    name: "Deal Street",
  },
  {
    image: "/images/palsgaard.svg",
    name: "Palsgaard",
  },
  {
    image: "/images/para-ath.svg",
    name: "Para-athletes",
  },
  {
    image: "/images/vision-display.svg",
    name: "Vision Display",
  },
];

const Customers = () => {
  return (
    <div className="my-20">
      <div className="py-4">MEET OUR CUSTOMERS</div>
      <h4 className="text-3xl leading-10 sm:text-4xl font-bold text-gray-900 max-w-[800px]">
        Supporting
        <span className="text-primary"> 9,000 growing companies </span> to
        manage their HR.
      </h4>
      <div className="flex flex-wrap justify-start py-6">
        {customersData.map((brand, i) => (
          <Image
            key={i}
            src={brand.image}
            // src="/images/companies.png"
            alt={brand.name}
            width={100}
            height={16}
            placeholder="blur"
            blurDataURL={dataUrl}
            className="p-1 m-1"
          />
        ))}
      </div>
      <div className="w-full h-0.5 bg-header-secondary" />
    </div>
  );
};

export default Customers;
