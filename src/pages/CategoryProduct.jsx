import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
  const params = useParams()
  console.log("category param", params.categoryName)

  return (
    <div>
      {
        params?.categoryName
      }
    </div>
  )
}

export default CategoryProduct
