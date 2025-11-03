"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nContext";
import Header from './Header';
import ReportTabs from './ReportTabs';
import FruitNav from './FruitNav';
import VegetablesNav from './VegetablesNav';
import GrainsNav from './GrainsNav';
import SpicesNav from './SpicesNav';
import FlowersNav from './FlowersNav';
import CashCropsNav from './CashCropsNav';
import OilseedsNav from './OilseedsNav';
import PulsesNav from './PulsesNav';
import PlantationCropsNav from './PlantationCropsNav';

export default function Report() {
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBase = (p: string) => `${BASE}${p}`;
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  // const headerRef = useRef<HTMLElement | null>(null);  without sticky
  const toTopRef = useRef<HTMLButtonElement | null>(null);
  const { t } = useI18n();
  type TabKey =
    | 'fruits'
    | 'vegetables'
    | 'grains'
    | 'spices'
    | 'flowers'
    | 'cashCrops'
    | 'oilSeeds'
    | 'pulses'
    | 'plantationCrops';
  const [category, setCategory] = useState<TabKey>('fruits');
  const isCategoryKey = (v: string | null): v is TabKey => {
    return (
      v === 'fruits' ||
      v === 'vegetables' ||
      v === 'grains' ||
      v === 'spices' ||
      v === 'flowers' ||
      v === 'cashCrops' ||
      v === 'oilSeeds' ||
      v === 'pulses' ||
      v === 'plantationCrops'
    );
  };

  const handleSelectCategory = (next: TabKey) => {
    setCategory(next);
    try {
      sessionStorage.setItem("report:activeCategory", next);
      const url = new URL(window.location.href);
      url.searchParams.set('category', next);
      const newUrl = `${url.pathname}${url.searchParams.toString() ? `?${url.searchParams.toString()}` : ''}`;
      history.pushState({ category: next }, "", newUrl);
    } catch {}
  };

  // Initialize selected tab from URL (category param) and support back/forward
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const catParam = url.searchParams.get('category');
      if (isCategoryKey(catParam)) {
        setCategory(catParam);
      }
    } catch {}

    const onPop = () => {
      try {
        const url = new URL(window.location.href);
        const catParam = url.searchParams.get('category');
        if (isCategoryKey(catParam)) {
          setCategory(catParam);
        }
      } catch {}
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Local union to avoid referencing dictionaries at type level
  type FruitKey =
    | 'mango'
    | 'banana'
    | 'bananaOne'
    | 'apple'
    | 'grapes'
    | 'guava'
    | 'lemon'
    | 'watermelon'
    | 'muskmelon'
    | 'papaya'
    | 'custardApple'
    | 'dragonFruit'
    | 'strawberry';

  const fruits: { key: FruitKey; src: string }[] = [
    { key: 'banana', src: withBase('/Fruits/banana.png') },
    { key: 'bananaOne', src: withBase('/Fruits/banana.png') },
    { key: 'mango', src: withBase('/Fruits/mango.png') },
    { key: 'apple', src: withBase('/Fruits/apple.png') },
    { key: 'grapes', src: withBase('/Fruits/grapes.png') },
    { key: 'guava', src: withBase('/Fruits/guava.png') },
    { key: 'lemon', src: withBase('/Fruits/lemon.png') },
    { key: 'watermelon', src: withBase('/Fruits/watermelon.png') },
    { key: 'muskmelon', src: withBase('/Fruits/muskmelon.png') },
    { key: 'papaya', src: withBase('/Fruits/payaya.png') },
    { key: 'custardApple', src: withBase('/Fruits/custurdapple.png') },
    { key: 'dragonFruit', src: withBase('/Fruits/dragan fruit.png') },
    { key: 'strawberry', src: withBase('/Fruits/stawberry.png') },
  ];

  // Vegetables list mirrors assets in /public/vegitables
  type VegKey =
    | 'tomato'
    | 'potato'
    | 'okra'
    | 'brinjal'
    | 'cabbage'
    | 'cauliflower'
    | 'capsicum'
    | 'cucumber'
    | 'onion'
    | 'greenChilli'
    | 'greenPea';

  const vegetables: { key: VegKey; src: string }[] = [
    { key: 'tomato', src: withBase('/vegitables/Tomato.png') },
    { key: 'potato', src: withBase('/vegitables/Potato.png') },
    { key: 'okra', src: withBase('/vegitables/okra.png') },
    { key: 'brinjal', src: withBase('/vegitables/brinjal.png') },
    { key: 'cabbage', src: withBase('/vegitables/cabbage.png') },
    { key: 'cauliflower', src: withBase('/vegitables/calliflower.png') },
    { key: 'capsicum', src: withBase('/vegitables/capcicum.png') },
    { key: 'cucumber', src: withBase('/vegitables/cucumber.png') },
    { key: 'onion', src: withBase('/vegitables/Onion.png') },
    { key: 'greenChilli', src: withBase('/vegitables/green chilli.png') },
    { key: 'greenPea', src: withBase('/vegitables/green pea.png') },
  ];

  // Grains
  type GrainKey = 'Rice' | 'Wheat' | 'Maize' | 'Bajra';
  const grains: { key: GrainKey; src: string }[] = [
    { key: 'Rice', src: withBase('/grains/Rice.png') },
    { key: 'Wheat', src: withBase('/grains/Wheat.png') },
    { key: 'Maize', src: withBase('/grains/Maize.png') },
    { key: 'Bajra', src: withBase('/grains/Bajra.png') },
  ];

  // Spices
  type SpiceKey = 'coriander' | 'Cumin' | 'garlic' | 'ginger' | 'DryChilli' | 'turmeric';
  const spices: { key: SpiceKey; src: string }[] = [
    { key: 'coriander', src: withBase('/spices/coriander.png') },
    { key: 'Cumin', src: withBase('/spices/cumin seeds.png') },
    { key: 'garlic', src: withBase('/spices/garlic.png') },
    { key: 'ginger', src: withBase('/spices/ginger.png') },
    { key: 'DryChilli', src: withBase('/spices/red chilli.png') },
    { key: 'turmeric', src: withBase('/spices/turmeric.png') },
  ];

  // Flowers
  type FlowerKey = 'marigold' | 'rose' | 'chrysanthemum';
  const flowers: { key: FlowerKey; src: string }[] = [
    { key: 'marigold', src: withBase('/flowers/marigold.png') },
    { key: 'rose', src: withBase('/flowers/rose.png') },
    { key: 'chrysanthemum', src: withBase('/flowers/chrysanthemum.png') },
  ];

  // Cash crops
  type CashCropKey = 'cotton' | 'sugarcane' | 'ratoonSugarcane';
  const cashCrops: { key: CashCropKey; src: string }[] = [
    { key: 'cotton', src: withBase('/cash crops/Cotton.png') },
    { key: 'sugarcane', src: withBase('/cash crops/Sugarcane.png') },
    { key: 'ratoonSugarcane', src: withBase('/cash crops/Ratoon Sugarcane.png') },
  ];

  // Oil seeds
  type OilSeedKey = 'castor' | 'mustard' | 'sesame' | 'groundnut' | 'soyabeen';
  const oilseeds: { key: OilSeedKey; src: string }[] = [
    { key: 'castor', src: withBase('/Oil seeds/Castor.png') },
    { key: 'mustard', src: withBase('/Oil seeds/Mustard.png') },
    { key: 'sesame', src: withBase('/Oil seeds/Sesame.png') },
    { key: 'groundnut', src: withBase('/Oil seeds/groundnut.png') },
    { key: 'soyabeen', src: withBase('/Oil seeds/soyabeen.png') },
  ];

  // Pulses
  type PulseKey = 'bengalGram' | 'blackGram' | 'greenGram' | 'lentil' | 'redGram';
  const pulses: { key: PulseKey; src: string }[] = [
    { key: 'bengalGram', src: withBase('/pulses/Bengal Gram.png') },
    { key: 'blackGram', src: withBase('/pulses/Black Gram.png') },
    { key: 'greenGram', src: withBase('/pulses/Green Gram.png') },
    { key: 'lentil', src: withBase('/pulses/Lentil.png') },
    { key: 'redGram', src: withBase('/pulses/Red Gram.png') },
  ];

  // Plantation crops
  type PlantationKey = 'coffee' | 'tea' | 'rubber' | 'coconut';
  const plantationCrops: { key: PlantationKey; src: string }[] = [
    { key: 'coffee', src: withBase('/plantation crops/Coffee.png') },
    { key: 'tea', src: withBase('/plantation crops/Tea.png') },
    { key: 'rubber', src: withBase('/plantation crops/Rubber.png') },
    { key: 'coconut', src: withBase('/plantation crops/Coconut.png') },
  ];

  useEffect(() => {
    const root = rootRef.current;
    const nav = navRef.current;
    const sideNav = sideNavRef.current;
    //const header = headerRef.current; for without sticky
    const header = document.getElementById("app-header") as HTMLElement | null;
    const toTop = toTopRef.current as HTMLButtonElement | null;
    const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
    if (!root || !nav || !toTop) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(".section"));
    const navLinks = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
    const sideLinks = Array.from(sideNav?.querySelectorAll<HTMLAnchorElement>("a") || []);

    // Restore category from previous navigation if available
    try {
      const savedCat = sessionStorage.getItem("report:activeCategory") as typeof category | null;
      if (savedCat) setCategory(savedCat);
    } catch {}

    // Nav link smooth scroll + highlight
    const linkClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      // Allow component-level clean URL handlers to take control
      if (a.dataset.cleanNav === 'true') return;
      const selector = a.getAttribute("href") || "";
      if (!selector.startsWith('#')) return; // allow real navigations
      e.preventDefault();
      const target = root.querySelector<HTMLElement>(selector);
      if (!target) return;
      const section = target.closest<HTMLElement>(".section") || target;

      // Clear search filter so the section card is visible
      if (searchInput && searchInput.value.trim().length) {
        searchInput.value = "";
        sections.forEach((sec) => (sec.style.display = ""));
      }

      // Open the first details block
      const firstDetails = section.querySelector("details") as HTMLDetailsElement | null;
      if (firstDetails) firstDetails.open = true;

      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
        (header?.offsetHeight || 0);
      const top = section.getBoundingClientRect().top + window.scrollY - headerH - 12;
      window.scrollTo({ top, behavior: "smooth" });
      section.classList.add("section-focus");
      setTimeout(() => section.classList.remove("section-focus"), 800);
      const newHash = section.id ? `#${section.id}` : selector;
      history.replaceState(null, "", newHash);
    };
    navLinks.forEach((l) => l.addEventListener("click", linkClick));
    sideLinks.forEach((l) => l.addEventListener("click", linkClick));

    // Search filter
    const onSearch = () => {
      const q = (searchInput?.value || "").trim().toLowerCase();
      sections.forEach((sec) => {
        const text = (sec.textContent || "").toLowerCase();
        sec.style.display = !q || text.includes(q) ? "" : "none";
      });
    };
    searchInput?.addEventListener("input", onSearch);

    // Scroll-to-top button
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      toTop.style.display = y > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    toTop.addEventListener("click", onTop);

    // Replace placeholder images with available variants
    const replaceCandidates = Array.from(root.querySelectorAll<HTMLImageElement>("img[data-replace-with]"));
    replaceCandidates.forEach((img) => {
      const candidate = withBase(`/images/${img.dataset.replaceWith}`);
      const tester = new Image();
      tester.onload = () => {
        img.src = candidate;
      };
      tester.src = candidate;
    });

    // Set dynamic header height CSS variable
    const setHeaderHeight = () => {
      const h = header?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    // Offset-aware initial scroll after navigation
    try {
      const requestedHash = sessionStorage.getItem("report:lastHash") || (window.location.hash || "");
      if (requestedHash && requestedHash.startsWith('#')) {
        const target = root.querySelector<HTMLElement>(requestedHash);
        if (target) {
          const section = target.closest<HTMLElement>(".section") || target;
          const firstDetails = section.querySelector("details") as HTMLDetailsElement | null;
          if (firstDetails) firstDetails.open = true;
          const headerH =
            parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
            (header?.offsetHeight || 0);
          const top = section.getBoundingClientRect().top + window.scrollY - headerH - 12;
          const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          const supportsSmooth = (document.documentElement as any).style.scrollBehavior !== undefined;
          if (supportsSmooth && !prefersReduced) {
            window.scrollTo({ top, behavior: "smooth" });
          } else {
            window.scrollTo({ top });
          }
          // Keep URL clean: remove '#intro' while preserving path and query
          try {
            const isIntro = requestedHash.toLowerCase() === '#intro';
            const cleanUrl = `${window.location.pathname}${window.location.search}`;
            history.replaceState(null, "", isIntro ? cleanUrl : requestedHash);
          } catch {}
        }
        sessionStorage.removeItem("report:lastHash");
      }
    } catch {}

    // Scrollspy
    const sectionMap = new Map<HTMLElement, HTMLAnchorElement>();
    navLinks.forEach((a) => {
      const target = root.querySelector<HTMLElement>(a.getAttribute("href")!);
      if (target) sectionMap.set(target, a);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const link = sectionMap.get(visible.target as HTMLElement);
        if (!link) return;
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      },
      {
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) + 10}px 0px -60% 0px`,
        threshold: 0.1,
      }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      navLinks.forEach((l) => l.removeEventListener("click", linkClick));
      sideLinks.forEach((l) => l.removeEventListener("click", linkClick));
      searchInput?.removeEventListener("input", onSearch);
      window.removeEventListener("scroll", onScroll);
      toTop.removeEventListener("click", onTop);
      window.removeEventListener("resize", setHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* <header className="site-header">
        <div className="brand">
          <span className="logo">
            <img src="/images/logo.svg" alt="Logo" width={24} height={24} />
          </span>
          <h1>Crop Knowledge Report</h1>
        </div>
        <div className="utilities">
          <input id="searchInput" type="search" placeholder="Search sections..." aria-label="Search sections" />
        </div>
      </header> */}
      <div>
        <Header fixed />
      </div>
      {/* Tab list below header */}
      <ReportTabs initialActive={category} onSelectCategory={handleSelectCategory} />
    
      <div className="layout" ref={rootRef}>
        {category === 'fruits' ? (
          <FruitNav ref={sideNavRef} fruits={fruits} hrefMode="report" />
        ) : category === 'vegetables' ? (
          <VegetablesNav ref={sideNavRef} vegetables={vegetables} hrefMode="report" />
        ) : category === 'grains' ? (
          <GrainsNav ref={sideNavRef} grains={grains} hrefMode="report" />
        ) : category === 'spices' ? (
          <SpicesNav ref={sideNavRef} spices={spices} hrefMode="report" />
        ) : category === 'flowers' ? (
          <FlowersNav ref={sideNavRef} flowers={flowers} hrefMode="report" />
        ) : category === 'cashCrops' ? (
          <CashCropsNav ref={sideNavRef} cashCrops={cashCrops} hrefMode="report" />
        ) : category === 'oilSeeds' ? (
          <OilseedsNav ref={sideNavRef} oilseeds={oilseeds} hrefMode="report" />
        ) : category === 'pulses' ? (
          <PulsesNav ref={sideNavRef} pulses={pulses} hrefMode="report" />
        ) : category === 'plantationCrops' ? (
          <PlantationCropsNav ref={sideNavRef} plantationCrops={plantationCrops} hrefMode="report" />
        ) : null}

        <nav className="top-nav" aria-label="Primary" ref={navRef}>
          {/* <h3 className="nav-title">{t('report.navTitle')}</h3> */}
          <a href="#crop-basics">{t('report.nav.cropBasics')}</a>
          <a href="#soil">{t('report.nav.soil')}</a>
          <a href="#climate">{t('report.nav.climate')}</a>
          <a href="#varieties">{t('report.nav.varieties')}</a>
          <a href="#seed-rate">{t('report.nav.seedRate')}</a>
          <a href="#land-prep">{t('report.nav.landPrep')}</a>
          <a href="#nutrients">{t('report.nav.nutrients')}</a>
          <a href="#irrigation">{t('report.nav.irrigation')}</a>
          <a href="#pests">{t('report.nav.pests')}</a>
          <a href="#weeds">{t('report.nav.weeds')}</a>
          <a href="#harvest">{t('report.nav.harvest')}</a>
          <a href="#post-harvest">{t('report.nav.postHarvest')}</a>
          <a href="#mandi">{t('report.nav.mandi')}</a>
          <a href="#schemes">{t('report.nav.schemes')}</a>
          <a href="#education">{t('report.nav.education')}</a>
          <a href="#feedback">{t('report.nav.feedback')}</a>
          <a href="#implinks">{t('report.nav.implinks')}</a>
        </nav>

        <main className="content">
          <section id="intro" className="section" >
            <h2>{t('report.intro.title')}</h2>
            <p>{t('report.intro.description')}</p>
          </section>

          <section id="crop-basics" className="section">
            <h2>{t('report.cropBasics.title')}</h2>
            <details open>
              <summary>{t('report.cropBasics.summary')}</summary>
              <ul>
                <li>{t('report.cropBasics.items.names')}</li>
                <li>{t('report.cropBasics.items.growthCycle')}</li>
                <li>{t('report.cropBasics.items.climate')}</li>
                <li>{t('report.cropBasics.items.calendar')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                {/* Use a placeholder that can be replaced dynamically */}
        <img src={withBase('/images/growth-stages.png')} alt={t('report.cropBasics.figcaption')} loading="lazy" />
                <figcaption>{t('report.cropBasics.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="soil" className="section">
            <h2>{t('report.soil.title')}</h2>
            <details open>
              <summary>{t('report.soil.summary')}</summary>
              <ul>
                <li>{t('report.soil.items.soilType')}</li>
                <li>{t('report.soil.items.phRange')}</li>
                <li>{t('report.soil.items.drainage')}</li>
                <li>{t('report.soil.items.tests')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/soil-ph.png')} alt={t('report.soil.figcaption')} />
                <figcaption>{t('report.soil.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="climate" className="section">
            <h2>{t('report.climate.title')}</h2>
            <details open>
              <summary>{t('report.climate.summary')}</summary>
              <ul>
                <li>{t('report.climate.items.requirements')}</li>
                <li>{t('report.climate.items.sowingTime')}</li>
                <li>{t('report.climate.items.methods')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/climate.png')} alt={t('report.climate.figcaption')} />
                <figcaption>{t('report.climate.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="varieties" className="section">
            <h2>{t('report.varieties.title')}</h2>
            <details open>
              <summary>{t('report.varieties.summary')}</summary>
              <ul>
                <li>{t('report.varieties.items.localVarieties')}</li>
                <li>{t('report.varieties.items.daysToMaturity')}</li>
                <li>{t('report.varieties.items.purityQuality')}</li>
                <li>{t('report.varieties.items.certifiedSources')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/seed.png')} alt={t('report.varieties.title')} />
              </figure>
            </div>
          </section>

          <section id="seed-rate" className="section">
            <h2>{t('report.seedRate.title')}</h2>
            <details open>
              <summary>{t('report.seedRate.summary')}</summary>
              <ul>
                <li>{t('report.seedRate.items.seedRate')}</li>
                <li>{t('report.seedRate.items.rowSpacing')}</li>
                <li>{t('report.seedRate.items.population')}</li>
                <li>{t('report.seedRate.items.depth')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/seed-space.png')} alt={t('report.seedRate.figcaption')} />
                <figcaption>{t('report.seedRate.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="land-prep" className="section">
            <h2>{t('report.landPrep.title')}</h2>
            <details open>
              <summary>{t('report.landPrep.summary')}</summary>
              <ul>
                <li>{t('report.landPrep.items.tillageOps')}</li>
                <li>{t('report.landPrep.items.levelingBeds')}</li>
                <li>{t('report.landPrep.items.smallLargeFields')}</li>
                <li>{t('report.landPrep.items.residueMgmt')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/land.png')} alt="Land preparation steps" />
                <figcaption>{t('report.landPrep.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="nutrients" className="section">
            <h2>{t('report.nutrients.title')}</h2>
            <details open>
              <summary>{t('report.nutrients.summary')}</summary>
              <ul>
                <li>{t('report.nutrients.items.macroMicro')}</li>
                <li>{t('report.nutrients.items.stageSchedule')}</li>
                <li>{t('report.nutrients.items.formulations')}</li>
                <li>{t('report.nutrients.items.soilTestAdjust')}</li>
                <li>{t('report.nutrients.items.safetyPpe')}</li>
              </ul>
            </details>
          </section>

          <section id="irrigation" className="section">
            <h2>{t('report.irrigation.title')}</h2>
            <details open>
              <summary>{t('report.irrigation.summary')}</summary>
              <ul>
                <li>{t('report.irrigation.items.criticalStages')}</li>
                <li>{t('report.irrigation.items.method')}</li>
                <li>{t('report.irrigation.items.waterNeeds')}</li>
              </ul>
            </details>
            <div className="figure-grid">
              <figure>
                <img src={withBase('/images/irrigation.png')} alt="Irrigation methods and approximate water needs" />
                <figcaption>{t('report.irrigation.figcaption')}</figcaption>
              </figure>
            </div>
          </section>

          <section id="pests" className="section">
            <h2>{t('report.pests.title')}</h2>
            <details open>
              <summary>{t('report.pests.summary')}</summary>
              <ul>
                <li>{t('report.pests.items.common')}</li>
                <li>{t('report.pests.items.lifecycle')}</li>
                <li>{t('report.pests.items.control')}</li>
                <li>{t('report.pests.items.safeChemicals')}</li>
                <li>{t('report.pests.items.protectiveMeasures')}</li>
              </ul>
            </details>
            <figure>
              <img src={withBase('/images/pest.png')} alt="Pest & Disease Management" />
              <figcaption>{t('report.pests.figcaption')}</figcaption>
            </figure>
          </section>

          <section id="weeds" className="section">
            <h2>{t('report.weeds.title')}</h2>
            <details open>
              <summary>{t('report.weeds.summary')}</summary>
              <ul>
                <li>{t('report.weeds.items.common')}</li>
                <li>{t('report.weeds.items.culturalMechanical')}</li>
                <li>{t('report.weeds.items.herbicides')}</li>
                <li>{t('report.weeds.items.prevention')}</li>
              </ul>
            </details>
            <figure>
              <img src={withBase('/images/weed.png')} alt={t('report.weeds.figcaption')} />
              <figcaption>{t('report.weeds.figcaption')}</figcaption>
            </figure>
          </section>

          <section id="harvest" className="section">
            <h2>{t('report.harvest.title')}</h2>
            <details open>
              <summary>{t('report.harvest.summary')}</summary>
              <ul>
                <li>{t('report.harvest.items.maturityIndicators')}</li>
                <li>{t('report.harvest.items.techniques')}</li>
                <li>{t('report.harvest.items.threshingDrying')}</li>
                <li>{t('report.harvest.items.expectedYield')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/harvest.png')}
                alt={t('report.harvest.figcaption')}
                width={600}
                height={400}
                loading="lazy"
              />
              <figcaption>{t('report.harvest.figcaption')}</figcaption>
            </figure>
          </section>

          <section id="post-harvest" className="section">
            <h2>{t('report.postHarvest.title')}</h2>
            <details open>
              <summary>{t('report.postHarvest.summary')}</summary>
              <ul>
                <li>{t('report.postHarvest.items.handlingCleaning')}</li>
                <li>{t('report.postHarvest.items.dryingTargets')}</li>
                <li>{t('report.postHarvest.items.storageOptions')}</li>
                <li>{t('report.postHarvest.items.preventionStorage')}</li>
                <li>{t('report.postHarvest.items.valueAdded')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/postharvest.png')}
                alt={t('report.postHarvest.title')}
                width={600}
                height={400}
                loading="lazy"
              />
            </figure>
          </section>

          <section id="mandi" className="section">
            <h2>{t('report.mandi.title')}</h2>
            <details open>
              <summary>{t('report.mandi.summary')}</summary>
              <ul>
                <li>{t('report.mandi.items.currentPrices')}</li>
                <li>{t('report.mandi.items.trends')}</li>
                <li>{t('report.mandi.items.gradingQuality')}</li>
                <li>{t('report.mandi.items.accessStrategies')}</li>
                <li>{t('report.mandi.items.transportPacking')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/Mandi.png')}
                alt={t('report.mandi.figcaption')}
                width={600}
                height={400}
                loading="lazy"
              />
              <figcaption>{t('report.mandi.figcaption')}</figcaption>
            </figure>
          </section>

          <section id="schemes" className="section">
            <h2>{t('report.schemes.title')}</h2>
            <details open>
              <summary>{t('report.schemes.summary')}</summary>
              <ul>
                <li>{t('report.schemes.items.available')}</li>
                <li>{t('report.schemes.items.regulatory')}</li>
                <li>{t('report.schemes.items.applicationLinks')}</li>
              </ul>
            </details>
          </section>

          <section id="education" className="section">
            <h2>{t('report.education.title')}</h2>
            <details open>
              <summary>{t('report.education.summary')}</summary>
              <ul>
                <li>{t('report.education.items.howToVideos')}</li>
                <li>{t('report.education.items.safeHandling')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/learn.png')}
                alt={t('report.education.title')}
                width={600}
                height={400}
                loading="lazy"
              />
            </figure>
          </section>

          <section id="feedback" className="section">
            <h2>{t('report.feedback.title')}</h2>
            <details open>
              <summary>{t('report.feedback.summary')}</summary>
              <ul>
                <li>{t('report.feedback.items.agronomistContact')}</li>
                <li>{t('report.feedback.items.blogUpdates')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/feed.png')}
                alt={t('report.feedback.title')}
                width={600}
                height={400}
                loading="lazy"
              />
            </figure>
          </section>

          <section id="implinks" className="section">
            <h2>{t('report.implinks.title')}</h2>
            <details open>
              <summary>{t('report.implinks.summary')}</summary>
              <ul>
                <li>{t('report.implinks.items.usefulLinks')}</li>
              </ul>
            </details>
            <figure>
              <NextImage
                src={withBase('/images/implinks.png')}
                alt={t('report.implinks.figcaption')}
                width={600}
                height={400}
                loading="lazy"
              />
              <figcaption>{t('report.implinks.figcaption')}</figcaption>
            </figure>
          </section>
        </main>
      </div>

      {/* <footer className="site-footer">
        <p>
          {t('report.footer.sourcePrefix')} {t('report.footer.sourceName')}
          <a href="https://cropknowledge.my.canva.site/crop-knowledge-portal" target="_blank" rel="noopener">{t('report.footer.sourceLinkText')}</a>
        </p>
      </footer> */}

      <button
        id="toTop"
        className="to-top"
        aria-label={t('report.misc.backToTop')}
        ref={toTopRef}
        style={{ backgroundColor: "#48f7c8" }}
      >
        ↑
      </button>

      {/* Global styles now come from app/report/report.css for deterministic order */}
    </div>
  );
}