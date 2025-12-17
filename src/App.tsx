import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Team from "./components/Team";

export default function App() {
  return (
    <main className="min-h-screen font-[sans-serif] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Team />
    </main>
  );
}
