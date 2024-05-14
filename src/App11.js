import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const App11 = () => {
    const nav = useNavigate()
    const handleClick = () =>{
        nav('/')
    }
  return (
    <div>
        <h1>App 11 Page</h1>
        {/* <Link to='/'>Go to app10 Page</Link> */}
        <button onClick={handleClick}>Go to app10 Page</button>
    </div>
  )
}

export default App11