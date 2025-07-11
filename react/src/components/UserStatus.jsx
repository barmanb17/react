import React, {useState} from 'react'

const UserStatus = () => {
    const [subscribed, setSubscribed] = useState(true);
    const [isPremium, setIsPremium] = useState(false);
  return (
    <div>
        <h1>{subscribed ? isPremium ? "Thanks for being a premium subscriber" : "You are on the free plan" : "Please subscribe"}</h1>
    </div>
  )
}

export default UserStatus