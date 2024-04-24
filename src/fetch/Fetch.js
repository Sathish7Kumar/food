import React, { useEffect, useState } from 'react'
import axios from "axios"

const Fetch = () => {
    const [products, setproducts] = useState([])

    // async function getProducts(){
    //     try {
    //         const resp = await fetch("https://fakestoreapi.com/products")
    //         const data = resp.json()
    //         return(data)
    //     } catch (error) {
    //        console.log(error); 
    //     }
    // }

    // async function getresp(){
    //     try {
    //         const allproducts = await getProducts()
    //         setproducts(allproducts)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const getProducts = async () =>{
        try {
            const resp = await axios.get("https://fakestoreapi.com/products")
            setproducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
   

      useEffect(()=>{
        
        // fetch('https://fakestoreapi.com/products')
        // .then(resp => resp.json())
        // .then(data => setproducts(data))
        // .catch(err =>console.log(err))

        // getresp()
        getProducts()
      },[])

    // console.log(products);
  return (
    <>
    <h1>Fetch Class</h1>
    <div>
        {products.map((val,index)=>{
            return (
                <div key={index}>
                    <h1>{val.title}</h1>
                    <img src={val.image} height={150} width={150} />
                    <h3>Specs : {val.description}</h3>
                    <h3>{val.category}</h3>
                    <h3>Rating : {val.rating.rate}</h3>
                    <h3>Available Count : {val.rating.count}</h3>
                    <h2>Price in Rs : {val.price}</h2>
                    <button>Add to Cart</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Fetch