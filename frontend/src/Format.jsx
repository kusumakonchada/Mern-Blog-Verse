import NavBar from "./NavBar"
import {Link} from "react-router-dom"
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";

const Format = () => {
    const[showPassword,setShowPassword]=useState(false);
     const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    return (
        <div className="flex items-center flex-col gap-5 ">
            <NavBar/>
            <form className="flex flex-col items-center border-1  bg-white border-gray-200 w-1/5 py-7 gap-5 mt-50   rounded-2xl shadow-2xl">
                <div>
                    
                    <h2 className="font-bold text-2xl  text-center mt-5 ">SignIn</h2>
                    <p className="text-center text-gray-700 text-sm">Access your account</p>
                   
                    <div className="flex flex-col w-[90%] gap-2">
                        <p className="text-md font-semibold text-gray-600">Email address</p>
                        <div className="relative">
                        <input type="text" placeHolder="Sample@gmail.com" className="border-1 pl-12 border-gray-300 items-center w-full py-4 px-3 rounded-xl focus:outline-none focus:border-blue-600 focus:border-1.8 duration-200 "/>
                 <Mail className="absolute left-3 top-4 text-gray-300"/>
                   </div>
                    </div>
                    <div className="flex flex-col w-[90%] gap-2">
                        <p className="text-md font-semibold text-gray-600">Password</p>
                        <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeHolder="Sample-123" className="border-1 pl-12 border-gray-300 items-center w-full py-4 px-3 rounded-xl focus:outline-none focus:border-blue-600" />
                  <Lock className="absolute left-3 top-4 text-gray-300"/>
                  <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                   </div> </div>
                    <div className="flex gap-1  py-4">
                        <input type="Checkbox" name="" id="" className="h-5 w-5" />
                        <div className="flex gap-5">
                        <p>Remember Me</p>
                        <button className="text-blue-600 font-semibold">Forgot Password?</button>
                        </div>
                        </div>
                        <div className="relative">
                        <button className="text-white font-semibold bg-blue-500 w-full h-13 rounded-2xl">Sign In</button>
                        <LogIn className="absolute left-20 top-4 text-white "/>
                        </div>
                        <div className="border-[0.5px] border-gray-400 w-[100%] mt-5"></div>
                        <div className="flex mt-5">
                            <p>don't have an account?</p>
                            <Link to="/SignUp" className="text-blue-500 font-bold hover:underline cursor-pointer">Click One Here</Link>
                            </div>


                    
                </div>
            </form>
        </div>
    )
}
export default Format