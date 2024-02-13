import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import { termsOfService as Terms } from "@/components/TermsOfService";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: "Terms of Service | Dreambill",
  description: "Terms and Conditions",
};

const tableOfContent = [
  {
    title: "Definitions",
    href: "#definitions",
  },
  {
    title: "Acceptance of Terms",
    href: "#acceptance-terms",
  },
  {
    title: "Scope of DreamBill’s Services",
    href: "#scope-dreambill",
  },
  {
    title: "Information",
    href: "#information",
  },
  {
    title: "Submissions",
    href: "#submissions",
  },
  {
    title: "Users’ Representations & Warranties",
    href: "#warrenties",
  },
  {
    title: "Payment",
    href: "#payment",
  },
  {
    title: "Intellectual Property",
    href: "#intellectual-property",
  },
  {
    title: "Prohibited Activities",
    href: "#prohibited-activities",
  },
  {
    title: "Your Responsibilities",
    href: "#your-responsibilities",
  },

  {
    title: "Links to Other Websites",
    href: "#links-to-other-websites",
  },
  {
    title: "Termination",
    href: "#termination",
  },
  {
    title: "Indemnity",
    href: "#indemnity",
  },
  {
    title: "Limitation of Liability",
    href: "#limitation-of-liability",
  },
  {
    title: "Disclaimer",
    href: "#disclaimer",
  },
  {
    title: "Governing Law",
    href: "#governing-law",
  },
  {
    title: "Dispute Resolution",
    href: "#dispute-resolution",
  },
  {
    title: "Force Majeure",
    href: "#force-majeuere",
  },
  {
    title: "Feedback",
    href: "#feedback",
  },
  {
    title: "Changes to Terms",
    href: "#change-to-terms",
  },

  {
    title: "Contact Us",
    href: "#contact-us",
  },
];

const page = () => {
  return (
    <Container>
      {/* Header Portion */}
      <section className="py-16 text-center">
        <p className="mb-3 font-medium text-xl text-black font-montserrat">
          Last modified July 24, 2023
        </p>
        <h1 className="py-2 text-5xl font-bold sm:text-6xl font-inter text-primary">
          TERMS OF SERVICE{" "}
        </h1>
        <div className="py-2 text-base font-medium sm:text-lg font-poppins text-[#848199] w-7/12 m-auto">
          Your privacy is important to us at Dreambill. We respect your privacy
          regarding any information we may collect from you across our website.
        </div>
      </section>

      <section className="px-[1.5rem] md:px-0 flex flex-wrap gap-4 relative justify-between items-start">
        <div className="legal-content text-[#667085] text-xl font-normal">
          <div className="flex-auto max-w-2xl w-full">
            <section>
              <Terms />
            </section>
          </div>
        </div>
        <aside className="legal-nav text-[#090628] font-inter">
          <h3 className="font-semibold text-3xl mb-4">Table of Contents</h3>
          <ul className="list-decimal marker:text-xl">
            {tableOfContent.map((content, i) => (
              <li key={i} className="mb-3">
                <a
                  href={content.href}
                  className="underline leading-loose text-xl font-medium"
                >
                  {content.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <Spacer size={90} />

      <Hero />
    </Container>
  );
};

export default page;
