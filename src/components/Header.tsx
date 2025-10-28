"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;
// for without stick export default function Header() {
export default function Header({ fixed = false }: { fixed?: boolean }) {
  const { t, languages, setLanguage, language } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    // for without sticky <header className="w-full sticky top-0 z-30 bg-[var(--farm-sky)]/80 backdrop-blur bento">
    <header
      id="app-header"
      className={`${fixed ? 'fixed z-50' : 'sticky z-30'} w-full top-0 bg-white/90 backdrop-blur border-b border-black/10`}
    >
      <div className="w-full px-0 py-3 grid grid-cols-[auto_1fr_auto] items-center">
        <div className="justify-self-start pl-2">
          <Image src={withBase('/logo.svg')} alt="Jain logo" width={120} height={100} />
        </div>
        
        <div className="justify-self-center text-center">
          <span className="text-2xl md:text-3xl font-semibold text-[var(--farm-green)]">
            {t('portalName')}
          </span>
        </div>
    
        <div className="relative justify-self-end pr-2">
          <button
            aria-label={t('language')}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-full px-3 py-2 bg-white shadow-sm hover:shadow-md border border-black/10"
          >
            <Image src={withBase('/globe.svg')} alt="Select language" width={18} height={18} />
            <span className="hidden sm:inline text-sm text-gray-700">
              {languages.find((l) => l.code === language)?.name}
            </span>
          </button>

          {open && (
            <div
              role="menu"
              aria-label="Language menu"
              className="absolute right-0 mt-2 w-[320px] sm:w-[420px] p-3 grid grid-cols-3 gap-2 bg-white rounded-xl border border-black/10 shadow-sm"
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  role="menuitem"
                  onClick={() => {
                    setLanguage(l.code);
                    setOpen(false);
                  }}
                  className="text-sm rounded-lg px-3 py-2 border border-black/10 hover:bg-[var(--farm-sky)]/60"
                >
                  {l.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}