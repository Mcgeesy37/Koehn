import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import WaveBand from "./components/WaveBand";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WaveBand />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
