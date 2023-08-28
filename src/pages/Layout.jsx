import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = () => {
  return (
    <div className="fle-col">
      <Header />
      <Outlet />
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
};

export default Layout;
