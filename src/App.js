import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import FoodData from "./pages/FoodData";
import { useEffect, useState } from "react";


function App() {
  const [product, setproduct] = useState([])
  const [cart, setcart] = useState([])


  useEffect(()=>{
    setproduct(FoodData)
  },[])

  const addCart = (subItems)=>{
    setcart((x)=> [...x,subItems])
  }

  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/product'>Product</Link></li>
          <li><Link to='/cart'>Cart : {cart.length} <span></span></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element= { <Homepage product={product}/> } />
        <Route path="/product" element= { <Product addCart={addCart} product={product}/> } />
        <Route path="/cart" element= { <CartPage cart={cart}/> } />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
