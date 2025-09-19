const SignIn = () => {
    return (
        <div className="bg-gray-50">
            <div className="flex items-center  border-2 border-white justify-around h-16  gap-4 ">
                <h2 className="text-2xl font-bold">BlogVerse</h2>
                <button className="text-xl text-black hover:bg-gray-300 rounded-lg cursor-pointer home-btn px-5 py-2">Home</button>
                <div className="flex gap-5">
                    <button className="font-semibold text-xl text-gray-500">SignIn</button>
                    <button className="font-bold text-white bg-blue-700 px-5 py-2 rounded-2xl">SignUp</button>
                </div>

            </div>
        </div>

    )
}
export default SignIn