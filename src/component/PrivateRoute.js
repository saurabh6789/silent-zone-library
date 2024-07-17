import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login'

export default function PrivateRoute({isLoggedIn , children}) {
 if(isLoggedIn){
    return children;
 }
 else{
    return <Navigate to ='/Login'/>
 }
}
