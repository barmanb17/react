import React from 'react'

const Product = ({name, age}) => {
  return (
<div>
    <h2>product name: {name}</h2>
    <p>product price: {age}</p>
</div>
  )
}

export default Product