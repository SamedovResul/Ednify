import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <div>
        {/* <div className="logo">
          <p> Edinify </p>
        </div> */}
        <ul>
          <li>
            <Link to='/' > Main </Link>
          </li>
          <li>
          <Link to='/demo' > Apply for a demo  </Link> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar