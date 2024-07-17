import React from "react";
import BannerImg from "../assets/banner.jpg";
import data from "../resApi.js"

const Featured = (props) => {
  console.log(props)
  props = props.content;
  console.log(props);
  return (
    <div className="align-middle items-center py-14 dark:bg-black bg-slate-100 duration-300 w-full overflow-hidden" >
      <div className=" flex flex-col items-center justify-center w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div >
            <img
              src={props.image}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto rounded-md"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div className="flex items-center gap-4">
                <div className="text-primary/70 text-2xl ">
                  <h1 className="font-bold text-yellow-700">{props.num}</h1>
                </div>
                <div>
                  <p className="text-yellow-600">Global knowledge</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p className=" text-3xl leading-8 tracking-wide">
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
        </div>
      </div>
    </div>
  );
};

export default Featured;
