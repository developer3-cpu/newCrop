"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { useI18n } from "@/i18n/I18nContext";
import Header from "./Header";
import ReportTabs from "./ReportTabs";
import FruitNav from "./FruitNav";
import VegetablesNav from "./VegetablesNav";
import GrainsNav from "./GrainsNav";
import SpicesNav from "./SpicesNav";
import FlowersNav from "./FlowersNav";
import CashCropsNav from "./CashCropsNav";
import OilseedsNav from "./OilseedsNav";
import PulsesNav from "./PulsesNav";
import PlantationCropsNav from "./PlantationCropsNav";

// Lazy-load banana content sections to provide loading states
const Hero = lazy(() => import("@/components/banana crops/Hero"));
const GrowthStages = lazy(() => import("@/components/banana crops/GrowthStages"));
const BestPractices = lazy(() => import("@/components/banana crops/BestPractices"));
const Videos = lazy(() => import("@/components/banana crops/Videos"));
const PestDiseases = lazy(() => import("@/components/banana crops/PestDiseases"));
const GovernmentSchemes = lazy(() => import("@/components/banana crops/GovernmentSchemes"));
const Blog = lazy(() => import("@/components/banana crops/Blog"));

type TabKey =
  | "fruits"
  | "vegetables"
  | "grains"
  | "spices"
  | "flowers"
  | "cashCrops"
  | "oilSeeds"
  | "pulses"
  | "plantationCrops";

export type BananaOneProps = {
  initialCategory?: TabKey;
  initialFruit?: string;
};

