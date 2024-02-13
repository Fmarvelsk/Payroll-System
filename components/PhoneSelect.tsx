"use client";
import React from "react";
import countries from "@/lib/world-countries.json";

import { SelectItem } from "@/components/ui/Select";
import { ScrollArea } from "./ui/ScrollArea";

const PhoneSelect = () => {
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
        <SelectItem key={i} value={item.alpha2} className="py-3">
          <div className="flex justify-start gap-4">+ {item.code}</div>
        </SelectItem>
      )),
    [countryCodes]
  );

  return <ScrollArea className="h-72">{phoneCodes}</ScrollArea>;
};

export default PhoneSelect;
