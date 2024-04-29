import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { TbLayoutNavbarInactive } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const [showNav, setshowNav] = useState(false);
  // showNav = false

  const toogle = () => {
    setshowNav(!showNav); // true // false // true
  };
  
  return (
    <>
      <div className="navbar">

        <div className="logo">
          <Link to="/"> <FaFacebookSquare style={{color:"blue",fontSize:"35px"}} />Shopping</Link>
        </div>

        <div
          style={{ color: "red", fontSize: "35px" }}
          className="icon "
          onClick={toogle}
        >
          <TbLayoutNavbarInactive />
        </div>

        {/* <ul className="nav-link show"></ul> */}
        <ul className={`nav-links ${showNav ? "show" : ""}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/product'>Product</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;