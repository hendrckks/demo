import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-3 flex justify-between bg-neutral-900 bg-opacity-20 hover:bg-black transition duration-300 ease-in-out fixed w-[100%]">
      <Link to="/">
        <h1 className="text-[19px] font-bold flex justify-center items-center p-1">
          <span className="text-yellow-500">Optimum</span>
          <span className="text-neutral-400 mx-1">Outreach</span>
        </h1>
      </Link>
      <div className="m-auto">
        <ul>
          <li className="font-semibold text-white flex space-x-10 text-[15px] font-DM-sans">
            <Link to="/Services">
              <h1 className="hover:text-blue-800 ">Services</h1>
            </Link>
            <Link to="/About">
              <h1 className="hover:text-blue-800">About Us</h1>
            </Link>
            <Link to="/Blog">
              <h1 className="hover:text-blue-800">Blog</h1>
            </Link>
            <Link to="/Contact-us">
              <h1 className="hover:text-blue-800">Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative right-10 flex items-center">
        <button className="text-white px-6 my-1 border-2 py-[1.5px] font-semibold">
          <Link to="/Contact-us">Book a Call</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
