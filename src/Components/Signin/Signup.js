import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { RiAppleLine } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { auth, provider, signInWithGoogle } from '../../config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Signup(props) {
    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSignupClick() {
        props.onSignup();
    }
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            // navigate("/Dashboard")
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="left-side bg-black w-2/5  flex flex-col justify-center items-center">
                <h1 className="board text-7xl font-bold text-white">Board.</h1>
            </div>
            <div className="right-side w-3/5 bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                <p className="text-gray-600 mb-8">Sign in to your account</p>
                <div className="flex mb-8">
                    <button onClick={handleSignupClick} className="px-4 py-1 bg-white text-gray-600 rounded-lg mr-2 flex items-center">
                        <AiOutlineGoogle className="mr-2" size={20} />
                        Sign in with Google
                    </button>
                    <button onClick={handleSignupClick} className="px-4 py-1 bg-white text-gray-600 rounded-lg flex items-center">
                        <RiAppleLine className="mr-2" size={20} />
                        Sign in with Apple
                    </button>
                </div>
                <form onSubmit={handleSignupClick} className="flex flex-col bg-white rounded-lg p-5 m-3 items-start w-full md:w-2/3 lg:w-1/2">
                    <label className="text-gray-600 mb-2" htmlFor="email">Email address</label>
                    <input className="px-4 py-2 bg-gray-100 rounded-lg mb-4 w-full"
                        type="email"
                        name="email"
                        placeholder='johndoe@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="text-gray-600 mb-2" htmlFor="password">Password</label>
                    <input className="px-4 py-2 bg-gray-100 rounded-lg mb-4 w-full"
                        type="password"
                        name="password"
                        placeholder='*********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a className="text-blue-600 text-sm mb-4" href="/">Forgot password</a>
                    <button className="bg-black text-white px-4 py-2 rounded-lg mb-1 w-full">Sign In</button>
                </form>
                <p className="text-gray-600">Don't have an account? <a className="text-blue-600" href="/">Register here</a></p>
            </div>
        </div>
    );
}
