import React from 'react'

const ProductInfo = () => {
    const products = [
        {id: 1, name: 'Phone', price: 699},
        {id: 2, name: 'Laptop', price: 999},
        {id: 3, name: 'Tablet', price: 499},
    ]
  return (
    <div>
        {products.map((product)=> (
            <div key={product.id}>
                <h2>Product name: {product.name}</h2>
                <h2>Price: {product.price}</h2>
            </div>
        ))}
    </div>
  )
}

export default ProductInfo