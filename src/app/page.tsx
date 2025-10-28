import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <Header />
      <main className="flex-1">
        <CategoryTabs />
      </main>
    </div>
  );
}