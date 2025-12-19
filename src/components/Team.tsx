import { LinkedinIcon, TwitterIcon } from "lucide-react";

type TeamsType = {
  name: string;
  role: string;
  desc: string;
};

export default function Team() {
  const getInitial = (name: string) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const Teams: TeamsType[] = [
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
    },
  ];

  return (
    <section
      id="team"
      className="scroll-mt-12 py-22 bg-gray-50 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="mb-6 rounded-full px-4 py-1 bg-yellow-200 text-yellow-600 w-fit">
          Our Leadership
        </div>
        <h1 className="max-w-xs md:max-w-2xl text-3xl md:text-5xl text-center font-semibold mb-6">
          Meet the <span className="text-yellow-400">Experts</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xs md:max-w-2xl text-center">
          A diverse team of industry veterans united by a passion for excellence
          and a commitment to your success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {Teams.map((t) => (
          <div className="flex flex-col justify-center items-center gap-2 max-w-xs text-center">
            <div className="bg-gray-400 rounded-xl p-16 font-semibold text-3xl">
              {getInitial(t.name)}
            </div>
            <h1 className="font-semibold text-xl">{t.name}</h1>
            <h2 className="text-yellow-400">{t.role}</h2>
            <p className="text-gray-400 mb-4">{t.desc}</p>
            <div className="flex gap-3">
              <div className="p-2 rounded-full bg-gray-100">
                <LinkedinIcon className="text-gray-400" size={16} />
              </div>

              <div className="p-2 rounded-full bg-gray-100">
                <TwitterIcon className="text-gray-400" size={16} />
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
