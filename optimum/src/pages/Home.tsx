import "../Home.css";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="gap-x-4 text-white justify-center items-center m-auto w-auto py-52 font-DM-sans max-w-[1020px]">
          <h1 className=" text-4xl flex justify-center items-center font-semibold">
            We Are <span className="mx-3">Optimum</span>{" "}
            <span className="text-neutral-600 mx-[0.5px]">Outreach.</span>
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
              A leading digital marketing agency dedicated to elevating your
              brand through multi-channel marketing
            </p>
            <p className="flex justify-center font-semibold items-center">
              solutions, branding and creative design.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
