import React from "react";
import Logo from "../Logo";
import CustomBtn from "../CustomBtn";
import { RiArrowDropDownLine, RiShoppingBag3Fill } from "react-icons/ri";
import avatar from "../../assets/avatar.png";
import { HiMenu } from "react-icons/hi";

const Header = ({toggle}) => {
  return (
    <div className="bg-white h-[90px] flex items-center shadow-md">
      <div className="w-full px-2 sm:px-4">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
            onClick={toggle}
            className="lg:hidden">
              <HiMenu className="text-[22px] sm:text-2xl"/>
            </button>
            <Logo />
          </div>


          <div className=" justify-between items-center gap-4 hidden sm:flex">
            <RiShoppingBag3Fill className="w-6 h-6 cursor-pointer" />

            <p className="text-[#868686]">
              <strong className="font-semibold text-black">Hello!</strong>
              Hellen Armstrong
            </p>
            <img
              className="w-10 h-10 rounded-full"
              src={avatar}
              alt="Rounded avatar"
            />
            <CustomBtn
              title="English"
              customStyles="bg-black text-white justify-between"
              icon={<RiArrowDropDownLine className="w-8 h-8 text-primary" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
