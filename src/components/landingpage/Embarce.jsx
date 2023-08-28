import React from "react";
import { group3 } from "../../assets";

const Embarce = () => {
  return (
    <div className="flex w-full h-[1416px] bg-[#040B11] rounded-[10px]">
      <div
        className="flex w-full  justify-center  bg-no-repeat bg-center bg-cover flex-col pl-[51px] pt-[235px] pb-[503px] gap-[43px]"
        style={{ backgroundImage: `url(${group3})` }}
      >
        <p className=" font-roboto  not-italic font-[700] leading-normal tracking-[1px] text-white text-[50px]">
          Start now and embrace <br /> your financial journey
        </p>
        <p className="font-roboto  not-italic font-[400] leading-normal tracking-[1px] text-white text-[24px]">
          We want people to be able to trade <br /> side by side with
          professionals. <br />{" "}
          <span className="text-[#2EBD85]">
            Fintech accessible to everyone.{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Embarce;
