import React from "react";

export const ContactForm = () => {
  return (
    <>
      <div className="text-2xl font-black font-avenir">Contact Form</div>
      <form className="flex flex-col gap-2.5 items-center">
        <input
          type="text"
          className="border-1 w-full focus:outline-dark-300 outline-1 outline-transparent border-dark-300 py-2 px-3"
          placeholder="From *"
        />
        <textarea
          className="border-1 w-full focus:outline-dark-300 outline-1 outline-transparent border-dark-300 py-2 px-3"
          placeholder="Message for Me *"
        ></textarea>
        <button className="border-1 border-dark-300 w-full py-2 cursor-pointer transition-all duration-300 relative z-0 after:absolute after:w-full after:h-full after:bg-dark-400 after:-left-full after:top-0 after:transition-all after:duration-300 hover:after:left-0 overflow-hidden after:-z-1">
          Sent
        </button>
      </form>
    </>
  );
};
