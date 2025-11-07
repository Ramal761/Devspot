import React, { useEffect, useState } from "react";




import divider from "../assets/download.png";
import logo from "../assets/logo_without_line.bdc589508ea85f49e393.png";
import logoWithoutText from "../assets/logo_without_text.8694dff2e5004a9c04bc.png";

import { ArrowUpRight, ChevronLeft, ChevronRight, Facebook,
  Twitter,
  Github,
  Dribbble,
  MessageCircle,
 } from "lucide-react";
import img1 from "../assets/slove.2b41320e66a823ecbd4f53d5bdafb56e.svg";
import img2 from "../assets/tcs.50d91beb7c4baa7e38705912f462c299.svg";
import img3 from "../assets/islam360.cc1fc84b7a6fbd621343a0646bb75929.svg";
import img4 from "../assets/manthar.bd2f84e5ca5f12e1bd40.jpg";
import img5 from "../assets/GOVT.4ea96f5c8fd782e494110e2b5187e8c3.svg";
import img6 from "../assets/karzone.f1d853a5f2bf19a6382a3d22d7e15125.svg";
import img7 from "../assets/college_choice_101.692936f8526fc73c87640fc96a7fbcf1.svg";
import img8 from "../assets/sanaidee.e4ef883a8c91c6802b9c33ea3153b3a7.svg";
import { Link } from "react-router-dom";
 




import s1 from "../assets/gen-ai.4debed1be59aedb40b16.webp";
import s2 from "../assets/app.1bdc2a9bf0aa5b536145.webp";
import s3 from "../assets/staff-augmentation.6ef5ef8473c0775a7006.webp";
import s4 from "../assets/devops.d7292b47afe57275b242.webp";
import s5 from "../assets/UIux.dfd9118771d997e340d6.webp";
import s6 from "../assets/webdev.46792be54dda855c93d1.webp";
import s7 from "../assets/Custom-software-development.60201810629638bfe540.webp";
import s8 from "../assets/Data-Analytics.36e15d640de5a7cd2f69.webp";
import s9 from "../assets/Cloud-Integration.745aac2bcb8e2313320f.webp";
import s10 from "../assets/quality-assurance.9dca9f5f838f4c90a0c2.webp";
import s11 from "../assets/web-design.42b4290222cde15d9713.webp";
import s12 from "../assets/SaaS.c6dbde4b9fcb8bc4357c.webp";



import phpLogo from "../assets/php-logo.bb5b04a0a132a9a512be.png";
import flutterLogo from "../assets/flutter-logo.f5928f941cedc0416f41.png";
import reactLogo from "../assets/react-logo.08aa92609e25b3be078f.png";
import nodejsLogo from "../assets/nodejs-logo.8554552a79e2305d4270.png";
import expressLogo from "../assets/express-js-logo.0753fdbd9e3ac30a5a89.png";
import laravelLogo from "../assets/laravel-logo.77392bcc0ce40226f7c3.png";
import figmaLogo from "../assets/figma-logo.6730d6604d7ee8d8fe7e.png";
import pythonLogo from "../assets/python_logo.003220f38009e046bb04.png";
import langgraphLogo from "../assets/langgraph_logo.265d8f0502836cef91e1.png";
import pytorchLogo from "../assets/pytorch_logo.f51803954e5c4cbff903.png";
import langchainLogo from "../assets/langchain_logo.c5ee2032ee6d42216f12.png";
import tensorflowLogo from "../assets/Tensorflow_logo.3bcfaf6f32a6f12a6064.png";
import n8nLogo from "../assets/n8n-logo-hd.0ef6276fbf326697cf82.webp";



import project1 from "../assets/thumbnail.3e3ccf792ad1e6e8f90b.png";
import project2 from "../assets/thumbnail.cef3f20ac5ce8c2c56f3.png";
import project3 from "../assets/thumbnail.611b66e244e2ee3ea3a2.png";


