import Container from "@/components/Container";
import Hero from "@/components/sections/Hero";
import PrimaryCard from "@/components/PrimaryCard";
import Customers from "@/components/sections/Customers";
import Testimonial from "@/components/sections/Testimonial";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Spacer from "@/components/ui/Spacer";
import WishlistModal from "@/components/WishlistModal";

export const metadata = {
  title: "Pricing | Dreambill",
  description:
    "Plans that fits your needs Whether your time-saving automation needs are large or small, we're here to help you scale. Free 15-day trial",
};

const priceData = [
  {
    name: "Platform Fee",
    cost: "N50,000",
  },
  {
    name: "Payout",
    cost: "N100 per tx",
  },
  {
    name: "Funding",
    cost: "N150 per tx",
  },
];

const page = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 py-16 mt-4 ">
          <h1 className="text-5xl font-bold sm:text-6xl text-primary font-inter">
            Plans that fits your needs
          </h1>
          <div className="text-lg text-center font-poppins text-primary/70 max-w-[550px] ">
            Whether your time-saving automation needs are large or small,
            we&apos;re here to help you scale.
          </div>

          <div className="flex justify-between max-w-[700px] flex-wrap flex-row  w-full">
            <div className="flex justify-between gap-5 text-lg font-semibold text-black">
              <Image
                src="/images/icon-correct.svg"
                alt="*"
                width={20}
                height={14}
                className=""
              />
              Free 15-day trial
            </div>
            <div className="flex justify-between gap-5 text-lg font-semibold text-black">
              <Image
                src="/images/icon-correct.svg"
                alt="*"
                width={20}
                height={14}
                className=""
              />
              Unlimited Team Members
            </div>
            <div className="flex justify-between gap-5 text-lg font-semibold text-black">
              <Image
                src="/images/icon-correct.svg"
                alt="*"
                width={20}
                height={14}
                className=""
              />
              Cancel Anytime
            </div>
          </div>
        </div>

        {/* CARDS  */}
        <div className="flex md:flex-row flex-wrap justify-center w-full lg:h-[700px] gap-5 my-16">
          <PrimaryCard className="font-inter max-w-[485px] lg:max-w-[675px]  flex-1 flex flex-col justify-between">
            <div className="text-4xl sm:text-5xl md:text-[64px] font-bold text-white">
              Standard
            </div>
            <div className="flex flex-col font-semibold">
              {priceData.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between py-4 my-6 border-b">
                  <div className="text-xl text-teal-600 md:text-2xl lg:text-3xl">
                    {item.name}
                  </div>
                  <div className="text-2xl md:text-4xl">{item.cost}</div>
                </div>
              ))}
            </div>

            <div className="self-end">
              <WishlistModal
                className={buttonVariants({ variant: "secondary" })}>
                Get Started
              </WishlistModal>
              {/* <Link
                href="/"
                className={buttonVariants({ variant: "secondary" })}>
                Get Started
              </Link> */}
            </div>
          </PrimaryCard>

          {/*  */}

          <PrimaryCard className="font-inter max-w-[485px] flex flex-col justify-between ">
            <div className="mt-6 text-4xl font-bold text-white md:text-6xl sm:text-5xl">
              Custom
            </div>
            <div className="flex flex-col text-lg font-medium md:text-xl">
              <div className="py-6">
                Get in touch for tailored pricing based on your volume and
                business model.
              </div>
              <div className="py-6">
                Available for businesses processing more than N9,000,000 per
                month.
              </div>
              <ul className="my-6 list-disc list-inside">
                <li className="pb-5">Customized pricing offers</li>
                <li className="py-5">Volume-based discounts</li>
                <li className="py-5">Access exclusive features</li>
              </ul>
            </div>
            <div className="self-end">
              <Link
                href="/contact-us"
                className={buttonVariants({ variant: "inverse-outline" })}>
                Contact Sales
              </Link>
            </div>
          </PrimaryCard>
        </div>

        <Container className="pt-10 mt-10 md:pt-0 md:mt-10">
          <Customers />
        </Container>

        <Testimonial />

        <Hero />
      </Container>
    </>
  );
};

export default page;
