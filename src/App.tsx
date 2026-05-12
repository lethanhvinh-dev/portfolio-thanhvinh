/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoiseTexture from "./components/NoiseTexture";
import Particles from "./components/Particles";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background Elements */}
      <NoiseTexture />
      <Particles />
      <Cursor />
      <ScrollProgress />

      {/* HUD Navigation */}
      <Navbar />

      {/* Content Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* 2026 Interactive Overlays */}
      {/* <div className="fixed bottom-10 left-10 hidden lg:flex flex-col gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 vertical-rl transform rotate-180 pointer-events-none z-50">
        <span>Portfolio 2026 // TV</span>
        <div className="w-[1px] h-12 bg-white/10 mx-auto" />
      </div> */}

      {/* <div className="fixed bottom-10 right-10 hidden lg:flex flex-col gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 vertical-rl pointer-events-none z-50">
        <span>Design System v2.04</span>
        <div className="w-[1px] h-12 bg-white/10 mx-auto" />
      </div> */}
    </main>
  );
}
