import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-bold">
     
      <div className="flex justify-between w-4/6 items-center bg-gray-800 shadow-md shadow-black px-10 py-4 rounded-br-full">
       
        <div>
          <Link to="/" className="text-white hover:text-gray-300 drop-shadow-lg shadow-white">
            Home
          </Link>
        </div>
       
        <div className="hidden sm:block w-5/6">
          <ul className="flex justify-evenly ">
            <li>
              <Link to="/skills" className="text-white hover:text-gray-300">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/hireme" className="text-white hover:text-gray-300">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="block sm:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="bg-gray-800 px-4 py-2 sm:hidden">
          <ul className=" text-white flex flex-col space-y-2">
            <li>
              <Link to="/" className=" hover:text-green-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className=" hover:text-green-300" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className=" hover:text-green-300" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className=" hover:text-green-300" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/hireme" className=" hover:text-green-300" onClick={toggleMenu}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
