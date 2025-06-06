import Title from "../layout/Title";
import { contactImg } from "../../assets/index";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import ContactsLeft from "./ContactsLeft";
import { useState } from "react";
import { p } from "framer-motion/client";

const Contacts = () => {
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // validate email
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid email");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you dear, ${userName} your message has been sent successfully!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(userName, phoneNumber, email, subject, message);
    }
  };
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="Contact" desc="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <ContactsLeft />
          <div
            className="w-[60%] h-full flex flex-col py-10
          bg-gradient-to-r from-[#1e2024] to-[#23272b] gap-8 p-8
          rounded-lg shadow-shadowOne"
          >
            <form className="w-full flex flex-col gap-6">
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOn
                text-center text-orange-500 text-base tracking-wide animate-bounce"
                >
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOn
                text-center text-green-500 text-base tracking-wide animate-bounce"
                >
                  {successMsg}
                </p>
              )}
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-wide">Your Name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    type="text"
                    className={`${
                      errMsg === "Username is required!" && "outline-designColo"
                    } contactInput`}
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    type="text"
                    className={`${
                      errMsg === "Number is required!" && "outline-designColo"
                    } contactInput`}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className={`${
                    errMsg === "Email is required!" && "outline-designColo"
                  } contactInput`}
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  type="text"
                  className={`${
                    errMsg === "Subject is required!" && "outline-designColo"
                  } contactInput`}
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  cols={30}
                  rows={8}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColo"
                  } contactTextArea`}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-gray-400
                text-base tracking-wide hover:text-white duration-300 hover:border-[1px]
                hover:border-designColo border-transparent uppercase"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOn
                text-center text-orange-500 text-base tracking-wide animate-bounce"
                >
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOn
                text-center text-green-500 text-base tracking-wide animate-bounce"
                >
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
