import "../Case.css";
import CaseCard from "../components/CaseCard";

const CaseStudy = () => {
  return (
    <div className="bg-[#222222] h-[100vh] font-DM-sans w-full">
      <div className="p-10 ">
        <h1 className="text-white text-[70px] font-semibold tracking-widest justify-center flex">
          Case Studies
        </h1>
        <div className="flex justify-center">
          <p className="w-[650px] mt-5 text-white text-[14px] ">
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah
          </p>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="rounded-full p-4 mt-8 text-black bg-white w-fit h-fit font-semibold hover:scale-110 transition-transform ease-out duration-200">
            <button type="button" className="p-2">
              Explore Case Studies
            </button>
          </div>
        </div>
      </div>
      <div className="p-12 mt-[-50px] flex space-x-3 justify-center items-center">
        <CaseCard className="bg-[#f59268]">
          <div className="flex items-center justify-center">
            <h2 className="text-[50px]">hello</h2>
          </div>
        </CaseCard>
        <CaseCard className="bg-[#fb6f8b]">
          <div className="flex items-center justify-center">
            <h2 className="text-[50px]">hello</h2>
          </div>
        </CaseCard>
      </div>
    </div>
  );
};

export default CaseStudy;
