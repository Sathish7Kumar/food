// useReducer :

// import React, { useReducer } from 'react'

// const transaction = (state,action) =>{
//     switch(action.type){
//         case "WITHDRAW" :
//         return state - action.payload
//         case "DEPOSIT" :
//         return state + action.payload
//         default :
//         return state
//     }
// }

// const App3 = () => {

//     const [state, dispatch] = useReducer(transaction,1000)

//     const handleDepoist = (amount) =>{
//         dispatch({type : "DEPOSIT", payload:amount})
//     }

//     const handleWithdraw = (amount) =>{
//         dispatch({type : "WITHDRAW", payload:amount})
//     }
//   return (
//     <>
//     <h2>Current Balance  : {state}</h2>
//     <button onClick={()=>handleDepoist(100)}>Deposit</button>
//     <button onClick={()=>handleWithdraw(500)}>Withdraw</button>
//     </>
//   )
// }

// export default App3

// useMemo :

import React, { useMemo, useState } from "react";

const App3 = () => {

    const [count, setcount] = useState(0)
    const [arr, setarr] = useState([])

      function maximum() {
        console.log("function call");
        return Math.max(...arr);
         }

    const val = useMemo(()=> maximum() ,[arr] )

    console.log("re-render");
  return (
    <>
      <h1>Use Memo</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => setcount(count + 1)}>Count</button>
      <br />
      <h1>{JSON.stringify(arr)}</h1>
      <h1>Max Val : {val}</h1>
      <button onClick={() => setarr([...arr,Math.round(Math.random()*100)])}>
        Change Array
      </button>
    </>
  );
};

export default App3;
