"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

type PulseKey = "bengalGram" | "blackGram" | "greenGram" | "lentil" | "redGram";

const PULSES: { key: PulseKey; src: string; bg: string; hoverBg: string }[] = [
  {
    key: "bengalGram",
    src: withBase("/pulses/Bengal Gram.png"),
    bg: "bg-[#FFF6E8]",
    hoverBg: "hover:bg-[#FFEFD9]",
  },
  {
    key: "blackGram",
    src: withBase("/pulses/Black Gram.png"),
    bg: "bg-[#FFF3F1]",
    hoverBg: "hover:bg-[#FFEAE8]",
  },
  {
    key: "greenGram",
    src: withBase("/pulses/Green Gram.png"),
    bg: "bg-[#F3FFF8]",
    hoverBg: "hover:bg-[#EAFBF0]",
  },
  {
    key: "lentil",
    src: withBase("/pulses/Lentil.png"),
    bg: "bg-[#EAF4FF]",
    hoverBg: "hover:bg-[#E2EEFF]",
  },
  {
    key: "redGram",
    src: withBase("/pulses/Red Gram.png"),
    bg: "bg-[#FFF1F1]",
    hoverBg: "hover:bg-[#FFE6E6]",
  },
];

export default function PulsesTab() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {PULSES.map((item) => {
          const handleClick = () => {
            try {
              sessionStorage.setItem("ui:tablistVisible", "true");
              sessionStorage.setItem("report:activeCategory", "pulses");
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
                href={`/report?pulse=${item.key}`}
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
