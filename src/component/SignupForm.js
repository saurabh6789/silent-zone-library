import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
// import { useSearchParams } from 'react-router-dom'
 const SignupForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({firstname:"", lastname:"", email:"", password:"" , confirmPassword:""});

    const[showPassword, setShowPassword] = useState(false);
    const[showPassword1, setShowPassword1] = useState(false);

    const[ accountType, setAccountType]  = useState("student");
    const navigate = useNavigate();


    function changeHandler(event){
        setFormData((prevdata)=>({
            ...prevdata,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("passwords do not watch");
        }
        else{

            setIsLoggedIn(true);
            toast.success("sign up succesfull");
            navigate("/Dashboard")

            const account = {
                ...formData
            };

            const finalData ={
                ...formData,accountType
            }
            console.log(finalData);
        }
      
        

    }
  return (
    <div>
        {/* student instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button onClick={()=>setAccountType("student")}
            className={`${accountType==="student"?"bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                Student
                </button>
            <button onClick={()=>{
                setAccountType("instructor")
            }}
            className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                instructor
                </button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='w-full flex justify-between mt-4'>

            <label className='w-[3/4]'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name<sup className='text-pink-200'>*</sup>
                </p>

                <input required
                type='text'
                name='firstname'
                onChange={changeHandler}
                placeholder='Enter Your First Name'
                value={FormData.firstname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
            <label className='w-[3/4]'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name<sup className='text-pink-200'>*</sup>
                </p>

                <input required
                type='text'
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter Your Last Name'
                value={FormData.lastname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
            </div>
     
       {/* email Add */}
       <div className='mt-4'>

       <label>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
       </div>
             {/* createPassword and Confirm Password */}
             <div className=' w-full flex justify-between mt-4'>
                <label  className='w-[3/4] relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                      className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label  className='w-[3/4] relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type= {showPassword1 ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                      className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword1((prev) => !prev)}>
                        {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
          <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' >
            Create account
          </button>



        </form>
    </div>
  )
}

export default SignupForm
