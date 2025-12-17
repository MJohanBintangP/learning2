import { LinkedinIcon, TwitterIcon } from "lucide-react";
import type { ReactNode } from "react";

type TeamsType = {
  name: string;
  role: string;
  desc: string;
  sosmed: ReactNode;
};

export default function Team() {
  const Teams: TeamsType[] = [
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
      sosmed: [<LinkedinIcon />, <TwitterIcon />],
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
      sosmed: [<LinkedinIcon />, <TwitterIcon />],
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
      sosmed: [<LinkedinIcon />, <TwitterIcon />],
    },
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      desc: "20+ years leading Fortune 500 transformations",
      sosmed: [<LinkedinIcon />, <TwitterIcon />],
    },
  ];

  return (
    <section className="py-22 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="mb-4 rounded-full px-4 py-1 bg-yellow-200 text-yellow-600 w-fit">
          Our Leadership
        </div>
        <h1>Meet the Experts</h1>
        <p>
          A diverse team of industry veterans united by a passion for excellence
          and a commitment to your success.
        </p>
      </div>
      <div className="flex gap-6">
        {Teams.map((t) => (
          <div className="flex flex-col gap-2">
            <h1>{t.name}</h1>
            <h2>{t.role}</h2>
            <p>{t.desc}</p>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
