import React, { useEffect } from 'react';

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
  const fetchUserDetails = async() =>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    })
    const dataApi = await dataResponse.json()
    console.log("data-user" , dataResponse)
    console.log(dataApi)
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails
    }}>
    <ToastContainer/>
    <Header/>
    <main className='min-h-[calc(100vh-130px)] pt-16'>
      <Outlet/>
    </main>
    
    <Footer/>
    </Context.Provider>
    </>
    
  );
}

export default App;

