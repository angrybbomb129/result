import React from "react";
import { Maskgroup, r14 } from "../../assets";

const Opportunities = () => {
  return (
    <div className="flex w-full flex-col  items-center pt-[170px] h-[1250px] bg-[#040B11]">
      <p className="font-roboto not-italic text-[16px]  font-[400] leading-normal tracking-[1px] text-[#2EBD85]">
        Opportunities
      </p>
      <p className="font-roboto not-italic text-[32px]  font-[700] leading-normal tracking-[1px] text-white mt-[40px] mb-[68px]">
        Did you hear about a good{" "}
        <span className="text-[#2EBD85]">opportunity?</span>
      </p>
      <div className="flex justify-center gap-[1px] items-center">
        <div className="flex flex-col  justify-start  w-[398px]  border-dashed border-b-2 border-inherit  pb-[26px]">
          <div className="rounded-full  w-[87px] h-[87px] border-[4px] border-[#2EBD85] flex justify-center items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="50"
              viewBox="0 0 37 50"
              fill="none"
            >
              <g clip-path="url(#clip0_1_326)">
                <path
                  d="M28.5757 50C28.5122 50 28.4276 50 28.3641 50C28.3006 49.9164 28.2794 49.8118 28.1947 49.77C25.1043 47.7207 22.0139 45.6922 18.9447 43.6429C18.479 43.3292 18.1827 43.5383 17.844 43.7683C15.8332 45.1067 13.8011 46.4032 11.8114 47.7625C10.7319 48.4944 9.52538 49.0799 8.57286 50.021C8.50936 50.021 8.42469 50.021 8.36119 50.021C8.8057 45.1903 9.20787 40.3597 9.69471 35.5291C9.77938 34.7763 9.56771 34.4417 8.95387 34.0653C2.32858 29.7784 -0.740641 23.7558 0.148375 15.9348C1.14323 7.4028 8.27652 0.794687 17.0397 0.062776C25.5277 -0.648224 33.6135 4.74701 36.1324 12.8608C36.4922 14.0318 36.7039 15.2656 37.0002 16.4785C37.0002 17.7332 37.0002 18.9879 37.0002 20.2217C36.9367 20.4099 36.852 20.619 36.8309 20.8072C35.9419 26.6625 32.915 31.0958 27.8137 34.1489C27.3269 34.4417 27.1787 34.7136 27.221 35.2991C27.7079 40.1924 28.1312 45.1067 28.5757 50ZM18.4367 33.3334C26.7977 33.3543 33.5923 26.6625 33.6346 18.4233C33.6558 10.1213 26.9035 3.36683 18.5214 3.34592C10.1604 3.34592 3.3446 10.0168 3.32343 18.256C3.30227 26.5789 10.0546 33.3334 18.4367 33.3334Z"
                  fill="white"
                />
                <path
                  d="M12.1288 17.2312C12.3616 17.4404 12.5309 17.5867 12.7003 17.754C13.5681 18.6114 14.4571 19.4479 15.2826 20.3471C15.7695 20.8699 16.0658 20.9117 16.595 20.368C19.0927 17.8377 21.6539 15.3701 24.1516 12.8398C24.6808 12.2961 24.9771 12.2333 25.5487 12.8189C27.242 14.5545 27.2632 14.5127 25.5275 16.2484C22.5641 19.1969 19.5796 22.1246 16.6162 25.0941C16.1082 25.5959 15.833 25.6587 15.3038 25.115C13.6739 23.442 12.0229 21.79 10.3296 20.1798C9.77921 19.657 9.80038 19.3224 10.3719 18.8833C10.8376 18.5069 11.2186 18.0468 11.6419 17.6495C11.7689 17.4822 11.9382 17.3776 12.1288 17.2312Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_326">
                  <rect width="37" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-roboto not-italic text-[24px]  font-[400] leading-normal tracking-[0.4px] text-white mt-[33px]">
            Check the impact on your portfolio before buying. Get alternative{" "}
            <span className="text-[#2EBD85]">recommendations.</span>
          </p>
        </div>
        <img
          alt="arrow1"
          src={Maskgroup}
          className="w-[359] h-[719px]  mr-[20px]"
        />
        <img alt="arrow1" src={r14} className="w-[351] h-[336px] mb-[20px]" />
      </div>
    </div>
  );
};

export default Opportunities;
