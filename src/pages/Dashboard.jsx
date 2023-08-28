import React from "react";
import AutoTrading from "../components/landingpage/AutoTrading";
import Capiwise from "../components/landingpage/Capiwise";
import Genuine from "../components/landingpage/Genuine";
import Testimonials from "../components/landingpage/Testimonials";
import Security from "../components/landingpage/Security";
import From from "../components/landingpage/From";
import Embarce from "../components/landingpage/Embarce";
import Opportunities from "../components/landingpage/Opportunities";
import Valutaion from "../components/landingpage/Valuation";
import Beginner from "../components/landingpage/Beginner";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <AutoTrading />
      <Capiwise />
      <Beginner />
      <Valutaion />
      <Opportunities />
      <Embarce />
      <From />
      <Security />
      <Testimonials />
      <Genuine />
    </div>
  );
};

export default Dashboard;
