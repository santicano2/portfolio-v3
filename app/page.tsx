import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-10 sm:px-6">
        <Hero />
      </main>
    </>
  );
}
