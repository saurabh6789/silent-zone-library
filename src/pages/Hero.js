import React from "react";
import BannerImg from "../assets/hero.jpg";
// import { motion } from "framer-motion";
import "./Hero.css"

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",


};
const Hero = () => {
  return (
    <div>

    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 h-full w-11/12 bg-cover"
    >
      <div className="bg-white/70  dark:bg-black/80 duration-300  ">
        <div className="container min-h-[620px] flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p data-aos="fade-up" className="text-primary text-2xl items-center  w-11/12 max-w-[1160px]">
             Welcome to our Silent Zone Library
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              Your Journey Start Here With us!
            </h1>
            <p >
              “We can achieve Our Goal By our consistency.”{" "}
            </p>
            <button
              className="button bg-yellow-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
