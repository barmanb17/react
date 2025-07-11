import React from 'react'

const Greeting = ({ timeOfDay }) => {
    return (
        <div>
            {timeOfDay === "morning" ? (<h1>Hello, Good Morning!</h1>) : timeOfDay === "afternoon" ? (<h1>Hello, Good Afternoon!</h1>) : (<h1>Hello, Welcome!</h1>)}
        </div>

    )
}

export default Greeting