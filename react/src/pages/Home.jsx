import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to home page</h1>
        <nav>
            <Link to ="/writer">Writer</Link>
            <Link to="/image">Image</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/shortlisting">Shortlisting</Link>
            <Link to="/notfound">NotFound</Link>
        </nav>
    </div>
  )
}

export default Home