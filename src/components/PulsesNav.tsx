"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type PulseItem = { key: string; src: string };

type PulsesNavProps = {
  pulses: PulseItem[];
  hrefMode?: "hash" | "report";
};

const PulsesNav = forwardRef<HTMLDivElement, PulsesNavProps>(function PulsesNav(
  { pulses, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.pulses")} ref={ref as any}>
      <div className="fruit-list">
        {pulses.map((p) => {
          const href = hrefMode === "report" ? `/report?pulse=${p.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={p.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={p.src} alt={t(`cropNames.${p.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${p.key}`)}</span>
            </Link>
          ) : (
            <a key={p.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={p.src} alt={t(`cropNames.${p.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${p.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default PulsesNav;