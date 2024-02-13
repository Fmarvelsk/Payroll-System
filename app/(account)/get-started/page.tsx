import { GetStarted } from "@/components/GetStarted";

export const metadata = {
  title: "Get Started with Dreambill",
  description:
    "Pay your global team with one bulk payment, Let's get you started as a company",
};

const page = () => {
  return (
    <div className="py-6 w-full max-w-[480px] flex flex-col  gap-3">
      <h2 className="font-semibold tracking-wide text-xl text-primary-black font-poppins">
        Let&apos;s get you started
      </h2>
      <p className="block font-inter text-sm text-primary-black/90 ">
        Please select an option below.
      </p>

      <div className="py-1">
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
