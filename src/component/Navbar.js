import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Navbar(props) {
 let islogging = props.isLogging;
 let setIsLoggedIn  = props.setIsLoggedIn;
//  image = fetch(https://img.freepik.com/premium-photo/mature-student-library_13339-207920.jpg?w=900);

  return (
  
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/"> 
        {/* width={160} height={32} */}
        <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
          <ul className='text-richblack-100 flex gap-x-6'>
          <li >
             <Link to='/'>
             Home</Link>
             </li>
            <li >
              <Link to='/About'>About</Link>
            </li>
            <li >
            <Link to='/'>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* login sigup logout dashboard button */}
        <div className='flex items-center gap-x-4'>
          { !islogging &&
            <Link to ="/login">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>

            Login
              </button>
            </Link>
          }
          {  islogging &&
            <Link to ="/">
              <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("logged Out");

              }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                logout
              </button>
            </Link>
          }
          {  !islogging &&
            <Link to ="/Signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
            Sign up 
            </button>
          
            </Link>
          }
          {  islogging&&
            <Link to ="/Dashboard">
           <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>

            Dashboard
            </button>
             
            </Link>
          }

        </div>


        </div>
    
    
  );
};
