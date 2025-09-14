import React from 'react'
const NavBar = () =>{
        return(
            <div className="flex justify-around border-2 h-16 items-center border-black">
                <h1 className="text-xl font-bold">BlogVerse</h1>
                <button className="text-gray-700 px-5 hover:bg-blue-200 py-2 rounded-lg cursor-pointer">Home</button>
                <div className="flex gap-5">
                    <button className="font-semibold text-gray-500">Sign In</button>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">Sign Up</button>
                </div>
            </div>

        )
    }
export default NavBar