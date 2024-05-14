// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
//   Link,
//   useNavigate
// } from "react-router-dom";

// const users = [
//   { username: "user1", password: "2510"  },
//   { username: "user2", password: "abcd"  },
//   { username: "user3", password: "2510123" },
// ];


// const App9 = () => {
    
//   const [isLogin, setisLogin] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<LoginPage isLogin={isLogin} setisLogin={setisLogin} />}
//         />
//         <Route
//           path="/homepage"
//           element={<HomePage isLogin={isLogin} setisLogin={setisLogin} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App9;

// function LoginPage({setisLogin,isLogin}) {

//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");

//   const [error, seterror] = useState("");

//   const nav = useNavigate()

//   const handleLogin = () => {
//     const user = users.find( x => x.username === username && x.password === password )
//     if(user){
//         setisLogin(true)
//         nav('/homepage')
//     }else{
//         seterror("invalid username or password")
//     }
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setusername(e.target.value)}
//         placeholder="enter username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//         placeholder="enter pswd"
//       />
//       <button onClick={handleLogin}>Login</button>
//       <p>{error}</p>
//     </>
//   );
// }



// function HomePage({setisLogin,isLogin}) {
//     const nav = useNavigate()
//   const handleLogout = () => {
//     setisLogin(false)
//     nav('/')
//   };
//   return (
//     <>
//       <h1>Welcome User </h1>
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );
// }

import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import App10 from './App10'
import App11 from './App11';

const App9 = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App10/>} /> 
      <Route path="/app11" element={<App11/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App9