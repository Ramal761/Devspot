import { Dribbble, Facebook, Github, MessageCircle, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    
    <section id="blogs" className="w-screen overflow-x-hidden">
  <div className="w-full h-56 bg-gray-100 flex  p-30">
    <h1 className="font-bold text-4xl text-blue-950">Blogs</h1>
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mx-auto w-fit">
  <div className=" flex flex-col w-96 h-[600px] border-2 border-gray-100 rounded-md ">
    <img  className="m-5 rounded-md h-60"  src="src/assets/blog1.292ece9c470db3ac47b9.jpeg" alt="" />
    <h1 className="text-2xl ml-6 font-semibold hover:text-orange-400 cursor-pointer">Why React Remains the Most Popular Frontend Library in<br/> 2025</h1>
    <p className="text-[18px] m-5 text-blue-950">In the ever-evolving world of web development, trends come and go, but React has consistently held its ground as the leading...</p>
    <Link to="/blogdetails">
  <button className="w-30 h-10 bg-orange-400 ml-5 rounded-md text-white text-[18px] cursor-pointer">
    Read More
  </button>
</Link>
  </div>

  <div className="w-96 h-[600px] flex flex-col border-2 border-gray-100 rounded-md  ">
    <img  className="m-5 rounded-md h-60"  src="src/assets/blog2.4243bf02ca200433663e.jpeg" alt="" />
    <h1 className="text-2xl ml-6 font-semibold hover:text-orange-400 cursor-pointer">Unlocking ROI: How Strategic Application Development <br/>Drives Business Growth</h1>
    <p className="text-[18px] m-5 text-blue-950">Strategic application development is a disciplined approach where every technical decision maps back to business objectives...</p>
   <Link to="/blogdetails">
  <button className="w-30 h-10 bg-orange-400 ml-5 rounded-md text-white text-[18px] cursor-pointer">
    Read More
  </button>
</Link>
  </div>


  <div className="w-96 h-[600px] flex flex-col border-2 border-gray-100 rounded-md ">
    <img  className="m-5 rounded-md h-60"  src="src/assets/blog3.0cf2c14f949b3fb3778a.jpeg" alt="" />
    <h1 className="text-2xl ml-6 font-semibold hover:text-orange-400 cursor-pointer">From Creativity to Automation: Uses and Opportunities of Generative AI</h1>
    <p className="text-[18px] m-5 text-blue-950">Generative artificial intelligence is reshaping how organisations and creators solve problems. Once mostly confined to labs...</p>
  <Link to="/blogdetails">
  <button className="w-30 h-10 bg-orange-400 ml-5 rounded-md text-white text-[18px] cursor-pointer">
    Read More
  </button>
</Link>
  </div>
  <div className="w-96 h-[600px] flex flex-col border-2 border-gray-100  rounded-md ">
   <img  className="m-5 rounded-md h-60"  src="src/assets/blog4.3f0ee18977cfd8965323.jpeg" alt="" />
    <h1 className="text-2xl ml-6 font-semibold hover:text-orange-400 cursor-pointer">Why Backend Optimization Matters More Than Ever in <br/>2025</h1>
    <p className="text-[18px] m-5 text-blue-950">In a digital world where attention spans are shorter than ever, performance is everything. Whether someone is using a SaaS...</p>
  <Link to="/blogdetails">
  <button className="w-30 h-10 bg-orange-400 ml-5 rounded-md text-white text-[18px] cursor-pointer">
    Read More
  </button>
</Link>  </div>
  <div className="w-96 h-[600px] flex flex-col border-2 border-gray-100 rounded-md  cursor-pointer">
    <img  className="m-5 rounded-md h-60"  src="src/assets/blog5.d639e3a09f1f6995d30b.jpeg" alt="" />
    <h1 className="text-2xl ml-6 font-semibold hover:text-orange-400 cursor-pointer">Deploying Smarter — Lessons I Learned from Real-World AWS Projects</h1>
    <p className="text-[18px] m-5 text-blue-950">Deployment is one of those stages in software development that can either make or break a project. You can write the cleanest...</p>
  <Link to="/blogdetails">
  <button className="w-30 h-10 bg-orange-400 ml-5 rounded-md text-white text-[18px] cursor-pointer">
    Read More
  </button>
</Link>
  </div>
</div>
   


   
   <section
        id="contact"
        className="w-full min-h-screen  flex items-start justify-center bg-white px-6"
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

          {/* Right Form Section */}
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

      {/* 🔹 Footer */}
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
    </section>
  );
};

export default Blog;
