import React from "react";
import { contact2 } from "../../assets";

const Everyone = () => {
  return (
    <div
      className="w-full flex flex-col h-[1169px] bg-no-repeat bg-cover bg-center justify-center items-stretch pl-[28px] mt-[160px]"
      style={{ backgroundImage: `url(${contact2})` }}
    >
      <p className="text-white font-roboto not-italic text-[68px] leading-normal tracking-[0.4px] font-[800]">
        Investing made <br /> <span className="text-[#2EBD85]">easy</span> for
        everyone
      </p>
      <p className="text-white font-roboto not-italic text-[34px] leading-normal tracking-[0.4px] font-[400] mt-[32px]">
        Start manage your own portfolio
      </p>
      <button className="w-[292px] h-[54px] flex  justify-center items-center rounded-[100px] bg-[#2EBD85] mt-[60px]">
        <p className="text-white font-roboto text-[24px] font-[700] not-italic leading-normal">
          Try free
        </p>
      </button>
    </div>
  );
};

export default Everyone;
