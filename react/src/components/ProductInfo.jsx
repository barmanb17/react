import React from 'react'

const ProductInfo = () => {
    const users = [
            { id: 1, name: 'John Doe', age: 32 },
            { id: 2, name: 'Jane Smith', age: 52 },
            { id: 3, name: 'Alice Johnson', age: 28 },
    ]
  return (
    <div>
        {users.map((user)=> {
            if (user.age > 30) {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <p>{user.age}</p>
                    </div>
                )
            }
            return null;
        })}
    </div>
  )
}

export default ProductInfo