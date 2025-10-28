"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type FlowerKey = "marigold" | "rose" | "chrysanthemum";

const labelFor = (key: FlowerKey) => {
  switch (key) {
    case "marigold":
      return "Marigold";
    case "rose":
      return "Rose";
    case "chrysanthemum":
      return "Chrysanthemum";
  }
};

const FLOWERS: { key: FlowerKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "marigold", src: withBase("/flowers/marigold.png"), bg: "bg-[#FFF1D6]", hoverBg: "group-hover:bg-[#FFE7C2]" },
  { key: "rose", src: withBase("/flowers/rose.png"), bg: "bg-[#FFE6EC]", hoverBg: "group-hover:bg-[#FFDDE4]" },
  { key: "chrysanthemum", src: withBase("/flowers/chrysanthemum.png"), bg: "bg-[#E8F5E9]", hoverBg: "group-hover:bg-[#C8E6C9]" }  
];

export default function FlowersTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {FLOWERS.map((item, idx) => (
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