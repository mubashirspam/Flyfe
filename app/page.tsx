import ScrollRevealInit from "@/components/ScrollRevealInit";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import About from "@/components/sections/About";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import Projects from "@/components/sections/Projects";
import ImageMosaic from "@/components/sections/ImageMosaic";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import WhyFlyfe from "@/components/sections/WhyFlyfe";
import QuoteBanner from "@/components/sections/QuoteBanner";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <ParallaxBanner />
        <Projects />
        <ImageMosaic />
        <MarqueeStrip />
        <WhyFlyfe />
        <QuoteBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
