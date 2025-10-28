"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type FlowerItem = { key: string; src: string };

type FlowersNavProps = {
  flowers: FlowerItem[];
  hrefMode?: "hash" | "report";
};

const FlowersNav = forwardRef<HTMLDivElement, FlowersNavProps>(function FlowersNav(
  { flowers, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.flowers")} ref={ref as any}>
      <div className="fruit-list">
        {flowers.map((f) => {
          const href = hrefMode === "report" ? `/report?flower=${f.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={f.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={f.src} alt={t(`cropNames.${f.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${f.key}`)}</span>
            </Link>
          ) : (
            <a key={f.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={f.src} alt={t(`cropNames.${f.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${f.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default FlowersNav;