import "../Home.css";
import Contact from "../components/Contact";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Services from "./Services";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="gap-x-4 text-white justify-center items-center m-auto w-auto py-52 font-DM-sans">
          <h1 className=" text-4xl flex justify-center items-center font-semibold">
            Welcome To <span className="mx-3">Optimum</span>{" "}
            <span className="text-neutral-600 mx-[0.5px]">Outreach .</span>
          </h1>
          <div className="w-auto overflow-hidden my-5 mx-auto flex-col text-[40px]">
            <h1 className=" font-semibold flex justify-center items-center">
              Your Full-Service Digital Patner. Elevate Your Business With
            </h1>
            <h1 className=" font-semibold flex justify-center items-center">
              Expert Solutions .
            </h1>
          </div>
          <div className="text-[17px]">
            <p className="font-semibold flex justify-center items-center">
              Unlock Your Growth Potential. Get Bespoke Services Tailored to
              Your Company.
            </p>
            <p className="flex justify-center font-semibold items-center">
              solutions, branding and creative design.
            </p>
          </div>
          <div className="flex items-center justify-center mt-14 font-semibold  space-x-4">
            <div className="w-auto">
              <button className="border-2 " type="button">
                <h2 className="px-6 py-4 text-[17px]">
                  Request A Free Proposal
                </h2>
              </button>
            </div>
            <div className="w-auto flex items-center justify-center group">
              <button className="cursor-pointer" type="button">
                <h2 className="px-6 py-4 text-[17px]">Get Started</h2>
              </button>
              <div className="relative right-3 ">
                <ArrowCircleRightIcon className="text-white group-hover:text-blue-900 group-hover:scale-150 transition-transform duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center absolute space-x-2 -rotate-90 right-1 bottom-[120px]">
            <img
              className="w-16 h-10"
              src="/src/assets/arrow.png"
              alt="arrow"
            />
            <p className="text-[12px] text-black font-semibold">SCROLL DOWN</p>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
