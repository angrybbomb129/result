import React from "react";
import { about4 } from "../../assets";

const Mission = () => {
  return (
    <div className="flex flex-col w-full px-[28px] gap-[160px] mb-[160px] justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="75"
          viewBox="0 0 64 75"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.81818 24.9881V45.7623L58.1818 28.0159V6.61765L5.81818 24.9881ZM2.59474 19.9531C1.0404 20.4984 0 21.9659 0 23.6132V48.4673C0 51.123 2.60862 52.9932 5.12378 52.1409L61.3662 33.08C62.9406 32.5464 64 31.0688 64 29.4064V3.88199C64 1.20889 61.3595 -0.663008 58.8372 0.221902L2.59474 19.9531Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.81818 26.7209V47.1455L58.1818 67.8217V47.2368L5.81818 26.7209ZM5.29376 20.2666C2.74969 19.2699 0 21.1458 0 23.8781V48.4648C0 50.0572 0.973194 51.4877 2.45425 52.0726L58.6967 74.2803C61.2422 75.2854 64 73.4093 64 70.6726V45.9137C64 44.3176 63.0223 42.8845 61.5362 42.3022L5.29376 20.2666Z"
            fill="white"
          />
        </svg>
        <p className="text-[#2EBD85] font-roboto not-italic leading-normal tracking-[0.4px] mt-[32px] font-[700] text-[48px]">
          The Capiwise mission
        </p>
        <p className="text-[white] font-roboto not-italic leading-normal tracking-[0.4px] max-w-[740px] mt-[48px] font-[400] text-[24px]  text-center">
          We are not just a financial trading platform; we are a new approach
          that aims to make fintech accessible to everyone. Our mission is to
          bring the idea of financial trading in a simplified, safe, and
          frictionless way, so that people with no financial experience can
          trade side by side with professionals.
        </p>
      </div>
      <div className="flex flex-row gap-[48px] ">
        <div className="flex flex-col justify-center items-center gap-[60px] bg-[#0B1620] rounded-[10px] px-[131px] pb-[191px] pt-[181px]">
          <button className="w-[250px] h-[58px] bg-[#fff] flex  justify-center items-center rounded-[47px]">
            <p className="text-[#0B1620] font-roboto text-[34px] font-[700] not-italic leading-normal tracking-[0.4px]">
              Our Vision
            </p>
          </button>
          <p className=" text-[white] font-roboto not-italic leading-normal tracking-[0.4px] max-w-[396px] mt-[48px] font-[400] text-[24px]  text-center">
            To be a key partner in the technological development that is taking
            place in the world, but with an effective, positive approach that
            educates and facilitates the involvement of new users.
          </p>
        </div>
        <div className="flex bg-[#F5F7F8] rounded-[10px] px-[69px] py-[62px] max-[720px]">
          <img alt="about4" src={about4} className="max-w-[500px] h-[full]" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
