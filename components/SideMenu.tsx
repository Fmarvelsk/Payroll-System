"use client";

import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "./ui/Sheet";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";
import { Separator } from "./ui/Separator";
import WishlistModal from "./WishlistModal";

const SideMenu = ({ items }: { items: any }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <AiOutlineMenu size={28} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="pb-4">
            <SheetTitle>MENU</SheetTitle>
          </SheetHeader>
          <Separator />
          <ul className="flex flex-col py-10 font-inter">
            {items.map((item: any, i: number) => (
              <li key={i}>
                <SheetClose asChild>
                  <Link
                    href={item.link}
                    className="relative block px-4 py-3 text-lg font-semibold rounded-md text-primary hover:bg-neutral-100 hover:text-teal-600">
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <Separator />
          <SheetFooter>
            <div className="flex flex-wrap justify-center gap-4 py-8 mx-auto">
              <SheetClose asChild>
                <WishlistModal className={buttonVariants({ variant: "ghost" })}>
                  Sign In
                </WishlistModal>
                {/* <Link
                  href="/get-started"
                  className={buttonVariants({ variant: "ghost" })}>
                  Sign In
                </Link> */}
              </SheetClose>
              <SheetClose asChild>
                <WishlistModal
                  className={buttonVariants({ variant: "default" })}>
                  Get Started
                </WishlistModal>
                {/* <Link
                  href="/get-started"
                  className={buttonVariants({ variant: "default" })}>
                  Get Started
                </Link> */}
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideMenu;
