"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type GrainKey = "Rice" | "Wheat" | "Maize" | "Bajra";

const GRAINS: { key: GrainKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "Rice", src: withBase("/grains/Rice.png"), bg: "bg-[#F2F8E9]", hoverBg: "group-hover:bg-[#E5F3D6]" },
  { key: "Wheat", src: withBase("/grains/Wheat.png"), bg: "bg-[#FFF7D6]", hoverBg: "group-hover:bg-[#FFF0BD]" },
  { key: "Maize", src: withBase("/grains/Maize.png"), bg: "bg-[#EAF4FF]", hoverBg: "group-hover:bg-[#DDEEFF]" },
  { key: "Bajra", src: withBase("/grains/Bajra.png"), bg: "bg-[#EAFBF0]", hoverBg: "group-hover:bg-[#D6F5E3]" },
];

export default function GrainsTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {GRAINS.map((item, idx) => (
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