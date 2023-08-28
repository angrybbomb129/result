import React from "react";
import { contact1 } from "../../assets";

const Office = () => {
  return (
    <div
      className="w-full flex flex-col h-[658px] bg-no-repeat bg-cover bg-center  justify-center items-stretch pl-[28px]"
      style={{ backgroundImage: `url(${contact1})` }}
    >
      <p className="text-white text-[48px] font-roboto font-[700] not-italic leading-normal tacking-[1.091px]  w-[532px]">
        Our office resides in <br /> Berlin, Germany
      </p>
      <p className=" text-white text-[24px] font-roboto font-[400] not-italic leading-normal mt-[32px]">
        Feel free to visit us at any time, we will gladly receive you. We have
        an open door policy.
      </p>
      <p className="text-[#2EBD85] text-[34px] font-[700] font-roboto not-italic mt-[80px] tracking-normal">
        Our address
      </p>
      <p className="text-[#fff] font-[400] text-[24px] font-roboto  not-italic tracking-normal mt-[32px]">
        Drewitzer Str. 50, 13467 Berlin, Germany
      </p>
    </div>
  );
};

export default Office;
