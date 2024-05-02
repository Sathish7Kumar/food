import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


const url = "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users"

const User = () => {
    const [user, setuser] = useState([])

    const nav = useNavigate()

    const fetchUser = async() =>{
        try {
            const userData = await axios.get(url)
            // userData = {data:Array }
            setuser(userData.data);
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(()=>{
        fetchUser()
    },[])

    const handleView = (id)=>{
        nav(`/users/${id}`)
    }

    const handleEdit = (id) =>{
        nav(`/edituser/${id}`)
    }

    const handleDelete = (id)=>{
        axios.delete("https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/"+id)
        alert("user deleted")
        fetchUser()
    }
    
  return (
    <>
    <div>
        <h3><Link to='/form'>Create new user</Link></h3>
    </div>
    <h1>User Details</h1>
    <div>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {user.map((e,index)=>{
                    return(
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email_id}</td>
                            <td>{e.mobile_number}</td>
                            <td>
                                <button onClick={()=>handleView(e.id)} >View</button>
                                <button onClick={()=>handleEdit(e.id)}>Update</button>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default User