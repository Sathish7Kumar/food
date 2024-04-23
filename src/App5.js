// import React, { useEffect, useRef, useState } from 'react'

// // not re-rendering but store the value
// // , show the stored value
// // when another state re-renders

// const App5 = () => {

//     const [count, setcount] = useState(0)
   
//     const countRef = useRef(0)

//     const handleRef = ()=>{
//         countRef.current++
//     }

//     console.log("Re-Rendering");

//   return (
//     <>
//     <div>
//         <h1>Normal Counter = {count}</h1>
//         <button onClick={()=>setcount(count+1)}>Count</button>
//         <br/>
//         <h1>Ref Counter{countRef.current}</h1>
//         <button onClick={handleRef}>Count</button>
//     </div>
//     </>
//   )
// }

// export default App5

// import React, { useEffect, useRef } from 'react'
// // direct DOM Access
// const App5 = () => {

//     const inputRef = useRef()

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[inputRef])

//   return (
//     <>
//     <div style={{margin:"50px 100px"}}>
//         <input ref={inputRef} type='text' />
//     </div>
//     </>
//   )
// }

// export default App5

// import React, { useEffect, useRef, useState } from 'react'
// // prev state  return
// const App5 = () => {

//     const [inp, setinp] = useState("")

//     const prev = useRef("")
    
//     useEffect(()=>{
//         prev.current = inp
//     },[inp])

//   return (
//     <div style={{margin:"50px 100px"}}>
//     <input onChange={(e)=>setinp(e.target.value)} type='text'/>
//     <h1>Input Val = {inp}</h1>
//     <h1>Ref Val = {prev.current}</h1>
//     </div>
//   )
// }

// export default App5

// use ID : 

// import React, { useId } from "react";

// const App5 = () => {

//   const id = useId()
//     const id1 = useId()
//     const id2 = useId()
   
//     console.log(id1);
//     console.log(id2);

//   return (
//     <>
//       <div>

//         <label htmlFor={`${id}-name`}>Name</label>
//         <input  type="text" id={`${id}-name`} />

//         <label htmlFor={`${id}-mail`}>Email</label>
//         <input  type="mail" id={`${id}-mail`} />

//         {/* <label htmlFor={id1} >Name</label>
//         <input id={id1}  type="checkbox" />

//         <label htmlFor={id2} >Email</label>
//         <input id={id2}  type="checkbox" /> */}

//       </div>
//     </>
//   );
// };

// export default App5;

// custom hook :

import React, { useState } from 'react'
  
  const useCustom = () =>{

    // const [count, setcount] = useState(0)

    // const handleClick = () =>{
    //     setcount(count+1)
    // }
    // return count ,handleClick
}

const App5 = () => {

  const [count, setcount] = useState(0)

    const handleClick = () =>{
        setcount(count+1)
    }
    
    // const [count , handleClick ] = useCustom()

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}

export default App5