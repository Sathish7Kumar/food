import React from 'react'

const CartPage = ({cart,removeCart,calcTotal,clearCart}) => {
  return (
    <>
    <h1>Cart Page</h1>
    {
    cart.length > 0
     ? 
     <>
     <button onClick={clearCart}>Clear Cart</button>
     <div className='food-container'>
     {cart.map((e,index)=>{
      return (
        <div className='food' key={index}>
          <h2>{e.name}</h2>
          <img style={{height:"150px",width:"150px"}} src={e.image} />
          <h4>Price: {e.price}</h4>
          <button onClick={()=>removeCart(index)}>Remove From Cart</button>
        </div>
      )
    })}
     </div>
    <h3>Total Price : {calcTotal()}</h3>
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