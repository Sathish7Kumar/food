import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './contextClass/Home';
import Product from './contextClass/Product';
import Cart from './contextClass/Cart';
import axios from "axios"
import Navbar from './contextClass/Navbar';
import NavigationBar from './NavgationBar.js/NavigationBar';
import './App.css'


export const FetchContext = createContext()

const App7 = () => {

    const [product, setproduct] = useState([])
    const [cart, setcart] = useState([])
    const [cartValue, setcartValue] = useState(cart.length)

    const fetchData = async() =>{
        try {
            const resp = await axios.get("https://ecommerceappbackend-itob.onrender.com/products")
            setproduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <FetchContext.Provider value={{product,setproduct,cart, setcart,cartValue, setcartValue}}>
        <BrowserRouter>
        {/* <Navbar/> */}
        <NavigationBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </FetchContext.Provider>
  )
}

export default App7