import { GridBackground } from "@/components/ui/GridBackground";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { Nav } from "@/components/layout/Nav";
import { SideNav } from "@/components/layout/SideNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { AgenticAI } from "@/components/sections/AgenticAI";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Roadmap } from "@/components/sections/Roadmap";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#06060a]"
      >
        Skip to content
      </a>
      <GradientOrbs />
      <GridBackground />
      <Nav />
      <SideNav />
      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <AgenticAI />
        <Stack />
        <Experience />
        <Roadmap />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
