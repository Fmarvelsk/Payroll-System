import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Spacer from "@/components/ui/Spacer";
import HighPerformance from "@/components/sections/HighPerformance";
import WhyDreambill from "@/components/sections/WhyDreambill";
import Testimonial from "@/components/sections/Testimonial";
import Customers from "@/components/sections/Customers";
import HRSection from "@/components/HRSection";
import EmpowerWork from "@/components/sections/EmpowerWork";
import MoreWork from "@/components/sections/MoreWork";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacer size={45} />

      {/* Section 1 Empower Workforce */}
      <Container>
        <EmpowerWork />
      </Container>

      {/* Section 2 - Smart HR */}
      <section className="bg-secondary">
        <div id="why" />
        <Container className="px-0">
          <div className="flex flex-col items-center justify-center gap-4 py-20 px-9 ">
            <h2 className="text-5xl font-bold text-center text-primary max-w-[600px]">
              Smart HR to outsmart the changing world
            </h2>
            <p className="block max-w-[700px] text-center">
              The world has changed, and it&apos;s going to keep changing.
              Dreambill helps your teams to adapt, evolve, and scale by working
              more effectively. Spend less time on mundane tasks and focus more
              on strategy. Turn data into smarter decisions and create
              experiences your employees will love.
            </p>
          </div>

          <HRSection />
        </Container>
      </section>

      {/* Section 3 - Get more work done */}
      <MoreWork />

      {/* Section 4 - High performance */}
      <Container>
        <HighPerformance />
      </Container>

      {/* Section 5 - why dreambill */}
      <Container>
        <WhyDreambill />

        {/* Section 6 - Customers */}
        <Customers />

        {/* Section 7 - Testimonials */}
        <Testimonial />

        {/* hero - get-started*/}
        <Hero />
      </Container>

      <Footer />
    </main>
  );
}
