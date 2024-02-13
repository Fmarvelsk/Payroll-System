import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import Container from "./Container";
import SideMenu from "./SideMenu";
import SmoothLink from "./SmoothLink";
import WishlistModal from "@/components/WishlistModal";

const menuItems = [
  {
    name: "Why Dreambill",
    link: "/#why",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Blog",
    link: "/",
  },
];

const Header = () => {
  return (
    <Container>
      <div className="mt-[30px] h-20 flex justify-between items-center bg-white px-11 rounded-[45px] shadow-normal">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/dreambill-logo.svg"
            width={155}
            height={35}
            alt="dreambill"
          />
        </Link>

        {/* NAV MENU */}
        <div className="hidden lg:block">
          <ul className="flex justify-center lg:gap-8 xl:gap-12">
            {menuItems.map((item, i) => (
              <li key={i}>
                {item.link === "/#why" ? (
                  <SmoothLink link={item.link} name={item.name} />
                ) : (
                  <Link
                    href={item.link}
                    className="relative block text-lg font-semibold text-primary hover:text-teal-600">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* LOGIN _ GET STARTED BUTTONS */}
        <div className="hidden gap-1 lg:flex">
          <WishlistModal className={buttonVariants({ variant: "ghost" })}>
            Sign In
          </WishlistModal>
          <WishlistModal className={buttonVariants({ variant: "default" })}>
            Get Started
          </WishlistModal>
          {/* <Link
            href="/get-started"
            className={buttonVariants({ variant: "ghost" })}>
            Sign In
          </Link> */}
          {/* <Link
            href="/get-started"
            className={buttonVariants({ variant: "default" })}>
            Get Started
          </Link> */}
        </div>

        <div className="lg:hidden">
          <SideMenu items={menuItems} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
