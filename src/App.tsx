import About from "./layouts/About";
import Features from "./layouts/Features";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Partners from "./layouts/Partners";
import Story from "./layouts/Story";
import Updates from "./layouts/Updates";

function App() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Partners />
      <Story />
      <Updates />
    </main>
  );
}

export default App;
