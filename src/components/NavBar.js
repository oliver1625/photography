import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <header className="main-head">
      <nav>
        <h1 id="logo">Oliver Dahal</h1>
        <ul className="nav-links">
            <Link to="/login"><li><a >Login</a></li></Link>
            <Link to="/signin"><li><a >SignIn</a></li></Link>
            <Link to="/about"><li><a >About</a></li></Link>
            <Link to="/contact"><li><a >Contact</a></li></Link>
        </ul>
        <div className="burger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
      </nav>
    </header>
  )
}

export default NavBar