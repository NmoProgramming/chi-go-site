import { Download } from "@/components/Download";
import { Features } from "@/components/Features";
import { Fleet } from "@/components/Fleet";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <How />
        <Features />
        <Fleet />
        <Download />
      </main>
      <Footer />
    </>
  );
}
