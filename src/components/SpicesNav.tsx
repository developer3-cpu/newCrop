"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type SpiceItem = { key: string; src: string };

type SpicesNavProps = {
  spices: SpiceItem[];
  hrefMode?: "hash" | "report";
};

const SpicesNav = forwardRef<HTMLDivElement, SpicesNavProps>(function SpicesNav(
  { spices, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.spices")} ref={ref as any}>
      <div className="fruit-list">
        {spices.map((s) => {
          const href = hrefMode === "report" ? `/report?spice=${s.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={s.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={s.src} alt={t(`cropNames.${s.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${s.key}`)}</span>
            </Link>
          ) : (
            <a key={s.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={s.src} alt={t(`cropNames.${s.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${s.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default SpicesNav;