// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import SummaryApi from '../Common/Url'

// const ProductDetails = () => {
//   const [ data , setData] = useState({
//     productName: "",
//         brandName: "",
//         category: "",
//         productImage: [],
//         description: "",
//         price: "",
//         sellingPrice: ""
//   })

//   const params = useParams()
//   const [loading , setLoading] = useState(false)
//   console.log("params",params);

//   const fetchProductDetails = async() =>{
//     setLoading(true)


//     const response = await fetch(SummaryApi.productDetails.url,{
//       method : SummaryApi.productDetails.method,
//       headers : {
//         "content-type" : "application/json"
//       },
//       body : JSON.stringify({
//         productId: params._id
//       })
//     })

    
//     console.log("response product detail",response);
//     setLoading(false)
//     const dataResponse = await response.json()

    
//     console.log("dataResponse",dataResponse);
//     setData(dataResponse?.data)
//     console.log("data product detail ", data);
//   }
  
//   useEffect(()=>{
//     fetchProductDetails()
//   },[params._id])

//   return (
//     <div>
//       ProductDetails
//       ProductDetails
//     </div>
//   )
// }

// export default ProductDetails


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../Common/Url'

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
  const [loading, setLoading] = useState(false)
  console.log("params", params);

  const fetchProductDetails = async () => {
    setLoading(true)

    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: params._id
      })
    })

    console.log("response product detail", response);
    setLoading(false)
    const dataResponse = await response.json()

    console.log("dataResponse", dataResponse);
    
    if (dataResponse.data) {
      setData(dataResponse.data)
    } else {
      console.error('No data received from API' )
    }
    console.log("data product detail ", data);
  }

  useEffect(() => {
    fetchProductDetails()
  }, [params._id])

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <div>
          <h1>{data.productName}</h1>
          <p>{data.brandName}</p>
          <p>{data.category}</p>
          <img src={data.productImage[0]} alt={data.productName} />
          <p>{data.description}</p>
          <p>Price: {data.price}</p>
          <p>Selling Price: {data.sellingPrice}</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
