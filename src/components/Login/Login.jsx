import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const naviagte = useNavigate();
    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
        phone: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInput){
            alert("Login Successfull");
            saveUser(userInput)
            naviagte("/home")
        }
        // localStorage.setItem("usermail", userInput.username)
    }

    const saveUser = (user) =>{
        localStorage.setItem("user", JSON.stringify(user));
    }

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(user){
            naviagte("/home")
        }
    },[])
    return (
        <>
            <div className="flex gap-7">
                <div className="login_right w-[50%]">
                    <img src="https://b.zmtcdn.com/data/pictures/2/21623672/8e00cb198c8f59b43fd03a1d919478b9.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="logo.img" 
                    className='h-[100vh]'
                     />
                </div>
                <div className="login_left w-[50%] ">
                <div className='flex  flex-col items-center justify-center h-[90%]'>
                    <p className='log text-4xl font-semibold pb-10'>Login</p>
                    <div className="form rounded shadow-xl  p-5 w-[60%]">
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3' action='#'>
                            <div className="username">
                                <label htmlFor="username" className='text-xl'>Email: </label><br />
                                <input type="text" id="text" name="username"
                                    placeholder='Email'
                                    value={userInput.username}
                                    onChange={handleInput}
                                    required
                                    className='border outline-0 mt-3 w-full p-2 rounded'
                                />
                            </div>
                            <div className="phone">
                                <label htmlFor="username" className='text-xl'>Phone: </label> <br />
                                <input type="number" id="number" name="phone"
                                    value={userInput.phone}
                                    onChange={handleInput}
                                    placeholder='Phone'
                                    required
                                    className='border outline-0 mt-3 w-full p-2 rounded'
                                />
                            </div>
                            <div className="password">
                                <label htmlFor="username" className='text-xl'>Pasword: </label> <br />
                                <input type="password" id="password" name="password"
                                    value={userInput.password}
                                    onChange={handleInput}
                                    placeholder='Password'
                                    required
                                    className='border outline-0 mt-3 w-full p-2 rounded'
                                />
                            </div>
                        
                            <button type='submit' className='my-5 p-3 rounded bg-blue-400 text-xl font-semibold cursor-pointer hover:bg-blue-300 '>Submit</button>
                        </form>
                        <div>
                            <p className="text-[1.2rem]">New to FoodMawa? <Link to={"/"}><span className='text-red-400'>Signup</span></Link></p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
