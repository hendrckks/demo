import { useState } from "react";
import "../FAQs.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQs() {
  const [selected, setSelected] = useState(null);

  const toggle = (index: number) => {
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
    <div className="faq-wrapper">
      <div className="p-24 flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-semibold text-white">
          All The A's For Your Q's
        </h1>
        <div className="flex flex-col justify-center items-center w-[720px] mt-16">
          {AccordionData.map((data, index) => (
            <div key={index} className="m-auto cursor-pointer">
              <div
                className="flex items-center py-3"
                onClick={() => toggle(index)}
              >
                <div className="flex-col bg-[#d8962e] text-black p-10 rounded-[22px] cursor-pointer transform hover:translate-y-1 transition-transform duration-300 ease-in inset-0 delay-0 shadow-md">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[20px] flex items-center ">
                      {data.title}
                    </h2>
                    <div className="flex items-center transition-shadow transform ease-in-out duration-300">
                      {selected == index ? (
                        <RemoveIcon className="text-[30px]" />
                      ) : (
                        <AddIcon className="text-[30px]" />
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      selected == index
                        ? "max-h-[999px]"
                        : "max-h-0 transition-shadow duration-300 cubic-bezier(0,1,0,1) overflow-hidden ease-in-out"
                    }
                  >
                    <p className="flex items-center justify-center overflow-auto mt-4 text-neutral-900">
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
