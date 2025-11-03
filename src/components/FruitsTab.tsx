"use client";

import Link from "next/link";
import Image from "next/image";
import FruitNav from "./FruitNav";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type FruitKey =
  | "mango"
  | "banana"
  | "apple"
  | "grapes"
  | "guava"
  | "lemon"
  | "watermelon"
  | "muskmelon"
  | "papaya"
  | "custardApple"
  | "dragonFruit"
  | "strawberry";

const FRUITS: { key: FruitKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "banana", src: withBase("/Fruits/banana.png"), bg: "bg-[#FFFFD8]", hoverBg: "group-hover:bg-[#F9F9B9]" },
  { key: "mango", src: withBase("/Fruits/mango.png"), bg: "bg-[#FFF6DA]", hoverBg: "group-hover:bg-[#FFF0C2]" },
  { key: "apple", src: withBase("/Fruits/apple.png"), bg: "bg-[#FFF3F1]", hoverBg: "group-hover:bg-[#FFEAE8]" },
  { key: "grapes", src: withBase("/Fruits/grapes.png"), bg: "bg-[#F2F8FF]", hoverBg: "group-hover:bg-[#EAF4FF]" },
  { key: "guava", src: withBase("/Fruits/guava.png"), bg: "bg-[#F3FFF8]", hoverBg: "group-hover:bg-[#EAFBF0]" },
  { key: "lemon", src: withBase("/Fruits/lemon.png"), bg: "bg-[#FFFBEB]", hoverBg: "group-hover:bg-[#FFF7D6]" },
  { key: "watermelon", src: withBase("/Fruits/watermelon.png"), bg: "bg-[#F3FBF7]", hoverBg: "group-hover:bg-[#E9F7EF]" },
  { key: "muskmelon", src: withBase("/Fruits/muskmelon.png"), bg: "bg-[#FFFBEB]", hoverBg: "group-hover:bg-[#FFF7D6]" },
  { key: "papaya", src: withBase("/Fruits/payaya.png"), bg: "bg-[#FFF6E8]", hoverBg: "group-hover:bg-[#FFEFD9]" },
  { key: "custardApple", src: withBase("/Fruits/custurdapple.png"), bg: "bg-[#F3FFF8]", hoverBg: "group-hover:bg-[#EAFBF0]" },
  { key: "dragonFruit", src: withBase("/Fruits/dragan fruit.png"), bg: "bg-[#FFF3F1]", hoverBg: "group-hover:bg-[#FFEAE8]" },
  { key: "strawberry", src: withBase("/Fruits/stawberry.png"), bg: "bg-[#FFF3F1]", hoverBg: "group-hover:bg-[#FFEAE8]" },
];

export default function FruitsTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      {/* Category-specific nav linking to report pages */}
      {/* <FruitNav fruits={FRUITS.map(({ key, src }) => ({ key, src }))} hrefMode="report" /> */}

      {/* Grid of fruit cards with direct links to report */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {FRUITS.map((item) => {
          const handleClick = () => {
            try {
              // Ensure tablist remains visible when navigating from homepage
              sessionStorage.setItem("ui:tablistVisible", "true");
              // Set the active category to fruits for proper navigation state
              sessionStorage.setItem("report:activeCategory", "fruits");
            } catch {}
          };

          return (
            <Link
              key={item.key}
              href={`/report?fruit=${item.key}`}
              prefetch={false}
              className={`bento p-4 group flex flex-col items-center gap-3`}
              aria-label={t(`cropNames.${item.key}`)}
              onClick={handleClick}
              data-clean-nav="true"
            >
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-black/10 shadow-sm transition-colors duration-300 ease-out ${item.bg} ${item.hoverBg}`}
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
          </Link>
          );
        })}
      </div>
    </div>
  );
}