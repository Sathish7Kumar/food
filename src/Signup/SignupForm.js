import React, { useState } from "react";

const SignUpForm = () => {
    
  const [username, setusername] = useState("");
  const [usernameError, setusernameError] = useState("");

  const [email, setuseremail] = useState("");
  const [emailerror, setemailError] = useState("");

  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [confirmpassword, setconfirmpassword] = useState("");
  const [confirmpasswordError, setconfirmpasswordError] = useState("");

  const isFormValid =
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmpassword === password;

    const handlename = (e) =>{
       const value = e.target.value
        setusername(value)
        setusernameError(value !== "" ? "" : "username required")
    }

    const handleemail = (e) =>{
        const value = e.target.value
        setuseremail(value)
        setemailError(value !== "" ? "" : "mailID required")
    }

    const handlepassword = (e) =>{
        const value = e.target.value
        setpassword(value)
        setpasswordError(value !== "" ? "" : "password required")
    }

    const handlecpasssword = (e) =>{
        const value = e.target.value
        setconfirmpassword(value)
        setconfirmpasswordError(value === password ? "" : "password doesnt match")
    }

  return (
    <>
      <form>

        <label htmlFor="name">Name </label>
        <input id="name" type="text" onChange={handlename} placeholder="username" />
        <p style={{color:"red"}}>{usernameError}</p>
        
        <label htmlFor="mail">Email </label>
        <input type="mail" onChange={handleemail} placeholder="email" />
        <p style={{color:"red"}}>{emailerror}</p>
        
        <label htmlFor="pswd">Password </label>
        <input
        id="pswd"
          type="password"
          onChange={handlepassword}
          placeholder="password"
        />
        <p style={{color:"red"}}>{passwordError}</p>
        
        <label htmlFor="cpswd">Confirm Password </label>
        <input
        id="cpswd"
          type="password"
          onChange={handlecpasssword}
          placeholder="confirmpassword"
        />
        <p style={{color:"red"}}>{confirmpasswordError}</p>
        
        {/* false */}
        <button type="submit" disabled={!isFormValid}> 
          SignUp
        </button>
      
      </form>
    </>
  );
};

export default SignUpForm;