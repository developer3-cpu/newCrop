"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
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
  const router = useRouter();
  const [animatingKey, setAnimatingKey] = useState<string | null>(null);

  const cards = useMemo(
    () =>
      PLANTATION_CROPS.map((p, idx) => ({
        ...p,
        id: p.key,
        name: t(`cropNames.${p.key}`),
        attrs: { image: p.src, accent: p.bg },
        index: idx,
      })),
    [t]
  );

  const isPlantationKey = (v: string): v is PlantationKey =>
    ["coffee", "tea", "rubber", "coconut"].includes(v as PlantationKey);

  const handleNavigate = (card: (typeof cards)[number]) => {
    try {
      if (!card || !isPlantationKey(card.key) || !card.name) {
        console.warn("Invalid plantation crop data:", card);
        router.push(`/report?category=plantationCrops`);
        return;
      }
      try {
        sessionStorage.setItem("report:activeCategory", "plantationCrops");
        sessionStorage.setItem("ui:tablistVisible", "true");
      } catch {}

      setAnimatingKey(card.key);
      const params = new URLSearchParams({
        category: "plantationCrops",
        plantation: card.key,
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