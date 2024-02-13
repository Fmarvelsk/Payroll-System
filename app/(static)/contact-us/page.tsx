import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Dreambill",
  description:
    "Send us a message and we would reply - reach us at: 132 Dartmouth Street Boston, Massachusetts 02156 United States",
};

const page = () => {
  return (
    <Container>
      {/* Header Portion */}
      <section className="py-16 text-center">
        <h1 className="py-2 text-5xl font-bold sm:text-6xl font-inter text-primary">
          Contact Us
        </h1>
        <div className="py-2 text-base font-medium sm:text-lg font-poppins text-primary/70">
          Any question? Just write us a message!
        </div>
      </section>

      {/* Box Section */}
      <section className="flex justify-center flex-wrap md:flex-nowrap  md:flex-row overflow-hidden rounded-xl lg:h-[650px] font-poppins shadow-smooth">
        <div className="max-w-[500px] w-full flex-1 rounded-xl bg-primary flex flex-col gap-20 text-white font-poppins px-9 py-12 relative">
          <div className="">
            <div className="text-3xl font-semibold ">Contact Information</div>
            <div className="py-2 text-lg text-white/70">
              Send us a message and we would reply
            </div>
          </div>

          <ul className="max-w-[340px]  flex flex-col gap-9">
            <li className="flex flex-wrap justify-start gap-6">
              <Image
                src="/images/icon-phone.svg"
                alt="*"
                width={24}
                height={24}
              />
              <p className="">+1012 3456 789</p>
            </li>
            <li className="flex flex-wrap justify-start gap-6">
              <Image
                src="/images/icon-email.svg"
                alt="*"
                width={24}
                height={24}
              />
              <p className="">support@dreambill.com</p>
            </li>
            <li className="flex justify-start gap-6">
              <Image
                src="/images/icon-location.svg"
                alt="*"
                width={24}
                height={24}
              />
              <p className="">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </li>
          </ul>

          <Image
            src="/images/vector-circle.svg"
            alt="circle"
            width={140}
            height={140}
            className="absolute bottom-20 right-20"
          />
          <Image
            src="/images/icon-circle.svg"
            alt="circle"
            width={190}
            height={190}
            className="absolute bottom-0 right-0"
          />
        </div>

        <ContactForm />
      </section>

      <Spacer size={90} />
    </Container>
  );
};

export default page;
