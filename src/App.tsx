import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Features from "./layouts/Features";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Story from "./layouts/Story";

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}

export default App;
