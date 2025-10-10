import React from "react";
import {
  MailCheck,
  Phone,
} from "lucide-react";
import { ContactForm } from "./footer/ContactForm";
import { QuickConnect } from "./footer/QuickConnect";
import { QuickLinks } from "./footer/QuickLinks";

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="text-dark-100 bg-surface-300 flex flex-col justify-center items-center">
        
        {/* Footer Top */}
        <div className="md:w-8/12 w-10/12 md:my-10 mt-11 flex md:flex-row flex-col justify-center space-y-10 md:space-x-30">
          
          {/* Quicks */}
          <div className="md:w-3/12 flex flex-col gap-8">
            
            {/* Quick Connects */}
            <QuickConnect />

            {/* Quick Links */}
            <QuickLinks />
            
          </div>

          {/* Contact Details */}
          <div className="md:w-4/12 flex flex-col gap-3">
            
            {/* Name & Username */}
            <div className="flex flex-col">
              <span className="text-2xl font-black font-avenir">
                Mohan Arjunan
              </span>
              <span className="text-dark-200">@mohanarjunan</span>
            </div>
            
            {/* Mails */}
            <div className="flex flex-col">
              <span className="text-2xl font-black font-avenir">
                Also Can Reach In,
              </span>
              <div className="flex flex-col px-5 gap-1 text-dark-200">
                <div className="flex gap-2 items-center text-md">
                  <MailCheck size={16} /> mohan.arjunan@hotmail.com
                </div>
                <div className="flex gap-2 items-center text-md">
                  <MailCheck size={16} /> admohan2002@gmail.com
                </div>
                <div className="flex gap-2 items-center text-md">
                  <Phone size={16} /> +91 6374 85****
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-5/12 md:flex flex-col gap-1.5 hidden">
            <ContactForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="p-2 w-full text-dark-200 text-center">
          @ All Rights Reserved By{" "}
          <strong className="italic">Mohan Arjunan</strong>
        </div>
      </div>
    </>
  );
};
