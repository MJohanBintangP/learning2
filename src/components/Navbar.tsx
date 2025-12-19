import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <nav className="transition-all fixed top-0 z-99 w-full py-5 bg-white/80 backdrop-blur-lg border-b border-b-gray-200">
      <div className="flex items-center justify-between px-6 md:px-16 ">
        <h1 className="text-lg font-semibold">mjohanbintangp</h1>
        <ul className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="scroll-smooth text-sm text-gray-500 hover:text-black transition-all"
          >
            About
          </a>
          <a
            href="#service"
            className="text-sm text-gray-500 hover:text-black transition-all"
          >
            Service
          </a>
          <a
            href="#team"
            className="text-sm text-gray-500 hover:text-black transition-all"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-black transition-all"
          >
            Contact
          </a>
          <button className="cursor-pointer bg-black hover:bg-black/80 rounded-lg px-3 py-2 text-sm text-white">
            Get Started
          </button>
        </ul>
        <button
          onClick={() => setOpen(!Open)}
          className="cursor-pointer flex md:hidden"
        >
          {Open ? <X /> : <Menu />}
        </button>
      </div>

      {/* navbar dropdown */}
      {Open && (
        <div className="md:hidden absolute w-full top-full py-6 bg-white/80 backdrop-blur-lg">
          <ul className="flex flex-col items-start px-6 gap-8">
            <a
              href="#about"
              className="text-sm text-gray-500 hover:text-black transition-all"
            >
              About
            </a>
            <a
              href="#service"
              className="text-sm text-gray-500 hover:text-black transition-all"
            >
              Service
            </a>
            <a
              href="#team"
              className="text-sm text-gray-500 hover:text-black transition-all"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-black transition-all"
            >
              Contact
            </a>
            <button className="bg-black rounded-lg px-3 py-2 text-sm text-white">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
