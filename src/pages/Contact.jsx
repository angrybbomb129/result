import React from "react";
import Getintouch from "../components/contact/Getintouch";
import Office from "../components/contact/Office";
import Everyone from "../components/contact/Everyone";

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#000]">
      <Getintouch />
      <Office />
      <Everyone />
    </div>
  );
}
