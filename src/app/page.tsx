"use client";

import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import { useI18n } from "@/i18n/I18nContext";

export default function Home() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 via-white to-green-50">
      {/* 🌿 Hero Banner */}
      <section className="text-center py-10 bg-gradient-to-r from-green-50 via-white to-green-50  border-gray-100"
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
    </div>
  );
}
