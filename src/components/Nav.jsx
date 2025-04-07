import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-[10%] 
    absolute top-0
    w-full bg-gray-400 flex items-center justify-evenly'>
<Link to='/'>Home</Link>
<Link to='/gender'>Gender</Link>
<Link to='/favourite'>Favourites</Link>
    </nav>
  )
}

export default Nav