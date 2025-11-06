"use client";

import React, { useEffect, useMemo, useRef, useState, Suspense, lazy } from "react";
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
  // Inline icons for floating actions
  function BotIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <rect x="4" y="7" width="16" height="12" rx="3" strokeWidth="1.5" />
        <circle cx="9" cy="13" r="1.5" />
        <circle cx="15" cy="13" r="1.5" />
        <path d="M12 7V4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="3" r="1.5" />
      </svg>
    );
  }
  function UsersIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <circle cx="8" cy="8" r="3.5" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="3" strokeWidth="1.5" />
        <path d="M4 20c0-3 2.5-5 6-5s6 2 6 5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.5" />
        <path d="M8 3v4M16 3v4M3 10h18" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="7" y="13" width="4" height="3" />
        <rect x="13" y="13" width="4" height="3" />
      </svg>
    );
  }

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
/* 
  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string; ts: number }[]>([]);
  const [chatTyping, setChatTyping] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function smartReply(text: string) {
    const q = text.toLowerCase();
    if (q.includes("soil")) return "Optimal soil: well-drained loam, pH 6.0–7.5.";
    if (q.includes("irrigation") || q.includes("water")) return "Irrigate regularly; avoid waterlogging; use mulching to retain moisture.";
    if (q.includes("pest") || q.includes("disease")) return "Monitor weekly; practice IPM; use biocontrols where possible.";
    if (q.includes("fertilizer") || q.includes("nutrient")) return "Apply balanced NPK based on soil test; split nitrogen doses.";
    return "I can help with growth stages, best practices, pests, and schemes.";
  }

  function sendMessage() {
    const text = chatInput.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text, ts: Date.now() }]);
    setChatInput("");
    setChatTyping(true);
    try {
      setTimeout(() => {
        setMessages((m) => [...m, { from: "ai", text: smartReply(text), ts: Date.now() }]);
        setChatTyping(false);
        setSendError(null);
      }, 450);
    } catch (e) {
      setChatTyping(false);
      setSendError("Something went wrong. Please try again.");
    }
  }

  // Focus and ESC handling
  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 120);
  }, [chatOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setChatOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
*/
  // Floating actions and panel state (Chatbot, Experts, Events)
  const [activePanel, setActivePanel] = useState<null | "chatbot" | "experts" | "events">(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [chatbotAnim, setChatbotAnim] = useState('fab-ripple');
  const [expertsAnim, setExpertsAnim] = useState('fab-ripple');
  const [eventsAnim, setEventsAnim] = useState('fab-ripple');

  useEffect(() => {
    const handleResize = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const chatTimer = setTimeout(() => setChatbotAnim('fab-pulse'), 8000);
    const expertTimer = setTimeout(() => setExpertsAnim('fab-pulse'), 10000);
    const eventTimer = setTimeout(() => setEventsAnim('fab-pulse'), 12000);
    return () => {
      clearTimeout(chatTimer);
      clearTimeout(expertTimer);
      clearTimeout(eventTimer);
    };
  }, []);

  useEffect(() => {
    if (activePanel === "chatbot") setTimeout(() => inputRef.current?.focus(), 120);
  }, [activePanel]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActivePanel(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Chatbot state and helpers
  const [chatInput, setChatInput] = useState("");
  const [chatTyping, setChatTyping] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string; ts: number }[]>([
    { from: "ai", text: "Hi! I'm your farming assistant. Ask me anything.", ts: Date.now() },
  ]);
  const [sendError, setSendError] = useState<string | null>(null);

  function smartReply(text: string) {
    const q = text.toLowerCase();
    if (q.includes("soil")) return "Optimal soil: well-drained loam, pH 6.0–7.5.";
    if (q.includes("irrigation") || q.includes("water")) return "Irrigate regularly; avoid waterlogging; use mulching to retain moisture.";
    if (q.includes("pest") || q.includes("disease")) return "Monitor weekly; practice IPM; use biocontrols where possible.";
    if (q.includes("fertilizer") || q.includes("nutrient")) return "Apply balanced NPK based on soil test; split nitrogen doses.";
    return "I can help with growth stages, best practices, pests, and schemes.";
  }

  function sendMessage() {
    const text = chatInput.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text, ts: Date.now() }]);
    setChatInput("");
    setChatTyping(true);
    try {
      setTimeout(() => {
        setMessages((m) => [...m, { from: "ai", text: smartReply(text), ts: Date.now() }]);
        setChatTyping(false);
        setSendError(null);
      }, 450);
    } catch (e) {
      setChatTyping(false);
      setSendError("Something went wrong. Please try again.");
    }
  }

  // Experts and Events data
  const experts = useMemo(
    () => [
      { name: "Dr. Meera Rao", specialty: "Soil Science", rating: 4.8, online: true, phone: "+91-98765-43210" },
      { name: "Arun Patel", specialty: "Irrigation", rating: 4.6, online: false, phone: "+91-91234-56789" },
      { name: "S. Kulkarni", specialty: "Crop Protection", rating: 4.7, online: true, phone: "+91-99887-77665" },
    ],
    []
  );
  const [registeredIds, setRegisteredIds] = useState<number[]>([]);
  const events = useMemo(
    () => [
      { id: 1, title: "Banana IPM Workshop", when: "Nov 28, 10:00–12:00", spots: 12 },
      { id: 2, title: "Efficient Drip Irrigation", when: "Dec 02, 14:00–16:00", spots: 20 },
      { id: 3, title: "Soil Health & pH Basics", when: "Dec 10, 11:00–12:30", spots: 18 },
    ],
    []
  );
  const eventsCount = events.length;
  function toggleRegister(id: number) {
    setRegisteredIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }
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
      document.documentElement.style.setProperty("--header-h", "63px");
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

      {/* Floating Action Buttons */}
      <div className="fixed right-4 sm:right-8 flex flex-col space-y-2 sm:space-y-4 z-30" style={{ bottom: "6rem" }}>
        {/* AI Chatbot Button */}
        <button
          onClick={() => setActivePanel(activePanel === "chatbot" ? null : "chatbot")}
          aria-label="Open AI Assistant"
          className={`${chatbotAnim} fab-animated bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 sm:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition group relative`}
        >
          <BotIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">AI Assistant</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </button>

        {/* Talk to Experts Button */}
        <button
          onClick={() => setActivePanel(activePanel === "experts" ? null : "experts")}
          aria-label="Open expert consultation"
          className={`${expertsAnim === 'fab-ripple' ? 'fab-ripple-purple' : 'fab-pulse'} fab-animated bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 sm:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition group relative`}
        >
          <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">Talk to Experts</span>
          {experts.some((e) => e.online) && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          )}
        </button>

        {/* Events Button */}
        <button
          onClick={() => setActivePanel(activePanel === "events" ? null : "events")}
          aria-label="Open upcoming events"
          className={`${eventsAnim === 'fab-ripple' ? 'fab-ripple-orange' : 'fab-pulse'} fab-animated bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 sm:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition group relative`}
        >
          <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">Upcoming Events</span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">{eventsCount}</div>
        </button>
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

