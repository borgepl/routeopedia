import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductList() {

  const navigate = useNavigate();

  return (
    <div>
      ProductList
      <button className='btn btn-primary ms-2'
          onClick={() => navigate("/product/create")}>Add Product</button>
    </div>
  )
}

export default ProductList