export default function BananaOne({ initialCategory = "fruits", initialFruit = "bananaOne" }: BananaOneProps) {
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBase = (p: string) => `${BASE}${p}`;
  const { t } = useI18n();

  const [category, setCategory] = useState<TabKey>(initialCategory);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<
    "growth-stages" | "best-practices" | "videos" | "pest-diseases" | "government-schemes" | "blog"
  >("growth-stages");
  const [isSwitching, setIsSwitching] = useState(false);
  const [modeStatus, setModeStatus] = useState<string | null>(null);
  const tabsFocusRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const toTopRef = useRef<HTMLButtonElement | null>(null);

  type FruitKey =
    | "mango"
    | "banana"
    | "bananaOne"
    | "apple"
    | "grapes"
    | "guava"
    | "lemon"
    | "watermelon"
    | "muskmelon"
    | "papaya"
    | "custardApple"
    | "dragonFruit"
    | "strawberry";

  const fruits: { key: FruitKey; src: string }[] = [
    { key: "banana", src: withBase("/Fruits/banana.png") },
    { key: "bananaOne", src: withBase("/Fruits/banana.png") },
    { key: "mango", src: withBase("/Fruits/mango.png") },
    { key: "apple", src: withBase("/Fruits/apple.png") },
    { key: "grapes", src: withBase("/Fruits/grapes.png") },
    { key: "guava", src: withBase("/Fruits/guava.png") },
    { key: "lemon", src: withBase("/Fruits/lemon.png") },
    { key: "watermelon", src: withBase("/Fruits/watermelon.png") },
    { key: "muskmelon", src: withBase("/Fruits/muskmelon.png") },
    { key: "papaya", src: withBase("/Fruits/payaya.png") },
    { key: "custardApple", src: withBase("/Fruits/custurdapple.png") },
    { key: "dragonFruit", src: withBase("/Fruits/dragan fruit.png") },
    { key: "strawberry", src: withBase("/Fruits/stawberry.png") },
  ];

  type VegKey =
    | "tomato"
    | "potato"
    | "okra"
    | "brinjal"
    | "cabbage"
    | "cauliflower"
    | "capsicum"
    | "cucumber"
    | "onion"
    | "greenChilli"
    | "greenPea";
  const vegetables: { key: VegKey; src: string }[] = [
    { key: "tomato", src: withBase("/vegitables/Tomato.png") },
    { key: "potato", src: withBase("/vegitables/Potato.png") },
    { key: "okra", src: withBase("/vegitables/okra.png") },
    { key: "brinjal", src: withBase("/vegitables/brinjal.png") },
    { key: "cabbage", src: withBase("/vegitables/cabbage.png") },
    { key: "cauliflower", src: withBase("/vegitables/calliflower.png") },
    { key: "capsicum", src: withBase("/vegitables/capcicum.png") },
    { key: "cucumber", src: withBase("/vegitables/cucumber.png") },
    { key: "onion", src: withBase("/vegitables/Onion.png") },
    { key: "greenChilli", src: withBase("/vegitables/green chilli.png") },
    { key: "greenPea", src: withBase("/vegitables/green pea.png") },
  ];

  type GrainKey = "Rice" | "Wheat" | "Maize" | "Bajra";
  const grains: { key: GrainKey; src: string }[] = [
    { key: "Rice", src: withBase("/grains/Rice.png") },
    { key: "Wheat", src: withBase("/grains/Wheat.png") },
    { key: "Maize", src: withBase("/grains/Maize.png") },
    { key: "Bajra", src: withBase("/grains/Bajra.png") },
  ];

  type SpiceKey = "coriander" | "Cumin" | "garlic" | "ginger" | "DryChilli" | "turmeric";
  const spices: { key: SpiceKey; src: string }[] = [
    { key: "coriander", src: withBase("/spices/coriander.png") },
    { key: "Cumin", src: withBase("/spices/cumin seeds.png") },
    { key: "garlic", src: withBase("/spices/garlic.png") },
    { key: "ginger", src: withBase("/spices/ginger.png") },
    { key: "DryChilli", src: withBase("/spices/red chilli.png") },
    { key: "turmeric", src: withBase("/spices/turmeric.png") },
  ];

  type FlowerKey = "marigold" | "rose" | "chrysanthemum";
  const flowers: { key: FlowerKey; src: string }[] = [
    { key: "marigold", src: withBase("/flowers/marigold.png") },
    { key: "rose", src: withBase("/flowers/rose.png") },
    { key: "chrysanthemum", src: withBase("/flowers/chrysanthemum.png") },
  ];

  type CashCropKey = "cotton" | "sugarcane" | "ratoonSugarcane";
  const cashCrops: { key: CashCropKey; src: string }[] = [
    { key: "cotton", src: withBase("/cash crops/Cotton.png") },
    { key: "sugarcane", src: withBase("/cash crops/Sugarcane.png") },
    { key: "ratoonSugarcane", src: withBase("/cash crops/Ratoon Sugarcane.png") },
  ];

  type OilSeedKey = "castor" | "mustard" | "sesame" | "groundnut" | "soyabeen";
  const oilseeds: { key: OilSeedKey; src: string }[] = [
    { key: "castor", src: withBase("/Oil seeds/Castor.png") },
    { key: "mustard", src: withBase("/Oil seeds/Mustard.png") },
    { key: "sesame", src: withBase("/Oil seeds/Sesame.png") },
    { key: "groundnut", src: withBase("/Oil seeds/groundnut.png") },
    { key: "soyabeen", src: withBase("/Oil seeds/soyabeen.png") },
  ];

  type PulseKey = "bengalGram" | "blackGram" | "greenGram" | "lentil" | "redGram";
  const pulses: { key: PulseKey; src: string }[] = [
    { key: "bengalGram", src: withBase("/pulses/Bengal Gram.png") },
    { key: "blackGram", src: withBase("/pulses/Black Gram.png") },
    { key: "greenGram", src: withBase("/pulses/Green Gram.png") },
    { key: "lentil", src: withBase("/pulses/Lentil.png") },
    { key: "redGram", src: withBase("/pulses/Red Gram.png") },
  ];

  type PlantationKey = "coffee" | "tea" | "rubber" | "coconut";
  const plantationCrops: { key: PlantationKey; src: string }[] = [
    { key: "coffee", src: withBase("/plantation crops/Coffee.png") },
    { key: "tea", src: withBase("/plantation crops/Tea.png") },
    { key: "rubber", src: withBase("/plantation crops/Rubber.png") },
    { key: "coconut", src: withBase("/plantation crops/Coconut.png") },
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    const root = rootRef.current;
    const nav = navRef.current;
    const sideNav = sideNavRef.current;
    const header = document.getElementById("app-header") as HTMLElement | null;
    const toTop = toTopRef.current as HTMLButtonElement | null;
    const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
    if (!root || !nav || !toTop) return () => {};

    const allowedHashes = new Set([
      "#growth-stages",
      "#best-practices",
      "#videos",
      "#pest-diseases",
      "#government-schemes",
      "#blog",
    ]);
    const currentHash = window.location.hash || "";
    if (allowedHashes.has(currentHash)) {
      setActiveSection(currentHash.slice(1) as any);
    } else {
      try {
        history.replaceState(null, "", "#growth-stages");
      } catch {}
      setActiveSection("growth-stages");
    }

    const sections = Array.from(root.querySelectorAll<HTMLElement>(".section"));
    const navLinks = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
    const sideLinks = Array.from(sideNav?.querySelectorAll<HTMLAnchorElement>("a") || []);

    const linkClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const selector = a.getAttribute("href") || "";
      if (!selector.startsWith("#")) return; // allow real navigations
      // Handle in-page section switching for banana content
      if (allowedHashes.has(selector)) {
        e.preventDefault();
        if (searchInput && searchInput.value.trim().length) {
          searchInput.value = "";
          sections.forEach((sec) => (sec.style.display = ""));
        }
        setIsSwitching(true);
        setActiveSection(selector.slice(1) as any);
        try {
          history.replaceState(null, "", selector);
        } catch {}

        const target = root.querySelector<HTMLElement>(selector);
        if (!target) {
          console.warn("BananaOne: target section not found for selector", selector);
          setIsSwitching(false);
          return;
        }
        const section = target.closest<HTMLElement>(".subsection") || target.closest<HTMLElement>(".section") || target;
        const headerH =
          parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
          (header?.offsetHeight || 0);
        const targetTop = section.getBoundingClientRect().top + window.scrollY - headerH - 12;

        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const supportsSmooth = (document.documentElement as any).style.scrollBehavior !== undefined;
        if (supportsSmooth && !prefersReduced) {
          window.scrollTo({ top: targetTop, behavior: "smooth" });
        } else {
          const start = window.scrollY;
          const duration = 300;
          const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
          let startTime: number | null = null;
          const step = (ts: number) => {
            if (startTime === null) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = easeInOutQuad(progress);
            window.scrollTo(0, start + (targetTop - start) * eased);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        section.classList.add("section-focus");
        setTimeout(() => section.classList.remove("section-focus"), 800);
        setTimeout(() => setIsSwitching(false), 220);
        return;
      }

      // Fallback: allow scrolling to other hash targets that are not controlled tabs
      e.preventDefault();
      const target = root.querySelector<HTMLElement>(selector);
      if (!target) return;
      const section = target.closest<HTMLElement>(".section") || target;
      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
        (header?.offsetHeight || 0);
      const top = section.getBoundingClientRect().top + window.scrollY - headerH - 12;
      window.scrollTo({ top, behavior: "smooth" });
      section.classList.add("section-focus");
      setTimeout(() => section.classList.remove("section-focus"), 800);
      history.replaceState(null, "", selector);
    };
    navLinks.forEach((l) => l.addEventListener("click", linkClick));
    sideLinks.forEach((l) => l.addEventListener("click", linkClick));

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      toTop.style.display = y > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    toTop.addEventListener("click", onTop);

    const setHeaderHeight = () => {
      const h = header?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    const onPop = () => {
      const h = window.location.hash || "";
      if (allowedHashes.has(h)) {
        setActiveSection(h.slice(1) as any);
      }
    };
    window.addEventListener("popstate", onPop);

    // Track visible subsection to update active nav state
    const contentRoot = root.querySelector("#banana-section-content");
    const observed = Array.from(root.querySelectorAll<HTMLElement>(".subsection"));
    if (contentRoot && observed.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((en) => en.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (visible && visible.target.id && allowedHashes.has(`#${visible.target.id}`)) {
            setActiveSection(visible.target.id as any);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -50% 0px", // focus around the viewport center/top
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );
      observed.forEach((el) => observer.observe(el));
      // Initial sync with hash: scroll to target if present and exists
      const initialHash = window.location.hash;
      if (initialHash && allowedHashes.has(initialHash)) {
        const target = root.querySelector<HTMLElement>(initialHash);
        if (target) {
          const headerH =
            parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
            (header?.offsetHeight || 0);
          const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setActiveSection(initialHash.slice(1) as any);
      }
      // Clean up observer
      (nav as any).__observer = observer;
    }

    return () => {
      navLinks.forEach((l) => l.removeEventListener("click", linkClick));
      sideLinks.forEach((l) => l.removeEventListener("click", linkClick));
      window.removeEventListener("scroll", onScroll);
      toTop.removeEventListener("click", onTop);
      window.removeEventListener("resize", setHeaderHeight);
      window.removeEventListener("popstate", onPop);
      const ob = (nav as any).__observer as IntersectionObserver | undefined;
      if (ob) ob.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div>
        <Header fixed />
      </div>
      <ReportTabs initialActive={category} onSelectCategory={(k) => {
        setCategory(k);
        try {
          sessionStorage.setItem("report:activeCategory", k);
          sessionStorage.setItem("ui:tablistVisible", "true");
        } catch {}
        // setModeStatus(`${t(`categories.${k}`)} selected`);
        setTimeout(() => setModeStatus(null), 1500);
        requestAnimationFrame(() => {
          try { tabsFocusRef.current?.focus(); } catch {}
        });
      }} />
      <div ref={tabsFocusRef} tabIndex={-1} role="region" aria-label={t('report.navTitle') || 'Crop categories'} style={{ outline: 'none' }}>
        {modeStatus ? (
          <div role="status" aria-live="polite" className="text-xs" style={{ color: 'var(--primary-ink)', margin: '4px 0' }}>
            {modeStatus}
          </div>
        ) : null}
      </div>
      <div className="layout" ref={rootRef}>
        {category === "fruits" ? (
          <FruitNav ref={sideNavRef} fruits={fruits} hrefMode="report" />
        ) : category === "vegetables" ? (
          <VegetablesNav ref={sideNavRef} vegetables={vegetables} hrefMode="report" />
        ) : category === "grains" ? (
          <GrainsNav ref={sideNavRef} grains={grains} hrefMode="report" />
        ) : category === "spices" ? (
          <SpicesNav ref={sideNavRef} spices={spices} hrefMode="report" />
        ) : category === "flowers" ? (
          <FlowersNav ref={sideNavRef} flowers={flowers} hrefMode="report" />
        ) : category === "cashCrops" ? (
          <CashCropsNav ref={sideNavRef} cashCrops={cashCrops} hrefMode="report" />
        ) : category === "oilSeeds" ? (
          <OilseedsNav ref={sideNavRef} oilseeds={oilseeds} hrefMode="report" />
        ) : category === "pulses" ? (
          <PulsesNav ref={sideNavRef} pulses={pulses} hrefMode="report" />
        ) : category === "plantationCrops" ? (
          <PlantationCropsNav ref={sideNavRef} plantationCrops={plantationCrops} hrefMode="report" />
        ) : null}

        <nav className="top-nav" aria-label="Primary" ref={navRef as any} style={{width:"237px"}} role="navigation">
          <a href="#growth-stages" aria-current={activeSection === "growth-stages" ? "true" : undefined} className={activeSection === "growth-stages" ? "active" : undefined}>{"Crop Growth Stages"}</a>
          <a href="#best-practices" aria-current={activeSection === "best-practices" ? "true" : undefined} className={activeSection === "best-practices" ? "active" : undefined}>{"Best Practices"}</a>
          <a href="#videos" aria-current={activeSection === "videos" ? "true" : undefined} className={activeSection === "videos" ? "active" : undefined}>{"Videos"}</a>
          <a href="#pest-diseases" aria-current={activeSection === "pest-diseases" ? "true" : undefined} className={activeSection === "pest-diseases" ? "active" : undefined}>{"Pest & Diseases"}</a>
          <a href="#government-schemes" aria-current={activeSection === "government-schemes" ? "true" : undefined} className={activeSection === "government-schemes" ? "active" : undefined}>{"Government Schemes"}</a>
          <a href="#blog" aria-current={activeSection === "blog" ? "true" : undefined} className={activeSection === "blog" ? "active" : undefined}>{"Farming Blog & Resources"}</a>
        </nav>

        <main className="content">
          <section id="crop-guide" className="section">
            <div className={`banana-adapter ${mounted ? "mounted" : ""}`}>
              <ErrorBoundary>
                <Suspense fallback={<div className="loading">{t("report.misc.loading") || "Loading..."}</div>}>
                  <Hero />
                  <div id="banana-section-content" className={`content-panel ${isSwitching ? "switching" : ""}`} aria-live="polite" aria-busy={isSwitching}>
                    {isLoading ? (
                      <div className="loading">{t("report.misc.loading") || "Loading..."}</div>
                    ) : (
                      <>
                        <div id="growth-stages" className="subsection">
                          <GrowthStages />
                        </div>
                        <div id="best-practices" className="subsection">
                          <BestPractices />
                        </div>
                        <div id="videos" className="subsection">
                          <Videos />
                        </div>
                        <div id="pest-diseases" className="subsection">
                          <PestDiseases />
                        </div>
                        <div id="government-schemes" className="subsection">
                          <GovernmentSchemes />
                        </div>
                        <div id="blog" className="subsection">
                          <Blog />
                        </div>
                      </>
                    )}
                  </div>
                </Suspense>
              </ErrorBoundary>
            </div>
          </section>
        </main>
      </div>

      <button
        id="toTop"
        className="to-top"
        aria-label={t("report.misc.backToTop")}
        ref={toTopRef}
        style={{ backgroundColor: "#48f7c8" }}
      >
        ↑
      </button>

      <style jsx global>{`
        :root {
          --bg: #f7faf8;
          --card: #ffffff;
          --text: #1b1f23;
          --muted: #57606a;
          --primary: #1f8a4c;
          --primary-ink: #0c5a2e;
          --border: #e5e7eb;
          --header-h: 0px;
        }
        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: var(--text); background: var(--bg); }

        /* Layout: fruit icons column, topic nav column, main content */
        .layout { display: grid; grid-template-columns: fit-content(110px) 280px 1fr; gap: 1rem; width: 100vw; margin: 0 auto; padding: calc(var(--header-h) + -3.8rem) 1rem 0 1rem; align-items: start; }

        /* Sticky side panes styled as cards to match reference image */
        .top-nav { position: sticky; top: var(--header-h); height: calc(100vh - var(--header-h)); overflow: auto; padding: 0.75rem 0.75rem; background: var(--card); border: 1px solid var(--border); border-radius: 12px; }
        .fruit-nav { padding: 0.5rem; }
        .nav-title { margin: 0 0 0.5rem 0; font-size: 0.95rem; color: var(--muted); padding: 0 0.25rem; }
        .top-nav a { display: block; padding: 0.5rem 0.75rem; border-radius: 8px; text-decoration: none; color: var(--text); }
        .top-nav a:hover { background: #f4f6f8; }
        .top-nav a.active { background: #eef7f1; color: var(--primary-ink); border-left: 3px solid var(--primary); }

        /* Fruits panel */
        .fruit-list { display: grid; grid-template-columns: 1fr; gap: 0.35rem; }
        .fruit-link { display: grid; grid-template-columns: 48px 1fr; align-items: center; gap: 0.5rem; padding: 0.35rem 0.5rem; border-radius: 8px; text-decoration: none; color: var(--text); }
        .fruit-link:hover { background: #f4f6f8; }
        .fruit-img { width: 48px; height: 48px; border-radius: 999px; object-fit: cover; border: 1px solid var(--border); background: #fff; }
        .fruit-label { font-size: 0.9rem; color: var(--text); } 

        /* Content column and cards */
        .content { grid-column: 3; max-width: 1174px; margin: 0rem 0rem -1rem -2rem; }
        .section { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1rem; margin: 0 0 1rem 0; box-shadow: 0 2px 6px rgba(0,0,0,0.05); transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease; scroll-margin-top: 45px; }
        /* section focus style */ 
        /*.section:hover, .section:focus-within { border-color: var(--border); box-shadow: 0 6px 16px rgba(0,0,0,0.10); transform: translateY(-1px); }*/
       
        .section h2 { margin: 0 0 0.5rem 0; font-size: 1.25rem; }
        .section p { color: var(--muted); }

        /* Banana adapter: mount transition & spacing */
        .banana-adapter { opacity: 0; transform: translateY(6px); transition: opacity 240ms ease, transform 240ms ease; flex-direction: column; gap: 24px; }
        .banana-adapter.mounted { opacity: 1; transform: translateY(0); }

        /* Content switching fade */
        .content-panel { opacity: 1; transform: translateY(0); transition: opacity 220ms ease, transform 220ms ease; }
        .content-panel.switching { opacity: 0.5; transform: translateY(4px); }
        .subsection { margin-bottom: 24px; scroll-margin-top: calc(var(--header-h) + 16px); }

        /* Scrollbars for sticky panes (Firefox + WebKit) */
        html { scrollbar-width: thin; scrollbar-color: var(--primary-ink) rgba(0,0,0,0.08); }
        *::-webkit-scrollbar { width: 10px; height: 10px; }
        *::-webkit-scrollbar-track { background: rgba(253, 149, 149, 0.04); }
        *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--primary) 0%, var(--primary-ink) 100%); border-radius: 12px; border: 2px solid var(--card); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25); }
        *::-webkit-scrollbar-thumb:hover { background: var(--primary-ink); }
        .top-nav { scrollbar-width: thin; scrollbar-color: #fafffc transparent; }
        .top-nav::-webkit-scrollbar { width: 8px; }
        .top-nav::-webkit-scrollbar-track { background: transparent; }
        .top-nav::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--primary) 0%, var(--primary-ink) 100%); border-radius: 10px; border: 2px solid var(--card); }
        .top-nav::-webkit-scrollbar-thumb:hover { background: var(--primary-ink); }

        /* Back to top */
        .to-top { position: fixed; right: 1rem; bottom: 1rem; width: 2.5rem; height: 2.5rem; border-radius: 50%; border: 1px solid var(--border); background: var(--card); color: var(--primary-ink); box-shadow: 0 2px 6px rgba(0,0,0,0.12); cursor: pointer; display: none; }
        .to-top:hover { border-color: var(--primary); }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .layout { grid-template-columns: fit-content(180px) 1fr; }
          .content { grid-column: auto; }
        }
        @media (max-width: 768px) {
          .section { padding: 0.75rem; }
          .layout { grid-template-columns: 1fr; }
          .top-nav { position: static; height: auto; margin-bottom: 0.75rem; }
          .fruit-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

// Guard PropTypes usage to client runtime to avoid SSR reference errors
if (typeof window !== "undefined") {
  BananaOne.propTypes = {
    initialCategory: PropTypes.oneOf(["fruits", "vegetables", "grains", "spices", "flowers", "cashCrops", "oilSeeds", "pulses", "plantationCrops"]),
    initialFruit: PropTypes.string,
  } as any;
}

// Simple error boundary to catch rendering issues in lazy subcomponents
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.error("BananaOne error:", error);
  }
  render() {
    if (this.state.hasError) {
      return <div role="alert">Something went wrong loading banana content.</div>;
    }
    return this.props.children as any;
  }
}