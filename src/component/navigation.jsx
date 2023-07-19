import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
        <Link to='/'>
          home
        </Link>
        <Link to='/demo'>
          Request a demo
        </Link>
        <a href="https://64b8597b9dcc330300f89626--dreamy-tarsier-9d2bb9.netlify.app/salary"> demo test </a>
        </nav>
      </header>
      <header className="mobile-header">
          <div className="mobile-header-container">
            <div className="menu-icon">
              <i className="fa-solid fa-bars"></i>
            </div>
          <div className="mobile-header-text">
          <h2>octAdmin</h2>
      </div>
      </div>
      </header>
    </>
  )
}

export default Navigation