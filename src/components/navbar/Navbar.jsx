import { useState } from "react";
import { Drawer } from "antd";
import { logo, NavbarItems } from "../../assets/labels/labels.jsx";
import Button from "../button/Button";
import { BarsOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [active, setActive] = useState("signup");
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="navbar-container p-[28px] flex items-center justify-between">
      <div className="logo hover:cursor-pointer text-white font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] animate-slideLeft">
        {logo.GymScanner}
      </div>

      <div
        className="hidden lg:flex items-center justify-center gap-[12px] 
               text-white bg-white/10 backdrop-blur-md 
               px-8 py-2 rounded-full animate-slideTop"
      >
        {NavbarItems.map((navitems, index) => (
          <span
            key={index}
            className="cursor-pointer hover:text-yellow-300 transition"
          >
            {navitems}
          </span>
        ))}
      </div>

      <div className="hidden lg:flex gap-[2px] animate-slideRight">
        <Button
          value="Log In"
          onClick={() => setActive("login")}
          className={`flex font-medium justify-center items-center p-[10px] w-[112px] cursor-pointer rounded-full ${
            active === "login"
              ? "bg-yellow-300 text-black"
              : "bg-transparent text-white"
          }`}
        />
        <Button
          value="Sign Up"
          onClick={() => setActive("signup")}
          className={`flex font-medium justify-center items-center p-[10px] w-[112px] cursor-pointer rounded-full ${
            active === "signup"
              ? "bg-yellow-300 text-black"
              : "bg-transparent text-white"
          }`}
        />
      </div>

      <div
        className="lg:hidden w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] 
             bg-white/10 backdrop-blur-md px-8 py-2 transition-transform duration-300 ease-out
             hover:-translate-x-2 hover:scale-110 rounded-full flex justify-center items-center
             text-white cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-yellow-600"
        onClick={showDrawer}
      >
        <BarsOutlined />
      </div>
      <Drawer
        rootClassName="custom-ant-drawer"
        title={logo.GymScanner}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col gap-4">
          {NavbarItems.map((navitems, index) => (
            <span
              key={index}
              className="cursor-pointer hover:text-yellow-300 transition text-lg"
            >
              {navitems}
            </span>
          ))}

          <div className="flex flex-col gap-3 mt-6">
            <Button
              value="Log In"
              onClick={() => setActive("login")}
              className={`flex font-medium justify-center items-center p-[10px] w-full cursor-pointer rounded-full ${
                active === "login"
                  ? "bg-yellow-300 text-black"
                  : "bg-transparent text-white border border-yellow-300"
              }`}
            />
            <Button
              value="Sign Up"
              onClick={() => setActive("signup")}
              className={`flex font-medium justify-center items-center p-[10px] w-full cursor-pointer rounded-full ${
                active === "signup"
                  ? "bg-yellow-300 text-black"
                  : "bg-transparent text-white border border-yellow-300"
              }`}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
