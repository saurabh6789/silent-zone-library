import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className=" flex flex-col py-10 w-full bg-gray-900 dark:bg-dark dark:text-white duration-300
    "
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="" className="w-16 " />
            <div>
              {/* Social Handle */}
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div >

          <div className="sm:block">Contact us: +91 9644933942</div>
          <div className="sm:block"> Email us: saurabhrawat@gmail.com</div>
          </div>
          <div><span className="text-xl"> Our Address</span>: 64 Gwalior ghatigaon gwalior Madhya Pradesh india 476229</div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
