import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Product() {
  
  const navigate = useNavigate();

  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  })

  return (
    <div className='p-3'>
      Product
      <div>
        <button className='btn btn-primary ms-2'
          onClick={() => navigate("/product/create")}>Add Product</button>
        <button className='btn btn-secondary ms-2'
         onClick={() => navigate("/product/details")}>Product Details</button>
        <Link to={'/product/details/5'}>
          <button className='ms-2'>Product Details - 5</button>
        </Link>

        {
          goToProduct && <Navigate to='/product/details/3'></Navigate>
        }
        <button className='btn btn-primary ms-2'
          onClick={() => setGoToProduct({goToProduct:true})}>Go To Product - 3</button>
      </div>
    </div>
  )
}

export default Product