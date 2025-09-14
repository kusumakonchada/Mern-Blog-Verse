const SignUP = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-4">
            <h1 className="text-2xl font-bold text-blue-700">Join BlogVerse</h1>
            <p className="text-2xl text-gray text-center">Create your account and <br />start your Blogging journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder="enter your Full Name" className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email" placeholder="enter your email" className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder="enter your Password" className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirmed Password</p>
                    <input type="confirm your password" placeholder="enter your confirmed password" className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex gap-2 border-1 w-[90%] border-gray-800 py-3 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <button className="w-[90%] bg-purple-600 py-4 text-white rounded-xl  font-semibold"> Create Account</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4">
                </div>
                <p className="text-gray-500 font-semibold">Already Have An Account?<span className="text-purple-500">Sign In here</span></p>
                <button className="text-gray-700 py-4 w-[90%] font-semibold rounded-xl hover:text-gray-200 cursor-pointer ">Back to Home</button>
            </form>
        </div>
    )
}
export default SignUP