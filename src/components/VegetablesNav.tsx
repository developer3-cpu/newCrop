"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = (key: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      sessionStorage.setItem("report:activeCategory", "vegetables");
      sessionStorage.setItem("ui:tablistVisible", "true");
    } catch {}

    const hash = "#intro";
    if (hrefMode === "report") {
      router.push(`/report?vegetable=${key}`);
    } else {
      const header = document.getElementById("app-header") as HTMLElement | null;
      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
        (header?.offsetHeight || 0);
      const target = document.querySelector<HTMLElement>(hash);
      if (target) {
        const section = target.closest<HTMLElement>(".section") || target;
        const firstDetails = section.querySelector("details") as HTMLDetailsElement | null;
        if (firstDetails) firstDetails.open = true;
        const top = section.getBoundingClientRect().top + window.scrollY - headerH - 12;
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const supportsSmooth = (document.documentElement as any).style.scrollBehavior !== undefined;
        if (supportsSmooth && !prefersReduced) {
          window.scrollTo({ top, behavior: "smooth" });
        } else {
          window.scrollTo({ top });
        }
        const cleanUrl = `${window.location.pathname}${window.location.search}`;
        history.replaceState(null, "", cleanUrl);
      }
    }
  };
  return (
    <aside className="fruit-nav top-nav" aria-label={t("categories.vegetables")} ref={ref}>
      {/* <h3 className="nav-title">{t("categories.vegetables")}</h3> */}
      <div className="fruit-list">
        {vegetables.map((v) => {
          const href = hrefMode === "report" ? `/report?vegetable=${v.key}` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={v.key} className="fruit-link" href={href} prefetch={false} data-clean-nav="true" onClick={handleClick(v.key)}>
              <Image className="fruit-img" src={v.src} alt={t(`cropNames.${v.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${v.key}`)}</span>
            </Link>
          ) : (
            <a key={v.key} className="fruit-link" href={href} data-clean-nav="true" onClick={handleClick(v.key)}>
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
