import React from "react";

const Message = (props) => {
  const { className, title, time, content, image } = props;
  return (
    <div
      {...props}
      className={`${className} shadow-custom w-[389px] h-[114px] rounded-[21px] bg-white-800 flex gap-[18px] items-start justify-around pl-[19px] pr-[15px] pt-[15px] pb-[104px] opacity-[0.8] bg-white`}
    >
      <img src={image} alt="Click around" />
      <div className="font-Roboto flex flex-col gap-[15px]">
        <div className="flex justify-between gap-[31px] items-center">
          <p className="text-[20px] font-bold">{title}</p>
          <p className="text-[10px]">{time}</p>
        </div>
        <p className="max-w-[299px] text-[16px]">{content}</p>
      </div>
    </div>
  );
};

export default Message;
