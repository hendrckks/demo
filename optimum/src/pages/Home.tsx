import { Link } from "react-router-dom";
import "../Home.css";
// import CaseStudy from "./CaseStudy";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Services from "./Services";
import Footer from "./Footer";
import down from "../assets/arrowdown.png";

function Home() {
  return (
    <div className="w-full">
      <div
        id="home"
        className="bg-cover bg-center sm:h-[100vh] h-[30%] p-auto w-100vw home-background"
      >
        <div className="gap-x-4 text-white justify-center items-center m-auto sm:py-52 py-44 font-DM-sans sm:w-auto w-full ">
          <h1 className=" sm:text-4xl text-[22px] flex justify-center items-center font-semibold">
            Welcome To <span className="sm:mx-3 mx-2">Optimum</span>{" "}
            <span className="mx-[0.5px] text-[#787878]">Outreach .</span>
          </h1>
          <div className="flex justify-center">
            <div className="sm:w-auto w-[320px] overflow-hidden my-4 flex-col sm:text-[40px] text-[20px] block">
              <h1 className="font-semibold flex justify-center items-center mx-auto">
                Your Full-Service Digital Patner. Elevate Your Business
              </h1>
              <h1 className=" font-semibold flex justify-center items-center">
                With Expert Solutions.
              </h1>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="sm:text-[17px] text-[14px] sm:w-auto w-[300px] flex-col justify-center">
              <p className="font-semibold flex justify-center items-center">
                Unlock Your Growth Potential. Get Bespoke Services Tailored to
                Your Company.
              </p>
              <p className="flex justify-center font-semibold items-center">
                solutions, branding and creative design.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:mt-14 mt-8 font-semibold space-x-4">
            <div className="w-auto">
              <Link to="/Contact-us">
                <button
                  className="border-2 sm:w-auto w-auto rounded-full bg-white text-black hover:scale-110 transition-transform duration-200"
                  type="button"
                >
                  <h2 className="px-6 py-4 sm:text-[17px] text-[12px]">
                    Request Free Audit
                  </h2>
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:flex hidden justify-center items-center absolute space-x-2 -rotate-90 right-1 bottom-[120px]">
            <img className="w-16 h-10" src={down} alt="arrow" />
            <p className="text-[12px] text-black font-semibold">SCROLL DOWN</p>
          </div>
        </div>
      </div>
      <Services />
      {/* <CaseStudy /> */}
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
