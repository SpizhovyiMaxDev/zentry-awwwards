import About from "./layouts/About";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
