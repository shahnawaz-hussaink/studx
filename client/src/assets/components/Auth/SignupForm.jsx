// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import HeaderMain from "../Home/HeaderMain";

import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../../../utils'

export default function SignupForm() {
  const [signupInfo,setSignupInfo] = useState({
            name:'',
            email:'',
            password:''
        })
    const [agreed,setAgreed] = useState(false) ;

    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log(name,value);
        const copysignupInfo = { ...signupInfo};
        copysignupInfo[name] = value;
        setSignupInfo(copysignupInfo);
    }

    const handleSignin = async (e)=>{
        e.preventDefault();
        const {name,email,password} = signupInfo;

        // Client side
        if(!name || !email || !password){
            return handleError("All fields are required")
        }

        // server side 
        try{
            const url = 'http://localhost:3000/api/auth/signup';
            const response = await fetch(url,{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const {success,message,error} = result;
            if(success){
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if(error){
                const details = error?.details[0].message;
                handleError(details) 
            } else if(!success){
                handleError(message)
            }
            
            console.log(result)
        }

        catch(error){
            handleError(error)
        }
         
    };


  return (
    <>
      

      <div className="raleway flex flex-col md:flex-row w-full min-h-screen">
        <div className="w-full md:w-2/4 flex justify-center h-screen py-10 px-5">
          <div className="w-full rounded-xl shadow-2xl p-5 md:p-15">
            <div className="pb-2 md:pb-10">
              <h1 className="text-2xl md:text-3xl font-black py-3">Sign up</h1>
              <p className="text-base md:text-lg text-gray-600">
                Sign up to buy, sell, and save more — all in one place.
              </p>
            </div>

            <form className="w-full">
              <div className="my-1 md:my-2">
                <label htmlFor="name" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  placeholder="Shaz Hussain"
                  value={signupInfo.name}
                  onChange={handleChange}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>
              <div className="my-1 md:my-2">
                <label htmlFor="email" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  placeholder="abc@gmail.com"
                  value={signupInfo.email}
                onChange={handleChange}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>

              <div className="my-1 md:my-2">
                <label htmlFor="password" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name='password'
                  placeholder="abc#123"
                  value={signupInfo.password}
                onChange={handleChange}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>

              <div className="flex items-center space-x-3 my-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4"
                />
                <label htmlFor="terms" className="text-sm md:text-base text-gray-700">
                  I agree to the <span className="underline cursor-pointer">Terms & Conditions</span>.
                </label>
              </div>
            </form>

            <div className="mt-6">
              <button
                className="w-full bg-[#1B6392] py-1 md:py-2 border-2 border-[#1B6392] rounded-2xl font-bold md:font-black text-white text-xl md:text-3xl"
                onClick={handleSignin}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-2/4">
          <img
            src="/Login_Signup/login.png"
            alt="Signup Visual"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
