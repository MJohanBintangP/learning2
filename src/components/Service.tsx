import {
  ArrowsUpFromLine,
  ArrowUp,
  ChartBar,
  Globe,
  Rocket,
  Settings,
} from "lucide-react";

export default function Service() {
  const cards = [
    {
      icon: <ArrowsUpFromLine />,
      title: "Strategic Consulting",
      desc: "Data-driven strategies that align your business objectives with market opportunities for accelerated growth.",
    },
    {
      icon: <Settings />,
      title: "Digital Transformation",
      desc: "End-to-end digital solutions that modernize operations, enhance efficiency, and future-proof your business.",
    },
    {
      icon: <ChartBar />,
      title: "Business Analytics",
      desc: "Actionable insights from advanced analytics that inform smarter decisions and drive competitive advantage.",
    },
    {
      icon: <Globe />,
      title: "Global Expansion",
      desc: "Data-driven strategies that align your business objectives with market opportunities for accelerated growth.",
    },
    {
      icon: <ArrowUp />,
      title: "Risk Management",
      desc: "Comprehensive risk assessment and mitigation strategies that protect your assets and reputation.",
    },
    {
      icon: <Rocket />,
      title: "Innovation Labs",
      desc: "Co-create breakthrough solutions with our dedicated innovation team and cutting-edge technology stack.",
    },
  ];

  return (
    <section
      id="service"
      className="scroll-mt-12 py-22 flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <div className="mb-4 rounded-full px-4 py-1 bg-yellow-200 text-yellow-600 w-fit">
          What We Do
        </div>
        <h1 className="mb-4 text-black text-center max-w-xs md:max-w-2xl text-3xl md:text-5xl font-semibold">
          Solutions That Transform
        </h1>
        <p className="text-md text-gray-400 text-center max-w-xs md:max-w-2xl">
          Comprehensive services designed to address your most pressing
          challenges and unlock new possibilities for your organization.
        </p>
      </div>
      <div className="grid px-6 md:px-0 grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((c) => (
          <div
            key={c.desc}
            className="group relative hover:-translate-y-2 transition-all flex flex-col gap-2 bg-white shadow-md p-8 rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <div className="p-2 w-fit rounded-lg bg-yellow-100 text-yellow-500">
              {c.icon}
            </div>
            <h1 className="text-md font-medium">{c.title}</h1>
            <p className="max-w-xs text-gray-400 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
