"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  // Inline icon components for floating actions
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
/* 
  // Inline bot icon used for the floating button
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
  }*/
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

  // Floating actions: shared panel state and animations
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

  function smartReply(q: string): string {
    const s = q.toLowerCase();
    if (s.includes("soil") || s.includes("ph")) return "Ideal soil pH for most crops is 6.0–7.5. Add lime to raise pH, sulfur to lower.";
    if (s.includes("irrigation") || s.includes("water")) return "Use drip for water efficiency. Water early morning/evening to reduce evaporation.";
    if (s.includes("seed") || s.includes("spacing")) return "Follow recommended spacing per crop; uniform spacing improves yield and reduces disease.";
    if (s.includes("pest") || s.includes("disease")) return "Scout weekly; use IPM: cultural control, resistant varieties, and targeted sprays only when needed.";
    if (s.includes("banana")) return "For bananas: maintain soil moisture, apply balanced NPK, and manage Sigatoka with timely fungicide rotations.";
    return "I can help with soil, irrigation, pests, spacing, and more. Tell me your crop and context!";
  }

  function sendMessage() {
    const text = chatInput.trim();
    if (!text) return;
    const ts = Date.now();
    setMessages((m) => [...m, { from: "user", text, ts }]);
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

  // Remove audio-only banner when experts panel opens (parity with page)
  useEffect(() => {
    if (activePanel !== "experts") return;
    let observer: MutationObserver | null = null;
    try {
      const removeBanner = () => {
        const el = document.querySelector('[data-role="experts-audio-banner"]') as HTMLElement | null;
        if (el) { el.remove(); observer?.disconnect(); }
      };
      removeBanner();
      observer = new MutationObserver(removeBanner);
      observer.observe(document.body, { childList: true, subtree: true });
    } catch {}
    return () => observer?.disconnect();
  }, [activePanel]);

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
/*
  // Chatbot state (replicated from homepage with a compact UI)
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatTyping, setChatTyping] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string; ts: number }[]>([
    { from: "ai", text: "Hi! I’m your farming assistant. Ask me anything.", ts: Date.now() },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  function smartReply(q: string): string {
    const s = q.toLowerCase();
    if (s.includes("soil") || s.includes("ph")) return "Ideal soil pH for most crops is 6.0–7.5.";
    if (s.includes("irrigation") || s.includes("water")) return "Use drip for efficiency; irrigate morning/evening.";
    if (s.includes("seed") || s.includes("spacing")) return "Uniform spacing improves yield; follow crop guidance.";
    if (s.includes("pest") || s.includes("disease")) return "Scout weekly and use IPM practices.";
    if (s.includes("banana")) return "Maintain moisture, balanced NPK, manage Sigatoka carefully.";
    return "Tell me your crop and context; I’ll guide you.";
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

    // Set fixed header height CSS variable to prevent UI distortion on refresh
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty("--header-h", "63px");
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
            className="absolute right-2 sm:right-8 w=[calc(100vw-1rem)] sm:w-[94vw] max-w-xl bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden animate-modal-in"
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

      <button
        id="toTop"
        className="to-top"
        aria-label={t('report.misc.backToTop')}
        ref={toTopRef}
        style={{ backgroundColor: "#48f7c8" }}
      >
        ↑
      </button>
{/* 
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