"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
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
  const router = useRouter();
  const [animatingKey, setAnimatingKey] = useState<string | null>(null);

  const cards = useMemo(
    () =>
      GRAINS.map((g, idx) => ({
        ...g,
        id: g.key,
        name: t(`cropNames.${g.key}`),
        attrs: { image: g.src, accent: g.bg },
        index: idx,
      })),
    [t]
  );

  const isGrainKey = (v: string): v is GrainKey =>
    ["Rice", "Wheat", "Maize", "Bajra"].includes(v as GrainKey);

  const handleNavigate = (card: (typeof cards)[number]) => {
    try {
      if (!card || !isGrainKey(card.key) || !card.name) {
        console.warn("Invalid grain card data:", card);
        router.push(`/report?category=grains`);
        return;
      }
      try {
        sessionStorage.setItem("report:activeCategory", "grains");
        sessionStorage.setItem("ui:tablistVisible", "true");
      } catch {}

      setAnimatingKey(card.key);
      const params = new URLSearchParams({
        category: "grains",
        grain: card.key,
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