"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nContext";

type TabKey =
  | "fruits"
  | "vegetables"
  | "grains"
  | "spices"
  | "flowers"
  | "cashCrops"
  | "oilSeeds"
  | "pulses"
  | "plantationCrops";

type CategoryKey =
  | "fruits"
  | "vegetables"
  | "grains"
  | "spices"
  | "flowers"
  | "cashCrops"
  | "oilSeeds"
  | "pulses"
  | "plantationCrops";

type ReportTabsProps = {
  initialActive?: CategoryKey; // controls default highlighted tab on load
  onSelectCategory?: (key: CategoryKey) => void; // notify parent for nav switch
};

export default function ReportTabs({ initialActive = "fruits", onSelectCategory }: ReportTabsProps) {
  const { t } = useI18n();
  const [active, setActive] = useState<TabKey | null>(initialActive);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "fruits", label: t("categories.fruits") },
    { key: "vegetables", label: t("categories.vegetables") },
    { key: "grains", label: t("categories.grains") },
    { key: "spices", label: t("categories.spices") },
    { key: "flowers", label: t("categories.flowers") },
    { key: "cashCrops", label: t("categories.cashCrops") },
    { key: "oilSeeds", label: t("categories.oilSeeds") },
    { key: "pulses", label: t("categories.pulses") },
    { key: "plantationCrops", label: t("categories.plantationCrops") },
  ];

  return (
    <section
       className="w-full mx-auto max-w-6xl px-4"
       //sticky position 
      // className="w-full mx-auto max-w-6xl px-4 sticky top-[var(--header-h)] z-[1100] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ marginTop: "calc(var(--header-h) + 12px)", marginBottom: "8px" }}
      aria-label="Crop categories"
    >
      <div role="tablist" className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => {
              const next = active === tab.key ? null : tab.key;
              setActive(next);
              if (onSelectCategory) {
                onSelectCategory(tab.key as CategoryKey);
              }
            }}
            className={`px-4 py-2 rounded-full border transition bg-white hover:bg-[var(--farm-sky)]/60 ${
              active === tab.key ? "border-[var(--farm-leaf)] text-[var(--farm-green)]" : "border-black/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}