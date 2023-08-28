import React from "react";
import Investing from "../components/aboutus/Investing";
import Mission from "../components/aboutus/Mission";
import Integrate from "../components/aboutus/Integrate";
import See from "../components/aboutus/See";
import Meet from "../components/aboutus/Meet";

export default function About() {
  return (
    <div className="flex flex-col bg-[#040B11]">
      <Investing />
      <Mission />
      <Integrate />
      <See />
      <Meet />
    </div>
  );
}
