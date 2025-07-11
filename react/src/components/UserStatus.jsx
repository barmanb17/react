import React, { useState } from 'react'

const UserStatus = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
       <p>
        {loggedIn ? isAdmin ? "Welcome Admin" : "Welcome User" : "Please log in"}
       </p>
    </div>
  )
}

export default UserStatus