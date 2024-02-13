import dataUrl from "@/lib/dataUrl";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="px-2 py-20 sm:px-8">
      <h2 className="text-4xl font-bold sm:text-5xl text-primary font-inter">
        Users love Dreambill
      </h2>

      <div className="flex flex-wrap justify-center pt-16 mx-auto sm:justify-between">
        <div className="flex flex-col justify-start gap-5 text-foreground w-[400px]">
          <Image
            src="/images/people.png"
            width={256}
            height={256}
            alt="people1.png"
            placeholder="blur"
            blurDataURL={dataUrl}
            className=""
          />
          <div className="flex flex-col gap-2">
            <h6 className="text-xl uppercase">Sarah N., CEO of XYZ Company</h6>
            <p className="block pt-4">
              Efficient, reliable, and hassle-free. This payroll platform has
              revolutionized our payroll management. Highly recommended
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-5 text-foreground w-[400px]">
          <Image
            src="/images/people2.png"
            width={256}
            height={256}
            alt="people2.png"
            placeholder="blur"
            blurDataURL={dataUrl}
            className=""
          />
          <div className="flex flex-col gap-2">
            <h6 className="text-xl uppercase">Sarah N., CEO of XYZ Company</h6>
            <p className="block pt-4">
              Using this payroll platform has been a game-changer for our
              company. It&apos;s efficient, user-friendly, and has streamlined
              our payroll process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
