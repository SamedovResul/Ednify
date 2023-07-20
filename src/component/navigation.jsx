import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
        <Link to='/'>
          Əsas
        </Link>
        <Link to='/demo'>
          Demo üçün müraciət edin 
        </Link>
        {/* <a href="https://dreamy-tarsier-9d2bb9.netlify.app/login"> demo test </a> */}
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