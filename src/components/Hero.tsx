import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const Persentage = [
    {
      number: '150+',
      desc: 'Projects Delivered',
    },
    {
      number: '98%',
      desc: 'Client Satisfaction',
    },
    {
      number: '12+',
      desc: 'Years Experience',
    },
  ];

  return (
    <section className="bg-[#1A233B] min-h-screen flex flex-col justify-center items-center">
      <div className="bg-yellow-800/20 text-yellow-500 font-medium rounded-full py-1 px-4 mb-6">Innovation Meets Excellence</div>
      <h1 className="text-white max-w-3xl text-center font-semibold text-4xl md:text-6xl mb-6">
        Building Tomorrow's <span className="text-yellow-500">Vision</span> Today
      </h1>
      <p className="text-gray-300 max-w-lg md:max-w-2xl font-medium text-center mb-6">We partner with forward-thinking companies to deliver transformative solutions that drive growth, efficiency, and lasting impact.</p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="cursor-pointer hover:-translate-y-0.5 duration-300 transition-all bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl px-8 py-3 flex gap-2">
          Start Your Journey
          <ArrowRight />
        </button>
        <button className="hover:bg-white/10 cursor-pointer transition-all duration-300 text-white font-semibold border border-white rounded-xl px-8 py-3">Learn More</button>
      </div>
      <hr className="text-gray-300 w-lg md:w-4xl my-16" />
      <div className="flex justify-between w-md md:w-2xl">
        {Persentage.map((p) => (
          <div className="flex flex-col items-center">
            <div className="text-white font-semibold text-4xl">{p.number}</div>
            <div className="text-gray-400 text-sm">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
