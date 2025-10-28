"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";

type PlantationItem = { key: string; src: string };

type PlantationCropsNavProps = {
  plantationCrops: PlantationItem[];
  hrefMode?: "hash" | "report";
};

const PlantationCropsNav = forwardRef<HTMLDivElement, PlantationCropsNavProps>(function PlantationCropsNav(
  { plantationCrops, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.plantationCrops")} ref={ref as any}>
      <div className="fruit-list">
        {plantationCrops.map((pc) => {
          const href = hrefMode === "report" ? `/report?plantationCrop=${pc.key}#intro` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={pc.key} className="fruit-link" href={href} prefetch={false}>
              <Image className="fruit-img" src={pc.src} alt={t(`cropNames.${pc.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${pc.key}`)}</span>
            </Link>
          ) : (
            <a key={pc.key} className="fruit-link" href={href}>
              <Image className="fruit-img" src={pc.src} alt={t(`cropNames.${pc.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${pc.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});

export default PlantationCropsNav;