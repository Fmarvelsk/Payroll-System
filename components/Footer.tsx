import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-between gap-4 py-4 sm:gap-0 sm:flex-row">
        <div className="">
          <Image
            src="/images/dreambill-logo.svg"
            width={196}
            height={42}
            alt="dreambill"
          />
        </div>
        <SocialIcons />
      </div>

      <hr className="border-b border-primary" />

      <div className="flex flex-wrap justify-center gap-4 py-6 text-xs sm:justify-between font-inter sm:gap-0">
        <div className="">© Copyright 2023. All Rights Reserved.</div>
        <div className="flex flex-wrap items-center justify-center gap-5 ">
          <Link href="/about-us" className="hover:text-primary">
            About us
          </Link>
          
          <Link href="/anti-bribery-policy" className="hover:text-primary">
          Anti-Bribery and Corruption Policy
          </Link>
          <Link href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
