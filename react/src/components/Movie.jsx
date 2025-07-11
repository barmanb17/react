import React, {use, useState} from 'react'

const Movie = () => {

    const [ movie, setMovie] = useState({
        title: "inception",
        rating: 8.8,
    })

    const ratingUpdate = () => setMovie({...movie, rating: 9}) 
  return (
    <div>
        <h2>Title: {movie.title}</h2>
        <h4>Rating: {movie.rating}</h4>

        <button onClick={ratingUpdate}>Update Rating</button>
    </div> 
  )
}

export default Movie