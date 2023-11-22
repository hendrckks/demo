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
      <div className="border-2 block text-black bg-white p-20">
        <h2 className="text-3xl font-extralight flex justify-center">
          <span>LET'S WORK TOGETHER</span>
        </h2>
        <p className="py-[3.75px] flex justify-center">
          <span>Email</span>: djvortex99@gmail.com
        </p>
        <div className="my-5 space-y-5">
          <form onSubmit={handleSubmit}>
            <div className="flex-col">
              <label htmlFor="name">
                Full Name / Company Name
                <span className="required"> (required):</span>
              </label>
              <input
                type="text"
                className="name-input"
                placeholder="."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email-container">
              <label htmlFor="email">
                Email Address<span className="required"> (required)</span>
              </label>
              <input
                type="text"
                className="email-input"
                placeholder="."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="message-container">
              <label htmlFor="message">
                Message
                <span className="required"> (required)</span>
              </label>
              <textarea
                className="message"
                placeholder="."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="text-black">
        <blockquote className="quote" data-animation-role="quote">
          <span>"</span>
          WE SHALL NOT CEASE FROM EXPLORATION AND AT THE END OF ALL OUR
          EXPLORING WILL BE TO ARRIVE WHERE WE STARTED AND KNOW THE PLACE FOR
          THE FIRST TIME.
          <span>"</span>
        </blockquote>
        <h5 className="author">— T. S. ELIOT</h5>
      </div>
    </div>
  );
}

export default Contact;
