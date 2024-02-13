"use client";
import countries from "@/lib/world-countries.json";

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

const SelectCountry = () => {
  const arrOptions = countries.map((item, i) => (
    <SelectItem key={i} value={item.alpha3} className="py-3 cursor-pointer">
      {item.name}
    </SelectItem>
  ));

  return (
    <>
      <Select>
        <SelectTrigger className="outline-none h-12 ring-0 focus-visible:ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none border-2 rounded-md border-neutral-300 active:outline-none active:ring-0">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="">
            <SelectLabel> Country </SelectLabel>
            <ScrollArea className="h-72">{arrOptions}</ScrollArea>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectCountry;
