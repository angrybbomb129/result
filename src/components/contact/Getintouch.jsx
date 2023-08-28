import React from "react";
import { socialMedia } from "../../constants";
import { CheckBox } from "@mui/icons-material";

const Getintouch = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="h-[320px] flex justify-start items-center px-[3%] py-[80px] mt-[60px]">
        <p className="text-[#fff] font-roboto text-[56px] not-italic leading-normal tracking-[1.091px] font-[400]">
          <span className="text-[#2EBD85] font-[900]">Get in touch,</span> we'll
          be <br /> happy to hear about you.
        </p>
      </div>
      <div className="flex justify-between gap-[162px] px-[3%] pb-[160px]">
        <div className="flex flex-col justify-start">
          <p className="text-white text-[18px] font-roboto text-[400] not-italic leading-normal tracking-[1.09px] w-[423px]">
            We’re just one click away to help you to take your porfolio to the
            next level. Just fill the form and our team will get back to you
            within 24 hours.
          </p>
          <p className="mt-[160px] mb-[32px] text-white font-roboto text-[17px] font-[700] not-italic leading-normal tracking-[1.091px]">
            Follow us
          </p>
          <div className="flex">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
        <div className="bg-[#F5F7F8] rounded-[10px] h-[800px] w-[52%] px-[48px] py-[48px]">
          <div className="flex justify-between gap-[5%]">
            <div className="flex flex-col justify-between">
              <p className="text-[#000] font-roboto text-[24px] font-[400] leading-normal tracking-normal">
                File name
              </p>
              <input className="border-[2px] bg-transparent h-[30px] border-l-[50%] border-t-0 border-b-[#2EBD85] border-l-[#2EBD85] border-r-[#2EBD85] mt-[60px] w-[285px] "></input>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[#000] font-roboto text-[24px] font-[400] leading-normal tracking-normal">
                Last Name
              </p>
              <input className="border-[2px] bg-transparent h-[30px] border-t-0 border-b-[#2EBD85] border-l-[#2EBD85] border-r-[#2EBD85] mt-[60px]  w-[285px] "></input>
            </div>
          </div>
          <div className="w-full mt-[24px]">
            <div className="flex flex-col justify-between">
              <p className="text-[#000] font-roboto text-[24px] font-[400] leading-normal tracking-normal">
                Your email
              </p>
              <input className="border-[2px]  bg-transparent h-[30px] border-t-0 border-b-[#2EBD85] border-l-[#2EBD85] border-r-[#2EBD85] mt-[60px]  w-full "></input>
            </div>
          </div>
          <div className="w-full mt-[24px]">
            <div className="flex flex-col justify-between">
              <p className="text-[#000] font-roboto text-[24px] font-[400] leading-normal tracking-normal">
                Your email
              </p>
              <input
                type="text"
                className="border-[2px] bg-transparent h-[30px]  border-t-0 border-b-[#2EBD85] border-l-[#2EBD85] border-r-[#2EBD85] mt-[120px] w-full "
              ></input>
            </div>
          </div>
          <div className="mt-[71px] flex gap-[12px]">
            <CheckBox></CheckBox>
            <p className="text-[#000] font-roboto text-[12px] font-[400] not-italic leading-normal -tracking-normal">
              I’d like to receive more information about company. I understand
              and agree to the{" "}
              <span className="text-[#2EBD85]">Privacy Policy.</span>
            </p>
          </div>
          <div className="top-[162px] flex justify-end mt-[49px] mb-[48px]">
            <button className="rounded-[100px] w-[292px] h-[54px] flex justify-center items-center bg-[#2EBD85]">
              <p className="text-[#fff] text-center  font-roboto text-[24px] font-[400] not-italic leading-normal">
                Send message
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
