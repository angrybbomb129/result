import React from "react";
import { group2 } from "../../assets";

const Security = () => {
  return (
    <div className="flex w-full px-[29px] pb-[380px] pt-[167px] bg-[#040B11] rounded-b-[50px] h-[1365px] relative">
      <div
        className="w-full h-full bg-no-repeat bg-cover bg-center flex flex-col justify-center pl-[23px]  gap-[30px]"
        style={{ backgroundImage: `url(${group2})` }}
      >
        <p className=" font-roboto not-italic text-[50px] w-[400px] font-[600] leading-normal tracking-[1px] text-white">
          We take <span className="text-[#2EBD85]">security</span> seriously
        </p>
        <p className="font-roboto not-italic text-[24px] font-[400] w-[400px] leading-normal tracking-[1px] text-white">
          We are committed to protecting every part of your data. Feel safe with
          us.
        </p>
      </div>
    </div>
  );
};

export default Security;
