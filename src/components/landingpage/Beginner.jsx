import React from "react";
import { r1, r2, r3, r5, r6, roundClick } from "../../assets";

import IconButton from "../asset/IconButton";

const Beginner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#040B11] rounded-t-[50px] pt-[300px] pb-[40px]">
      <div className="flex flex-row items-center gap-[128px] mt-23 w-[1364px] px-[55px]">
        <div className="flex flex-col justify-center relative">
          <img
            alt="arrow1"
            src={r1}
            className="w-full h-[665px] rounded-[10px]"
          />
          <IconButton
            className="pr-[26px] text-white text-[24px] ml-[90px] absolute top-[-24px] z-10"
            name="Invest wisely"
            img={<img src={roundClick} alt="Click around" />}
          />
          <img
            alt="arrow1"
            src={r5}
            className="w-[108px] h-[108px] absolute top-[-54px] ml-[443px] z-10"
          />
          <img
            alt="arrow1"
            src={r2}
            className="w-[108px] h-[108px] absolute top-[139px] left-[-54px] z-10"
          />
          <img
            alt="arrow1"
            src={r3}
            className="w-[108px] h-[108px] absolute top-[371px] z-10 right-[-54px]"
          />
          <img
            alt="arrow1"
            src={r6}
            className="w-[108px] h-[108px] mr-6 absolute top-[610px] left-[80px] z-10"
          />
        </div>
        <div className="flex flex-col justify-center items-start text-white relative">
          <p className="text-[50px] font-bold">
            From begginer <br /> to expert
          </p>
          <p className="text-[24px] mt-20 max-w-[438px] font-bold">
            We take data, and visualise the most, <br /> important details.
            Meaning that{" "}
            <span className="text-green-500 font-bold">
              you can understand what is important.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
