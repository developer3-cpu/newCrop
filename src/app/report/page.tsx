"use client";

import Report from "@/components/Report";
import BananaOne from "@/components/BananaOne";
import { useSearchParams } from "next/navigation";

export default function ReportPage() {
  const sp = useSearchParams();
  const fruit = sp.get("fruit");
  if (fruit === "bananaOne") {
    return <BananaOne initialCategory="fruits" initialFruit="bananaOne" />;
  }
  return <Report />;
}