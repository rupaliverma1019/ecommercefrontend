import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../Common/Url'
import Context from '../context/context'
import displayINRCurrency from '../helpers/displayINRCurrency'

const Cart = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(context.cartProductCount).fill(null)

    const fetchData = async() =>{
        const response = await fetch(SummaryApi.addToCartProductView.url,
           {
            method : SummaryApi.addToCartProductView.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
           } 
        )
        setLoading(true)
        const responseData = await response.json()
        console.log(`view cart response data`,responseData);
        if (responseData.success) {
            setData(responseData.data)
        }
    
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='container mx-auto'>
        <div className='text-center text-lg my-3'>
            {
        data.length === 0 && loading && (

            <p className='bg-white py-5'>No Data</p>
        )
      }</div>

      
      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between'>
        {/* view product */}
      <div className='w-full max-w-3xl'>
            {
                loading ? ( 
                    loadingCart.map((el,index) =>{
                        return(<div key={index}className='w-full bg-red-200 h-32 my-2 border border-slate-300 animate-pulse' >loding done </div>)
                    })
                 ) : 
                 (
                    data.map((product, index)=>{
                        return(
                            <div key={product?._id + "Add To Cart Loading "} className='w-full bg-red-400 h-32 my-2 border border-slate-500 rounded grid grid-cols-[128px,1fr]'>
                                <div className='w-28 h-28'>
                                    <img src={product?.productImage[0] } className='w-full h-full object-scale-down mix-blend-multiply'/>
                                </div>
                            </div>
                        )

                    }) 
                  )
            }


      </div>
      
      
      {/* total product */}

            <div className='mt-5 lg:mt-0 w-full max-w-sm'>
            {
                loading ? ( 
                <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
                    
                </div> ) : 
                (
                    <div className='h-36 bg-white'>
                        <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
                        <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                            <p>Quantity</p>
                            <p>totalQty</p>
                        </div>

                        <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                            <p>Total Price</p>
                            <p>{displayINRCurrency()}</p>    
                        </div>

                        <button className='bg-blue-600 p-2 text-white w-full mt-2'>Payment</button>

                    </div>
                )
            }
            </div>
            
            </div>

      
    </div>
  )
}

export default Cart
