import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Methods from "../JavaScripts/methods";
import ErrorAlert from "./ErrorAlert";

const Compose = () => {
  function receiveEmail() {
    let params = {
      name: document.getElementById("fromWho").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send("service_lv1s1vc", "template_zhopvfx", params)
      .then(alert("Email sent successfully"));
  }

  function checkingInput() {
    let name = document.getElementById("fromWho").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if (name == "" || subject == "" || message == "") {
        handleToggle();
    } else {
      receiveEmail();
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    // console.log("open answer");
     setOpen(!open);
  };

  return (
    <>

      <div className={`text-font`}>
        <ErrorAlert
          error="Please fill your name and message! (Subject is optional)"
          id="errorOutput"
          isError={open}
        />

      </div>
      <div className="bg-aboutme text-font text-md rounded-sm">
        <h1 className="mb-3 p-4 rounded-t-sm text-2xl">
          Compose directly to me
        </h1>
        <form action="#" className="p-4">
          <div className="flex justify-start items-center mb-3 border-b border-b-iconic py-2">
            <label htmlFor="toMe" className="w-20">
              To :{" "}
            </label>
            <input
              type="text"
              id="toMe"
              defaultValue="Thu Htet Naing @ Ku Kue"
              className="w-full pointer-events-none"
              readOnly
              disabled
            />
          </div>

          <div className="flex justify-start items-center mb-3  border-b border-b-iconic py-2">
            <label htmlFor="fromWho" className="w-20">
              From :{" "}
            </label>
            <input
              type="text"
              id="fromWho"
              placeholder="Your name"
              className="w-full"
              required
            />
          </div>

          <div className="flex justify-start items-center mb-3  border-b border-b-iconic py-2">
            <label htmlFor="subject" className="w-20">
              Subject :{" "}
            </label>
            <input type="text" id="subject" className="w-full" />
          </div>

          <textarea
            name=""
            id="message"
            className="border border-iconic w-full h-[400px] resize-none"
            required
          ></textarea>
          <button className="bg-iconic text-font py-2 px-4 rounded-sm text-xl cursor-pointer" onClick={checkingInput}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Compose;
