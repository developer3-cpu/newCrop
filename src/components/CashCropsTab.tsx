"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type CashCropKey = "cotton" | "sugarcane" | "ratoonSugarcane";

const CASH_CROPS: { key: CashCropKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "cotton", src: withBase("/cash crops/Cotton.png"), bg: "bg-[#F2F8FF]", hoverBg: "hover:bg-[#E9F4FF]" },
  { key: "sugarcane", src: withBase("/cash crops/Sugarcane.png"), bg: "bg-[#E6FFE6]", hoverBg: "hover:bg-[#D9FFD9]" },
  { key: "ratoonSugarcane", src: withBase("/cash crops/Ratoon Sugarcane.png"), bg: "bg-[#E6FFF2]", hoverBg: "hover:bg-[#D9FFF0]" },
];

export default function CashCropsTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {CASH_CROPS.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "cashCrops");
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
                href={`/report?cashcrop=${item.key}`}
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
