import React, { useContext } from 'react'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Logo from './Logo'
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import SummaryApi from '../Common/Url';
import { toast } from 'react-toastify'
import { setUserDetails } from '../Store/userSlice';
import { useState } from 'react';
import Context from '../context/context';


const Header = () => {
  
  const user = useSelector(state=> state?.user?.user)
  // console.log("user header" , user)
  const dispatch = useDispatch()
  const[menuDisplay , setMenuDisplay] = useState(false)
  const context = useContext(Context)

  const handleLogout = async() =>{
    const fetchData = await fetch(SummaryApi.userLogout.url , {
      method : SummaryApi.userLogout.method,
      credentials: "include"
    })
    const data = await fetchData.json()
    if(data.success)
    {
      toast.success(data.message)
      dispatch(setUserDetails(null))
            
      
      
    }
    if(data.error)
    {
      toast.error(data.message)
    }
  }
  console.log(`header add to cart count`, context);
  return (
     <div>
    <header className='h-20 shadow-md bg-slate-50 fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4  justify-between'>
          <Link to={"/"} >
          <Logo />
          </Link>

          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-sm'>
            <input type='text' placeholder='search product here...' className='w-full outline-none pl-2' />
            <div className='text-lg min-w-[50px] h-7 bg-red-600 flex items-center justify-center rounded-r-full'><GrSearch /></div>
            

          </div>
          <div className='flex items-center gap-7'>
            <div className='relative  flex justify-center'>
              <div className='text-3xl cursor-pointer relative flex justify-center ' onClick={()=>setMenuDisplay(preve => !preve)}>
                  {user?.profilepic ? (<img srcSet={user.profilepic} alt={user.username}/>) : (<FaRegUserCircle/>)}
              </div>
              {
                menuDisplay && (<div className='  absolute bottom-0 top-11 h-fit shadow-lg rounded p-2 '>
                <nav>
                  <Link to={"admin-panel" } className='whitespace-nowrap hover:bg-slate-100 ' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                </nav>
                </div>)
              }
              



            </div>

            {
                     user?._id && (
                      <Link to={"/cart"}  className='text-2xl relative'>
                          <span><FaShoppingCart/></span>
      
                          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'>{context?.cartProductCount}</p>
                          </div>
                      </Link>
                      )
                  }
            <div >
              {
                user?._id  ? (
                  <button onClick={handleLogout} className='px-3 py-1 rounded-full bg-red-500 hover:bg-red-900 hover:text-white'>Logout</button>
                ) : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full bg-red-500 hover:bg-red-900 hover:text-white' >Login</Link>
                )
              }
              
            </div>

            
          </div>

      </div>
    
    </header>
    </div>
  )
}

export default Header
