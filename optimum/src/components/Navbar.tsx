import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-6 flex justify-between bg-neutral-900 bg-opacity-20 hover:bg-black transition duration-300 ease-in-out fixed w-[100%]">
      <Link to="/">
        <h1 className="text-[20px] font-bold">
          <span className="text-teal-700">Optimum</span>
          <span className="text-neutral-300 mx-1">Outreach</span>
        </h1>
      </Link>
      <div className="m-auto">
        <ul>
          <li className="font-semibold text-white flex space-x-8 text-[13px] ">
            <Link to="/Services">
              <h1 className="hover:text-neutral-200 ">SERVICES</h1>
            </Link>
            <Link to="/About">
              <h1 className="hover:text-neutral-200">ABOUT US</h1>
            </Link>
            <Link to="/Blog">
              <h1 className="hover:text-neutral-200">BLOG</h1>
            </Link>
            <Link to="/Contact-us">
              <h1 className="hover:text-neutral-200">CONTACT</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative right-10 flex items-center">
        <button className="text-white mx-6 my-1">
          <Link to="/Contact-us">Book a Call</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
