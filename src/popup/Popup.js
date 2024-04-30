import React, { useState } from 'react'
import './Popup.css'
import SignUpForm from '../Signup/SignupForm'

const Popup = () => {
    const [showpopup, setshowpopup] = useState(false)

    const openPopup = ()=>{
        setshowpopup(!showpopup)
    }
    const closePopup = ()=>{
        setshowpopup(!showpopup)
    }
  return ( 
    <>
    <div>
        <button onClick={openPopup}>
            {showpopup ? "close" : "open"}
        </button>
    </div>
    {showpopup 
    ? 
    <>
    <div className='pop'>
        {/* <img style={{height:"300px",width:"300px"}}  src='https://ik.imagekit.io/satzz/ecommerce/oneplusnord%202t.jpg?updatedAt=1690880028076'/> */}
        {/* <button onClick={closePopup}>Close</button> */}
        <SignUpForm/>
    </div>
    </>
     :
    <></>}
    </>
  )
}

export default Popup