import React, { useContext, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { TbLayoutNavbarInactive } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FetchContext } from "../App7";


const NavigationBar = () => {

  const data  = useContext(FetchContext)
  // const data=  {product,setproduct,cart, setcart,cartValue, setcartValue}

  const [showNav, setshowNav] = useState(false);
  // showNav = false

  const toogle = () => {
    setshowNav(!showNav); // true // false // true
  };
  
  return (
    <>
      <div className="navbar">

        <div className="logo">
          <Link to="/"> <FaMobileAlt style={{color:"blue",fontSize:"35px"}} />Shopping</Link>
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
          <li><Link to='/cart'><FaShoppingCart style={{color:"red"}}/> {data.cartValue} </Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;