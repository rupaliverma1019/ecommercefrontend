

import React, { useEffect, useState , useCallback} from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../Common/Url'
import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa6'
import displayINRCurrency from '../helpers/displayINRCurrency'
import VerticalCardProduct from '../components/VerticalCardProduct'
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay'

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: ""
  })

  const params = useParams()
  const [loading, setLoading] = useState(true)
  const productImageListLoading = new Array(4).fill(null)
  // console.log("params", params);
  const [activeImage , setActiveImage] = useState("")
  const [zoomImageCoodinate, setzoomImageCoodinate ] = useState({
    x : 0,
    y: 0
  })
  const [zoomImage,setZoomImage] = useState(false)

  const fetchProductDetails = async () => {
    setLoading(true)

    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        _id: params._id
      })
    })

    // console.log("response product detail", response);
    setLoading(false)
    const dataResponse = await response.json()

    // console.log("dataResponse", dataResponse);
    
    if (dataResponse.data) {
      setData(dataResponse.data)
      setActiveImage(dataResponse?.data?.productImage[0])
    } else {
      console.error('No data received from API' )
    }
    console.log("data product detail ", data);
  }

  useEffect(() => {
    fetchProductDetails()
  }, [params._id])

  const handleMouseEnterProduct = (imageURL) =>{
    setActiveImage(imageURL)
  }

  const handleZoomImage = useCallback((e) =>{
    setZoomImage(true)
    const { left , top, width , height } = e.target.getBoundingClientRect()
    console.log("coordinate", left, top , width , height)

    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setzoomImageCoodinate({
      x,
      y
    })
  },[zoomImageCoodinate])

  const handleLeaveImageZoom = () =>{
    setZoomImage(false)
  }
  
 
  return (
    <div className=' mx-auto p-4 pt-10'>
      <div className=' min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/* {productImage} */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative'>
            <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom}/>
            {/* {product zoom} */}
            {
                      zoomImage && (
                        <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                          <div
                            className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                            style={{
                              background : `url(${activeImage})`,
                              backgroundRepeat : 'no-repeat',
                              backgroundPosition : `${zoomImageCoodinate.x * 100}% ${zoomImageCoodinate.y * 100}% `
    
                            }}
                          >
    
                          </div>
                        </div>
                      )
                    }
          </div>
            <div className='h-full'>
                {
                  loading ? (
                    <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                      {
                      productImageListLoading.map(el=>{
                        return(
                          <div className='h-20 w-20 bg-slate-300 rounded animate-pulse' >
                            
                          </div>
                        )
                      })}
                      </div>
                    
                    
                  ) : (
                    <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                      {
                      data.productImage.map((imgURL,index)=>{
                        return(
                          <div className='h-20 w-20 bg-slate-300 rounded p-1' key={imgURL} >
                            <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={()=>handleMouseEnterProduct(imgURL)} onClick={()=>handleMouseEnterProduct(imgURL)} />
                          </div>
                        )
                      })}
                      </div>
                  )
                }
            </div>
        </div>
        {/* {product Details} */}
        <div>
          {
            loading ? (
              <div className='grid gap-1 w-full'>
                <p className='bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block'></p>
                <h2 className='text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
                <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

                <div className='text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'>
    
                </div>

                <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
                  <p className='text-red-600 bg-slate-200 w-full'></p>
                  <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
                </div>

                <div className='flex items-center gap-3 my-2 w-full'>
                  <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                  <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                </div>

                <div className='w-full'>
                  <p className='text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full'></p>
                  <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-1'>
                <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                <h2 className='text-2xl lg:text-4xl font-semibold'>{data?.productName}</h2>
                <p className='capitalize text-slate-400'>{data?.category}</p>
                <div className='text-red-500 flex items-center gap-1'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalf/>
                </div>
                <div className='flex items-center gap-4 text-2xl font-medium text-red-500'>
                  <p>{displayINRCurrency(data.sellingPrice)}</p>
                  <p className='text-slate-500 line-through'>{displayINRCurrency(data.price)}</p>
                </div>

                <div className='flex items-center gap-3 my-2'>
                  <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' >Buy</button>
                  <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' >Add To Cart</button>
                </div>
                <div>
                  <p className='text-slate-600 font-medium my-1'>Description : </p>
                  <p>{data?.description}</p>
                </div>
        </div>
            )
          }
        </div>
        
      </div>

          {
            data.category && (
              <CategroyWiseProductDisplay category={data.category} heading={"Recommended Product"}/>
            )
          }
      
    </div>
  )
}

export default ProductDetails


{/* {loading ? <p>Loading...</p> : (
        <div>
          <h1>{data.productName}</h1>
          <p>{data.brandName}</p>
          <p>{data.category}</p>
          <img src={data.productImage[0]} alt={data.productName} />
          <p>{data.description}</p>
          <p>Price: {data.price}</p>
          <p>Selling Price: {data.sellingPrice}</p>
        </div>
      )} */}
