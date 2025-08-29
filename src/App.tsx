import About from "./layouts/About";
import Features from "./layouts/Features";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Partners from "./layouts/Partners";
import Story from "./layouts/Story";
import Updates from "./layouts/Updates";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Partners />
      <Story />
      <Updates />
      <Footer />
    </main>
  );
}

export default App;
