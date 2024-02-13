"use client";
import { useState } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dataUrl from "@/lib/dataUrl";

const buttonsMenu = [
  {
    name: "I'm A Company",
    slug: "company",
    link: "company",
  },
  {
    name: "I'm An Employee",
    slug: "employee",
    link: "employee",
  },
];

export const GetStarted = () => {
  const router = useRouter();

  const [selectedButton, setSelectedButton] = useState("company");

  const goToRegister = () => {
    //
    router.push("/register");
  };

  const handleButton = (val: string) => {
    setSelectedButton(val);
  };

  return (
    <div className="font-inter">
      <div className="flex justify-center w-full overflow-hidden text-sm font-semibold border-2 rounded-lg border-neutral-200">
        {buttonsMenu.map((item, i) => (
          <button
            key={i}
            className={` flex-1 py-2.5 tracking-wide  rounded-lg transition-all duration-150 ease-in-out ${
              selectedButton === item.slug
                ? "border-2 bg-indigo-50 border-blue-600 text-gray-900"
                : "text-neutral-400"
            }`}
            type="button"
            onClick={() => handleButton(item.slug)}>
            {item.name}
          </button>
        ))}
      </div>

      {selectedButton === "company" ? (
        <>
          <div className="flex flex-wrap items-center justify-center p-6 my-8 border-2 rounded-lg sm:justify-between sm:h-40 font-inter">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900">
                Sign up as an company
              </h4>
              <div className="flex gap-2">
                <Image src="/images/ok.svg" alt="ok" width={14} height={14} />
                <p className="text-sm text-gray-500">
                  Pay your global team with one bulk payment
                </p>
              </div>
            </div>
            <Image
              src="/images/icon-company.svg"
              alt="company"
              width={82}
              height={82}
              placeholder="blur"
              blurDataURL={dataUrl}
            />
          </div>

          <Button className="w-full" onClick={goToRegister}>
            Continue
          </Button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between h-40 p-6 my-8 border-2 rounded-lg font-inter">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900">
                Keep an eye on your inbox!
              </h4>
              <p className="text-sm text-gray-500">
                Please sign up to dreambill via the link in the email invitation
                from your client. We&apos;re looking forward to seeing you soon.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
