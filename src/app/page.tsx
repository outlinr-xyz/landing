import CodeExample from "@/components/features";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden md:px-4">
      <Hero />
      <CodeExample />
      <Cta />
      <Faqs />
    </main>
  );
}
