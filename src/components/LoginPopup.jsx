import React, { useState } from 'react'
import { cross_icon } from '../assets/photos'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Sign Up')

    return (
        <div className='absolute z-[10] w-full h-full bg-[#00000090] grid'>
            <form className='place-self-center width-max-23vw-330px text-gray-500 bg-white flex flex-col gap-[25px] padding-25px-30px rounded-lg text-sm animate-fadeIn'>
                <div className='flex justify-between items-center text-black'>
                    <h2>{currState}</h2>
                    <img className='w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={cross_icon} />
                </div>
                <div className='flex flex-col gap-5'>
                    {currState === 'Login' ? <></> : <input className='outline-none border border-solid p-3 rounded' type="text" placeholder='Your Name' required />}

                    <input className='outline-none border border-solid p-3 rounded' type="email" placeholder='Your Email' required />

                    <input className='outline-none border border-solid p-3 rounded' type="password" placeholder='Password' required />
                </div>
                <button className='border-none p-3 rounded text-white bg-blue-800 text-[15px] cursor-pointer'>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
                <div className='flex items-start gap-2 mt-[-15px]'>
                    <input className='mt-1' type="checkbox" required />
                    <p>By continuing I agree to all rules and Policies.</p>
                </div>
                {currState === 'Login' ? <p>Create a new Account?<span className='text-blue-600 font-medium cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click Here</span></p> : <p>Already have an account?<span className='text-blue-600 font-medium cursor-pointer' onClick={() => setCurrState("Login")}>Login Here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup