import React from "react";
import {
  backgroundRound,
  e1,
  e2,
  iPhone,
  g2,
  arrow1,
  roundClick,
} from "../../assets";
import { dashboard1, dashboard2, dashboard21 } from "../../constants";
import Button from "../asset/Button";
import IconButton from "../asset/IconButton";
import Message from "../asset/Message";

const AutoTrading = () => {
  return (
    <div className="flex flex-row mx-auto bg-no-repeat items-center bg-cover w-full h-[100vh] font-roboto">
      <div className="flex flex-col grow items-start pb-[8px] xxxl:pl-[150px] xxl:pl-[28px]">
        <div className="flex flex-row items-center justify-start gap-[22px] w-full">
          <img alt="arrow1" src={arrow1} className="w-[42px] h-[20px]" />
          <p className="text-black text-[32px] font-bold">{dashboard1}</p>
        </div>
        <p className="text-[#2EBD85] text-[60px] leading-[70px] font-bold mt-[52px] max-w-[466px] font-roboto">
          {dashboard2 + " "}
          <span className="text-black font-bold">{dashboard21}</span>
        </p>
        <p className="text-black text-[24px] font-roboto mt-[33px] max-w-[359px] leading-[28px]">
          Start to unlock{" "}
          <span className="font-bold">the power of investing,</span> we make
          making money easy.
        </p>
        <Button
          name="Get early access"
          className="px-[67px] py-[6px] text-[24px] mt-[49px] bg-[#2EBD85]"
        />
      </div>
      <div
        className="flex flex-col relative h-[100vh] items-end w-[965px] bg-cover bg-center pr-[127px] pt-[221px]"
        style={{ backgroundImage: `url(${backgroundRound})` }}
      >
        <Message
          image={g2}
          title="Your assets are growing"
          time="11:09 am"
          content="Your capital increase by 25% this month compared to July with
          auto-trading."
        />
        <img
          alt="ring1"
          src={e1}
          className="top-[100px] absolute mr-[400px] mt-[130px] text-white text-[24px] pr-[19px]"
        />
        <img
          alt="iPhone"
          src={e2}
          className="top-[402px] absolute mr-[-40px] mt-[130px] text-white text-[24px] pr-[19px]"
        />
        <img
          alt="iPhone"
          src={iPhone}
          className="w-[906px] h-[720px] top-[75px] mt-[125px] right-[90px] absolute"
        />
        <IconButton
          className="top-[570px] absolute mr-[377px] mt-[130px] text-white text-[24px] pr-[19px]"
          name="All in once solution"
          img={<img src={roundClick} alt="Click around" />}
        />
      </div>
    </div>
  );
};

export default AutoTrading;