const Home= () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [visibleCount, setVisibleCount] = useState(4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1); 
      else if (window.innerWidth < 768) setVisibleCount(2); 
      else if (window.innerWidth < 1024) setVisibleCount(3); 
      else setVisibleCount(4); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 2s
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = Array.from({ length: visibleCount }).map((_, i) => {
    return images[(index + i) % images.length];
  });

  
  
  const [showAll, setShowAll] = useState(false);
  
  
   
  const services = [
  { title: "Web Development", img: s1 },
  { title: "App Development", img: s2 },
  { title: "UI/UX Design", img: s3 },
  { title: "Digital Marketing", img: s4 },
  { title: "SEO Optimization", img: s5 },
  { title: "Cloud Solutions", img: s6 },
  { title: "E-Commerce", img: s7 },
  { title: "Brand Strategy", img: s8 },
  { title: "AI Integration", img: s9 },
  { title: "Data Analytics", img: s10 },
  { title: "Cybersecurity", img: s11 },
  { title: "Maintenance & Support", img: s12 },
];

  
  

  const visibleServices = showAll ? services : services.slice(0, 3);
    
  const steps = [
    {
      title: "Start & Discover Phase",
      desc: "Without a well-structured plan, the development of the application is worthless. Planning ascertains the strengths and weaknesses of a project, gives it a perfect start, and affects its growth positively.",
    },
    {
      title: "Requirement Analysis",
      desc: "This step is about analyzing the recital of the application at different stages and creating remarks on add-on necessities. The analysis ensures that the project progresses in the right direction.",
    },
    {
      title: "Design Specification",
      desc: "After requirement analysis, the designing phase builds the structural design of the app, optimizing resource use while meeting time and budget specifications.",
    },
    {
      title: "Development & Implementation",
      desc: "Here the real task of app development begins, with continuous data recording. Once developed, implementation and pilot testing ensure all steps function properly.",
    },
    {
      title: "Testing & Debugging",
      desc: "After implementation, the product undergoes rigorous testing and debugging to identify and document errors and ensure quality performance.",
    },
    {
      title: "Maintenance & Support",
      desc: "A continuous process that identifies updates needed for market changes, while providing full dedicated support to clients when required.",
    },
  ];
  
  const techStack = [
  { name: "PHP", logo: phpLogo },
  { name: "Flutter", logo: flutterLogo },
  { name: "React Js", logo: reactLogo },
  { name: "Node Js", logo: nodejsLogo },
  { name: "Express Js", logo: expressLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "LangGraph", logo: langgraphLogo },
  { name: "PyTorch", logo: pytorchLogo },
  { name: "LangChain", logo: langchainLogo },
  { name: "Tensorflow", logo: tensorflowLogo },
  { name: "N8n", logo: n8nLogo },
];

const recentProjects = [
  {
    img: project1,
    title:
      "Unleash Your Mind with BrainStormer: Exploring the UI Design of a Cutting-Edge Quiz App",
  },
  {
    img: project2,
    title:
      "Manthar – Your Ultimate Companion for Hassle-Free Online Bus Ticket Booking Across Pakistan",
  },
  {
    img: project3,
    title:
      "Welcome to SLOVE – Your Ultimate Destination for Streaming, Sharing, and Discovering Music Worldwide",
  },
];

  

  

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div
        style={{
          transform: animate ? "translateY(0)" : "translateY(30px)",
          opacity: animate ? 1 : 0,
          transition: "all 1s ease-out",
        }}
        className="pt-20 md:pt-20 flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl 
                   px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-10 lg:py-24"
      >
        <div className="flex flex-col text-left w-full lg:w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-950 leading-tight">
       <span className=" block lg:inline">From Idea to</span>
     <br className="hidden lg:block" />
     <span className="text-yellow-500">delivery</span>
