import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-22 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="mb-6 rounded-full px-4 py-1 bg-yellow-200 text-yellow-600 w-fit">
          Get in touch
        </div>
        <h1 className="text-5xl font-semibold mb-6">
          Let's Start a<span className="text-yellow-400">Conversation</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl text-center">
          Ready to transform your business? We'd love to hear from you. Reach
          out and let's explore the possibilities together.
        </p>
      </div>
      <div className="flex w-7xl justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Contact Information</h1>
          <div className="rounded-xl shadow-2xl w-full p-4 flex gap-4 bg-white">
            <div className="px-3 flex items-center justify-center bg-yellow-50 text-yellow-200 rounded-xl">
              <Mail />
            </div>
            <div className="flex flex-col">
              <h1>Email</h1>
              <p>johan@example.com</p>
            </div>
          </div>
          <div className="rounded-xl shadow-2xl w-full p-4 flex gap-4 bg-white">
            <div className="px-3 flex items-center justify-center bg-yellow-50 text-yellow-200 rounded-xl">
              <Mail />
            </div>
            <div className="flex flex-col">
              <h1>Email</h1>
              <p>johan@example.com</p>
            </div>
          </div>
          <div className="rounded-xl shadow-2xl w-full p-4 flex gap-4 bg-white">
            <div className="px-3 flex items-center justify-center bg-yellow-50 text-yellow-200 rounded-xl">
              <Mail />
            </div>
            <div className="flex flex-col">
              <h1>Email</h1>
              <p>johan@example.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-500">
            <h1>Send us a message</h1>
            <div className="flex flex-col">
              <label htmlFor="">Full Name</label>
              <input
                className="border border-gray-300 bg-white rounded-2xl px-4 py-2 w-full"
                placeholder="mjohanbintangp"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
