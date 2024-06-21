import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import AdminEditProduct from './AdminEditProduct'
import displayINRCurrency from '../helpers/displayINRCurrency'
// import displayINRCurrency from '../helpers/displayINRCurrency'

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false)

  return (
    <div className='bg-white p-4 rounded '>

      <div className='w-40'>
        <div className='w-32 h-32 flex justify-center items-center'>
          <img src={data?.productImage[0]} alt="" width={120} height={120} className='w-fit mx-auto object-fill h-full' />
        </div>
      
      <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
      <div>

      <div>
        <p>{displayINRCurrency(data.sellingPrice)}</p>
        
        
        
      </div>

      <div
        className='w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 hover:text-white rounded-full cursor-pointer'
        onClick={() => setEditProduct(true)}
      >
        <MdModeEditOutline />
      </div>
      </div>

      
      </div>
      
      {editProduct && (
        <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchData={fetchdata} />
      )}
    </div>
  )
}

export default AdminProductCard
