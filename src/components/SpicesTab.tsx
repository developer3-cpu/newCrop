"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type SpiceKey = "coriander" | "Cumin" | "garlic" | "ginger" | "DryChilli" | "turmeric";

const SPICES: { key: SpiceKey; src: string; bg: string; hoverBg: string }[] = [
  { key: "coriander", src: withBase("/spices/coriander.png"), bg: "bg-[#EAFBF0]", hoverBg: "hover:bg-[#D6F5E3]" },
  { key: "Cumin", src: withBase("/spices/cumin seeds.png"), bg: "bg-[#FFF7E6]", hoverBg: "hover:bg-[#FFEFD3]" },
  { key: "garlic", src: withBase("/spices/garlic.png"), bg: "bg-[#FFF3F1]", hoverBg: "hover:bg-[#FFEAE8]" },
  { key: "ginger", src: withBase("/spices/ginger.png"), bg: "bg-[#FFF7E1]", hoverBg: "hover:bg-[#FFEFCC]" },
  { key: "DryChilli", src: withBase("/spices/red chilli.png"), bg: "bg-[#FFE6EC]", hoverBg: "hover:bg-[#FFDDE4]" },
  { key: "turmeric", src: withBase("/spices/turmeric.png"), bg: "bg-[#FFF7E1]", hoverBg: "hover:bg-[#FFEFD3]" },
];

export default function SpicesTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {SPICES.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "spices");
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
                href={`/report?spice=${item.key}`}
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
