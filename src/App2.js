// import React, { Component } from 'react'

//  class App2 extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             count : 0
//         }
//         console.log("Component being contructed");
//     }
//     componentDidMount(){
//         console.log("Component mounted");
//     }
//     componentDidUpdate(){
//         console.log("Component updated");
//     }
//     // componentWillUnmount(){

//     // }
//     increment = () =>{
//         this.setState({
//             count : this.state.count + 1
//         })
//     }

//   render() {
//     console.log("Component Re-render");
//     return (
//       <>
//       <h1>Count : {this.state.count}</h1>
//       <button onClick={this.increment}>Add </button>
//       </>
//     )
//   }
// }

// export default App2


// // function - state - react Hooks - useState(state) , useEffect(lifecycle)

// import React, { useEffect, useState } from 'react'
    
// function App2  ()  {
//   const [increment,setincrement] = useState(0)
//   const [decrement,setdecrement] = useState(10)
//   // const increment = () =>{
//   //   setcount(count+1)
//   // }   

//   //1
//   // useEffect(()=>{
//   //   console.log("use effect calling");
//   // })
//   //2
//   // useEffect(()=>{
//   //   console.log("use effect calling");
//   // } , [])
//   //3
//   useEffect(()=>{
//     console.log("use effect calling");
//   } , [decrement])
//   console.log("re-render");
//   return (
//     <>
//     <h1>Increment : {increment} </h1>
//     <button onClick={()=>setincrement(increment+1)} >add</button>
//     <h1>Decrement : {decrement} </h1>
//     <button onClick={()=>setdecrement(decrement-1)} >add</button>
//     </>
//   )
// }

// export default App2

// // import React, { useEffect, useState } from 'react'

// // const App2 = () => {
// //     const [increment, setincrement] = useState(0)
// //     const [decrement, setdecrement] = useState(50)

// //     // 1 
// //     // useEffect(()=>{
// //     //     console.log("use effect called");
// //     // })
// //     // console.log("re-render");

// //     //2 
// //     // useEffect(()=>{
// //     //     console.log("use effect called");
// //     // },[] )

// //     // 3
// //     useEffect(()=>{
// //         console.log("use effect called");
// //     },[decrement    ] )
// //     console.log("re-render");
// //   return (
// //    <>
// //    <h1>Increment : {increment} </h1>
// //     <button onClick={()=>setincrement(increment+1)}>Add</button>
// //     <h1>Decrement : {decrement} </h1>
// //     <button onClick={()=>setdecrement(decrement-1)}>Remove</button>
// //    </>
// //   )ag
// // }

// // export default App2

// import React, { useState } from 'react'
// import './App.css'

// const App2 = () => {

//     const [age, setage] = useState("")
//     const [message, setmessage] = useState("")

//     const checkAge = () =>{
//         // if(age >= 18){
//         //     setmessage("u can vote");
//         // }
//         // else{
//         //     setmessage("u cant vote");
//         // }
//         (age >= 18) ? setmessage("u can vote") : setmessage("u cant vote")
//     }
//   return (
//     <>
//     <h1>Vote Age Calculation : </h1>
//     <input type='number' onChange={(e)=>setage(e.target.value)}  placeholder='Enter ur age' />
//     <button onClick={checkAge}>Check</button>
//     <hr/>
//     <h2 className="head">{message}</h2>
//     </>
//   )
// }

// export default App2

// props drilling : 

// import React, { useState } from 'react'
// import Home1 from './context/Home1'

// const App2 = () => {
//     const [name, setname] = useState("Dhoni")
//   return (
//     <>
//     <Home1 name={name}/>
//     </>
//   )
// }

// export default App2

// context 

// import React, { createContext, useState } from 'react'
// import Home1 from './context/Home1'

//  export const UserContext = createContext()

// const App2 = () => {
    
//     const [name, setname] = useState("Dhoni")
    
//   return (
//     <UserContext.Provider value={name}>
//     <Home1/>
//     </UserContext.Provider>
//   )
// }

// export default App2

