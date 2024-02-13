"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { ScrollArea } from "./ui/ScrollArea";
import { Input } from "./ui/Input";
import Image from "next/image";
import countries from "@/lib/world-countries.json";

const SelectPhone = ({ name }: { name?: string }) => {
  const countryCodes = React.useMemo(
    () =>
      countries
        .slice()
        .sort((a, b) => (parseInt(a.code) > parseInt(b.code) ? 1 : -1)),
    []
  );

  const phoneCodes = React.useMemo(
    () =>
      countryCodes.map((item, i) => (
        <SelectItem key={i} value={item.alpha3} className="py-3">
          <div className="flex justify-start gap-4">
            <Image
              src={`/flags/${item.alpha2}.png`}
              alt=""
              width={24}
              height={24}
              className="inline-block"
            />
            + {item.code}
          </div>
        </SelectItem>
      )),
    [countryCodes]
  );

  const defaultHolder = (
    <span className="flex gap-3 justify-center">
      <Image
        src="/flags/ng.png"
        alt=""
        width={24}
        height={24}
        className="inline-block"
      />{" "}
      + 234
    </span>
  );

  return (
    <div className="flex justify-center">
      <Select name="">
        <SelectTrigger className=" w-[190px] outline-none h-12 ring-0 focus-visible:ring-0 focus-visible:outline-none border-2 rounded-md border-neutral-300 rounded-r-none">
          <SelectValue placeholder={defaultHolder} />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="">
            <SelectLabel>Country Code</SelectLabel>
            <ScrollArea className="h-72">{phoneCodes}</ScrollArea>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        id="book_phone_number"
        type="number"
        placeholder="Phone Number"
        className="appearance-none  border-2  rounded-tr-md rounded-br-md border-neutral-300"
      />
    </div>
  );
};

export default SelectPhone;
