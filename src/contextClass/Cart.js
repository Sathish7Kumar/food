import React, { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../App7'

const Cart = () => {
    

    const data = useContext(FetchContext)
    // data =  {product,setproduct,cart, setcart,cartValue, setcartValue}

    const [total, settotal] = useState(0)

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
                    <button onClick={()=>handleClick(pro)}>Remove from Cart</button>
                </div>
            )
        })}
        <h2>Total Price : {total}</h2>
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