import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './CRUD/Home';
import User from './CRUD/User';
import './App.css'
import UserDetail from './CRUD/UserDetail';
import Form from './CRUD/Form';
import EditUser from './CRUD/EditUser';

const App8 = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/users/:id' element={<UserDetail/>}/>
        <Route path='/edituser/:id' element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App8