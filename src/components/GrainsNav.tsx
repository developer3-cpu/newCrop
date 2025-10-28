"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type GrainItem = { key: string; src: string };

type GrainsNavProps = {
  grains: GrainItem[];
  hrefMode?: "hash" | "report"; // hash: #intro on current page, report: /report#intro
};

const GrainsNav = forwardRef<HTMLDivElement, GrainsNavProps>(function GrainsNav(
  { grains, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.grains")} ref={ref as any}>
      <div className="fruit-list">
        {grains.map((g) => {
          const href = hrefMode === "report" ? `/report?grain=${g.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={g.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={g.src} alt={t(`cropNames.${g.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${g.key}`)}</span>
            </Link>
          ) : (
            <a key={g.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={g.src} alt={t(`cropNames.${g.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${g.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default GrainsNav;