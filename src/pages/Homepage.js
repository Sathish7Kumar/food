import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = ({product}) => {
  return (
    <>
    <h1>Pizza & Burger Shop <Link to='/product'>Tap to Order</Link> </h1>
    {product.map((e,index)=>{
      return (
        <div key={index}>
          <h2>{e.name}</h2>
          <img style={{height:"150px",width:"150px"}} src={e.image} />
        </div>
      )
    })}
    </>
  )
}

export default Homepage