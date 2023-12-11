import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

interface ActiveLinks {
  home: boolean;
  services: boolean;
  about: boolean;
  blog: boolean;
  contact: boolean;
  faqs: boolean;
}

function Navbar() {
  const [activeLinks, setActiveLinks] = useState<ActiveLinks>({
    home: false,
    services: false,
    about: false,
    blog: false,
    contact: false,
    faqs: false,
  });

  const toggleActive = (link: keyof ActiveLinks) => {
    setActiveLinks((prevActiveLinks) => {
      const updatedLinks = Object.keys(prevActiveLinks).reduce(
        (acc, currentLink) => {
          acc[currentLink as keyof ActiveLinks] =
            currentLink === link
              ? !prevActiveLinks[currentLink as keyof ActiveLinks]
              : false;
          return acc;
        },
        {} as ActiveLinks
      );
      return updatedLinks;
    });
  };

  return (
    <div className="flex justify-center items-center font-[1000] custom-fonts">
      <div
        className="bottom-10 flex bg-black bg-opacity-100 backdrop-blur-[8px] transition duration-500 ease-in-out fixed w-fit p-3 rounded-full group  
       shadow-white"
      >
        <div className="m-auto">
          <ul>
            <li className="text-white flex space-x-[5px] text-[15px] font-DM-sans items-center py-[-10px]">
              <Link
                to="/"
                className={`justify-center flex items-center rounded-full p-3 ${
                  activeLinks.home ? "bg-white text-black" : ""
                } hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-[90px]`}
                onClick={() => toggleActive("home")}
              >
                <h1>Home</h1>
              </Link>
              <Link
                to="/Services"
                className={`justify-center flex items-center rounded-full p-3 ${
                  activeLinks.services ? "bg-white text-black" : ""
                } hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-[90px]`}
                onClick={() => toggleActive("services")}
              >
                <h1>Services</h1>
              </Link>
              <Link
                to="/About"
                className={`rounded-full p-3 justify-center flex items-center hover:bg-white hover:text-black transition duration-500 ease-in-out w-[90px] ${
                  activeLinks.about ? "bg-white text-black" : ""
                }`}
                onClick={() => toggleActive("about")}
              >
                <h1>About Us</h1>
              </Link>
              <Link
                to="/Blog"
                className={`rounded-full p-3 w-[90px] flex items-center justify-center hover:bg-white hover:text-black transition duration-500 ease-in-out ${
                  activeLinks.blog ? "bg-white text-black" : ""
                }`}
                onClick={() => toggleActive("blog")}
              >
                <h1>Blog</h1>
              </Link>
              <Link
                to="/Contact-us"
                className={`rounded-full p-3 hover:bg-white justify-center flex items-center hover:text-black transition duration-500 ease-in-out w-[90px] ${
                  activeLinks.contact ? "bg-white text-black" : ""
                }`}
                onClick={() => toggleActive("contact")}
              >
                <h1>Contact</h1>
              </Link>
              <Link
                to="/FAQs"
                className={`rounded-full p-3 hover:bg-white justify-center flex items-center hover:text-black transition duration-500 ease-in-out w-[90px] ${
                  activeLinks.faqs ? "bg-white text-black" : ""
                }`}
                onClick={() => toggleActive("faqs")}
              >
                <h1>FAQs</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
