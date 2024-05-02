import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <h1>HomePage</h1>
   <Link to="/users">click here - users page</Link>
   </>
  )
}

export default Home