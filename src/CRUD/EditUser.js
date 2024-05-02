import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const [userDetails, setuserDetails] = useState({
        name : "",
        email_id : "",
        mobile_number : ""
    })
    const {name,email_id,mobile_number} = userDetails

    const {id}= useParams()

    const nav = useNavigate()

    useEffect(()=>{
        fetch(`https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/${id}`)
        .then(res=>res.json())
        .then(userData => setuserDetails(userData))
    },[])


  
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put('https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/'+id,userDetails)
        alert("user Updated")
        nav('/users')
    }
  return (
    <>
    <h1>Edit User</h1>
    <div>
    <form onSubmit={handleSubmit}>
          <label>Name :</label>
          <input
            type="text"
            onChange={(e) => setuserDetails({...userDetails,name:e.target.value})}
            name="name"
            id="name"
            value={name}
            required
          />
          <br/> <br/>
          <label>E-Mail :</label>
          <input
            type="email"
            onChange={(e) => setuserDetails({...userDetails,email_id:e.target.value}) }
            name="email_id"
            id="email_id"
            value={email_id}
            required
          />
          <br/> <br/>
          <label>Mobile Number :</label>
          <input
            type="tel"
            onChange={(e) => setuserDetails({...userDetails,mobile_number:e.target.value})}
            name="mobile_number"
            id="mobile_number"
            value={mobile_number}
            required
          />
          <button>Update</button>
        </form>
    </div>
    </>
  )
}

export default EditUser