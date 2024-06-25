import React, { useEffect, useState } from 'react'
//desktop Image
import image1 from  '../assest/banner/img1.webp'

import image3 from '../assest/banner/img2.webp'
import image5 from '../assest/banner/img3.jpg'
import image7 from '../assest/banner/img4.jpg'
import image9 from '../assest/banner/img5.webp'

// mobile Image

import image2 from '../assest/banner/img1_mobile.jpg'
import image4 from '../assest/banner/img2_mobile.webp'
import image6 from '../assest/banner/img3_mobile.jpg'
import image8 from '../assest/banner/img4_mobile.jpg'
import image10 from '../assest/banner/img5_mobile.png'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage , setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image3,
        image5,
        image7,
        image9
    ]

    const mobileImages = [
        image2,
        image4,
        image6,
        image8,
        image10

    ]



    const nextImage = () =>{
        if (desktopImages.length-1 > currentImage) {
            setCurrentImage(preve => preve + 1)
        }
        
    }

    const previousImage = () => {
        if(currentImage != 0)
            {
                setCurrentImage(preve=> preve-1)
            }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },3000)

        return ()=> clearInterval(interval)
    },[currentImage])
  return (
    <div className='container mx-auto px-4 rounded '>
    <div className='h-56 md:h-72 w-full bg-slate-200 relative '>
        <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
            <div className='flex justify-between w-full text-2xl'>
            <button  onClick={previousImage}  className='bg-white shadow-md rounded-full p-1 '><FaAngleLeft /></button>
            <button  onClick={nextImage}  className='bg-white shadow-md rounded-full p-1 '><FaAngleRight/></button>
            </div>
            
        </div>

        {/* desktop and mobile version */}
        <div className='hidden md:flex h-full w-full overflow-hidden '>
        {
            desktopImages.map((imageURL, index)=>{
                return(
                    <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                        <img src={imageURL} className='w-full h-full'/>
                    </div> 
                )
            })
        }
        </div>

        {/* mobile version */}
        <div className='flex h-full w-full overflow-hidden md:hidden'>
        {
            mobileImages.map((imageURL, index)=>{
                return(
                    <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                        <img src={imageURL} className='w-full h-full object-cover'/>
                    </div> 
                )
            })
        }
        </div>


        
       
    </div>
    </div>
    
  )
}

export default BannerProduct
