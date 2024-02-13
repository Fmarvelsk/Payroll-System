import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import { policyText as Policy } from "@/components/PolicyText";
import { antiBriberyPolicy } from "../../../montetaryPolicy";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: " ANTI-BRIBERY AND CORRUPTION POLICY | Dreambill",
  description: "ANTI-BRIBERY AND CORRUPTION POLICY",
};

const tableOfContent = [
  {
    title: "Statement and purpose of policy",
    href: "#statement-and-purpose-of-policy",
  },
  {
    title: "What does this policy cover?",
    href: "#what-does-this-policy-cover?",
  },
  {
    title: "What are bribery and corruption?",
    href: "#what-are-bribery-and-corruption?",
  },
  {
    title: "Who can be involved in bribery and corruption?",
    href: "#who-can-be-involved-in-bribery-and-corruption?",
  },
  {
    title: "In what circumstances can bribery and corruption occur?",
    href: "#bribery-and-corruption-occur",
  },
  {
    title: "Who is responsible for this policy?",
    href: "#who-is-responsible-for-this-policy",
  },
  {
    title: "Gifts and hospitality",
    href: "#gifts-and-hospitality",
  },
  {
    title: "Keeping records",
    href: "#keeping-records",
  },
  {
    title: "Reporting issues related to bribery and corruption",
    href: "#report-issue",
  },
  {
    title: "Consequences of non-compliance",
    href: "#consequences-of-non-compliance",
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
          ANTI-BRIBERY AND CORRUPTION POLICY
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
              <h3 className="text-[#090628] text-3xl font-bold"></h3>
              {antiBriberyPolicy.map((policy, i) => (
                <Policy policy={policy} key={i} />
              ))}
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
