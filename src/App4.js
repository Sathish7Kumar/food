import React, { useCallback, useState } from 'react'
import CallbackUse from './callback/CallbackUse'

const App4 = () => {
    const [product, setproduct] = useState(["Mobile","Grocery"])
    const [val , setValue ] = useState(0)
    const [cart, setcart] = useState(0)

    const addCart = useCallback(() =>{
        setcart(cart+1)
    },[cart])

    // const addCart = () =>{
    //     setcart(cart+1) 
    // }

  return (
    <>
    <h1>Shopping :</h1>
    <h2>{val}</h2>
    <button onClick={()=>setValue(val+1)}>Add Value</button>
    <h1>Count: {cart}</h1>
    <hr/>
    {product.map((e,i)=>{
        return (
            <div key={i}>
              <CallbackUse addCart={addCart} name={e} />  
            </div>
        )
    })}
    
    </>
  )
}

export default App4