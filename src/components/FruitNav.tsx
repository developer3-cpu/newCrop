"use client";

import React, { forwardRef, useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FruitItem = { key: string; src: string };

type FruitNavProps = {
  fruits: FruitItem[];
  hrefMode?: "hash" | "report"; // hash: #fruit on current page, report: /report#fruit
};

const FruitNav = forwardRef<HTMLDivElement, FruitNavProps>(function FruitNav(
  { fruits, hrefMode = "hash" },
  ref
) {
  const { t } = useI18n();
  const router = useRouter();

  // Disabled manual prefetch to avoid aborted _rsc requests in dev tools
  useEffect(() => {}, []);
  const handleClick = (key: string, hash: string) => (e: React.MouseEvent) => {
    try {
      // Persist UI expectations across navigation
      sessionStorage.setItem("report:activeCategory", "fruits");
      // Only set lastHash when using hash-mode navigation; in report-mode we keep URL clean
      if (hrefMode !== "report") sessionStorage.setItem("report:lastHash", hash);
      sessionStorage.setItem("ui:tablistVisible", "true");
    } catch {}
  };

  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.fruits")} ref={ref as any}>
      {/* <h3 className="nav-title">{t("categories.fruits")}</h3> */}
      <div className="fruit-list">
        {fruits.map((f) => {
          const hash = f.key === "bananaOne" ? "#growth-stages" : "#intro";
          // In report mode, avoid putting hash in the URL to prevent the browser
          // from auto-jumping without accounting for sticky header/tablist.
          const href = hrefMode === "report" ? `/report?fruit=${f.key}` : hash;
          return hrefMode === "report" ? (
            <Link key={f.key} className="fruit-link" href={href} prefetch={false} onClick={handleClick(f.key, hash)} data-clean-nav="true">
              <Image className="fruit-img" src={f.src} alt={t(`cropNames.${f.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${f.key}`)}</span>
            </Link>
          ) : (
            <a key={f.key} className="fruit-link" href={href} onClick={handleClick(f.key, hash)} data-clean-nav="true">
              <Image className="fruit-img" src={f.src} alt={t(`cropNames.${f.key}`)} width={48} height={48} loading="lazy" />
              <span className="fruit-label">{t(`cropNames.${f.key}`)}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
});
export default FruitNav;