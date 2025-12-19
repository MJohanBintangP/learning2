import { LinkedinIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  const text = [
    {
      title: "Company",
      link: ["About Us", "Services", "Our Team", "Careers"],
    },
    {
      title: "Resources",
      link: ["Blog", "Case Studies", "Whitepapers", "Newsletter"],
    },
    {
      title: "Legal",
      link: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-gray-900 w-full h-auto">
      <div className="p-16">
        <div className="flex gap-52">
          {/* left section */}
          <div className="flex flex-col">
            <a
              href="https://mjohanbintangp.dev"
              className="text-white text-xl font-semibold mb-4"
              target="_blank"
            >
              mjohanbintangp.dev
            </a>
            <p className="text-gray-400 mb-4">
              Empowering businesses with strategic solutions that <br /> drive
              growth, innovation, and lasting success.
            </p>
            <div className="flex gap-3">
              <div className="w-fit p-2 bg-white/20 rounded-full text-gray-300">
                <LinkedinIcon size={18} />
              </div>
              <div className="w-fit p-2 bg-white/20 rounded-full text-gray-300">
                <InstagramIcon size={18} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-42">
            {text.map((t) => (
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-lg mb-4">
                  {t.title}
                </h1>
                <div className="flex flex-col gap-2">
                  {t.link.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-12 mb-8 border-gray-700" />
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 text-sm">
            © 2025 Apex Consulting. All rights reserved.
          </h1>
          <p className="text-gray-400">
            Designed with precision. Built for growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
