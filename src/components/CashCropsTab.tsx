"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type CashCropKey = "cotton" | "sugarcane" | "ratoonSugarcane";

const labelFor = (key: CashCropKey) => {
  switch (key) {
    case "cotton":
      return "Cotton";
    case "sugarcane":
      return "Sugarcane";
    case "ratoonSugarcane":
      return "Ratoon Sugarcane";
  }
};

const CASH_CROPS: { key: CashCropKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "cotton", src: withBase("/cash crops/Cotton.png"), bg: "bg-[#F2F8FF]", hoverBg: "group-hover:bg-[#E9F4FF]" },
  { key: "sugarcane", src: withBase("/cash crops/Sugarcane.png"), bg: "bg-[#E6FFE6]", hoverBg: "group-hover:bg-[#D9FFD9]" },
  { key: "ratoonSugarcane", src: withBase("/cash crops/Ratoon Sugarcane.png"), bg: "bg-[#E6FFF2]", hoverBg: "group-hover:bg-[#D9FFF0]" },
];

export default function CashCropsTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CASH_CROPS.map((item, idx) => (
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