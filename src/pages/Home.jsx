import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airdopes"}/>
      <HorizontalCardProduct category={"camera"} heading={"Top's Camera"}/>
      <HorizontalCardProduct category={"earphones"} heading={"Top's Camera"}/>


      <VerticalCardProduct category={"Mouse"} heading={"Popular Brand"}/>
    <VerticalCardProduct category={"airpodes"} heading={"Airpodes"}/>
    <VerticalCardProduct category={"camera"} heading={"Camera"}/>
    <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
    <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
    <VerticalCardProduct category={"printers"} heading={"Printers"}/>
    <VerticalCardProduct category={"processor"} heading={"Processor"}/>
    <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
    <VerticalCardProduct category={"speakers"} heading={"Speaker"}/>
    <VerticalCardProduct category={"televisions"} heading={"Television"}/>
    <VerticalCardProduct category={"watches"} heading={"Watches"}/>
    <VerticalCardProduct category={"trimmers"} heading={"Top's Camera"}/>


    
    </div>
  )
}

export default Home