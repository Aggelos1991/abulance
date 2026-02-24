import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhoneMockup from "@/components/PhoneMockup";
import Platform from "@/components/Platform";
import Integrations from "@/components/Integrations";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PhoneMockup />
      <Platform />
      <Integrations />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
