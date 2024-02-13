import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import { privacyPolicy as PrivacyPolicy } from "@/components/PrivacyPolicy";
import Hero from "@/components/sections/Hero";

const tableOfContent = [
    {
        title: "Collection And Use",
        link: "#collection-and-use"
    },
    
    {
        link: "#third-party-services",
        title: "Third-Party Services",
    },
    
    {
        link: "#security",
        title: "Security",
    },
    {
        link: "#inter-transfer",
        title: "International transfer of your information",
    },
    {
        link: "#childern-privacyOnly",
        title: "Children’s PrivacyOnly",
    },
    {
        link: "#change-to-policy",
        title: "Changes To This Privacy Policy",
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
            Privacy Policy
          </h1>
          <div className="py-2 text-base font-medium sm:text-lg font-poppins text-[#848199] w-7/12 m-auto">
            Your privacy is important to us at Dreambill. We respect your privacy
            regarding any information we may collect from you across our website.
          </div>
        </section>
  
        <section className="px-[1.5rem] md:px-0 flex flex-wrap gap-4 relative justify-between items-start">
          <div className="legal-content text-[#667085] text-xl font-normal">
            <div className="flex-auto max-w-2xl w-full">
             <PrivacyPolicy/>
              </div>
          </div>
          <aside className="legal-nav text-[#090628] font-inter">
            <h3 className="font-semibold text-3xl mb-4">Table of Contents</h3>
            <ul className="list-decimal marker:text-xl">
              {tableOfContent.map((content, i) => (
                <li key={i} className="mb-3">
        
                  <a href={content.link} className="underline leading-loose text-xl font-medium">
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
  