import Image from "next/image";
import logo from "@/public/images/dreambill-logo.png";
import Container from "./Container";
import Link from "next/link";

const HeaderGuest = () => {
  return (
    <div className=" bg-white py-8 border-b border-primary ">
      <Container>
        <div className="flex ">
          <Link href="/">
            <Image
              src={logo}
              height={42}
              width={192}
              alt="dreambill"
              priority={true}
              className="hover:opacity-80"
            />
          </Link>
        </div>
        <div className="flex-1"></div>
      </Container>
    </div>
  );
};

export default HeaderGuest;
