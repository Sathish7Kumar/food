import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../App7'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    

    const data = useContext(FetchContext)
    // data =  {product,setproduct,cart, setcart,cartValue, setcartValue}

    const [total, settotal] = useState(0)

    const nav = useNavigate()

    useEffect(()=>{
        const newPrice = data.cart.reduce((sum, product)=> sum + product.price,0)
        settotal(newPrice)
    },[data.cart])

    const handleClick = (e) =>{  //e 

        const indexRemove = data.cart.findIndex((x)=> x === e ) //e 
    
        if(indexRemove !== -1){
    
          const updateCart = [...data.cart]
    
          updateCart.splice(indexRemove,1)
    
          data.setcart(updateCart)
          data.setcartValue(updateCart.length)
        }
    
      }

      const handleClear = () =>{
        data.setcart([])
      }
      
      const handleBuy = () =>{
        data.setcart([])
        data.setcartValue(0)
        alert("your order was placed , it will reach u within 2-3 days")
        nav('/')
      }

  return (
    <>
    {data.cart.length > 0 
    ? 
    <>
    <h1>You have ordered: </h1>
    <button onClick={handleClear}>Clear Cart</button>
    <div>
        {data.cart.map((pro,index)=>{
            return(
                <div key={index}>
                    <h2>{pro.name}</h2>
                    <img src={pro.image} height={150} width={150} />
                    <h2>Price : {pro.price}rs</h2>
                    <button style={{border:"none",backgroundColor:"none"}} onClick={()=>handleClick(pro)}><MdDelete style={{color:"red",fontSize:"25px"}}/></button>
                </div>
            )
        })}
        <h2>Total Price : {total}</h2>
        <button onClick={handleBuy}>Buy Now</button>
    </div>
    </> 
    : 
    <>
    <h2>Your Cart is Empty</h2>
    </>
    }
    </>
  )
}

export default Cart