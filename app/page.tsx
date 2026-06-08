import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ByTheNumbers from "@/components/ByTheNumbers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <main>
      <Hero />
      <Reveal><Benefits /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><ByTheNumbers /></Reveal>
      <Reveal><TrustSection /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><EstimateForm /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Footer />
    </main>
  );
}