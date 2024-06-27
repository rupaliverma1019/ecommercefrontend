import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/displayINRCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const HorizontalCardProduct = ({category, heading}) => {
  
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const loadingList = new Array(13).fill(null)
    const [scroll , setscroll] = useState(0)
    const scrollElement = useRef(null)

    const fetchData = async() =>{
        setLoading(true)
        
        const categoryProduct = await fetchCategoryWiseProduct(category)

        
        setLoading(false)
        setData(categoryProduct?.data)
    }
    useEffect(()=>{
        fetchData()
    },[category])

    const scrollRight = () => {
      if (scrollElement.current) {
        scrollElement.current.scrollLeft += 300;
      }
    };
  
    const scrollLeft = () => {
      if (scrollElement.current) {
        scrollElement.current.scrollLeft -= 300;
      }
    };
  return (
    <div className='container mx-auto px-4 my-4 relative' >

        <h2 className='text-2xl font-semibold py-4 '>{heading}</h2>

        <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all'ref={scrollElement}>
        <button    className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block ' onClick={scrollLeft}><FaAngleLeft /></button>
        <button   className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block ' onClick={scrollRight}><FaAngleRight/></button>


        {
          data.map(( product , index)=>{
              return (
                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow-md flex'>
            
              <div className='bg-slate-300 h-full  min-w-[120px] md:min-w-[145px] p-2'>
                  <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all'/>
              </div>

              <div className='p-4 grid'>
                <h2 className='font-semibold text-base md:text-lg text-ellipsis line-clamp-1'>{product?.productName}</h2>
                <p className='capitalize'>{product?.category}</p>
                <div className='flex gap-3'>
                  <p className='text-red-600'>{displayINRCurrency(product?.sellingPrice) } </p>
                  <p className='text-slate-400 line-through'>{displayINRCurrency(product?.price) }</p>
                </div>
                <button className='bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-full' >Add to cart</button>
              </div>
          </div>
          
              )
          })
        }
        </div>
            
      
    </div>
  )
}

export default HorizontalCardProduct