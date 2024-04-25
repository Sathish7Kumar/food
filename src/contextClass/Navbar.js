import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FetchContext } from '../App7'

const Navbar = () => {
   const data =  useContext(FetchContext)
//    data = {product,setproduct,cart, setcart,cartValue, setcartValue}
  return (
    <>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart : <span>{data.cartValue}</span>
              </Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar