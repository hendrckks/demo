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
      title: "How do I Determine my Marketing Budget?",
      Description:
        "There's no 'one size fits all' answer to this question, as the amount you should allocate will depend on various factors, such as the size of your business, your long-term goals, and the industries you operate in. However, as a general rule, companies should be spending between 2-5% of their total revenue to promote their brand.",
    },
    {
      title:
        "What Happens If You Get Too Man Clients? Will I Get Bad Services?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
    {
      title: "What Services Do You Actually Offer?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
    {
      title: "How Will I Know If My Campaign Is Working?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
    {
      title: "Do you offer Discounts for non-profit companies?",
      Description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah",
    },
  ];

  return (
    <div className="faq-wrapper">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-semibold text-black">
          All The A' s For Your Q' s
        </h1>
        <div className="flex flex-col justify-center items-center w-[720px] mt-10">
          {AccordionData.map((data, index) => (
            <div key={index} className="m-auto cursor-pointer">
              <div
                className="flex items-center py-1"
                onClick={() => toggle(index)}
              >
                <div className="flex-col bg-transparent text-black p-10 rounded-[22px] border-t-transparent border-b-neutral-600 border-2 cursor-pointer transform hover:translate-y-1 transition-transform duration-100 ease-in inset-0 delay-0 ">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[18px] flex items-center w-[500px]">
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
