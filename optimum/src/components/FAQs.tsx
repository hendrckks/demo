import { useState } from "react";
import "../FAQs.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQs() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const AccordionData = [
    {
      title: "How Much Do I Need To Pay To Get Started?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
    {
      title: "How Much Do I Need To Pay To Get Started?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
    {
      title: "How Much Do I Need To Pay To Get Started?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
  ];

  return (
    <div className="bg-[#1D1A27] h-[100vh] font-DM-sans">
      <div className="p-24 flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-semibold">All The A's For Your Q's</h1>
        <div className="flex flex-col justify-center items-center w-[520px] mt-16">
          {AccordionData.map((data, index) => (
            <div key={index} className="m-auto cursor-pointer">
              <div
                className="flex items-center py-3"
                onClick={() => toggle(index)}
              >
                <div className="flex-col bg-slate-300 p-8 rounded-xl cursor-pointer transform hover:translate-y-1 transition-transform duration-200 ease-in">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[20px] flex items-center ">
                      {data.title}
                    </h2>
                    <div className="text-[20px] flex items-centertransition-all ease-in-out 0.5s">
                      {selected == index ? <RemoveIcon /> : <AddIcon />}
                    </div>
                  </div>
                  <div
                    className={
                      selected == index
                        ? "max-h-[999px]"
                        : "max-h-0 transition-all 0.5s cubic-bezier(0,1,0,1) overflow-hidden"
                    }
                  >
                    <p className="flex items-center justify-center overflow-auto mt-4">
                      {data.Description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;

// "max-h-0 transition-all 0.5s cubic-beizer(0,1,0,1) overflow-hidden"
