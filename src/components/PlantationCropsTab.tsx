"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type PlantationKey = "coffee" | "tea" | "rubber" | "coconut";

const labelFor = (key: PlantationKey) => {
  switch (key) {
    case "coffee":
      return "Coffee";
    case "tea":
      return "Tea";
    case "rubber":
      return "Rubber";
    case "coconut":
      return "Coconut";
  }
};

const PLANTATION_CROPS: { key: PlantationKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "coffee", src: withBase("/plantation crops/Coffee.png"), bg: "bg-[#EAF4FF]", hoverBg: "group-hover:bg-[#E2EEFF]" },
  { key: "tea", src: withBase("/plantation crops/Tea.png"), bg: "bg-[#E6FFF2]", hoverBg: "group-hover:bg-[#D8FFE9]" },
  { key: "rubber", src: withBase("/plantation crops/Rubber.png"), bg: "bg-[#FFF6E5]", hoverBg: "group-hover:bg-[#FFEFD6]" },
  { key: "coconut", src: withBase("/plantation crops/Coconut.png"), bg: "bg-[#FFF7E6]", hoverBg: "group-hover:bg-[#FFEFD3]" },
];

export default function PlantationCropsTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PLANTATION_CROPS.map((item, idx) => (
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