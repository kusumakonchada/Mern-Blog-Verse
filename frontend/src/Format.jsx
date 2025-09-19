const Format = () => {
    return (
        <div className="flex items-center flex-col mt-50 gap-5 ">
            <form className="flex flex-col items-center border-1  bg-white border-gray-200 w-1/5 py-7 gap-5 mb-5   rounded-xl">
                <div>
                    
                    <h2 className="font-bold text-2xl  text-center ">SignIn</h2>
                    <p className="text-center">Access your account</p>
                   
                    <div className="flex flex-col w-[90%] gap-2">
                        <p className="text-md font-semibold text-gray-600">Email address</p>
                        <input type="text" placeHolder="Sample@gmail.com" className="border-1 border-gray-300 items-center w-full py-4 px-3 rounded-xl focus:outline-none focus:border-blue-600" />
                    </div>
                    <div className="flex flex-col w-[90%] gap-2">
                        <p className="text-md font-semibold text-gray-600">Password</p>
                        <input type="text" placeHolder="Sample-123" className="border-1 border-gray-300 items-center w-full py-4 px-3 rounded-xl focus:outline-none focus:border-blue-600" />
                    </div>
                    <div className="flex gap-1  py-4">
                        <input type="Checkbox" name="" id="" className="h-5 w-5" />
                        <div className="flex gap-5">
                        <p>Remember Me</p>
                        <p className="text-blue-600 font-semibold">Forgot Password?</p>
                        </div>
                        </div>
                        <button className="text-white font-semibold bg-blue-500 w-full h-13 rounded-2xl">Sign In</button>
                        <div className="border-[0.5px] border-gray-400 w-[100%] mt-5"></div>
                        <div className="flex mt-5">
                            <p>don't have an account?</p>
                            <button className="text-blue-500 font-bold hover:underline cursor-pointer">Click One Here</button>
                            </div>


                    
                </div>
            </form>
        </div>
    )
}
export default Format