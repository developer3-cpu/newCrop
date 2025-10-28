"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type CashCropItem = { key: string; src: string };

type CashCropsNavProps = {
  cashCrops: CashCropItem[];
  hrefMode?: "hash" | "report";
};

const CashCropsNav = forwardRef<HTMLDivElement, CashCropsNavProps>(function CashCropsNav(
  { cashCrops, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.cashCrops")} ref={ref as any}>
      <div className="fruit-list">
        {cashCrops.map((c) => {
          const href = hrefMode === "report" ? `/report?cashCrop=${c.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={c.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={c.src} alt={t(`cropNames.${c.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${c.key}`)}</span>
            </Link>
          ) : (
            <a key={c.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={c.src} alt={t(`cropNames.${c.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${c.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default CashCropsNav;