import React, { useState } from 'react'
import loginlogo from "../assest/signin.gif"
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import ImageTobase64 from '../helpers/ImageTobase64'
import SummaryApi from '../Common/Url'
import { toast } from 'react-toastify'
const Signup = () => {
  const [showPassword , setShowPassword] = useState(false)
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);
  const[data , setData] = useState({
    username :  "" ,
    email : "" ,
    password : "" ,
    confirmpassword : "",
    profilepic : ""
})
const navigate = useNavigate()
const handleChange = (e) =>{
      const{name , value } = e.target 
      if(name==='username' && value.length>15 && value==="")
      {
        return;
      }
      
      setData((prev)=>{
        return{
          ...prev,
          [name] :value
        }
      })
}

console.log(data.email)
console.log(data.username)

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword
  };

  if (formData.password === formData.confirmpassword) {
      const dataResponse = await fetch(SummaryApi.signUp.url, {
          method: SummaryApi.signUp.method,
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(formData)
      });

      const responseData = await dataResponse.json();
      console.log("data ", responseData);
      if(responseData.success)
      {
        toast.success(responseData.message)
        navigate('/login')
      }
      if(responseData.error)
      {
        toast.error(responseData.message)
      }


      // toast(responseData.message)
      setData({
          username: "",
          email: "",
          password: "",
          confirmpassword: ""
      });
  } 
  
  else {
    // toast.error(responseData.message)
      toast.error("Password should be same")
  }
}

const handleClick = (prev) => {
        setShowPassword((prev) => !prev)
        
}
const confirmClick = () => {
  setShowConfirmPassword((prev) =>!prev)
}

const handleUploadPic = async (e) =>{
  const file = e.target.files[0];
  console.log(file);
  const imagePic = await ImageTobase64(file)
  console.log("imagepic" , imagePic)
   setData((prev)=>{
    return {
      ...prev,
      profilepic : imagePic
    }
   })

}

  return (
    <>
    <section id='signup'>
        <div className='mx-auto container p-4'>
          <div className='bg-slate-300 p-2 py-5 w-full max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'> 
            <div>
              <img src={data.profilepic || loginlogo} alt='loginimg' />
            </div>
            <form >
              <label>
              <div className='text-xs bg-slate-200 py-0 text-center absolute bottom-0 w-full opacity-120'>
              Upload P
            </div>
            <input type="file" onChange={handleUploadPic}className='hidden' />
              </label>
            </form>
            

            
            </div>
             <form action=""className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                <div className='grid'>
                <label htmlFor="">Username:</label>
                <div className='bg-slate-100 p-2'>
                  <input type='text' 
                  placeholder='Enter Username'
                  required
                  className='w-full h-full outline-none' 
                  name='username'
                  value={data.username}
                  onChange={handleChange}
                  ></input>
                </div>
                </div>
                <div className="grid">

                <label htmlFor="">Email:</label>
                <div className='bg-slate-100 p-2'>
                  <input type='email' 
                  placeholder='Enter Email'
                  required
                  className='w-full h-full outline-none' 
                  name='email'
                  value={data.email}
                  onChange={handleChange}
                  ></input>
                </div></div>
                
                <div className='grid'>
                <label htmlFor="">Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showPassword ? "text" : "password"}
                  placeholder='Enter Password'
                  required
                  className='w-full h-full outline-none bg-transparent' 
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                  
                  />
                    <div onClick={handleClick} className='cursor-pointer'>
                      <span>
                        {
                          showPassword ? (<FaEye/>) : (<IoMdEyeOff/>)
                        }
                      </span>
                    </div>
                  
                </div>
                </div>
                <div className='grid'>
                <label htmlFor="">Confirm Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showConfirmPassword ? "text" : "password"}
                  placeholder='Enter Confirm Password'
                  required
                  className='w-full h-full outline-none bg-transparent' 
                  name='confirmpassword'
                  value={data.confirmpassword}
                  onChange={handleChange}
                  
                  />
                    <div onClick={confirmClick} className='cursor-pointer'>
                      <span>
                        {
                          showConfirmPassword ? (<FaEye/>) : (<IoMdEyeOff/>)
                        }
                      </span>
                    </div>
                  
                </div>
                </div>
                
                

                
                <button className='bg-red-600 mt-6 text-white px-6 py-2 w-full max-w-[150px]  rounded-full hover:scale-105 transition-all mx-auto block' >SignUp</button>
              

             </form>
             <p>Already I have an account ? <Link to={"/login"} className=' text-red-300 hover:text-red-700'>Login</Link> </p>
          </div>
         

        </div>
    </section>
    
    </>
  )
}

export default Signup