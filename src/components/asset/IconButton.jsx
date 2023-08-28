import React from "react";
import Button from "@mui/material/Button";

const IconButton = (props) => {
  const { className, name, img } = props;
  return (
    <div
      {...props}
      className={`${className} rounded-[43px] cursor-pointer bg-[#2EBD85] flex justify-start gap-[9px] pl-[12px] pt-[5px] pb-[6px] items-center  font-roboto font-bold`}
    >
      {img}
      <span>{name}</span>
    </div>
  );
};

export default IconButton;
