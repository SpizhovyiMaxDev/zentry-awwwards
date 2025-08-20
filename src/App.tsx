import About from "./layouts/About";
import Features from "./layouts/Features";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
