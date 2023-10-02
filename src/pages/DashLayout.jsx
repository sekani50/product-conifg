import React, { useState } from "react";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";


const DashLayout = () => {
  const [isNav, setNav] = useState(false)

  function toggleNav() {
    setNav(!isNav)
  }
  return (
    <div className="w-full h-full bg-[#DBD9D9]">
      <Header toggle={toggleNav} />
      <div className="flex">
        <Sidebar isNav={isNav} setNav={setNav} toggle={toggleNav}  />
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
