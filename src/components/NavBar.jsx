import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <Link to="/" className='home'>Go home young padawan... much to learn, you still have!</Link>
    </div>
  )
}

export default NavBar