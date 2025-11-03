"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type OilSeedKey = "castor" | "mustard" | "sesame" | "groundnut" | "soyabeen";

const labelFor = (key: OilSeedKey) => {
  switch (key) {
    case "castor":
      return "Castor";
    case "mustard":
      return "Mustard";
    case "sesame":
      return "Sesame";
    case "groundnut":
      return "Groundnut";
    case "soyabeen":
      return "Soyabeen";
  }
};

const OIL_SEEDS: { key: OilSeedKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "castor", src: withBase("/Oil seeds/Castor.png"), bg: "bg-[#EAF4FF]", hoverBg: "group-hover:bg-[#DDEEFF]" },
  { key: "mustard", src: withBase("/Oil seeds/Mustard.png"), bg: "bg-[#FFF4CC]", hoverBg: "group-hover:bg-[#FFEBA6]" },
  { key: "sesame", src: withBase("/Oil seeds/Sesame.png"), bg: "bg-[#FFF9D6]", hoverBg: "group-hover:bg-[#FFF2B3]" },
  { key: "groundnut", src: withBase("/Oil seeds/groundnut.png"), bg: "bg-[#FFEFD9]", hoverBg: "group-hover:bg-[#FFE4BE]" },
  { key: "soyabeen", src: withBase("/Oil seeds/soyabeen.png"), bg: "bg-[#F2F8E9]", hoverBg: "group-hover:bg-[#E5F3D6]" },
];

export default function OilseedsTab() {
  const { t } = useI18n();
  const router = useRouter();
  const [animatingKey, setAnimatingKey] = useState<string | null>(null);

  const cards = useMemo(
    () =>
      OIL_SEEDS.map((o, idx) => ({
        ...o,
        id: o.key,
        name: t(`cropNames.${o.key}`),
        attrs: { image: o.src, accent: o.bg },
        index: idx,
      })),
    [t]
  );

  const isOilSeedKey = (v: string): v is OilSeedKey =>
    ["castor", "mustard", "sesame", "groundnut", "soyabeen"].includes(v as OilSeedKey);

  const handleNavigate = (card: (typeof cards)[number]) => {
    try {
      if (!card || !isOilSeedKey(card.key) || !card.name) {
        console.warn("Invalid oilseed card data:", card);
        router.push(`/report?category=oilSeeds`);
        return;
      }
      try {
        sessionStorage.setItem("report:activeCategory", "oilSeeds");
        sessionStorage.setItem("ui:tablistVisible", "true");
      } catch {}

      setAnimatingKey(card.key);
      const params = new URLSearchParams({
        category: "oilSeeds",
        oilseed: card.key,
        id: String(card.id),
        name: card.name,
        attrs: JSON.stringify(card.attrs),
      });
      const target = `/report?${params.toString()}`;
      setTimeout(() => router.push(target), 160);
    } catch (err) {
      console.error("Navigation failed:", err);
    }
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((item) => (
          <article
            key={item.key}
            onClick={() => handleNavigate(item)}
            className={`bento p-4 group ${item.bg} flex flex-col items-center gap-3 cursor-pointer transition-all duration-200 ease-out ${
              animatingKey === item.key ? "opacity-70 scale-[0.98]" : "hover:scale-[1.02]"
            }`}
            aria-label={t(`cropNames.${item.key}`)}
          >
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