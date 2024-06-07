import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'><span className='header-title'>HealthyBlogs </span>
        <div className='link-container'>
        <Link to='./home' className='links'>Home</Link>
        <Link to='/about' className='links'>About</Link>
        <Link to='/blog' className='links'>Blogs</Link>
        <Link to='/community' className='links'>Community</Link>
        </div>


    </div>
  )
}

export default Navbar