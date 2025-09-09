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
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/faqs">FAQs</Link>
        </nav>
    </div>
  )
}

export default Home