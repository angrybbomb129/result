import React from "react";
import DeleteIcon from "../assets/message.png";

const Message = (props) => {
  const { className } = props;
  return (
    <div
      {...props}
      className={`${className} w-[389px] h-[114px] rounded-[21px] bg-white-800 flex gap-[18px] items-start justify-around pl-[19px] pr-[15px] pt-[15px] pb-[104px] opacity-[0.8] bg-white`}
    >
      <img src={DeleteIcon} alt="Click around" />
      <div className="font-Roboto flex flex-col gap-[15px]">
        <div className="flex justify-between gap-[31px] items-center">
          <p className="text-[20px] font-bold">Your assets are growing</p>
          <p className="text-[10px]">11:09 am</p>
        </div>
        <p className="max-w-[299px] text-[16px]">
          Your capital increase by 25% this month compared to July with
          auto-trading.
        </p>
      </div>
    </div>
  );
};

export default Message;
