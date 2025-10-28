"use client";

import Image from 'next/image';
import { useI18n } from '@/i18n/I18nContext';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBase = (p: string) => `${BASE}${p}`;

type PulseKey = 'bengalGram' | 'blackGram' | 'greenGram' | 'lentil' | 'redGram';

const labelFor = (key: PulseKey) => {
  switch (key) {
    case 'bengalGram':
      return 'Bengal Gram';
    case 'blackGram':
      return 'Black Gram';
    case 'greenGram':
      return 'Green Gram';
    case 'lentil':
      return 'Lentil';
    case 'redGram':
      return 'Red Gram';
  }
};

const PULSES: { key: PulseKey; src: string; bg: string; hoverBg: string }[] = [
  { key: 'bengalGram', src: withBase('/pulses/Bengal Gram.png'), bg: 'bg-[#FFF6E8]', hoverBg: 'group-hover:bg-[#FFEFD9]' },
  { key: 'blackGram', src: withBase('/pulses/Black Gram.png'), bg: 'bg-[#FFF3F1]', hoverBg: 'group-hover:bg-[#FFEAE8]' },
  { key: 'greenGram', src: withBase('/pulses/Green Gram.png'), bg: 'bg-[#F3FFF8]', hoverBg: 'group-hover:bg-[#EAFBF0]' },
  { key: 'lentil', src: withBase('/pulses/Lentil.png'), bg: 'bg-[#EAF4FF]', hoverBg: 'group-hover:bg-[#E2EEFF]' },
  { key: 'redGram', src: withBase('/pulses/Red Gram.png'), bg: 'bg-[#FFF1F1]', hoverBg: 'group-hover:bg-[#FFE6E6]' },
];

export default function PulsesTab() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PULSES.map((item, idx) => (
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