import React from "react";
import { l3, l4, l5, l6, Free_Iphone_14_Pro_Mockup_54 } from "../../assets";
import { capiwise, capiwise1 } from "../../constants";
// import IconButton from "../asset/IconButton";
import Button from "../asset/Button";

const Capiwise = () => {
  return (
    <div className="flex flex-col w-[1114px] py-10 relative h-[100vh] mx-auto items-center pt-[100px]">
      <p className="text-green-500 text-center text-6xl mb-[16px] font-roboto font-bold">
        {capiwise}
      </p>
      <p className="text-black text-center text-6xl mb-[50px] not-italic font-bold mt-2">
        {capiwise1}
      </p>
      <div className="items-center w-full">
        <img
          alt="iPhone"
          src={Free_Iphone_14_Pro_Mockup_54}
          className="absolute left-[calc(50%-780px)] top-[200px]"
        />
        <div className="absolute top-[557px] left-[138px]">
          <img alt="l3" src={l3} />
          <img alt="l4" src={l4} />
        </div>
        <div className="absolute top-[389px] left-[404px]">
          <img alt="l6" src={l6} className="ml-[132px]" />
          <img alt="l5" src={l5} />
        </div>
        <Button
          name="15% Time to gain profit"
          className="bg-[#2EBD85] w-[275px] h-[48px] text-[20px] font-semibold top-[335px] left-[477px] absolute"
        />
        <Button
          name="5% Time to Stop-Loss"
          className="bg-[#E2433B] w-[271px] h-[48px] text-[20px] font-semibold top-[785px] left-[3px] absolute"
        />
        {/* <Button name="15% Time to gain profit" className="bg-[#2EBD85]" /> */}
        <div className="left-[calc(50%+60px)] top-[575px] absolute flex flex-col gap-[18px]">
          <p className="text-[16px] leading-[18.75px] font-normal text-[#2EBD85]">
            Risk management
          </p>
          <p className="text-[32px] leading-[37.5px]  font-bold">
            Complete <span className="text-[#2EBD85]">risk</span> management{" "}
          </p>
          <p className="text-[24px] leading-[28.13px] font-normal max-w-[432px]">
            Every stock is checked for risk against your unique portfolio,
            before you buy. Losing it all is now a thing of the past, with{" "}
            <span className="font-bold">fully automated stop-loss.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capiwise;
