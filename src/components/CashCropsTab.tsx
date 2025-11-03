"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
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
  const router = useRouter();
  const [animatingKey, setAnimatingKey] = useState<string | null>(null);

  const cards = useMemo(
    () =>
      CASH_CROPS.map((c, idx) => ({
        ...c,
        id: c.key,
        name: t(`cropNames.${c.key}`),
        attrs: { image: c.src, accent: c.bg },
        index: idx,
      })),
    [t]
  );

  const isCashCropKey = (v: string): v is CashCropKey =>
    ["cotton", "sugarcane", "ratoonSugarcane"].includes(v as CashCropKey);

  const handleNavigate = (card: (typeof cards)[number]) => {
    try {
      if (!card || !isCashCropKey(card.key) || !card.name) {
        console.warn("Invalid cash crop card data:", card);
        router.push(`/report?category=cashCrops`);
        return;
      }
      try {
        sessionStorage.setItem("report:activeCategory", "cashCrops");
        sessionStorage.setItem("ui:tablistVisible", "true");
      } catch {}

      setAnimatingKey(card.key);
      const params = new URLSearchParams({
        category: "cashCrops",
        cashcrop: card.key,
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