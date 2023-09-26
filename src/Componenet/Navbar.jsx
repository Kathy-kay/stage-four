import { Link } from "react-router-dom";
import { Link as ScrollLink, scrollSpy } from "react-scroll";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <header className="w-full shadow-lg bg-bay-300 py-4 px-6 sm:py-10 sm:px-28 font-bold sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between text-gray-300">
        <Link to="/" className="text-2xl sm:text-3xl">
          <h1>KATHY</h1>
        </Link>

        <nav className="hidden sm:block">
          <ol className="flex space-x-6 tracking-widest">
            <li>
              <ScrollLink to="/" smooth={true} duration={500} offset={-70}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="#about" smooth={true} duration={500} offset={-70}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="#projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="#contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact
              </ScrollLink>
            </li>
          </ol>
        </nav>

        <div className="sm:hidden">
          {/* Mobile menu icon (you can use an icon library like FontAwesome here) */}
          <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile menu items */}
          <div className="hidden absolute top-5 right-0 bg-bay-300 w-40 py-2 px-4 space-y-2 shadow-lg">
            <ScrollLink to="/" smooth={true} duration={500} offset={-70}>
              Home
            </ScrollLink>
            <ScrollLink to="#about" smooth={true} duration={500} offset={-70}>
              About
            </ScrollLink>
            <ScrollLink
              to="#projects"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </ScrollLink>
            <ScrollLink to="#contact" smooth={true} duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
