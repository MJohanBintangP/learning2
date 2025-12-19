import { Lamp, User2, Goal } from "lucide-react";

export default function About() {
  const card = [
    {
      icon: <Goal />,
      title: "Our Mission",
      desc: "To empower businesses with innovative solutions that transform challenges into opportunities for sustainable growth.",
    },
    {
      icon: <Lamp />,
      title: "Our Mission",
      desc: "To empower businesses with innovative solutions that transform challenges into opportunities for sustainable growth.",
    },
    {
      icon: <User2 />,
      title: "Our Mission",
      desc: "To empower businesses with innovative solutions that transform challenges into opportunities for sustainable growth.",
    },
  ];

  return (
    <section
      id="about"
      className="py-22 scroll-mt-12 flex justify-center items-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 mb-16">
          <div className="mb-4 rounded-full px-4 py-1 bg-yellow-200 text-yellow-600 w-fit">
            Who we are
          </div>
          <h1 className="mb-4 text-black text-center max-w-xs md:max-w-2xl text-3xl md:text-5xl font-semibold">
            Trusted Partner for <span className="text-yellow-400">Growth</span>
          </h1>
          <p className="text-md text-center text-gray-400 max-w-xs md:max-w-2xl">
            For over a decade, Apex has been at the forefront of business
            transformation, delivering results that exceed expectations and
            partnerships that last.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 px-6 md:px-0 md:gap-12 mb-12 md:mb-32">
          {card.map((c) => (
            <div
              key={c.desc}
              className="flex flex-col bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="mb-4 p-4 rounded-xl bg-yellow-100 text-yellow-400 w-fit">
                {c.icon}
              </div>
              <h1 className="font-semibold text-lg mb-2">{c.title}</h1>
              <p className="text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex px-8 md:px-0 flex-col md:flex-row gap-6">
          <div>
            <h1 className="text-3xl font-semibold mb-6">
              A Legacy of Excellence Since 2012
            </h1>
            <div className="flex flex-col gap-4 text-gray-400">
              <p>
                Founded with a vision to bridge the gap between ambition and
                achievement, Apex has grown from a boutique consultancy to a
                full-service strategic partner for enterprises worldwide.
              </p>
              <p>
                Founded with a vision to bridge the gap between ambition and
                achievement, Apex has grown from a boutique consultancy to a
                full-service strategic partner for enterprises worldwide.
              </p>
              <p>
                Founded with a vision to bridge the gap between ambition and
                achievement, Apex has grown from a boutique consultancy to a
                full-service strategic partner for enterprises worldwide.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-md w-full h-auto">
            <h1 className="text-5xl font-semibold text-yellow-400">12+</h1>
            <p className="text-gray-400 text-md">Years of impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
