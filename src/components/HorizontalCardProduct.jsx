import React, { useEffect } from 'react'
import { useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'

const HorizontalCardProduct = ({category, heading}) => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const loadingList = new Array(13).fill(null)

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)
        setData(categoryProduct?.data)
    }
    useEffect(()=>{
        fetchData()
    },[category])
  return (
    <div className='container mx-auto px-4 my-4 relative'>

        <h2 className='text-2xl font-semibold py-4 '>{heading}</h2>

        {
          data.map(( product , index)=>{
              return (
                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow-md flex'>
            
              <div className='bg-slate-300 h-full p-2 min-w-[120px] md:min-w-[145px]'>
                  <img src={product.productImage[0]}/>
              </div>

              <div>

              </div>
          </div>
          
              )
          })
        }    
      
    </div>
  )
}

export default HorizontalCardProduct