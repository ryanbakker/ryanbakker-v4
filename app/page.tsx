import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Projects />
      <Logos />
      <Education />
      <div className="relative w-full h-[100px] z-50">
        <div className="absolute -top-[20px] bg-gray-950 w-full h-[100px] z-50" />
      </div>
      <ContactBanner />
      <Footer />
    </main>
  );
}
