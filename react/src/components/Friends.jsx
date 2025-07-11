import React, {useState} from 'react'

const Friends = () => {
    const [friends, setFriends] = useState(['Alice', 'Bob', 'Charlie']);

    const addOneFriend = () => setFriends([...friends, "bijoy"])
    const removeFriend = () => setFriends(friends.slice(0, -1))
    const updateFriend = () => setFriends(friends.map(f => f === "Alice" ? "Bijoy" : f))
  return (
    <div>
        <h1>Friends</h1>
        {friends.map((f)=> (
            <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriend}>Add new friend</button>
        <button onClick={removeFriend}>Remove friend</button>
        <button onClick={updateFriend}>Update Friend</button>
    </div>
  )
}

export default Friends