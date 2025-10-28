"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type SpiceKey = "coriander" | "Cumin" | "garlic" | "ginger" | "DryChilli" | "turmeric";

const SPICES: { key: SpiceKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "coriander", src: withBase("/spices/coriander.png"), bg: "bg-[#EAFBF0]", hoverBg: "group-hover:bg-[#D6F5E3]" },
  { key: "Cumin", src: withBase("/spices/cumin seeds.png"), bg: "bg-[#FFF7E6]", hoverBg: "group-hover:bg-[#FFEFD3]" },
  { key: "garlic", src: withBase("/spices/garlic.png"), bg: "bg-[#FFF3F1]", hoverBg: "group-hover:bg-[#FFEAE8]" },
  { key: "ginger", src: withBase("/spices/ginger.png"), bg: "bg-[#FFF7E1]", hoverBg: "group-hover:bg-[#FFEFCC]" },
  { key: "DryChilli", src: withBase("/spices/red chilli.png"), bg: "bg-[#FFE6EC]", hoverBg: "group-hover:bg-[#FFDDE4]" },
  { key: "turmeric", src: withBase("/spices/turmeric.png"), bg: "bg-[#FFF7E1]", hoverBg: "group-hover:bg-[#FFEFD3]" },
];

function labelFor(key: SpiceKey): string {
  switch (key) {
    case "coriander":
      return "Coriander";
    case "Cumin":
      return "Cumin";
    case "garlic":
      return "Garlic";
    case "ginger":
      return "Ginger";
    case "DryChilli":
      return "Dry Chilli";
    case "turmeric":
      return "Turmeric";
    default:
      return String(key);
  }
}

export default function SpicesTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SPICES.map((item, idx) => (
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