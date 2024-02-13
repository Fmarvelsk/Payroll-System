import Image from "next/image";
import logo from "@/public/images/dreambill-logo.png";
import Container from "./Container";
import Link from "next/link";
import { Input } from "./ui/Input";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/Popover";
import { Separator } from "./ui/Separator";

/**
 *
 * UNDER DEVELOPMENT - Dashboard Header
 *
 **/

const HeaderDashboard = () => {
  return (
    <div className=" bg-white h-24 border-b-2">
      <Container className="max-w-[1440px] px-0">
        <header className="flex justify-between items-center h-24">
          <div className="flex h-full items-center gap-10">
            <div className="w-72 pb-4 self-end flex justify-center items-center">
              <Link href="/" className="w-48">
                <Image src={logo} alt="dreambill" priority={true} />
              </Link>
            </div>
            <div className="relative ">
              <Image
                src="/images/icon-search.svg"
                alt="Search"
                width={20}
                height={20}
                className="absolute left-2 top-1/2 -translate-y-1/2"
              />
              <Input
                type="search"
                className="border pl-10 min-w-[400px] shadow-sm border-neutral-100 rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="pr-10">
            <Popover>
              <PopoverTrigger asChild>
                <div className="bg-neutral-100 hover:bg-neutral-200/60 p-3 rounded-2xl relative cursor-pointer">
                  <span className="h-3 w-3 absolute bg-orange-600 rounded-full border-white border-2 right-2" />
                  <Image
                    src="/images/icon-bell.svg"
                    alt="#"
                    width={24}
                    height={24}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex justify-center items-center gap-5 py-2">
                  <div className="h-2 w-2 bg-neutral-200 rounded-full" />
                  This is sample notification.
                </div>
                <Separator className="bg-neutral-200" />
                <div className="flex justify-center items-center gap-5 py-2">
                  <div className="h-2 w-2 bg-neutral-200 rounded-full" />
                  This is sample notification.
                </div>
                <Separator className="bg-neutral-200" />
                <div className="flex justify-center items-center gap-5 py-2">
                  <div className="h-2 w-2 bg-neutral-200 rounded-full" />
                  This is sample notification.
                </div>
                <Separator className="bg-neutral-200" />
                <div className="flex justify-center items-center gap-5 py-2">
                  <div className="h-2 w-2 bg-neutral-200 rounded-full" />
                  This is sample notification.
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default HeaderDashboard;
