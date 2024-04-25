import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../App7'


const Product = () => {
    const [products, setproducts] = useState([])
    const [input, setinput] = useState("")

    const data = useContext(FetchContext)
    // data =  {product,setproduct,cart, setcart,cartValue, setcartValue}

    useEffect(()=>{
        setproducts(data.product)
    },[])

    const filterProd = products.filter((x) =>
        x.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
    <h1>Product</h1>
    <input type='text' placeholder='search Products....' onChange={(e)=>setinput(e.target.value)}  />
    <div>
        {filterProd.map((e,index)=>{
            return (
                <div key={index}>
                    <h2>{e.name}</h2>
                    <img src={e.image} height={150} width={150} />
                    <h3>Brand : {e.brand}</h3>
                    <h4>Specification : {e.desc}</h4>
                    <h2>Price : {e.price}rs</h2>
                    <button
                     onClick={() =>
                        {
                            data.cart.push(e)
                            data.setcartValue(data.cart.length)
                        }
                    }>Add to Cart</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Product