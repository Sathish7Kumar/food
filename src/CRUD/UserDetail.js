import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const UserDetail = () => {
  const [userDetails, setuserDetails] = useState(null)
  const {id}= useParams()
  const selectedUser = async() =>{
    try {
      const userData = await axios.get(`https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/${id}`)
      setuserDetails(userData.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    selectedUser()
  },[])
  return (
    <div>
      <h1>User Details :</h1>
      <h2>User Name : {userDetails?.name}</h2>
      <h2>User Mail ID : {userDetails?.email_id}</h2>
      <h2>User Mobile Number : {userDetails?.mobile_number}</h2>
    </div>
  )
}

export default UserDetail