import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Blog from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import ProjectDetail from "./Pages/Projectdetail";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, PhoneCall } from "lucide-react"; // Added WhatsApp icon

function App() {
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    } else {
      console.warn(
        "Contact section not found — make sure Home.jsx has id='contact'"
      );
    }
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className="hover:text-yellow-500 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="hover:text-yellow-500 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/projects"
        className="hover:text-yellow-500 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        className="hover:text-yellow-500 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Blogs
      </Link>
      <a
        href="#contact"
        onClick={scrollToContact}
        className="hover:text-yellow-500 transition-colors cursor-pointer"
      >
        Contact Us
      </a>
    </>
  );

  return (
    <>
      <nav
        style={{
          transform: animate ? "translateY(0)" : "translateY(-100%)",
          opacity: animate ? 1 : 0,
          transition: "all 0.8s ease-out",
        }}
        className="w-full fixed z-20 h-20 border-b border-yellow-400 bg-white shadow-sm flex items-center justify-between px-5 lg:px-36"
      >
        <img
          src="src/assets/logo_without_line.bdc589508ea85f49e393.png"
          alt="Logo"
          className="object-contain w-36 h-30"
        />

        <div className="hidden md:flex gap-6 text-blue-950 font-medium">
          {navLinks}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-950 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-yellow-400 shadow-lg flex flex-col items-center gap-4 py-4 text-blue-950 font-medium z-10 transition-all">
          {navLinks}
        </div>
      )}

      {/* 🔹 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetail />} />
        <Route path="/projectdetails" element={<ProjectDetail />} />
      </Routes>

  
  <a
  href="https://wa.me/923001234567"   
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.68 6.09L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.4l-.36-.22-3.67.96.98-3.58-.24-.37A9.92 9.92 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.47c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14s-.74.94-.9 1.14c-.17.2-.33.21-.62.07-.29-.14-1.21-.45-2.31-1.45a8.63 8.63 0 01-1.6-1.98c-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48-.17-.01-.36-.01-.55-.01-.2 0-.5.07-.76.36s-.99.97-.99 2.37.98 2.74 1.12 2.93c.14.19 1.93 2.94 4.68 4.12.65.28 1.16.44 1.55.56.65.2 1.24.17 1.71.1.52-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33z" />
  </svg>
</a>



    </>
  );
}

export default App;
