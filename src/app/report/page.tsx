"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Report from "@/components/Report";
import BananaOne from "@/components/BananaOne";

export default function ReportPage() {
  return (
    <Suspense fallback={<div />}>
      <ReportPageContent />
    </Suspense>
  );
}

function ReportPageContent() {
  const sp = useSearchParams();
  const fruit = sp.get("fruit");
  if (fruit === "bananaOne") {
    return <BananaOne initialCategory="fruits" initialFruit="bananaOne" />;
  }
  return <Report />;
}