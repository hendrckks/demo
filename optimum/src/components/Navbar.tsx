import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-3 flex justify-between bg-teal-200">
      <h1 className="font-bold">
        <span className="text-teal-700">Optimum</span>
        <span className="text-neutral-600">Outreach</span>
      </h1>
      <div className="m-auto">
        <ul>
          <li className="font-semibold text-neutral-600 flex space-x-4 ">
            <Link to="/Services">
              <h1 className="hover:text-black ">SERVICES</h1>
            </Link>
            <Link to="/Services">
              <h1 className="hover:text-black">ABOUT US</h1>
            </Link>
            <Link to="/Services">
              <h1 className="hover:text-black">BLOG</h1>
            </Link>
            <Link to="/Services">
              <h1 className="hover:text-black">CONTACT</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
