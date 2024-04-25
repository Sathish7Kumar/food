import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <Link to='/product'>Click here to see all products...</Link>
    </>
  )
}

export default Home