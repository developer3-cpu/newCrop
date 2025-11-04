"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { motion, AnimatePresence } from "framer-motion";

import FruitsTab from "./FruitsTab";
import VegetablesTab from "./VegetablesTab";
import GrainsTab from "./GrainsTab";
import SpicesTab from "./SpicesTab";
import FlowersTab from "./FlowersTab";
import OilseedsTab from "./OilseedsTab";
import CashCropsTab from "./CashCropsTab";
import PulsesTab from "./PulsesTab";
import PlantationCropsTab from "./PlantationCropsTab";

const tabs = [
  { key: "fruits", labelKey: "categories.fruits", Component: FruitsTab },
  { key: "vegetables", labelKey: "categories.vegetables", Component: VegetablesTab },
  { key: "grains", labelKey: "categories.grains", Component: GrainsTab },
  { key: "spices", labelKey: "categories.spices", Component: SpicesTab },
  { key: "cashCrops", labelKey: "categories.cashCrops", Component: CashCropsTab },
  { key: "oilSeeds", labelKey: "categories.oilSeeds", Component: OilseedsTab },
  { key: "pulses", labelKey: "categories.pulses", Component: PulsesTab },
  { key: "plantationCrops", labelKey: "categories.plantationCrops", Component: PlantationCropsTab },
  { key: "flowers", labelKey: "categories.flowers", Component: FlowersTab },
];

export default function CategoryTabs() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<string>("fruits");

  const ActiveComponent = tabs.find((tab) => tab.key === activeTab)?.Component || null;

  return (
    <section className="w-full mx-auto max-w-7xl px-6 pb-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 overflow-x-auto pb-3 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-green-100 text-green-700 border-green-500 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="mt-8 flex justify-center">
        <AnimatePresence mode="wait">
          {ActiveComponent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ActiveComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
