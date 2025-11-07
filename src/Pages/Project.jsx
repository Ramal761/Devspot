import { ArrowUpRight, Dribbble, Facebook, Github, MessageCircle, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section
      id="project"
      className="h-screen  overflow-x-hidden"
    >
        <div className="w-full h-56 bg-gray-100 ">
         <h1 className="p-30 font-bold text-4xl text-blue-950">
         Projects
      </h1> 
        </div>
       <svg
  className="w-full  rotate-180 "
  viewBox="0 0 4937 100"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#F3F4F6"
    d="M0,10L34.3,18.3C68.6,27,137,43,206,55C274.3,67,343,73,411,75C480,77,549,73,617,65C685.7,57,754,43,823,33.3C891.4,23,960,17,1029,18.3C1097.1,20,1166,30,1234,31.7C1302.9,33,1371,27,1440,23.3C1508.6,20,1577,20,1646,28.3C1714.3,37,1783,53,1851,56.7C1920,60,1989,50,2057,40C2125.7,30,2194,20,2263,23.3C2331.4,27,2400,43,2469,55C2537.1,67,2606,73,2674,71.7C2742.9,70,2811,60,2880,50C2948.6,40,3017,30,3086,26.7C3154.3,23,3223,27,3291,36.7C3360,47,3429,63,3497,73.3C3565.7,83,3634,87,3703,75C3771.4,63,3840,37,3909,23.3C3977.1,10,4046,10,4114,10C4182.9,10,4251,10,4320,13.3C4388.6,17,4457,23,4526,28.3C4594.3,33,4663,37,4731,31.7C4800,27,4869,13,4903,6.7L4937.1,0L4937.1,100L0,100Z"
  />
</svg>


<div className="flex flex-wrap w-full justify-center gap-5 p-12 mb-20 pt-20">
   
  {[
    {
      img: "../src/assets/thumbnail.d0b239cb31a71fddda97.png",
      title: "Unleash Your Mind with BrainStormer: Exploring the UI Design of a Cutting-Edge Quiz App"
    },
    {
      img: "../src/assets/thumbnail.73a6e1c0b285dc8da1bb.png",
      title: "Manthar – Your Ultimate Companion for Hassle-Free Online Bus Ticket Booking Across Pakistan"
    },
    {
      img: "../src/assets/thumbnail.e5848ea560566193af26 (1).png",
      title: "Welcome to SLOVE – Your Ultimate Destination for Streaming, Sharing, and Discovering Music Worldwide"
    }
,
     {
      img: "../src/assets/thumbnail.6f34ac1ec8fcf101dbb1.png",
      title: "Unleash Your Mind with BrainStormer: Exploring the UI Design of a Cutting-Edge Quiz App"
    },
    {
      img: "../src/assets/thumbnail.27d52a9ae2040f8ed4a4.png",
      title: "Manthar – Your Ultimate Companion for Hassle-Free Online Bus Ticket Booking Across Pakistan"
    },
    {
      img: "../src/assets/thumbnail.dadec973137d43c0fcb9.png",
      title: "Welcome to SLOVE – Your Ultimate Destination for Streaming, Sharing, and Discovering Music Worldwide"
    }
,
     {
      img: "../src/assets/thumbnail.3e3ccf792ad1e6e8f90b.png",
      title: "Unleash Your Mind with BrainStormer: Exploring the UI Design of a Cutting-Edge Quiz App"
    },
    {
      img: "../src/assets/thumbnail.cef3f20ac5ce8c2c56f3.png",
      title: "Manthar – Your Ultimate Companion for Hassle-Free Online Bus Ticket Booking Across Pakistan"
    },
    {
      img: "../src/assets/thumbnail.611b66e244e2ee3ea3a2.png",
      title: "Welcome to SLOVE – Your Ultimate Destination for Streaming, Sharing, and Discovering Music Worldwide"
    },
   
    

  ].map((item, i) => (
  <div
    key={i}
    className={`${
      i >= 3 ? "mt-20" : "" 
    }`}
  >
    <div className="relative h-full w-[350px] ">
      <img
        src="../src/assets/logo_without_text.8694dff2e5004a9c04bc.png"
        alt="logo"
        className="w-16 absolute top-2 left-2 transition-all duration-300 group-hover:scale-105"
      />
      <img
        src={item.img}
        alt="thumbnail"
        className="rounded-2xl w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-center mt-3">
      <h1 className="w-72 font-semibold text-gray-800 cursor-pointer group-hover:text-primaryColor transition-colors duration-300">
        {item.title}
      </h1>
        <Link to="/projectdetails">
      <button className="rounded-full w-10 h-10 border border-orange-400 hover:bg-orange-400">
        <ArrowUpRight className="text-orange-400 m-2 hover:text-white" />
      </button>
      </Link>
    </div>
  </div>
))}
  
</div>
   <section
        id="contact"
        className="w-full min-h-screen flex items-start justify-center bg-white px-6"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl w-full">
          {/* Left Text Section */}
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
                  src="../src/assets/logo_without_line.bdc589508ea85f49e393.png"
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

          <hr className="my-6 border-gray-200 lg:my-8 " />
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

    </section>
  );
};

export default Project;
