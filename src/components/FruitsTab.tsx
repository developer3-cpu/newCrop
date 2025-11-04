"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  { key: "banana", src: withBase("/Fruits/banana.png"), bg: "bg-[#FFFFD8]", hoverBg: "hover:bg-[#F9F9B9]" },
  { key: "mango", src: withBase("/Fruits/mango.png"), bg: "bg-[#FFF6DA]", hoverBg: "hover:bg-[#FFF0C2]" },
  { key: "apple", src: withBase("/Fruits/apple.png"), bg: "bg-[#FFF3F1]", hoverBg: "hover:bg-[#FFEAE8]" },
  { key: "grapes", src: withBase("/Fruits/grapes.png"), bg: "bg-[#F2F8FF]", hoverBg: "hover:bg-[#EAF4FF]" },
  { key: "guava", src: withBase("/Fruits/guava.png"), bg: "bg-[#F3FFF8]", hoverBg: "hover:bg-[#EAFBF0]" },
  { key: "lemon", src: withBase("/Fruits/lemon.png"), bg: "bg-[#FFFBEB]", hoverBg: "hover:bg-[#FFF7D6]" },
  { key: "watermelon", src: withBase("/Fruits/watermelon.png"), bg: "bg-[#F3FBF7]", hoverBg: "hover:bg-[#E9F7EF]" },
  { key: "muskmelon", src: withBase("/Fruits/muskmelon.png"), bg: "bg-[#FFFBEB]", hoverBg: "hover:bg-[#FFF7D6]" },
  { key: "papaya", src: withBase("/Fruits/payaya.png"), bg: "bg-[#FFF6E8]", hoverBg: "hover:bg-[#FFEFD9]" },
  { key: "custardApple", src: withBase("/Fruits/custurdapple.png"), bg: "bg-[#F3FFF8]", hoverBg: "hover:bg-[#EAFBF0]" },
  { key: "dragonFruit", src: withBase("/Fruits/dragan fruit.png"), bg: "bg-[#FFF3F1]", hoverBg: "hover:bg-[#FFEAE8]" },
  { key: "strawberry", src: withBase("/Fruits/stawberry.png"), bg: "bg-[#FFF3F1]", hoverBg: "hover:bg-[#FFEAE8]" },
];

export default function FruitsTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {FRUITS.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "fruits");
            } catch {}
          };

          return (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link
                href={`/report?fruit=${item.key}`}
                prefetch={false}
                onClick={handleClick}
                className="flex flex-col items-center gap-3 text-center"
                aria-label={t(`cropNames.${item.key}`)}
              >
                <motion.div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-transparent shadow-sm transition-all duration-300 ease-out ${item.bg} ${item.hoverBg}`}
                  whileHover={{
                    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                    rotate: [0, 1, -1, 0],
                  }}
                >
                  <Image
                    src={item.src}
                    alt={t(`cropNames.${item.key}`)}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
                <span className="text-sm font-medium text-gray-800">
                  {t(`cropNames.${item.key}`)}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
