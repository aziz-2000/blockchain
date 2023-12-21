import React from "react";


import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="mr:flex-[0.9] flex-initial justify-center items-center">
      <img src={logo} alt="logo" class="logo  cursor-pointer" />      </div>
      
    </nav>
  );
};

export default Navbar;