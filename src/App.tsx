import About from "./layouts/About";
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
    </main>
  );
}

export default App;