</h1>

          <p className="max-w-[550px] text-2xl sm:text-3xl md:text-4xl text-blue-950 mt-4">
            Unlock the full potential of your project with our company
          </p>

          <div className="text-[16px] sm:text-[18px] font-semibold flex flex-col gap-2 sm:gap-3 text-blue-950 mt-6 sm:mt-8">
            <p> Quality Product</p>
            <p> Latest Technology Stack</p>
            <p> Trusted by Startups to Fortune 500</p>
            <p> Faster Time to Market with an Agile Approach</p>
            <p> Top-tier Data Security Protocols</p>
            <p>On-time Delivery, No Surprises</p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[900px]  md:w-[500px] sm:w-[400px]  mt-12 sm:mt-14 md:mt-16 lg:mt-10 xl:mt-10">
          <div
            className="grid grid-cols-2 justify-center items-center
                       gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 md:ml-20 
                       w-full max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl "
          >
            {/* Box 1 */}
            <div className="rounded-full shadow-lg flex flex-col justify-center items-center 
                            w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64 text-center bg-white">
              <h1 className="text-yellow-500 font-extrabold text-4xl lg:text-6xl">10</h1>
              <p className="font-semibold lg:text-lg sm:text-xl text-sm text-blue-950">
                Years in Business
              </p>
            </div>

            {/* Box 2 */}
            <div className="rounded-full shadow-lg flex flex-col justify-center items-center 
                            w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64 text-center bg-white">
              <h1 className="text-yellow-500 font-extrabold text-4xl lg:text-6xl">250</h1>
              <p className="font-semibold lg:text-lg sm:text-xl text-sm text-blue-950 px-2 text-center">
                Mobile App Developers
              </p>
            </div>

            {/* Box 3 */}
            <div className="rounded-full shadow-lg flex flex-col justify-center items-center 
                            w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64 text-center bg-white">
              <h1 className="text-yellow-500 font-extrabold text-4xl lg:text-6xl">500</h1>
              <p className="font-semibold lg:text-lg sm:text-xl text-sm text-blue-950">
                Apps Delivered
              </p>
            </div>

            {/* Box 4 */}
            <div className="rounded-full shadow-lg flex flex-col justify-center items-center 
                            w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64 text-center bg-white">
              <h1 className="text-yellow-500 font-extrabold text-4xl lg:text-6xl">250</h1>
              <p className="font-semibold lg:text-lg sm:text-xl text-sm text-blue-950">
                Clients Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            {/* 2nd page */}


 <div className="relative w-full h-[700px] overflow-hidden">
      <svg
        className="w-full absolute md:top-0 sm:top-0 top-2 top-0 left-0 h-24"
        viewBox="0 0 4937 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-bottom" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243,244,245,1)" offset="0%" />
            <stop stopColor="rgba(243,244,245,1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-bottom)"
          d="M0,10L34.3,18.3C68.6,27,137,43,206,55C274.3,67,343,73,411,75C480,77,549,73,617,65C685.7,57,754,43,823,33.3C891.4,23,960,17,1029,18.3C1097.1,20,1166,30,1234,31.7C1302.9,33,1371,27,1440,23.3C1508.6,20,1577,20,1646,28.3C1714.3,37,1783,53,1851,56.7C1920,60,1989,50,2057,40C2125.7,30,2194,20,2263,23.3C2331.4,27,2400,43,2469,55C2537.1,67,2606,73,2674,71.7C2742.9,70,2811,60,2880,50C2948.6,40,3017,30,3086,26.7C3154.3,23,3223,27,3291,36.7C3360,47,3429,63,3497,73.3C3565.7,83,3634,87,3703,75C3771.4,63,3840,37,3909,23.3C3977.1,10,4046,10,4114,10C4182.9,10,4251,10,4320,13.3C4388.6,17,4457,23,4526,28.3C4594.3,33,4663,37,4731,31.7C4800,27,4869,13,4903,6.7L4937.1,0L4937.1,100L0,100Z"
        />
      </svg>

      <div className="flex flex-col items-center h-[570px] bg-gray-100 mt-14 pt-8">
        <h1 className="mt-10 text-center font-bold text-4xl md:text-5xl text-blue-950">
          Trusted by Global Enterprises
        </h1>
        <h2 className="mt-4 text-center font-semibold text-lg md:text-2xl text-blue-950 px-4 max-w-3xl">
          At Infoneo we support our customers through agile deliveries and more simplified solutions.
        </h2>

        <div className="relative w-full mt-10 flex justify-center items-center">
          <button
            onClick={prev}
            className="absolute left-4 sm:left-10 lg:left-20 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform z-20"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Images */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-transform duration-700 ease-in-out">
            {visibleImages.map((img, i) => (
              <div
                key={i}
                className="w-40 h-36 sm:w-48 sm:h-44 md:w-52 md:h-48 lg:w-56 lg:h-52 
                           bg-white border border-gray-200 rounded-md shadow-sm flex justify-center items-center 
                           hover:scale-105 transition-transform"
              >
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-32 sm:w-40 md:w-44 lg:w-48 object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-4 sm:right-10 lg:right-20 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform z-20"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>
      </div>

      <svg
        className="w-full rotate-180 "
        viewBox="0 0 4937 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F3F4F6"
          d="M0,10L34.3,18.3C68.6,27,137,43,206,55C274.3,67,343,73,411,75C480,77,549,73,617,65C685.7,57,754,43,823,33.3C891.4,23,960,17,1029,18.3C1097.1,20,1166,30,1234,31.7C1302.9,33,1371,27,1440,23.3C1508.6,20,1577,20,1646,28.3C1714.3,37,1783,53,1851,56.7C1920,60,1989,50,2057,40C2125.7,30,2194,20,2263,23.3C2331.4,27,2400,43,2469,55C2537.1,67,2606,73,2674,71.7C2742.9,70,2811,60,2880,50C2948.6,40,3017,30,3086,26.7C3154.3,23,3223,27,3291,36.7C3360,47,3429,63,3497,73.3C3565.7,83,3634,87,3703,75C3771.4,63,3840,37,3909,23.3C3977.1,10,4046,10,4114,10C4182.9,10,4251,10,4320,13.3C4388.6,17,4457,23,4526,28.3C4594.3,33,4663,37,4731,31.7C4800,27,4869,13,4903,6.7L4937.1,0L4937.1,100L0,100Z"
        />
      </svg>
    </div>
         
         {/* 3rd page */}

         <div className="flex flex-col items-center justify-center w-full overflow-hidden">

      <div className="w-full bg-white py-20 px-4 sm:px-10 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">
          Our Wide-ranging Technology Stack
        </h1>

        <p className="text-base sm:text-lg lg:text-xl font-medium text-blue-950 mt-6 max-w-4xl">
          We deploy the newest development technologies & frameworks using a systematically-defined agile approach to build scalable business applications. Our development team has deep expertise and handles your simple to complex requirements effortlessly.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 max-w-7xl">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-white flex flex-col items-center justify-center rounded-lg shadow-md w-36 h-32 sm:w-48 sm:h-40 lg:w-56 lg:h-44 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl 
              hover:rotate-10 hover:shadow-lg cursor-pointer"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
              />
              <p className="text-gray-500 text-sm sm:text-lg font-medium hover:text-gray-700 transition-all duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>  
     </div>
              
        {/* 4th page */}
           
           <img src={divider} alt="divider" className="w-full mt-20" />

             <div className="w-full bg-[#F6FCFF] py-20 flex flex-col items-center px-4 sm:px-10">
      <h1 className="text-center font-bold text-4xl sm:text-5xl text-blue-950 mb-16">
        DevSpots Services to Transform Your Business
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl w-full">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-64 object-cover rounded-2xl transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-3 text-white font-semibold text-lg sm:text-xl px-4">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-blue-950 text-white font-semibold text-lg rounded-full hover:bg-blue-800 transition-all duration-300"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
        </div>
    
      <img src={divider} alt="divider" />


      {/* 5th page */}
       
 <div className="py-20 flex flex-col items-center">
   <h1 className="text-center font-bold text-5xl text-blue-950 mb-16">
     Our Development Process
   </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl">
    {steps.map((step, index) => (
      <div
        key={index}
         className="p-6 rounded-xl bg-white cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
       >
        <div className="flex items-center justify-center mb-4">
          <div className="px-2 border rounded-full border-orange-400 relative animate-pulse">
             <div className="text-2xl text-orange-400 rounded-full py-1 bg-white px-6 border-8 border-orange-400 my-2">
               {index + 1}
             </div>

            <div className="border w-2 absolute -left-2 bg-white top-8 bottom-8 z-20 border-2 rounded-full p-1 border-orange-400"></div>

            <div className="border w-2 absolute -right-2 bg-white top-8 bottom-8 z-20 border-2 rounded-full p-1 border-orange-400"></div>
          </div>
        </div>

       <h2 className="text-xl font-bold text-gray-800 my-2 text-center">
          {step.title}
        </h2>
         <p className="text-lg text-gray-700 text-center">{step.desc}</p>       </div>
     ))}
   </div>
 </div>
 <style>
   {`
     @keyframes pulse {
       0%, 100% { transform: scale(1); }
       50% { transform: scale(1.08); }
     }
     .animate-pulse {
       animation: pulse 2.5s ease-in-out infinite;
     }
   `}
 </style>

  
      <div className="w-full mt-20 px-4 sm:px-10 flex flex-col items-center">
      {/* Section Title */}
      <h1 className="text-center font-bold text-5xl text-blue-950">
        Recent Projects
      </h1>
      <p className="text-[23px] font-semibold mt-8 text-center text-blue-950 max-w-6xl">
        We follow a well-defined development procedure to take an application from ideation to actualization, aiming to provide innovative app development solutions to our clients.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {recentProjects.map((item, i) => (
          <div key={i} className="group w-[350px]">
            <div className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden">
              
    <img
  src={logoWithoutText}
  alt="logo"
  className="w-16 absolute top-2 left-2"
/>
              <img
                src={item.img}
                alt="thumbnail"
                className="w-full h-full object-cover rounded-2xl "
              />
            </div>

            <div className="flex justify-between items-start mt-3">
              <h1 className="w-[300px] font-semibold text-gray-800 cursor-pointer group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                {item.title}
              </h1>
               <Link to="/projectdetails">
              <button className="rounded-full w-10 h-10 border border-orange-400 hover:bg-orange-400 transition-colors duration-300 flex items-center justify-center">
                <ArrowUpRight className="text-orange-400 hover:text-white" />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
       <Link to="/projectdetails">
        <button className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors duration-300">
          View All Projects
        </button>
        </Link>
      </div>
    </div>
       
      <div className="w-full h-full mt-40">
     <h1 className="text-center font-bold text-5xl text-blue-950">
      Engagement models</h1>
     <p className="text-[23px] font-semibold mt-8  mx-auto text-center text-blue-950">
 Explore our verstatile engagement models for seamless collaboration and project success
      </p>
        <div class="grid grid-cols-1 relative md:grid-cols-2 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
   <div class="p-6 rounded-3xl bg-gray-100 border border-transparent hover:border-orange-400 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
     <h1 class="text-2xl lg:text-3xl text-center font-semibold text-gray-800">Fixed Scope Fixed Price</h1>
     <hr class="my-3 text-gray-200"/>
     <ul class="text-lg text-gray-700 list-disc pl-5 space-y-1">
      <li>Predefined cost and timeline.</li>
      <li>No hidden charges.</li>
      <li>Best for small, well-defined projects.</li>
    </ul>
  </div>

  <div class="p-6 rounded-3xl bg-gray-100  border border-transparent hover:border-orange-400 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
    <h1 class="text-2xl lg:text-3xl w-30 mx-auto  text-center font-semibold text-gray-800">Time &amp; Material</h1>
   <hr class="my-3 text-gray-200"/>
   <ul class="text-lg text-gray-700 list-disc pl-5 space-y-1">
      <li>Flexible pricing based on work.</li>
      <li>Full control over changes.</li>
       <li>Ideal for evolving projects.</li>
     </ul>
   </div>

  <div class="p-6 rounded-3xl bg-gray-100 border border-transparent hover:border-orange-400 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
    <h1 class="text-2xl lg:text-3xl font-semibold w-30 text-center mx-auto text-gray-800">Dedicated Team</h1>
    <hr class="my-3 text-gray-200"/>
    <ul class="text-lg text-gray-700 list-disc pl-5 space-y-1">
      <li>Exclusive team for your project.</li>
      <li>Direct communication &amp; control.</li>
     <li>Best for long-term projects.</li>
    </ul>
  </div>

  <div class="p-6 rounded-3xl bg-gray-100 border border-transparent hover:border-orange-400 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
    <h1 class="text-2xl lg:text-3xl text-center font-semibold text-gray-800">Offshore Developers</h1>
    <hr class="my-3 text-gray-200"/>
    <ul class="text-lg text-gray-700 list-disc pl-5 space-y-1">
      <li>Cost-effective, high-quality work.</li>
      <li>Skilled developers as per needs.</li>
      <li>24/7 productivity with time zone advantage.</li>
    </ul>
  </div>
</div>
  </div>
    
    
    <section
  id="contact"
  className="w-full min-h-screen flex items-start justify-center bg-white px-5 lg:px-20 overflow-x-hidden"
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

    <form className="bg-gradient-to-tr from-[#ED8B29] to-[#FFD23F] rounded-3xl px-10 py-10 flex flex-col gap-5 w-full max-w-xl shadow-lg overflow-hidden">
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
          I agree to the <span className="underline cursor-pointer">privacy policy</span>
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

<footer className="bg-gray-100 border-t border-gray-300 mt-10 w-screen overflow-x-hidden">
  <div className="max-w-screen-xl mx-auto px-5 lg:px-20 py-6 lg:py-8">
    <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
      <div className="flex items-center">
        <a href="#/" className="flex items-center">
         
         <img src={logo} alt="Devspots Logo" className="h-12" />

        </a>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 text-gray-700">
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#/blog" className="hover:underline">Blogs</a>
            </li>
            <li>
              <a href="#/projects" className="hover:underline">Projects</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="my-6 border-gray-200" />

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
      <span className="text-sm text-gray-500 text-center sm:text-left">
        © 2025 <a href="#" className="hover:underline font-medium">Devspots™</a>. All Rights Reserved.
      </span>

      <div className="flex justify-center sm:justify-start gap-5">
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

export default Home;

