import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import Image from "next/image";
import Values from "@/components/sections/Values";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: "About Dreambill",
  description:
    "We simplify employee management tasks - like payroll, scheduling, time tracking, benefits, and hiring - so company owners can focus on everything else.",
};

const page = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="absolute top-0 w-full h-40 bg-primary -z-10 " />
        <Container className="">
          <div className="flex flex-col justify-between gap-12 px-4 py-8 sm:px-8 md:flex-row">
            <div className="relative flex-1">
              <Image
                src="/images/about-image.png"
                alt="about-us"
                width={500}
                height={300}
              />
              <Image
                src="/images/star.svg"
                alt="star"
                width={100}
                height={100}
                className="hidden sm:block sm:absolute sm:bottom-1/3 sm:-left-10"
              />
            </div>
            <div className="flex-1 p-4 text-white font-inter">
              <h1 className="max-w-[300px] font-bold text-4xl sm:text-5xl md:text-6xl  leading-[75px]">
                Hi, we&apos;re Dreambill
              </h1>
              <p className="block pt-6 text-lg">
                We simplify employee management tasks - like payroll,
                scheduling, time tracking, benefits, and hiring - so compony
                owners can focus on everything else.
              </p>
            </div>
          </div>
        </Container>
        <Spacer size={70} />
      </div>

      <Container>
        {/* section 1 */}
        <div className="flex flex-col justify-between gap-12 py-16 my-6 md:flex-row px-7">
          <div className="flex flex-col flex-1 gap-4 font-inter">
            <div className="text-sm font-bold tracking-widest uppercase text-primary-opacity-sample">
              OUR CUSTOMERS COME FIRST
            </div>
            <h2 className="text-4xl font-extrabold text-primary-black">
              Customer first
            </h2>
            <p className=" max-w-[500px] text-primary-black">
              As a small, independent Nigerian business, we understand it takes
              a lot to keep your company strong.
            </p>
            <p className="max-w-[500px] text-primary-black">
              From automating the not-so-small tasks to providing exceptional
              customer support, we&apos;re always focused on making it easier to
              manage your business.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/hero-2.png"
              width={540}
              height={316}
              alt="blah blah"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </Container>

      <div className="bg-header-accent">
        <Container className="">
          {/* section 1 */}

          <div className="flex flex-col justify-between gap-12 px-2 py-16 my-6 md:items-center sm:px-7 sm:flex-row">
            <div className="flex-1 ">
              <Image
                src="/images/vector-fingercheck.svg"
                alt="finger-check-employee"
                width={540}
                height={540}
                className="min-w-[140px]"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 font-inter ">
              <div className="mb-2 font-bold tracking-widest uppercase text-primary-opacity-sample">
                OUR MISSION
              </div>
              <p className="max-w-[500px] text-primary-black">
                At Dreambill, our mission is to provide small businesses with
                innovative and reliable payroll & HR solutions that simplify
                their operations, empower their people, and drive success.
              </p>
              <p className="max-w-[500px] text-primary-black">
                With our game-changing tools and personalized client support,
                .....
              </p>
              <p className="max-w-[500px] text-primary-black">
                We are committed to delivering exceptional technology and
                corresponding service that saves our clients time and money.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Values />

        {/* hero */}
        <Hero />
      </Container>
    </>
  );
};

export default page;
