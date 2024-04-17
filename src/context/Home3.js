// import React from 'react'

// const Home3 = ({name}) => {
//   return (
//     <>
//     <h1>Home3</h1> 
//     <h1>My name is {name}</h1>
//     </>
//   )
// }

// export default Home3

import React, { useContext } from 'react'
import { UserContext } from '../App2'

const Home3 = () => {
    const user = useContext(UserContext)
  return (
    <>
    <h1>Home3</h1> 
    <h1>My name is {user}</h1>
    </>
  )
}

export default Home3