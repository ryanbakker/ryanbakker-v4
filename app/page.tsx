import About from "@/components/About";
import Education from "@/components/Education";
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
    </main>
  );
}
