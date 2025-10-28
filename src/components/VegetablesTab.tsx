"use client";

import Image from "next/image";
import VegetablesNav from "./VegetablesNav";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type VegKey =
  | "tomato"
  | "potato"
  | "okra"
  | "brinjal"
  | "cabbage"
  | "cauliflower"
  | "capsicum"
  | "cucumber"
  | "onion"
  | "greenChilli"
  | "greenPea";

const VEGETABLES: { key: VegKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "tomato", src: withBase("/vegitables/Tomato.png"), bg: "bg-[#FFE3E3]", hoverBg: "group-hover:bg-[#fccaca]" },
  { key: "potato", src: withBase("/vegitables/Potato.png"), bg: "bg-[#F6F1E7]", hoverBg: "group-hover:bg-[#f5e7ce]" },
  { key: "okra", src: withBase("/vegitables/okra.png"), bg: "bg-[#EAFBF0]", hoverBg: "group-hover:bg-[#c8f7dc]" },
  { key: "brinjal", src: withBase("/vegitables/brinjal.png"), bg: "bg-[#F3E9FF]", hoverBg: "group-hover:bg-[#EDE0FF]" },
  { key: "cabbage", src: withBase("/vegitables/cabbage.png"), bg: "bg-[#E9F7EF]", hoverBg: "group-hover:bg-[#b8dec8]" },
  { key: "cauliflower", src: withBase("/vegitables/calliflower.png"), bg: "bg-[#FFF7E6]", hoverBg: "group-hover:bg-[#FFEFD3]" },
  { key: "capsicum", src: withBase("/vegitables/capcicum.png"), bg: "bg-[#EAFBF0]", hoverBg: "group-hover:bg-[#b8ffb8]" },
  { key: "cucumber", src: withBase("/vegitables/cucumber.png"), bg: "bg-[#E8FFF2]", hoverBg: "group-hover:bg-[#bbf2da]" },
  { key: "onion", src: withBase("/vegitables/Onion.png"), bg: "bg-[#FFE6EC]", hoverBg: "group-hover:bg-[#FFDDE4]" },
  { key: "greenChilli", src: withBase("/vegitables/green chilli.png"), bg: "bg-[#EAFBF0]", hoverBg: "group-hover:bg-[#E2F5EA]" },
  { key: "greenPea", src: withBase("/vegitables/green pea.png"), bg: "bg-[#E9FBEA]", hoverBg: "group-hover:bg-[#E2F6E4]" },
];

export default function VegetablesTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      {/* Category-specific nav linking to report pages */}
      {/* <VegetablesNav vegetables={VEGETABLES.map(({ key, src }) => ({ key, src }))} hrefMode="report" /> */}

      {/* Grid of vegetable cards with hover effects (non-link for distinct behavior) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {VEGETABLES.map((item, idx) => (
          <article key={idx} className={`bento p-4 group ${item.bg} flex flex-col items-center gap-3`}>
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-black/10 shadow-sm transition-colors duration-300 ease-in-out ${item.bg} ${item.hoverBg}`}
            >
              <Image
                src={item.src}
                alt={t(`cropNames.${item.key}`)}
                width={112}
                height={112}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-800 text-center">
              {t(`cropNames.${item.key}`)}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}