import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
const Login = () => {
    const [message, setMessage] = useState("");
    const { loginUser,signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/")

        } catch (error) {
            setMessage("Please provide a valid email and password")
            console.error(error)
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!")
            console.error(error)
        }
    }
    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm max-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>Pleace Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='email' placeholder='Email'>
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address" />
                    </div>
                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Password' placeholder='Password'>
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password" />
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Login
                        </button>
                    </div>
                </form>
                <p className='align-baseline font-medium mt-4 text-sm'>Haven't an account? Pleace
                    <Link to='/register' className='text-blue-500 hover:text-blue-700'> Register</Link>
                </p>
                {/*Google sign in*/}
                <div className='mt-4'>
                    <button
                        onClick={handleGoogleSignIn}
                        className='w-full flex flex-wrap gap-1 items-center justify-center
                     bg-secondary hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none'>
                        <FaGoogle className='mr-2 ' />
                        Sign in with google
                    </button>
                </div>
                <p className='mt-5 text-center'>
                    2025 Book Store. All rights reserve
                </p>
            </div>
        </div>
    )
}

export default Login
