import { useState } from "react";
import { logo, NavbarItems } from "../../assets/labels/labels.jsx";
import Button from "../button/Button";

const Navbar = () => {
  const [active, setActive] = useState("signup");
  return (
    <div className="navbar-container p-[28px] flex items-center justify-between">
      <div className="logo hover:cursor-pointer text-white font-medium text-[18px] animate-slideLeft">
        {logo.GymScanner}
      </div>

      <div
        className="flex items-center justify-center gap-[12px] 
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

      <div className="btn flex gap-[2px] animate-slideRight">
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
    </div>
  );
};

export default Navbar;
