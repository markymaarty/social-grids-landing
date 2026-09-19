import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Networks } from "./components/Networks";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA, Footer } from "./components/Footer";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle("reduced-motion", reducedMotion);
    ScrollTrigger.refresh();
  }, [reducedMotion]);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <SocialProof />
        <Features reducedMotion={reducedMotion} />
        <Networks />
        <Pricing reducedMotion={reducedMotion} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
