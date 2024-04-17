// import React from 'react'
// import Home3 from './Home3'

// const Home2 = ({name}) => {
//   return (
//     <>
//     <h1>Home2</h1>
//     <Home3 name={name}/>
//     </>
//   )
// }

// export default Home2

import React, { useContext } from 'react'
import Home3 from './Home3'
import { UserContext } from '../App2'

const Home2 = () => {
    const x = useContext(UserContext)
  return (
    <>
    <h1>{x}</h1>
    <Home3/>
    </>
  )
}

export default Home2