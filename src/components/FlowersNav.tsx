"use client";

import React, { forwardRef } from "react";
import { useI18n } from "@/i18n/I18nContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = (key: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      sessionStorage.setItem("report:activeCategory", "flowers");
      sessionStorage.setItem("ui:tablistVisible", "true");
    } catch {}
    const hash = "#intro";
    if (hrefMode === "report") {
      router.push(`/report?flower=${key}`);
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
    <aside className="fruit-nav top-nav" aria-label={t("categories.flowers")} ref={ref as any}>
      <div className="fruit-list">
        {flowers.map((f) => {
          const href = hrefMode === "report" ? `/report?flower=${f.key}` : `#intro`;
          return hrefMode === "report" ? (
            <Link key={f.key} className="fruit-link" href={href} prefetch={false} data-clean-nav="true" onClick={handleClick(f.key)}>
              <Image className="fruit-img" src={f.src} alt={t(`cropNames.${f.key}`)} width={48} height={48} />
              <span className="fruit-label">{t(`cropNames.${f.key}`)}</span>
            </Link>
          ) : (
            <a key={f.key} className="fruit-link" href={href} data-clean-nav="true" onClick={handleClick(f.key)}>
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