"use client";

import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [data, setData] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });

  const [statusMsg, setStatusMsg] = useState<string>("");
  const [statusColor, setStatusColor] = useState<string>("text-dark-300");

  const handleChange = (e: ChangeEvent<any>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMsg("Sending...");
    axios
      .post("/api/contact", data)
      .then((res) => {
        console.log("res", res);
        setStatusColor("text-green-500");
        setStatusMsg(res.data.message);
        setData({ name: "", email: "", message: "" });
      })
      .catch((rej) => {
        console.log("rej", rej);
        setStatusColor("text-red-500");
        setStatusMsg("Failed to send message!");
      });
    // console.log("data", data);
  };

  return (
    <>
      <div className="text-2xl font-black font-avenir">Contact Form</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2.5 items-center"
      >
        <input
          type="text"
          name="name"
          className={`border-2 rounded-md w-full focus:border-blue-400 outline-1 outline-transparent border-dark-300 py-3 px-3`}
          placeholder="Name *"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className={`border-2 rounded-md w-full focus:border-blue-400 outline-1 outline-transparent border-dark-300 py-3 px-3`}
          placeholder="Contact Mail *"
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className={`border-2 rounded-md w-full focus:border-blue-400 outline-1 outline-transparent border-dark-300 py-3 px-3`}
          placeholder="Message for Me *"
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="border-2 border-dark-300 w-full py-3 rounded-md transition-all duration-300 hover:bg-dark-400 hover:border-dark-400 cursor-pointer group"
        >
          <span className="group-hover:hidden">Submit</span>
          <span className="hidden group-hover:block">Click to Sent!</span>
        </button>
      </form>
      <span
        className={`self-end ${
          statusMsg == "Sending..." ? "animate-pulse" : ""
        } ${statusColor}`}
      >
        {statusMsg}
      </span>
    </>
  );
};
