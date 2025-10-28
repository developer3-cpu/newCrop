"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type OilseedItem = { key: string; src: string };

type OilseedsNavProps = {
  oilseeds: OilseedItem[];
  hrefMode?: "hash" | "report";
};

const OilseedsNav = forwardRef<HTMLDivElement, OilseedsNavProps>(function OilseedsNav(
  { oilseeds, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.oilSeeds")} ref={ref as any}>
      <div className="fruit-list">
        {oilseeds.map((o) => {
          const href = hrefMode === "report" ? `/report?oilSeed=${o.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={o.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={o.src} alt={t(`cropNames.${o.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${o.key}`)}</span>
            </Link>
          ) : (
            <a key={o.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={o.src} alt={t(`cropNames.${o.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${o.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default OilseedsNav;