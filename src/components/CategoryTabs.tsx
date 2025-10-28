"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/i18n/I18nContext';
import FruitsTab from './FruitsTab';
import VegetablesTab from './VegetablesTab';
import GrainsTab from './GrainsTab';
import SpicesTab from './SpicesTab';
import FlowersTab from './FlowersTab';
import OilseedsTab from './OilseedsTab';
import CashCropsTab from './CashCropsTab';
import PulsesTab from './PulsesTab';
import PlantationCropsTab from './PlantationCropsTab';

type TabKey =
  | 'fruits'
  | 'grains'
  | 'vegetables'
  | 'spices'
  | 'flowers'
  | 'cashCrops'
  | 'oilSeeds'
  | 'pulses'
  | 'plantationCrops';

const cardsByTab: Record<TabKey, { title: string; desc: string; color: string }[]> = {
  fruits: [],
  vegetables: [],
  grains: [
    { title: 'Rice', desc: 'Staple cereal, paddy fields', color: 'bg-[#F2F8E9]' },
    { title: 'Wheat', desc: 'Rabi crop, wide cultivation', color: 'bg-[#FFF7D6]' },
    { title: 'Millet', desc: 'Drought resistant, hardy', color: 'bg-[#EAF4FF]' },
  ],
  spices: [
    { title: 'Turmeric', desc: 'Rhizome, curcumin rich', color: 'bg-[#FFF7E1]' },
    { title: 'Black Pepper', desc: 'Vine, aromatic', color: 'bg-[#E9F2FF]' },
    { title: 'Cardamom', desc: 'Queen of spices', color: 'bg-[#EAFBF0]' },
  ],
  flowers: [
    { title: 'Marigold', desc: 'Decorative, hardy', color: 'bg-[#FFF1D6]' },
    { title: 'Rose', desc: 'Fragrant, ornamental', color: 'bg-[#FFE6EC]' },
    { title: 'Jasmine', desc: 'Aromatic, delicate', color: 'bg-[#EAFBFF]' },
  ],
  cashCrops: [
    { title: 'Cotton', desc: 'Fiber crop, cash value', color: 'bg-[#F2F8FF]' },
    { title: 'Sugarcane', desc: 'High water, sucrose', color: 'bg-[#E6FFE6]' },
    { title: 'Tea', desc: 'Plantation, export', color: 'bg-[#EBF1FF]' },
  ],
  oilSeeds: [
    { title: 'Mustard', desc: 'Rabi oilseed, pungent', color: 'bg-[#FFF4CC]' },
    { title: 'Groundnut', desc: 'Kharif oilseed, edible', color: 'bg-[#FFEFD9]' },
    { title: 'Sunflower', desc: 'Oil-rich achene, hardy', color: 'bg-[#FFF9D6]' },
  ],
  pulses: [
    { title: 'Chickpea', desc: 'Protein-rich legume', color: 'bg-[#F7EFE7]' },
    { title: 'Pigeon Pea', desc: 'Perennial pulse (Arhar)', color: 'bg-[#F0F7EA]' },
    { title: 'Lentil', desc: 'Cool-season legume', color: 'bg-[#EAF4FF]' },
  ],
  plantationCrops: [
    { title: 'Coffee', desc: 'Shade-loving plantation', color: 'bg-[#EAF4FF]' },
    { title: 'Rubber', desc: 'Latex, humid climate', color: 'bg-[#E6FFF2]' },
    { title: 'Coconut', desc: 'Coastal palm, oil', color: 'bg-[#FFF6E5]' },
  ],
};

// Fruits and Vegetables are now rendered via dedicated tab components

export default function CategoryTabs() {
  const { t } = useI18n();
  const [open, setOpen] = useState<TabKey | null>('fruits');
  const router = useRouter();

  // Disable manual prefetch to avoid aborted _rsc requests in dev
  useEffect(() => {}, []);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'fruits', label: t('categories.fruits') },
     { key: 'vegetables', label: t('categories.vegetables') },
    { key: 'grains', label: t('categories.grains') },
    { key: 'spices', label: t('categories.spices') },
    { key: 'cashCrops', label: t('categories.cashCrops') },
    { key: 'oilSeeds', label: t('categories.oilSeeds') },
    { key: 'pulses', label: t('categories.pulses') },
    { key: 'plantationCrops', label: t('categories.plantationCrops') },
     { key: 'flowers', label: t('categories.flowers') },
  ];

  return (
    <section className="w-full mx-auto max-w-6xl px-4">
      <div
        role="tablist"
        aria-label="Crop categories"
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={open === tab.key}
            aria-controls={`panel-${tab.key}`}
            onClick={() => setOpen(open === tab.key ? null : tab.key)}
            className={`px-4 py-2 rounded-full border transition bg-white hover:bg-[var(--farm-sky)]/60 ${
              open === tab.key ? 'border-[var(--farm-leaf)] text-[var(--farm-green)]' : 'border-black/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.key}
          id={`panel-${tab.key}`}
          role="region"
          aria-labelledby={`tab-${tab.key}`}
          className={`transition-all duration-300 ease-out ${
            open === tab.key ? 'mt-4' : 'h-0 overflow-hidden'
          }`}
        >
          {open === tab.key && (
            tab.key === 'vegetables' ? (
              <VegetablesTab />
            ) : tab.key === 'fruits' ? (
              <FruitsTab />
            ) : tab.key === 'grains' ? (
              <GrainsTab />
            ) : tab.key === 'spices' ? (
              <SpicesTab />
            ) : tab.key === 'flowers' ? (
              <FlowersTab />
            ) : tab.key === 'oilSeeds' ? (
              <OilseedsTab />
            ) : tab.key === 'cashCrops' ? (
              <CashCropsTab />
            ) : tab.key === 'pulses' ? (
              <PulsesTab />
            ) : tab.key === 'plantationCrops' ? (
              <PlantationCropsTab />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cardsByTab[tab.key as TabKey].map((card, idx) => (
                  <article key={idx} className={`bento p-4 ${card.color}`}>
                    <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.desc}</p>
                  </article>
                ))}
              </div>
            )
          )}
        </div>
      ))}
    </section>
  );
}
