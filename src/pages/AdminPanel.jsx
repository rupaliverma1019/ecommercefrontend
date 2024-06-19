import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";

const AdminPanel = () => {
  const user = useSelector(state=> state?.user?.user)
  
  return (
    // 1st div me hidden lagana hai

    <div className='min-h-[calc(100vh-120px)] md:flex '> 
      <aside className='bg-white min-h-full w-1/5  max-w-80 customShadow'>
          <div className='h-36 bg-red-300 flex justify-center items-center flex-col'>
          <div className='text-3xl cursor-pointer relative flex justify-center ' >
                  {user?.profilepic ? (<img src={user.profilepic} className='w-20 h-20 rounded-full' alt={user.username}/>) : (<FaRegUserCircle/>)}
              </div>
              
              
            <p className='capitalize font-serif text-lg font-semibold'>{user?.username}</p>
            <p className=' font-serif text-lg font-semibold'>{user?.role}</p>

            
          </div>
          <div>
            <nav className='flex flex-col justify-center align-middle'>
              <Link to={"all-users"} className='px-5 py-3 hover:bg-slate-100'>All Users</Link>
              <Link to={"all-products"} className='px-5 py-3 hover:bg-slate-100'>Product</Link>
            </nav>
          </div>
      </aside>
      <main className='w-4/5'>
        <Outlet/>
        
      </main>
    </div>
  )
}

export default AdminPanel
