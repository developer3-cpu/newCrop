"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type OilSeedKey = "castor" | "mustard" | "sesame" | "groundnut" | "soyabeen";

const OIL_SEEDS: { key: OilSeedKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "castor", src: withBase("/Oil seeds/Castor.png"), bg: "bg-[#EAF4FF]", hoverBg: "hover:bg-[#DDEEFF]" },
  { key: "mustard", src: withBase("/Oil seeds/Mustard.png"), bg: "bg-[#FFF4CC]", hoverBg: "hover:bg-[#FFEBA6]" },
  { key: "sesame", src: withBase("/Oil seeds/Sesame.png"), bg: "bg-[#FFF9D6]", hoverBg: "hover:bg-[#FFF2B3]" },
  { key: "groundnut", src: withBase("/Oil seeds/groundnut.png"), bg: "bg-[#FFEFD9]", hoverBg: "hover:bg-[#FFE4BE]" },
  { key: "soyabeen", src: withBase("/Oil seeds/soyabeen.png"), bg: "bg-[#F2F8E9]", hoverBg: "hover:bg-[#E5F3D6]" },
];

export default function OilseedsTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {OIL_SEEDS.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "oilSeeds");
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
                href={`/report?oilseed=${item.key}`}
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
