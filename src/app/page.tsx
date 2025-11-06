"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import { useI18n } from "@/i18n/I18nContext";

// Inline icon components (no external deps)
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

export default function Home() {
  const { t } = useI18n();
  // Single active panel state to ensure mutual exclusivity
  const [activePanel, setActivePanel] = useState<null | "chatbot" | "experts" | "events">(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Animation states for each button - start with ripple, then switch to pulse
  const [chatbotAnim, setChatbotAnim] = useState('fab-ripple');
  const [expertsAnim, setExpertsAnim] = useState('fab-ripple');
  const [eventsAnim, setEventsAnim] = useState('fab-ripple');

  useEffect(() => {
    const handleResize = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation timers - each button switches from ripple to pulse after different delays
  useEffect(() => {
    // Chatbot switches after 8 seconds
    const chatTimer = setTimeout(() => {
      setChatbotAnim('fab-pulse');
    }, 8000);

    // Experts switches after 10 seconds
    const expertTimer = setTimeout(() => {
      setExpertsAnim('fab-pulse');
    }, 10000);

    // Events switches after 12 seconds
    const eventTimer = setTimeout(() => {
      setEventsAnim('fab-pulse');
    }, 12000);

    return () => {
      clearTimeout(chatTimer);
      clearTimeout(expertTimer);
      clearTimeout(eventTimer);
    };
  }, []);

  // Focus management: when chatbot opens, focus the input
  useEffect(() => {
    if (activePanel === "chatbot") {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [activePanel]);

  // Keyboard support: ESC closes any open panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Chatbot state
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

  // Experts data
  const experts = useMemo(
    () => [
      { name: "Dr. Meera Rao", specialty: "Soil Science", rating: 4.8, online: true, phone: "+91-98765-43210" },
      { name: "Arun Patel", specialty: "Irrigation", rating: 4.6, online: false, phone: "+91-91234-56789" },
      { name: "S. Kulkarni", specialty: "Crop Protection", rating: 4.7, online: true, phone: "+91-99887-77665" },
    ],
    []
  );

  // Events data
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

  // Remove the audio-only banner in Experts modal via JavaScript when the panel opens
  useEffect(() => {
    if (activePanel !== "experts") return;
    let observer: MutationObserver | null = null;
    try {
      const removeBanner = () => {
        const el = document.querySelector('[data-role="experts-audio-banner"]') as HTMLElement | null;
        if (el) {
          el.remove();
          observer?.disconnect();
        }
      };
      removeBanner();
      observer = new MutationObserver(removeBanner);
      observer.observe(document.body, { childList: true, subtree: true });
    } catch (err) {
      console.warn("Experts banner removal failed", err);
    }
    return () => observer?.disconnect();
  }, [activePanel]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 via-white to-green-50">
      <style jsx>{`
        /* Pulse animation - gentle breathing effect */
        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          }
        }

        /* Ripple effect - attention-drawing circles */
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7),
                        0 0 0 0 rgba(59, 130, 246, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          40% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0),
                        0 0 0 0 rgba(59, 130, 246, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          80% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0),
                        0 0 0 30px rgba(59, 130, 246, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0),
                        0 0 0 30px rgba(59, 130, 246, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }

        /* Ripple for purple (experts) */
        @keyframes ripple-purple {
          0% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7),
                        0 0 0 0 rgba(168, 85, 247, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          40% {
            box-shadow: 0 0 0 15px rgba(168, 85, 247, 0),
                        0 0 0 0 rgba(168, 85, 247, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          80% {
            box-shadow: 0 0 0 15px rgba(168, 85, 247, 0),
                        0 0 0 30px rgba(168, 85, 247, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0),
                        0 0 0 30px rgba(168, 85, 247, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }

        /* Ripple for orange (events) */
        @keyframes ripple-orange {
          0% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7),
                        0 0 0 0 rgba(249, 115, 22, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          40% {
            box-shadow: 0 0 0 15px rgba(249, 115, 22, 0),
                        0 0 0 0 rgba(249, 115, 22, 0.7),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          80% {
            box-shadow: 0 0 0 15px rgba(249, 115, 22, 0),
                        0 0 0 30px rgba(249, 115, 22, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0),
                        0 0 0 30px rgba(249, 115, 22, 0),
                        0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }

        /* Animation classes */
        .fab-pulse {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .fab-ripple {
          animation: ripple 2s ease-out infinite;
        }

        .fab-ripple-purple {
          animation: ripple-purple 2s ease-out infinite;
        }

        .fab-ripple-orange {
          animation: ripple-orange 2s ease-out infinite;
        }

        /* Smooth transition between animations */
        .fab-animated {
          transition: all 0.3s ease;
        }

        .fab-animated:hover {
          transform: scale(1.15) !important;
          animation-play-state: paused;
        }

        /* Modal animation */
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.3s ease-out;
        }
      `}</style>

      {/* 🌿 Hero Banner */}
      <section className="text-center py-10 bg-gradient-to-r from-green-50 via-white to-green-50 border-gray-100"
        style={{
          marginTop: "3rem"
        }}>
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
          {t('home.heroTitle')}
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          {t('home.heroSubtitle')}
        </p>
      </section>

      {/* 🌱 Main Content */}
      <Header fixed />
      <main className="flex-1 mt-1 bg">
        <CategoryTabs />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex flex-col space-y-2 sm:space-y-4 z-30">
        {/* AI Chatbot Button */}
        <button
          onClick={() => setActivePanel(activePanel === "chatbot" ? null : "chatbot")}
          aria-label="Open AI Assistant"
          className={`${chatbotAnim} fab-animated bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 sm:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition group relative`}
        >
          <BotIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
            AI Assistant
          </span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </button>

        {/* Talk to Experts Button */}
        <button
          onClick={() => setActivePanel(activePanel === "experts" ? null : "experts")}
          aria-label="Open expert consultation"
          className={`${expertsAnim === 'fab-ripple' ? 'fab-ripple-purple' : 'fab-pulse'} fab-animated bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 sm:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition group relative`}
        >
          <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
            Talk to Experts
          </span>
          {/* online status badge shown only if any expert online */}
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
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
            Upcoming Events
          </span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
            {eventsCount}
          </div>
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
                    <div className="px-3 py-2 rounded-lg text-sm bg-gray-50 text-gray-600 border border-gray-200">
                      Typing...
                    </div>
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
    </div>
  );
}