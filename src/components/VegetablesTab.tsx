"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type VegKey =
  | "tomato"
  | "potato"
  | "okra"
  | "brinjal"
  | "cabbage"
  | "cauliflower"
  | "capsicum"
  | "cucumber"
  | "onion"
  | "greenChilli"
  | "greenPea";

const VEGETABLES: { key: VegKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "tomato", src: withBase("/vegitables/Tomato.png"), bg: "bg-[#FFE3E3]", hoverBg: "hover:bg-[#fccaca]" },
  { key: "potato", src: withBase("/vegitables/Potato.png"), bg: "bg-[#F6F1E7]", hoverBg: "hover:bg-[#f5e7ce]" },
  { key: "okra", src: withBase("/vegitables/okra.png"), bg: "bg-[#EAFBF0]", hoverBg: "hover:bg-[#c8f7dc]" },
  { key: "brinjal", src: withBase("/vegitables/brinjal.png"), bg: "bg-[#F3E9FF]", hoverBg: "hover:bg-[#EDE0FF]" },
  { key: "cabbage", src: withBase("/vegitables/cabbage.png"), bg: "bg-[#E9F7EF]", hoverBg: "hover:bg-[#b8dec8]" },
  { key: "cauliflower", src: withBase("/vegitables/calliflower.png"), bg: "bg-[#FFF7E6]", hoverBg: "hover:bg-[#FFEFD3]" },
  { key: "capsicum", src: withBase("/vegitables/capcicum.png"), bg: "bg-[#EAFBF0]", hoverBg: "hover:bg-[#b8ffb8]" },
  { key: "cucumber", src: withBase("/vegitables/cucumber.png"), bg: "bg-[#E8FFF2]", hoverBg: "hover:bg-[#bbf2da]" },
  { key: "onion", src: withBase("/vegitables/Onion.png"), bg: "bg-[#FFE6EC]", hoverBg: "hover:bg-[#FFDDE4]" },
  { key: "greenChilli", src: withBase("/vegitables/green chilli.png"), bg: "bg-[#EAFBF0]", hoverBg: "hover:bg-[#E2F5EA]" },
  { key: "greenPea", src: withBase("/vegitables/green pea.png"), bg: "bg-[#E9FBEA]", hoverBg: "hover:bg-[#E2F6E4]" },
];

export default function VegetablesTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {VEGETABLES.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "vegetables");
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
                href={`/report?vegetable=${item.key}`}
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
