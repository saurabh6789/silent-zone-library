import React from "react";
import BannerImg from "../assets/banner2.jpg";

const Banner2 = (props) => {
 
  console.log(props)
  props = props.content;
  console.log(props);
  return (
    <div className="py-14 dark:bg-dark duration-300 w-full align-middle items-center overflow-hidden">
      <div className=" flex flex-row w-11/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-2xl ">
                  <h1 className="font-bold text-yellow-700">{props.num}</h1>
                </div>
                <div>
                  <p className="text-primary text-yellow-600">Global knowledge</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p className="leading-8 tracking-wide text-3xl">
             {props.fet1}
              </p>
              <p >
               {props.fet2}
              </p>
              <button className="button bg-yellow-600">
                Get Started
              </button>
            </div>
          </div>
          {/* Image section */}
          <div>
            <img
              src={props.image}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
