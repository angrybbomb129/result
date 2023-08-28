import React from "react";

const Button = (props) => {
  const { className, name } = props;
  return (
    <div
      {...props}
      className={`${className} rounded-full hover:bg-black cursor-pointer flex justify-center items-center font-bold`}
    >
      <p className="text-white font-Roboto font-bold">{name}</p>
    </div>
  );
};

export default Button;
