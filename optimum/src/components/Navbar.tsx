import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center font-extrabold">
      <div className="bottom-10 flex bg-white bg-opacity-100 hover:bg-black transition duration-600 ease-in-out fixed w-fit p-3 rounded-full group ">
        <div className="m-auto">
          <ul>
            <li className="text-black flex space-x-10 text-[14px] font-DM-sans items-center">
              <Link
                to="/Home"
                className="rounded-full p-3 hover:bg-white hover:text-black transition duration-800 ease-in-out"
              >
                <h1>Home</h1>
              </Link>
              <Link
                to="/Services"
                className="rounded-full p-3 hover:bg-white hover:text-black transition duration-800 ease-in-out"
              >
                <h1>Services</h1>
              </Link>
              <Link
                to="/About"
                className="rounded-full p-3 hover:bg-white hover:text-black transition duration-800 ease-in-out"
              >
                <h1>About Us</h1>
              </Link>
              <Link
                to="/Blog"
                className="rounded-full p-3 w-[90px] flex items-center justify-center hover:bg-white hover:text-black transition duration-800 ease-in-out"
              >
                <h1>Blog</h1>
              </Link>
              <Link
                to="/Contact-us"
                className="rounded-full p-3 hover:bg-white hover:text-black transition duration-800 ease-in-out"
              >
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
