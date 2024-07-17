import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";
import About from "./pages/About";



function App() {
  const [isLoggedIn , setIsLoggedIn]  =useState(false);

  return (
    // className="w-screen h-screen bg-richblack-900 flex flex-col"
   <div className="w-screen h-screen bg-richblack-900 flex flex-col">
   <Navbar isLogging = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/Dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard/>
      </PrivateRoute>}/>
    </Routes>
   </div>
    

  )
}

export default App;