{/* AI Chatbot floating button above the top arrow 
      <button
        onClick={() => setChatOpen((v) => !v)}
        aria-label="Open AI Assistant"
       className="fixed right-4 sm:right-3 bottom-28 sm:bottom-21 z-30 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 sm:p-3 min-w-[44px] min-h-[44px] rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110"
      >
        <BotIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {chatOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" aria-label="Close chatbot overlay" onClick={() => setChatOpen(false)} />
          <div
            className="absolute right-2 sm:right-8 w-[calc(100vw-1rem)] sm:w-[92vw] max-w-md bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden animate-modal-in"
            style={{ bottom: 96 }}
            role="dialog"
            aria-modal="true"
            aria-label="AI Assistant"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BotIcon className="w-5 h-5" />
                <span className="font-semibold">AI Assistant</span>
                <span className="ml-2 w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              </div>
              <button className="text-white/90 hover:text-white" aria-label="Close chatbot" onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div className="p-3">
              {sendError && (
                <div className="mb-2 px-3 py-2 rounded bg-red-50 text-red-700 text-sm border border-red-200">{sendError}</div>
              )}
              <div className="h-56 overflow-y-auto space-y-2" aria-live="polite">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${m.from === "user" ? "bg-blue-50 text-blue-900 border border-blue-200" : "bg-gray-50 text-gray-900 border border-gray-200"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {chatTyping && (
                  <div className="flex justify-start">
                    <div className="px-3 py-2 rounded-lg text-sm bg-gray-50 text-gray-600 border border-gray-200">Typing...</div>
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about soil, irrigation, pests…"
                  className="flex-1 px-3 py-2 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={sendMessage} className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
*/}
      {/* Chatbot Modal */}
      {activePanel === "chatbot" && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" aria-label="Close chatbot overlay" onClick={() => setActivePanel(null)} />
          <div
            className={`absolute right-2 sm:right-8 w-[calc(100vw-1rem)] sm:w-[92vw] max-w-md bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden animate-modal-in`}
            style={{ bottom: (isMobile ? 72 : 96) }}
            role="dialog"
            aria-modal="true"
            aria-label="AI Assistant"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BotIcon className="w-5 h-5" />
                <span className="font-semibold">AI Assistant</span>
                <span className="ml-2 w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              </div>
              <button className="text-white/90 hover:text-white" aria-label="Close chatbot" onClick={() => setActivePanel(null)}>✕</button>
            </div>
            <div className="p-3">
              {sendError && (
                <div className="mb-2 px-3 py-2 rounded bg-red-50 text-red-700 text-sm border border-red-200">{sendError}</div>
              )}
              <div className="h-56 overflow-y-auto space-y-2" aria-live="polite">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${m.from === "user" ? "bg-blue-50 text-blue-900 border border-blue-200" : "bg-gray-50 text-gray-900 border border-gray-200"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {chatTyping && (
                  <div className="flex justify-start">
                    <div className="px-3 py-2 rounded-lg text-sm bg-gray-50 text-gray-600 border border-gray-200">Typing...</div>
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about soil, irrigation, pests…"
                  className="flex-1 px-3 py-2 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={sendMessage} className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experts Modal */}
      {activePanel === "experts" && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" aria-label="Close experts overlay" onClick={() => setActivePanel(null)} />
          <div
            className="absolute right-2 sm:right-8 w-[calc(100vw-1rem)] sm:w-[94vw] max-w-xl bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden animate-modal-in"
            style={{ bottom: (isMobile ? 72 : 96) }}
            role="dialog"
            aria-modal="true"
            aria-label="Talk to Experts"
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5" />
                <span className="font-semibold">Talk to Experts</span>
              </div>
              <button className="text-white/90 hover:text-white" aria-label="Close experts" onClick={() => setActivePanel(null)}>✕</button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
              <div data-role="experts-audio-banner" className="sm:col-span-2 mb-2 px-3 py-2 rounded bg-purple-50 text-purple-800 border border-purple-200">
                Audio consultations only. Video is not supported.
              </div>
              {experts.map((e, idx) => (
                <div key={idx} className="rounded-lg border border-black/10 p-3 hover:shadow-md transition bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[var(--farm-green)]">{e.name}</div>
                      <div className="text-sm text-gray-600">{e.specialty}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${e.online ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {e.online ? "Online" : "Offline"}
                    </div>
                  </div>
                  <div className="mt-2 text-yellow-500 text-sm">{"★".repeat(Math.round(e.rating))}<span className="text-gray-600 ml-1">{e.rating.toFixed(1)}</span></div>
                  <div className="mt-3 flex items-center gap-2">
                    <a href={`tel:${e.phone}`} className="flex-1 px-3 py-2 border border-black/10 rounded-md hover:bg-purple-50 text-purple-700 text-sm text-center" aria-label="Start audio call">Call</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Events Modal */}
      {activePanel === "events" && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" aria-label="Close events overlay" onClick={() => setActivePanel(null)} />
          <div
            className="absolute right-2 sm:right-8 w-[calc(100vw-1rem)] sm:w-[94vw] max-w-xl bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden animate-modal-in"
            style={{ bottom: (isMobile ? 72 : 96) }}
            role="dialog"
            aria-modal="true"
            aria-label="Upcoming Events"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <span className="font-semibold">Upcoming Events</span>
              </div>
              <button className="text-white/90 hover:text-white" aria-label="Close events" onClick={() => setActivePanel(null)}>✕</button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
              {events.map((ev) => {
                const registered = registeredIds.includes(ev.id);
                return (
                  <div key={ev.id} className="rounded-lg border border-black/10 p-3 hover:shadow-md transition bg-white">
                    <div className="font-semibold text-[var(--farm-green)]">{ev.title}</div>
                    <div className="text-sm text-gray-600">{ev.when}</div>
                    <div className="mt-1 text-xs text-gray-700">Spots: {ev.spots}</div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => toggleRegister(ev.id)}
                        className={`flex-1 px-3 py-2 rounded-md text-sm ${registered ? "bg-green-600 text-white hover:bg-green-700" : "border border-black/10 hover:bg-orange-50 text-orange-700"}`}
                      >
                        {registered ? "Registered" : "Register"}
                      </button>
                      <button className="flex-1 px-3 py-2 border border-black/10 rounded-md hover:bg-orange-50 text-orange-700 text-sm">Details</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating actions styles (mirrors homepage) */}
      <style jsx>{`
        @keyframes pulse-soft { 0%, 100% { transform: scale(1); box-shadow: 0 10px 25px rgba(0,0,0,0.15); } 50% { transform: scale(1.05); box-shadow: 0 15px 35px rgba(0,0,0,0.25); } }
        @keyframes ripple { 0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7), 0 0 0 0 rgba(59,130,246,0.7), 0 10px 25px rgba(0,0,0,0.15); } 40% { box-shadow: 0 0 0 15px rgba(59,130,246,0), 0 0 0 0 rgba(59,130,246,0.7), 0 10px 25px rgba(0,0,0,0.15); } 80% { box-shadow: 0 0 0 15px rgba(59,130,246,0), 0 0 0 30px rgba(59,130,246,0), 0 10px 25px rgba(0,0,0,0.15); } 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0), 0 0 0 30px rgba(59,130,246,0), 0 10px 25px rgba(0,0,0,0.15); } }
        @keyframes ripple-purple { 0% { box-shadow: 0 0 0 0 rgba(168,85,247,0.7), 0 0 0 0 rgba(168,85,247,0.7), 0 10px 25px rgba(0,0,0,0.15); } 40% { box-shadow: 0 0 0 15px rgba(168,85,247,0), 0 0 0 0 rgba(168,85,247,0.7), 0 10px 25px rgba(0,0,0,0.15); } 80% { box-shadow: 0 0 0 15px rgba(168,85,247,0), 0 0 0 30px rgba(168,85,247,0), 0 10px 25px rgba(0,0,0,0.15); } 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0), 0 0 0 30px rgba(168,85,247,0), 0 10px 25px rgba(0,0,0,0.15); } }
        @keyframes ripple-orange { 0% { box-shadow: 0 0 0 0 rgba(249,115,22,0.7), 0 0 0 0 rgba(249,115,22,0.7), 0 10px 25px rgba(0,0,0,0.15); } 40% { box-shadow: 0 0 0 15px rgba(249,115,22,0), 0 0 0 0 rgba(249,115,22,0.7), 0 10px 25px rgba(0,0,0,0.15); } 80% { box-shadow: 0 0 0 15px rgba(249,115,22,0), 0 0 0 30px rgba(249,115,22,0), 0 10px 25px rgba(0,0,0,0.15); } 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0), 0 0 0 30px rgba(249,115,22,0), 0 10px 25px rgba(0,0,0,0.15); } }
        .fab-pulse { animation: pulse-soft 2s ease-in-out infinite; }
        .fab-ripple { animation: ripple 2s ease-out infinite; }
        .fab-ripple-purple { animation: ripple-purple 2s ease-out infinite; }
        .fab-ripple-orange { animation: ripple-orange 2s ease-out infinite; }
        .fab-animated { transition: all 0.3s ease; }
        .fab-animated:hover { transform: scale(1.15) !important; animation-play-state: paused; }
        @keyframes modal-in { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-modal-in { animation: modal-in 0.3s ease-out; }
      `}</style>
      {/* Global styles now come from app/report/report.css for deterministic order */}
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