import React, { useContext, useState } from 'react'
import loginlogo from "../assest/signin.gif"
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../Common/Url';
import { toast } from 'react-toastify'
import Context from '../context/context';

const Login = () => {

    const[showPassword , setShowPassword] = useState(false)
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()
    const {fetchUserDetails,fetchUserAddToCart} = useContext(Context)

    const handleOnChange = (e) =>{
        const {name , value} = e.target 
        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()
        // console.log(dataApi)
        if(dataApi.success)
        {
            toast.success(dataApi.message)
            
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()

        }
        else{
            toast.error(dataApi.message)
        }
    }


     const handleClick = () =>
    {
        setShowPassword((prev) => !prev) 
    }
  return (
    <section id='login'>
        <div className='mx-auto container p-4  '>
            <div className='bg-white p-2 py-5 w-full max-w-md mx-auto   '>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginlogo} alt='loginimg' />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label htmlFor="">Email:</label>
                        <div className='bg-slate-100 p-2'>
                        <input type="text" 
                        placeholder='Enter Email'
                        className='w-full h-full outline-none'
                        name='email' 
                        value={data.email}
                        onChange={handleOnChange}
                        /></div>
                        
                    </div>
                    <div className='grid '>
                        <label htmlFor="">Password:</label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input  type={showPassword ? "text " : "password"} placeholder='Enter Password'
                        className='w-full h-full outline-none bg-transparent'
                        onChange={handleOnChange}
                        name='password'
                        value={data.password}
                        />
                        <div className='cursor-pointer' onClick={handleClick}>
                            <span>
                                {
                                    showPassword ? (<FaEye />) : (<IoMdEyeOff />)
                                }
                                
                                
                            </span>
                        </div>
                        
                        
                    </div>
                    <Link to={'/forget-password'} className='block w-fit ml-auto hover:underline hover:text-red-400'>Forget-Password</Link>
                        
                        </div>
                    <button className='bg-red-600 
                    mt-6 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block' >Login</button>

                </form>
                <p>Don't have account ? <Link to={"/sign-up"} className=' text-red-300 hover:text-red-700'>SignUp</Link> </p>
            </div>
        </div>
    </section>
  )
}

export default Login