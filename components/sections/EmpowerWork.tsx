import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/Button";

import user1 from "@/public/images/user1.png";
import user2 from "@/public/images/user2.png";
import user3 from "@/public/images/user3.png";
import user4 from "@/public/images/user4.png";

import mainVectorImage from "@/public/images/vector-main.svg";
import mainGraphImage from "@/public/images/main-graph.svg";
import dataUrl from "@/lib/dataUrl";
import WishlistModal from "../WishlistModal";

const EmpowerWork = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center items-center bg-[url('/images/v-grid.svg')] bg-auto bg-no-repeat bg-topper pb-20">
      <div className="max-w-[600px]   flex flex-col gap-5">
        <h1 className="text-5xl font-bold sm:text-6xl text-primary">
          Empower Your Workforce, Unlock Africa&apos;s Potential
        </h1>
        <p className="block">
          Empower your business with our comprehensive payroll platform tailored
          for the African market. Streamline your Payroll Processes, Ensure
          Compliance, and Focus on Growth
        </p>

        <div className="flex flex-wrap gap-6">
          {/* <Link
            href="/get-started"
            className={buttonVariants({ variant: "default" })}>
            Get Started
          </Link> */}
          <WishlistModal className={buttonVariants({ variant: "default" })}>
            Get Started
          </WishlistModal>
          <Link
            href="/book-demo"
            className={buttonVariants({ variant: "outline" })}>
            Request a demo
          </Link>
        </div>

        <p className="block">Setup in 5 minutes</p>
      </div>
      <div className="">
        <div className="relative lg:w-[540px] lg:h-[540px] m-8 lg:m-0 bg-primary rounded-3xl">
          <Image
            src={mainVectorImage}
            width={540}
            height={540}
            alt="vector"
            className="p-2"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
          <Image
            src={mainGraphImage}
            width={540}
            height={540}
            alt="vector"
            className="absolute inset-0 p-9"
            placeholder="blur"
            blurDataURL={dataUrl}
          />

          <Image
            // src="/images/user1.png"
            src={user1}
            width={100}
            height={100}
            alt="Customer"
            className="absolute -top-4 -right-[50px] hidden sm:block"
            placeholder="blur"
            // blurDataURL={dataUrl}
          />
          <Image
            // src="/images/user2.png"
            src={user2}
            width={100}
            height={100}
            alt="Customer"
            className="absolute top-1/4 -left-[50px] hidden sm:block"
            placeholder="blur"
            // blurDataURL={dataUrl}
          />
          <Image
            // src="/images/user3.png"
            src={user3}
            width={100}
            height={100}
            alt="Customer"
            className="absolute left-1/4 -bottom-[50px] hidden sm:block"
            placeholder="blur"
            // blurDataURL={dataUrl}
          />
          <Image
            // src="/images/user4.png"
            src={user4}
            width={100}
            height={100}
            alt="Customer"
            className="absolute bottom-1/4 -right-[50px] hidden sm:block"
            placeholder="blur"
            // blurDataURL={dataUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default EmpowerWork;
