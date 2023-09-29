import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {productId} = useParams();

  return (
    <div className='p-3'>
      
      <h4>ProductDetails</h4>
      <p>Product Id : {productId}</p>
      
    </div>
  )
}

export default ProductDetails