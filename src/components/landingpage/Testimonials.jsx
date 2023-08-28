import React from "react";
import { userList } from "../../constants";

const Testimonials = () => {
  return (
    <div className="flex w-full pl-[64px] pr-[59px] pt-[107px] h-[789px] relative">
      <div className="flex flex-col pb-[480px] justify-between gap-[56px] pr-[10%]">
        <p className=" font-roboto not-italic leading-normal translate-[1px] text-[#2EBD85] text-[24px] font-[400]">
          Testimonials
        </p>
        <p className="font-roboto not-italic leading-normal translate-[1px] text-[#000] font-[700] text-[50px]">
          What our clients <br /> think about us?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="145"
          height="245"
          viewBox="0 0 145 245"
          fill="none"
          className="absolute top-[306.89px] left-[-20px]"
        >
          <path
            d="M-99.7803 109.428C-92.4794 42.3051 -32.1471 -6.19012 34.9757 1.1108C102.098 8.41172 150.594 68.744 143.293 135.867C135.992 202.99 75.6595 251.485 8.53672 244.184C-58.586 236.883 -107.081 176.551 -99.7803 109.428ZM110.869 132.34C116.222 83.1247 80.6643 38.8882 31.4489 33.535C-17.7664 28.1819 -62.0029 63.7392 -67.3561 112.955C-72.7092 162.17 -37.1519 206.406 12.0635 211.76C61.2789 217.113 105.515 181.555 110.869 132.34Z"
            fill="url(#paint0_linear_1_127)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_127"
              x1="8.53672"
              y1="244.184"
              x2="34.9757"
              y2="1.1108"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2EBD85" />
              <stop offset="1" stop-color="#A7CFBD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex-1 pb-[204px] flex-col justify-between">
        <div className="flex w-full">
          {userList.map((user, index) => (
            <img
              key={user.id}
              src={user.icon}
              alt={user.id}
              className={`w-[113px] h-[113px] object-contain cursor-pointer ${
                index !== userList.length - 1 ? "-mr-4" : "mr-0"
              }`}
              onClick={() => window.open(user.link)}
            />
          ))}
        </div>
        <p className="w-full font-roboto text-[32px] not-italic font-[400] leading-normal tracking-[1.091px] mt-[88px] mb-[48px]">
          “Ever since I started using Capiwise, my investment journey has been
          nothing short of amazing. As a beginner in the world of trading and
          stocks, I was initially overwhelmed by the complexities involved.
          However, this app has been an absolute game-changer for me”
        </p>
        <p className="w-full font-roboto text-[#000] text-[32px] not-italic font-[700]  leading-normal  tracking-normal">
          -Rose May
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
