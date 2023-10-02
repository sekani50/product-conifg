import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { dashMenu, footerMenu } from "../../config/constants";

const Sidebar = ({ isNav, toggle,setNav }) => {
  const [isActive, setisActive] = useState("dashboard");

  useEffect(() => {
    const currentURL = window.location.href;
    currentURL.split("/");
    setisActive(currentURL.split("/")[currentURL.split("/").length - 1]);
  }, []);

  return (
    <div
      onClick={toggle}
      className="fixed w-full h-fit z-[30] bg-black bg-opacity-40 lg:relative lg:w-fit"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`sticky top-0  w-[300px] h-full bg-accent-2  hide-scroll pb-24 ${
          isNav ? "block" : "hidden  lg:block"
        }`}
      >
        <div className="w-full">
          <div className="flex flex-col justify-center items-center pt-16">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
              alt="Rounded avatar"
            />
            <h1 className="text-white font-medium text-xl">Hellen Armstrong</h1>
            <p className="text-white text-sm">hellenarms@gmail.com</p>
          </div>

          <ul className="pt-[50px]">
            {dashMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`flex items-center text-[#ADADAD] gap-2 bg-opacity-95 py-3 px-8 hover:bg-[#DCD6D60D] hover:border-primary hover:border-r-4 ${
                    isActive.match(item.name) ||
                    (item.name.match("Account") && isActive.match(item.name))
                      ? `bg-[#DCD6D60D] border-primary border-r-4 text-[#EC7D23]`
                      : null
                  }`}
                >
                  {item.icon}
                  <NavLink
                    to={item.link}
                    className={`text-[#ADADAD] ${
                      isActive.match(item.name) ||
                      (item.name.match("Account") && isActive.match(item.name))
                        ? `text-[#fff]`
                        : null
                    }`}
                    onClick={() => {
                      setisActive(item.name);
                      setNav(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <ul className="pt-[100px] w-full ">
            {footerMenu.map((item, index) => {
              return (
                <li
                  onClick={() => setisActive(item.name)}
                  key={index}
                  className={`flex items-center text-[#ADADAD] gap-2 bg-opacity-95 py-3 px-8 hover:bg-[#DCD6D60D] hover:border-primary hover:border-r-4 ${
                    isActive === item.name &&
                    `bg-[#DCD6D60D] border-primary text-[#EC7D23] border-r-4`
                  }`}
                >
                  {item.icon}
                  <NavLink
                    className={`text-[#ADADAD] ${
                      isActive === item.name && `text-[#ffffff]`
                    }`}
                    onClick={() => {}}
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
