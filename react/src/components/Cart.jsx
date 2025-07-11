import React from 'react'

const Cart = () => {

    const items = ["earbuds", "phone", "laptop", "tablet"];
  return (
    <div>
        <h1>Your cart</h1>
        {items.length > 0 && <h1>You have {items.length} items in your cart</h1>}

        <ul>
          <h4>Products</h4>
          {items.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default Cart