import React from "react";
import { iPhone1, iPhone2, yellowClick } from "../../assets";
import { capiwise, capiwise1 } from "../../constants";
import IconButton from "../asset/IconButton";

const Capiwise = () => {
  return (
    <div className="flex flex-col w-[1114px] py-10 relative h-[100vh] mx-auto items-center pt-[100px]">
      <p className="text-green-500 text-center text-6xl mb-[16px] font-roboto font-bold">
        {capiwise}
      </p>
      <p className="text-black text-center text-6xl not-italic font-bold mt-2">
        {capiwise1}
      </p>
      <div className="flex justify-center items-center w-full">
        <img
          alt="iPhone2"
          src={iPhone2}
          className="w-[240px] h-[550px] left-[calc(50%-453px)] top-[306px] absolute"
        />
        <img
          alt="iPhone1"
          src={iPhone1}
          className="w-[210px] h-[550px] left-[calc(50%-243px)] top-[360px]  absolute"
        />
        <div className="w-[310px] h-[220px] mt-[378px] left-[calc(50%-153px)] shadow-custom rounded-[13px] absolute font-roboto pt-[18px]">
          <div className="bg-[#FFF] opacity-80 h-full rounded-[13px] absolute w-full">
            <p className="text-[20px] font-[700] tracking-[0.213px] text-center">
              Buy APPL
            </p>
            <p className="text-center text-[40px] font-[700] tracking-[0.213px] px-[100px]">
              €50
            </p>
            <p className="text-center text-[12px] font-[700] tracking-[0.213px] px-[50px]">
              €6,704.78 Cash available
            </p>
            <p className=" text-[10px] font-[700] tracking-[0.213px] pl-[20px] text-[#979797] pt-[38px]">
              Latest buy price €186.36
            </p>
          </div>

          <div className="w-[310px] h-[18px] bg-[#FFA412] px-[20px] mt-[123px] absolute flex flex-nowrap">
            <p className=" text-[10px] font-[700] tracking-[0.213px] text-[#FFF]">
              No. of shares
            </p>
            <p className=" text-[10px] font-[700] tracking-[0.213px] pl-[200px] text-[#FFF]">
              4
            </p>
          </div>
          <button className="bg-[#2EBD85] rounded-[100px] w-[270px] mx-[22px] text-[14px] text-[#FFF] mt-[170px] tracking-[1.25px] absolute">
            Preview order
          </button>
        </div>
        <div className="left-[calc(50%+128px)] top-[455px] absolute">
          <IconButton
            className="bg-[#FFF] rounded-[100px] w-[187px] h-[38px] mx-[20px] text-[14px] text-black font-normal tracking-[0.141px] opacity-80 shadow-custom "
            name="Choose your shares"
            img={<img src={yellowClick} alt="Click around" />}
          />
        </div>
        <div className="left-[calc(50%+20px)] top-[628px] absolute w-[515px] leading-normal	font-Roboto ml-[49px]">
          <p className="text-[#2EBD85] font-[400] text-[16px]">Buy and Sell</p>
          <div className="flex flex-nowrap text-[32px] mt-[28px] leading-[37.5px]">
            <p className="text-[#040B11] font-[700] text-[32px] ">
              Flexible brokering and
              <span className="text-[#2EBD85] font-[700] text-[32px] ml-3">
                zero cost
              </span>
            </p>
          </div>
          <div className="flex flex-nowrap mt-[24px] leading-[30.13px]">
            <p className="text-[#040B11] font-semibold tracking-[0.4px] text-[24px] ">
              Finally, you can
              <span className="font-bold"> buy part of the stock,</span>
            </p>
          </div>
          <p className="text-[#040B11] font-semibold tracking-[0.4px]  leading-[30.13px] text-[24px] w-[422px]">
            all with zero fees. We maximize returns with lower cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capiwise;
