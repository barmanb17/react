import React from 'react'

const ProductInfo = () => {
    
    const product ={
        name: "laptop genx",
        price: 2444,
        availability: "in stock"
    }
  return (
    <div>
        <h1>name: {product.name}</h1>
        <h1>price: {product.price}</h1>
        <h1>Availability: {product.availability}</h1>
    </div>
  )
}

export default ProductInfo