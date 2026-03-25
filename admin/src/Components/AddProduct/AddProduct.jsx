import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='add-product'> 
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name='name' placeholder='Type Here' />
      </div>
    </div>
  )
}

export default AddProduct
