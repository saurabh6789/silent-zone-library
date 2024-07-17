
import React, { useState } from 'react'
import{AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function LoginForm({setIsLoggedIn}) {

    const[showpPssword, setShowpassword] = useState(false);

    const navigate  = useNavigate();
    
    const [formData, setFormData] = useState({
        email:"", password:"" })

        function changeHandler(event){
            setFormData((prevdata)=>({
                ...prevdata,
                [event.target.name]:event.target.value
            }))
        }


        function sumbitHandler(event){
        console.log("yahan tak theek chal raha hai")
            event.preventDefault();
            setIsLoggedIn(true);
            toast.success("Logged In");
            navigate("/Dashboard");
        }

  return (
  <form onSubmit={sumbitHandler}
  className='flex flex-col w-full gap-y-4 mt-6'>
    <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
        Email address<sup className='text-pink-200'>*</sup>
            
        </p>
        <input required 
        type='email'
        onChange={changeHandler}
        placeholder='enter email id'
        value={formData.email}
        name='email'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

    </label>
    <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
       password<sup className='text-pink-200'>*</sup>
            
        </p>
        <input required 
        type={showpPssword?"text":"password"}
        onChange={changeHandler}
        placeholder='Password'
        value={formData.password}
        name='password'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        
        <span
        className='absolute right-3 top-[38px] cursor-pointer'
         onClick={()=>setShowpassword((prev)=>!prev)}>
            {showpPssword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
            }
        </span>

         <Link to='#' >
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
        </Link>

    </label>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'  >
            Sign In
        </button>

  </form>
  )
}
