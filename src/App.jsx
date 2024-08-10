import React, { useEffect, useState } from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './Common/Url';
import Context from './context/context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './Store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)


  const fetchUserDetails = async() =>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    })
    const dataApi = await dataResponse.json()
    // console.log("data-user" , dataResponse)
    // console.log(dataApi)
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  const fetchUserAddToCart = async() =>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })
console.log(`countadd to cart`,dataResponse);
    const dataApi = await dataResponse.json()
    console.log(`count`,dataApi);
    setCartProductCount(dataApi.data.count
    )
  }

  

  useEffect(()=>{
    // userDetails
    fetchUserDetails()
    // users Details cart Product
    fetchUserAddToCart()
  },[])

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails, //user detail fetch
      cartProductCount, //current user addto Cart product count
      fetchUserAddToCart
    }}>
    <ToastContainer position='top-center'/>
    <Header  />
    <main className='min-h-[calc(100vh-130px)] pt-16'>
      <Outlet/>
    </main>
    
    <Footer/>
    </Context.Provider>
    </>
    
  );
}

export default App;

