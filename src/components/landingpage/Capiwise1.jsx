import React from "react";
import { g2, Group9279 } from "../../assets";
import { capiwise, capiwise1 } from "../../constants";
// import IconButton from "../asset/IconButton";
import Message from "../asset/Message";

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
        <img alt="iPhone" src={Group9279} className="w-[650px] mx-auto" />
        <Message
          image={g2}
          title="Your assets are growing"
          time="11:09 am"
          content="Your capital increase by 25% this month compared to July with
          auto-trading."
          className="left-[50px] top-[260px] absolute"
        />
        <Message
          image={g2}
          title="Your assets are growing"
          time="11:09 am"
          content="Your capital increase by 25% this month compared to July with
          auto-trading."
          className="left-[calc(50%-70px)] top-[765px] absolute"
        />
        <div className="left-[calc(50%+60px)] top-[545px] absolute flex flex-col gap-[18px]">
          <p className="text-[16px] leading-[18.75px] font-normal text-[#2EBD85]">
            Opportunities and recommendations
          </p>
          <p className="text-[32px] leading-[37.5px]  font-bold">
            Manage your portfolio <span className="text-[#2EBD85]">easily</span>
          </p>
          <p className="text-[24px] leading-[28.13px] font-normal max-w-[432px]">
            With our{" "}
            <span className="font-bold">intelligent recommendations</span> find
            amazing opportunities, confidently invest and manage stock
            portfolios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capiwise;
