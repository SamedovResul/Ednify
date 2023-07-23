import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to='/' > Əsas </Link>
          </li>
          <li>
          <Link to='/demo' > Demo üçün müraciət edin </Link> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar