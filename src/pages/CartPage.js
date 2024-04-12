import React from 'react'

const CartPage = ({cart}) => {
  return (
    <>
    <h1>Cart Page</h1>
    {
    cart.length > 0
     ? 
     <>
     {cart.map((e,index)=>{
      return (
        <div key={index}>
          <h2>{e.name}</h2>
          <img style={{height:"150px",width:"150px"}} src={e.image} />
          <h4>Price: {e.price}</h4>
          <button>Remove From Cart</button>
        </div>
      )
    })}
     </> 
     : 
     <>
     <h3>Cart is Empty</h3>
     </>
     }
    </>
  )
}

export default CartPage