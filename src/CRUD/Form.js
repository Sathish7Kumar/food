import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email_id, setemail_id] = useState("");
  const [mobile_number, setmobile_number] = useState("");
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const userDetails = {
        name :name,
        email_id : email_id,
        mobile_number: mobile_number
    }
    try {
        await axios.post("https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/",userDetails)
        .then(resp => alert("user created"))
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <h1>Create user by filling this form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name :</label>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            name="name"
            id="name"
            value={name}
            required
          />
          <br/> <br/>
          <label>E-Mail :</label>
          <input
            type="email"
            onChange={(e) => setemail_id(e.target.value)}
            name="email_id"
            id="email_id"
            value={email_id}
            required
          />
          <br/> <br/>
          <label>Mobile Number :</label>
          <input
            type="tel"
            onChange={(e) => setmobile_number(e.target.value)}
            name="mobile_number"
            id="mobile_number"
            value={mobile_number}
            required
          />
          <button>Create</button>
        </form>
      </div>
    </>
  );
};

export default Form;
