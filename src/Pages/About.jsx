
import { Dribbble, Facebook, Github, MessageCircle, Twitter } from "lucide-react";
import { useEffect, useState } from "react";


import ahmad from "../assets/ahmad.4b465c090513ec459867.png";
import humair from "../assets/humair.b53fe1d6abe0ecf40751.png";
import aqdas from "../assets/aqdas.d091e8270a272e1ee00c.png";
import gull from "../assets/gull.a6d30c439a1b7a17af4e.png";
import zahid from "../assets/zahid.e7dfaacf216d8c2bb19c.png";
import arif from "../assets/arif.678a24bc2963ea5c1689.png";
import logo from "../assets/logo_without_text.8694dff2e5004a9c04bc.png";
 import logo_without_line from "../assets/logo_without_line.bdc589508ea85f49e393.png";


import CEO from "../assets/CEO.319188af9d31f98c8a3b.png";

const About = () => {
  
     const teamMembers = [
  { img: ahmad, logo, name: "Ahmad Ali", skills: "UI/UX Designer" },
  { img: humair, logo, name: "Ali Raza", skills: "Frontend Developer" },
  { img: aqdas, logo, name: "Abdul Malik", skills: "Backend Engineer" },
  { img: gull, logo, name: "Hassan Iqbal", skills: "Project Manager" },
  { img: zahid, logo, name: "Ahmed", skills: "QA Analyst" },
  { img: arif, logo, name: "Usman Tariq", skills: "Full Stack Developer" },
];


  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const visibleMembers = Array.from({ length: 3 }).map((_, i) => {
    const index = (startIndex + i) % teamMembers.length;
    return teamMembers[index];
  });

  return (

    <>
    <section id="about" className="w-full overflow-x-hidden">
             <div className=" h-56 bg-gray-100">     
                 <h1 className="p-30 font-bold text-4xl text-blue-950">
         About Us

     </h1> 
        </div>
        <svg
      className="  rotate-180 "
        viewBox="0 0 4937 100"
      xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#F3F4F6"
    d="M0,10L34.3,18.3C68.6,27,137,43,206,55C274.3,67,343,73,411,75C480,77,549,73,617,65C685.7,57,754,43,823,33.3C891.4,23,960,17,1029,18.3C1097.1,20,1166,30,1234,31.7C1302.9,33,1371,27,1440,23.3C1508.6,20,1577,20,1646,28.3C1714.3,37,1783,53,1851,56.7C1920,60,1989,50,2057,40C2125.7,30,2194,20,2263,23.3C2331.4,27,2400,43,2469,55C2537.1,67,2606,73,2674,71.7C2742.9,70,2811,60,2880,50C2948.6,40,3017,30,3086,26.7C3154.3,23,3223,27,3291,36.7C3360,47,3429,63,3497,73.3C3565.7,83,3634,87,3703,75C3771.4,63,3840,37,3909,23.3C3977.1,10,4046,10,4114,10C4182.9,10,4251,10,4320,13.3C4388.6,17,4457,23,4526,28.3C4594.3,33,4663,37,4731,31.7C4800,27,4869,13,4903,6.7L4937.1,0L4937.1,100L0,100Z"
   /> </svg>

     

      <div className="flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-20 py-12 gap-8">
         <img className="w-48 sm:w-60 lg:w-72" src={CEO} alt="CEO" />
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-950">Syed Aleem Haider</h1>
          <p className="text-blue-600 font-semibold text-lg sm:text-xl mt-2">Chief Executive Officer</p>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            At DevSpots.us, we believe technology should not just solve problems. It should anticipate them. Every line of code we write, every AI agent we build, and every platform we design is driven by one purpose: to create intelligence that empowers. We’re not just developers; we’re enablers of the future — where businesses thrive through automation, and innovation becomes instinct. Let’s build a world where your digital presence doesn’t just exist — it evolves.
          </p>
        </div>
      </div>

      <div className="flex flex-col  gap-8 px-6 lg:px-44 mb-12">
        <div className="flex-1 bg-[#FABD38] rounded-3xl p-16 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Empowering Businesses, Inspiring Innovation</h2>
          <p className="text-white mt-2 text-sm sm:text-base">
            At DevSpots, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence, a global team of over 2,000 experts, and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.
          </p>
          <button className="absolute bottom-6 right-6 bg-white text-orange-400 rounded-lg px-4 py-2 font-semibold hover:scale-105 transition">Get in Touch</button>
        </div>

        <div className="flex-1 flex flex-col gap-6">
                      <h3 className="font-bold lg:text-2xl text-xl mb-2">Our Mission</h3>
          <div className="bg-white border border-gray-300 rounded-3xl p-14 relative">
            <svg 
           className="w-20 h-20  text-black absolute right-14 bg-orange-400 rounded-full p-4  lg:bottom-[140px] bottom-[210px] md:bottom-[150px]  sm:bottom-[160px] "
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="currentColor">
              <path d="M14.5 7H12V5C12 3.89688 12.8969 3 14 3H14.25C14.6656 3 15 2.66563 15 2.25V0.75C15 0.334375 14.6656 0 14.25 0H14C11.2375 0 9 2.2375 9 5V12.5C9 13.3281 9.67188 14 10.5 14H14.5C15.3281 14 16 13.3281 16 12.5V8.5C16 7.67188 15.3281 7 14.5 7ZM5.5 7H3V5C3 3.89688 3.89688 3 5 3H5.25C5.66563 3 6 2.66563 6 2.25V0.75C6 0.334375 5.66563 0 5.25 0H5C2.2375 0 0 2.2375 0 5V12.5C0 13.3281 0.671875 14 1.5 14H5.5C6.32812 14 7 13.3281 7 12.5V8.5C7 7.67188 6.32812 7 5.5 7Z" />
            </svg>
            <p className=" lg:text-lg text-sm sm:text-base">
              To deliver next-generation web, mobile, and AI-driven solutions that redefine user experience, automate complexity, and unlock boundless potential for global enterprises through technology that thinks, adapts, and evolves.
            </p>
          </div>

          <h3 className="font-bold lg:text-2xl  text-xl mb-2">Our Vision</h3>
          <div className="bg-white border border-gray-300 rounded-3xl p-14 relative">
          <svg
           className="w-20 h-20  text-black absolute right-14 bg-orange-400 rounded-full p-4  lg:bottom-[140px] bottom-[190px] md:bottom-[140px] sm:bottom-[160px] "
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="currentColor">
           <path d="M14.5 7H12V5C12 3.89688 12.8969 3 14 3H14.25C14.6656 3 15 2.66563 15 2.25V0.75C15 0.334375 14.6656 0 14.25 0H14C11.2375 0 9 2.2375 9 5V12.5C9 13.3281 9.67188 14 10.5 14H14.5C15.3281 14 16 13.3281 16 12.5V8.5C16 7.67188 15.3281 7 14.5 7ZM5.5 7H3V5C3 3.89688 3.89688 3 5 3H5.25C5.66563 3 6 2.66563 6 2.25V0.75C6 0.334375 5.66563 0 5.25 0H5C2.2375 0 0 2.2375 0 5V12.5C0 13.3281 0.671875 14 1.5 14H5.5C6.32812 14 7 13.3281 7 12.5V8.5C7 7.67188 6.32812 7 5.5 7Z" />
            </svg>
            <p className="lg:text-lg text-sm sm:text-base">
              To pioneer the future of intelligent digital transformation by merging innovation, design, and autonomous AI — empowering businesses to operate smarter, faster, and more humanly.
            </p>
          </div>
        </div>
          </div>
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center sm:text-left">
          Our <span className="text-orange-400">Values</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[ 
            { id: 1, title: "Ship & Iterate", desc: "We move swiftly, refining our approach with every step to maintain a leading edge." },
            { id: 2, title: "Trusted Pair of Hands", desc: "Dependable and steadfast, we are always there when it matters most." },
            { id: 3, title: "Overdeliver on the Promise", desc: "Exceeding expectations is our standard, going beyond what’s assured." },
            { id: 4, title: "Clear is Kind", desc: "Transparent, honest communication keeps everyone on the same page." }
          ].map((value) => (
            <div key={value.id} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 border border-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center border-4 border-orange-400 rounded-full text-orange-500 font-semibold">{value.id}</div>
                </div>
                <h3 className="text-lg font-bold">{value.title}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-full w-full py-10 px-6 lg:px-20">
        <h3 className="text-center text-4xl font-bold mb-10 text-gray-800">Our Team</h3>

        <div className="flex flex-wrap justify-center gap-8 transition-all duration-700 ease-in-out">
          {visibleMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center w-full sm:w-80">
              <div className="relative w-full h-64 sm:h-80 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                <img src={member.logo} alt="Logo" className="absolute top-3 left-3 w-16 h-16 rounded-full" />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     
   
      <section
        id="contact"
        className="w-full min-h-screen flex items-start justify-center bg-white px-6 "
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
  src={logo_without_line}
  className="h-12 m-3"
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
        </>
  );
};

export default About;
