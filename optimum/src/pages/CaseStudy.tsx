import "../Case.css";
import CaseCard from "../components/CaseCard";

const CaseStudy = () => {
  return (
    <div className="bg-[#222222] h-[100vh] font-DM-sans">
      <div className="p-24">
        <h1 className="text-white text-[70px] font-semibold tracking-widest">
          Case Studies
        </h1>
        <p className="w-[650px] mt-10 text-white text-[14px] ">
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah
        </p>
        <div className="rounded-[40px] p-4 mt-8 text-black bg-white w-fit h-fit flex items-center font-semibold hover:scale-105 transition-all ease-out">
          <button type="button" className="p-2">
            Explore Case Studies
          </button>
        </div>
      </div>
      <div className="px-24 mt-[-50px] flex space-x-3">
        <CaseCard className="bg-[#f59268]">
          <div className="flex items-center justify-center">
            <h2 className="text-[50px]">hello</h2>
          </div>
        </CaseCard>
        <CaseCard className="bg-[#fb6f8b]">
          <div>
            <h2 className="text-[50px]">hello</h2>
          </div>
        </CaseCard>
      </div>
    </div>
  );
};

export default CaseStudy;
