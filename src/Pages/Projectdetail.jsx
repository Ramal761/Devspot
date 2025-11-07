import { Dribbble, Facebook, Github, MessageCircle, Twitter } from "lucide-react";

import { useState, useEffect } from "react";

const ProjectDetail = () => {
 
  
  const images = [
  "src/assets/5.ab51930675108e3dbe54.png",
  "src/assets/0.aa4280f84f9f01226786.png",
  "src/assets/2.e408b238d73f1e0e1237.png",
  "src/assets/1.f119c83e4fa7ff858f29.png",
  "src/assets/6.0ca5439361dbb21b63f2.png",
  "src/assets/7.9cfd7177a28b2ea391f9.png",
];
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  const visibleImages = Array.from({ length: 4 }).map((_, i) => {
    const index = (startIndex + i) % images.length;
    return images[index];
  });

  return (
    <div className="h-screen">
      <div className="w-full h-80 bg-gray-100 flex p-36 ">
        <h1 className="font-bold text-4xl text-blue-950">
          Project Details
        </h1>
      </div>
        <div className="p-20">
            <h1 className="text-2xl font-semibold">Karzoun – Your All-in-One Mobile App for Smart Business and Social Media Management</h1>
            <p className="mt-3 text-[18px]">From customer engagement to employee task tracking, Karzoun is a unified mobile platform built to streamline your business operations. Whether you're managing marketing campaigns, organizing customer data, or automating repetitive workflows, Karzoun centralizes it all into one intelligent, easy-to-use app. Let’s explore how Karzoun transforms the way teams manage their digital presence and daily business functions.</p>
        </div>
      <div className="flex  justify-center items-center overflow-hidden ">
      <div className="flex w-full h-[520px] justify-center gap-8 transition-all duration-700 ease-in-out ">
        {visibleImages.map((src, i) => (
          <div
            key={i}
            className="relative w-72 h-[500px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
      </div>

             <section className="w-full  py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl font-bold mb-8 text-blue-950 text-center lg:text-left">
          Features
        </h1>

        <div className="grid grid-cols-1 gap-2">
          <div className="border border-gray-300  rounded-xl p-2  bg-white ">
            <h2 className="text-lg font-semibold ">
              Unified Dashboard for Total Oversight
            </h2>
            <p className="text-gray-700 text-justify">
              Karzoun brings together your social media, marketing, sales, and support
              functions into one centralized dashboard — giving you full control and visibility in real time.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white border-gray-300  ">
            <h2 className="text-lg font-semibold ">
              Customer Journey Tracking
            </h2>
            <p className="text-gray-700 text-justify">
              Understand and monitor the complete customer lifecycle — from first
              interaction to conversion and retention — with integrated data and behavioral insights.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white  border-gray-300 ">
            <h2 className="text-lg font-semibold ">
              Smart Marketing &amp; Retargeting Tools
            </h2>
            <p className="text-gray-700 text-justify">
              Launch, schedule, and manage campaigns across channels. Use built-in analytics
              to retarget users, optimize conversions, and increase engagement.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white border-gray-300 ">
            <h2 className="text-lg font-semibold ">
              Task and Workflow Automation
            </h2>
            <p className="text-gray-700 text-justify">
              Create automated workflows for repetitive tasks, assign duties to team members,
              and track task completion with intuitive project management tools.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white border-gray-300">
            <h2 className="text-lg font-semibold ">
              Real-Time Communication &amp; Support
            </h2>
            <p className="text-gray-700 text-justify">
              Engage with customers instantly through integrated chat, ticketing systems, and
              automated replies to ensure seamless support and fast resolution.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white border-gray-300">
            <h2 className="text-lg font-semibold ">
              Customer Database Management
            </h2>
            <p className="text-gray-700 text-justify">
              Organize, categorize, and search customer data effortlessly. Use tags, filters,
              and custom fields to segment users for better targeting and service.
            </p>
          </div>

          <div className="border rounded-xl p-2 bg-white border-gray-300">
            <h2 className="text-lg font-semibold ">
              Push Notifications &amp; Alerts
            </h2>
            <p className="text-gray-700 text-justify">
              Keep your team and your customers informed with smart alerts for tasks, updates,
              deadlines, and promotional campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>


    
       <section
        id="contact"
        className="w-full min-h-screen flex items-start justify-center bg-white px-6"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl w-full">
          <div className="flex flex-col w-full max-w-xl lg:text-left">
            <h1 className="text-4xl font-semibold text-gray-800 mb-3">
              <span className="text-orange-400">Contact</span> Us
            </h1>
            <p className="text-xl text-gray-700">
              We love making new connections. So, if you just want to say Hi,
              collaborate, or have a project in mind — we're happy to hear from you!
            </p>
          </div>

          <form className="bg-gradient-to-tr from-[#ED8B29] to-[#FFD23F] rounded-3xl px-10 py-10 flex flex-col gap-5 w-full max-w-xl shadow-lg">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              required
              className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email*"
              required
              className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition"
            />

            <input
              type="text"
              name="website"
              placeholder="Your website (if you have one)"
              className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition"
            />

            <textarea
              name="message"
              placeholder="Tell us a bit about your project*"
              required
              className="w-full bg-[#FFE0B2] px-5 py-4 rounded-xl placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition resize-none h-32 align-top"
            ></textarea>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                required
                className="cursor-pointer accent-[#000B27]"
              />
              <label htmlFor="privacy" className="text-sm text-[#000B27]">
                I agree to the{" "}
                <span className="underline cursor-pointer">privacy policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#000B27] rounded-full py-2 px-10 text-white w-fit mt-3 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300 mt-6">
        <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#/" className="flex items-center">
                <img
                  src="src/assets/logo_without_line.bdc589508ea85f49e393.png"
                  className="h-12 me-3"
                  alt="Devspots Logo"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 font-medium space-y-2">
                  <li>
                    <a href="#/blog" className="hover:underline">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#/projects" className="hover:underline">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025{" "}
              <a href="#" className="hover:underline font-medium">
                Devspots™
              </a>
              . All Rights Reserved.
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">Discord community</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub account</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <Dribbble className="w-5 h-5" />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>

       
    
  );
};

export default ProjectDetail;