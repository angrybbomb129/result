import React from "react";
import { about1, about2, about3 } from "../../assets";

const Investing = () => {
  return (
    <div className="flex flex-col w-full gap-[80px] px-[2%] mt-[180px] mb-[160px] ">
      <p className="text-white text-[68px] font-roboto not-italic font-[900] leading-normal tracking-[0.4px] wdith-[auto] h-[30px]">
        Investing made easy for all
      </p>
      <div className="flex flex-row gap-[39px] items-center">
        <div className="w-[137px] h-[9px] bg-[#2EBD85]"></div>
        <p className="text-white text-[28px] not-italic font-[400]  leading-normal tracking-[0.4px] w-[auto]">
          We are a{" "}
          <span className="font-[700]">
            {" "}
            pioneering digital financial investment <br /> platform
          </span>{" "}
          that combines fundamental analysis with <br /> e-banking and a unique
          fintech social media.
        </p>
      </div>
      <div className="flex gap-[6%] h-[626px]">
        <img alt="arrow1" src={about1} className="max-w-[423px]" />
        <div className="w-[423px] flex flex-col gap-[48px] justify-between">
          <img
            alt="arrow1"
            src={about2}
            className="max-w-[423px]  max-h-[305px]"
          />
          <p className="w-full text-[28px] font-roboto font-[700] tracking-[0.4px] leading-normal not-italic text-white">
            Help millions of people <br /> around the world become <br />{" "}
            financially freedome and <br /> profitable.
          </p>
          <button className="w-[248px] h-[73px flex justify-center items-center] rounded-[100px] bg-[#2EBD85]">
            <p className="text-[34px] font-roboto text-white text-[700]  not-italic tracking-[1.091px] leading-normal">
              Get in Touch
            </p>
          </button>
        </div>
        <img
          alt="arrow1"
          src={about3}
          className="max-w-[423px]  max-h-[479px]"
        />
      </div>
    </div>
  );
};

export default Investing;
