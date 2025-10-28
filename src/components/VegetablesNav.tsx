"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type VegItem = { key: string; src: string };

type VegetablesNavProps = {
  vegetables: VegItem[];
  hrefMode?: "hash" | "report"; // hash: #intro on current page, report: /report#intro
};

const VegetablesNav = forwardRef<HTMLDivElement, VegetablesNavProps>(function VegetablesNav(
  { vegetables, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.vegetables")} ref={ref}>
      {/* <h3 className="nav-title">{t("categories.vegetables")}</h3> */}
      <div className="fruit-list">
        {vegetables.map((v) => {
          const href = hrefMode === "report" ? `/report?vegetable=${v.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={v.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={v.src} alt={t(`cropNames.${v.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${v.key}`)}</span>
            </Link>
          ) : (
            <a key={v.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={v.src} alt={t(`cropNames.${v.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${v.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default VegetablesNav;
