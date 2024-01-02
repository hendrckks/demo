import { useState } from "react";
import "../FAQs.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import pointer from "../assets/arrow.png";

function FAQs() {
  <a href="https://www.flaticon.com/free-icons/up" title="up icons">
    Up icons created by Royyan Wijaya - Flaticon
  </a>;
  const [selected, setSelected] = useState<number | null>(null);

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
        "What Happens If You Get Too Man Clients? Will The Quality of Services Be Compromised?",
      Description:
        "We believe in open communication and proactively manage expectations. If we reach a point where taking on additional clients could impact our service quality, we will transparently discuss options with existing clients and potential partners.",
    },
    {
      title: "What Services Do You Actually Offer?",
      Description:
        "Curious about the magic we can work for your business? Dive into our comprehensive Services page above and discover the full spectrum of digital marketing solutions we offer! From crafting captivating campaigns to driving targeted traffic and boosting conversions, we've got your online success covered",
    },
    {
      title: "How Will I Know If My Campaign Is Working?",
      Description:
        "Ultimately, the success of your campaign goes beyond metrics. We focus on driving tangible results that align with your business objectives, like increased revenue, brand loyalty, or market share. We also maintain open communication throughout the campaign process. We discuss results, answer your questions, and address any concerns promptly.",
    },
    {
      title: "Do you offer Discounts for non-profit companies?",
      Description:
        "Absolutely! We're passionate about making a positive impact in the community, and that includes supporting the incredible work of non-profit organizations. We offer tailored discounts on selected services to eligible non-profits.",
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
                <div className="flex-col bg-transparent text-black p-10 rounded-[22px] border-t-transparent border-r-transparent border-l-transparent border-b-neutral-600 border-2 cursor-pointer transform hover:translate-y-1 transition-transform duration-100 ease-in inset-0 delay-0 ">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[16px] flex items-center w-[500px]">
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
          <div className=" py-10 w-fit">
            <h1 className="font-extrabold flex justify-center items-center text-[22px]">
              STILL HAVE QUESTIONS?
            </h1>
            <p className="text-[16px] mt-5 block font-semibold">
              For any inquiries beyond the scope of the FAQ, please feel free to
              contact our support team.
              <span>
                <img
                  src={pointer}
                  alt="right up arrow"
                  className="h-[24px] cursor-pointer"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
