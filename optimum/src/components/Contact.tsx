import "./Contact.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setMessage("");
    setName("");
    setEmail("");

    const templateParams = {
      name,
      email,
      message,
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
  };

  return (
    <div className="contacts-container">
      <div className="border-2 block text-black bg-neutral-100 border-transparent p-20 w-[400px] sm:w-[600px]">
        <h2 className="text-3xl font-extralight flex justify-center">
          <span>TELL US ABOUT YOU</span>
        </h2>
        <p className="py-[8px] mt-2 flex justify-center">
          <span>Email</span>: optimumoutreach@gmail.com
        </p>
        <div className="my-4 space-y-5">
          <form onSubmit={handleSubmit}>
            <div className="block">
              <label htmlFor="name">
                Full Name / Company Name
                <span className="required">
                  {" "}
                  (required)<span>:</span>
                </span>
              </label>
              <div>
                <input
                  type="text"
                  className="mt-4 w-[100%] outline-none bg-transparent focus:ring-0 border-[0.3px] border-black border-r-transparent border-l-transparent border-t-transparent"
                  placeholder="-"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 block">
              <label htmlFor="email">
                Email Address
                <span className="required">
                  {" "}
                  (required)<span>:</span>
                </span>
              </label>
              <div>
                <input
                  type="text"
                  className="mt-4 w-[100%] outline-none focus:ring-0 border-[0.3px] bg-transparent border-black border-r-transparent border-l-transparent border-t-transparent"
                  placeholder="-"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="block mt-4">
              <label htmlFor="message">
                Message
                <span className="required">
                  {" "}
                  (required)<span>:</span>
                </span>
              </label>
              <div>
                <textarea
                  className="w-[100%] overflow-hidden h-[120px] mt-4 outline-none focus:ring-0 border-[0.3px] bg-transparent border-black border-r-transparent border-l-transparent border-t-transparent"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center h-10 mt-10 border-[1.5px] text-[14px] hover:bg-black hover:border-white hover:text-white border-black">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-white block mt-16">
        <blockquote className="quote" data-animation-role="quote">
          <span>"</span>
          WE SHALL NOT CEASE FROM EXPLORATION AND AT THE END OF ALL OUR
          EXPLORING WILL BE TO ARRIVE WHERE WE STARTED AND KNOW THE PLACE FOR
          THE FIRST TIME.
          <span>"</span>
        </blockquote>
        <h5 className="flex justify-center items-center">— T. S. ELIOT</h5>
      </div>
    </div>
  );
}

export default Contact;
