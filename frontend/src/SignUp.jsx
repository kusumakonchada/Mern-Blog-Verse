import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUserRound } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Key } from 'lucide-react';
import { FolderPen } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";

const SignUP = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""


    })
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setConfirmShowPassword((confirmPassword) => (!confirmPassword))
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData)=>({
            ...formData,
            [event.target.name]:event.target.value
        }))
        setErrors((errors) => ({
            ...errors, [event.target.name]:""
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please confirm  your password correctly"
        }
        else if (formData.password != formData.confirmPassword) {
            newErrors.confirmPassword = "your password did not match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

        }
        else {
            setSuccess("your account has been created successfully")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }

        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("please fill all the fields")
        // }
        // else if (formData.password !== formData.confirmPassword) {
        //     setError("your password did not match")
        // }
        // else {
        //     setError("")
        //     setSuccess("your account is sucessfully created")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })
        // }

    }
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    return (
        <div className="flex items-center flex-col mt-10 gap-4">
            <NavBar />
            <h1 className="text-2xl font-bold text-blue-700">Join BlogVerse</h1>
            <p className="text-2xl text-gray text-center">Create your account and <br />start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="relative">
                        <input value={formData.fullName} onChange={handleChange} name="fullName" type="text" placeholder="enter your Full Name" className="border-1 pl-12 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />

                        <FolderPen className="absolute left-3 top-4 text-gray-300" />

                    </div>
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <div className="relative">
                        <input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="enter your email" className="border-1 border-gray-700 w-full items-center pl-12 py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />

                        <Mail className="absolute left-3 top-4 text-gray-300" />

                    </div>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative">
                        <input value={formData.password} onChange={handleChange} name="password" type={showPassword ? "text" : "password"} placeholder="enter your Password" className="border-1 border-gray-700 w-full items-center pl-12 py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />

                        <LockKeyhole className="absolute left-3 top-4 text-gray-300" />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirmed Password</p>
                    <div className="relative">

                        <input value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" type={confirmShowPassword ? "text" : "password"} placeholder="enter your confirmed password" className="border-1 pl-12 border-gray-700 w-full items-center py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />

                        <Key className="absolute left-3 top-4 text-gray-300" />
                        <p onClick={handleConfirmPassword}>{confirmShowPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                </div>
                <div className="flex gap-2 border-1 w-[90%] border-gray-800 py-3 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] flex justify-center gap-3 bg-purple-600 py-4 text-white rounded-xl  font-semibold"> <CircleUserRound className="text-gray-300" /><p>Create Account</p></button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4">
                </div>
                <p className="text-gray-500 font-semibold">Already Have An Account?<Link to="/Format" className="text-purple-500">Sign In here</Link></p>
                <Link to="/" className="text-gray-700 py-4 w-[90%] font-semibold rounded-xl hover:text-gray-200 cursor-pointer text-center">Back to Home</Link>
            </form>
        </div>
    )
}
export default SignUP