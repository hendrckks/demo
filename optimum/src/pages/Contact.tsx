import "../Contact.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import SubmitModal from "../components/SubmitModal";
import ClearIcon from "@mui/icons-material/Clear";
import ig from "../socials assets/instagram.png";
import twitter from "../socials assets/twitter.png";
import linkedin from "../socials assets/linkedin.png";

function Contact() {
  const [name, setName] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Oops, Please fill in the required fields");
      return;
    }

    setMessage("");
    setName("");
    setEmail("");
    setWebUrl("");

    setModalOpen(true);

    const templateParams = {
      name,
      email,
      message,
      webUrl,
    };

    emailjs
      .send(
        "service_49knah8",
        "template_s2du2ur",
        templateParams,
        "yy9jFbFJQJsI1yepX"
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log("SUCCESS!", response);
        },
        (err: string) => {
          console.log("FAILED...", err);
        }
      );
    setErrorMessage("");
  };

  function HandleInstagramClick() {
    window.open("https://www.instagram.com/optimum_outreach_/");
  }

  function HandleTwitterClick() {
    window.open("https://www.instagram.com/djvortex254/", "_blank");
  }

  function HandleLinkedinClick() {
    window.open("https://www.instagram.com/djvortex254/", "_blank");
  }
  return (
    <div className="w-full font-DM-sans sm:flex justify-center items-center sm:p-auto py-8 bg-[#212121] sm:h-[100vh] h-full font-extrabold ">
      <div className="flex-col w-[550px] text-white">
        <h2 className="text-[22px]">Launch Your Growth Journey Now.</h2>
        <h2 className="font-semibold mt-8">
          Become an Optimum Outreach partner and leap-frog your competition. But
          first, let us:
        </h2>
        <div className="mt-4 text-[14px]">
          <p>
            <span>
              <DoneIcon />
            </span>
            Take a deep dive into your business and objectives.
          </p>
          <p className="mt-2">
            <span>
              <DoneIcon />
            </span>
            Establish tailored strategies that propel you towards your goals.
          </p>
          <p className="mt-2">
            <span>
              <DoneIcon />
            </span>
            Outline expectations, deliverables, and budgets.
          </p>
        </div>
        <h2 className="mt-14">You're In Great Hands</h2>
        <div className="flex space-x-6 mt-8 items-center cursor-pointer w-fit">
          <a onClick={HandleInstagramClick}>
            <img
              alt="ig"
              src={ig}
              className="h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a onClick={HandleTwitterClick}>
            <img
              alt="twitter"
              src={twitter}
              className="h-6 hover:scale-110 transition-transform duration-200 filter invert"
            />
          </a>
          <a onClick={HandleLinkedinClick}>
            <img
              alt="linkedin"
              src={linkedin}
              className="h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
      <div className="ml-8">
        <div className="border-2 block text-black bg-white border-transparent p-20 w-[40%] sm:w-[550px]">
          <h2 className="text-3xl font-semibold flex justify-center ">
            <span>TELL US ABOUT YOU</span>
          </h2>
          <p className="py-[8px] mt-2 flex justify-center">
            <span>Email</span>: optimumoutreach1@gmail.com
          </p>
          <div className="flex justify-center items-center space-x-2">
            {errorMessage && <ClearIcon className="text-red-600" />}
            <h2 className="text-[15px] text-neutral-500">{errorMessage}</h2>
          </div>
          <div className="my-4 space-y-5">
            <form onSubmit={handleSubmit}>
              <div className="block">
                {/* <label htmlFor="name">
                  Full Name / Company Name
                  <span className="required">
                    {" "}
                    (required)<span>:</span>
                  </span>
                </label> */}
                <div>
                  <input
                    type="text"
                    className="mt-2 py-2 w-[100%] text-black outline-none bg-transparent focus:ring-0 border-[0.3px] border-black border-r-transparent border-l-transparent border-t-transparent"
                    placeholder="First Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 block bg-transparent">
                {/* <label htmlFor="email">
                  Email Address
                  <span className="required">
                    {" "}
                    (required)<span>:</span>
                  </span>
                </label> */}
                <div>
                  <input
                    type="text"
                    className="mt-2 py-2 w-[100%] outline-none focus:ring-0 border-[0.3px] bg-transparent border-black border-r-transparent border-l-transparent border-t-transparent"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 block bg-transparent">
                {/* <label htmlFor="email">
                  Email Address
                  <span className="required">
                    {" "}
                    (required)<span>:</span>
                  </span>
                </label> */}
                <div>
                  <input
                    type="text"
                    className="mt-2 py-2 w-[100%] outline-none focus:ring-0 border-[0.3px] bg-transparent border-black border-r-transparent border-l-transparent border-t-transparent"
                    placeholder="Website Url (Optional)"
                    value={webUrl}
                    onChange={(e) => setWebUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="block mt-4">
                {/* <label htmlFor="message">
                  Message
                  <span className="required">
                    {" "}
                    (required)<span>:</span>
                  </span>
                </label> */}
                <div>
                  <textarea
                    className="w-[100%] overflow-hidden h-[120px] mt-4 outline-none focus:ring-0 border-[0.3px] bg-transparent border-black border-r-transparent border-l-transparent border-t-transparent"
                    placeholder="Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center h-10 mt-10 border-[1.5px] text-[14px] hover:bg-black hover:border-white hover:text-white border-black ">
                <button type="submit" className="w-[100%] font-semibold">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SubmitModal
          isModalOpen={isModalOpen}
          closeModal={() => setModalOpen(false)}
        />{" "}
      </div>
      {/* <div className="text-white block mt-16">
        <blockquote className="quote" data-animation-role="quote">
          <span>"</span>
          WE SHALL NOT CEASE FROM EXPLORATION AND AT THE END OF ALL OUR
          EXPLORING WILL BE TO ARRIVE WHERE WE STARTED AND KNOW THE PLACE FOR
          THE FIRST TIME.
          <span>"</span>
        </blockquote>
        <h5 className="flex justify-center items-center">— T. S. ELIOT</h5>
      </div> */}
    </div>
  );
}

export default Contact;
