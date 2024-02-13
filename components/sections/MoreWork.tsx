import dataUrl from "@/lib/dataUrl";
import Image from "next/image";
import Link from "next/link";
import WishlistModal from "../WishlistModal";
import desktopInterface from "@/public/images/desktop-interface.svg";

const MoreWork = () => {
  return (
    <section className="flex flex-col  md:flex-row max-w-[1200px] mx-auto bg-header-accent my-10 pb-[50px] relative rounded-[20px] overflow-hidden">
      <div className="max-w-[440px] ml-[54px] mt-[58px] flex flex-col gap-3">
        <div className="">
          <Image
            src="/images/team.png"
            width={85}
            height={90}
            alt="Team"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
        </div>
        <h2 className="pr-4 text-4xl font-bold sm:pr-16 sm:text-5xl text-primary">
          Get more work done, wherever you are.
        </h2>
        <p className="block py-4 text-xl">
          Our guaranteed top-tier service and industry-leading worldwide
          coverage provide peace of mind for any global team.
        </p>
      </div>
      <div className="">
        <Image
          src={desktopInterface}
          width={880}
          height={650}
          alt="Desktop Interface"
        />
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-primary opacity-5 "></div>

      <WishlistModal className="absolute bottom-0 flex items-center justify-center w-full h-24 font-semibold text-center -translate-x-1/2 left-1/2 text-primary hover:bg-teal-200/20">
        Get Started
      </WishlistModal>
      {/* <Link
        href="/get-started"
        className="absolute bottom-0 flex items-center justify-center w-full h-24 font-semibold text-center -translate-x-1/2 left-1/2 text-primary hover:bg-teal-200/20">
        Get Started
      </Link> */}
    </section>
  );
};

export default MoreWork;
