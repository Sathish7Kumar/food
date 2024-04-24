import React from 'react'


const Product = ({product,addCart}) => {
  return (
    <>
    <div  className='food-container' >
      {product.map((e,index)=>{
        return (
          <div className='food' key={index}>
            {/* <h2>{e.name}</h2>
            <img style={{height:"150px",width:"150px"}} src={e.image} />
            <h4> Varities</h4> */}
            <h2>{e.subItemsData.name}</h2>
            {e.subItemsData.subItems.map((subitems,index)=>{
              return(
                <div key={index}>
                  <h2>{subitems.name}</h2>
                  <img style={{height:"150px",width:"150px"}} src={subitems.image} />
                  <h4>Description : {subitems.description}</h4>
                  <h4>Price : {subitems.price}</h4>
                  <button onClick={()=>addCart(subitems)}>Add to Cart</button>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Product