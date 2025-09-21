import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () =>{
        return(
            <div className="flex justify-around border-2 h-16 items-center border-black w-full">
                
                <h1 className="md:text-2xl lg:text-3xl text-sm font-bold">BlogVerse</h1>
                <Link to="/" className="text-gray-700 px-5 hover:bg-blue-200 py-2 rounded-lg cursor-pointer">Home</Link>
                <div className="flex gap-5">
                    <Link to="/Format" className="font-semibold text-gray-500 py-2">Sign In</Link>
                    <Link to="/SignUp" className="bg-blue-600 text-white    md:px-3 md:py-1 lg:px-5 lg:py-2 rounded-xl justify-center sm:pb-2 ">Sign Up</Link>
                </div>
            </div>

        )
    }
export default NavBar