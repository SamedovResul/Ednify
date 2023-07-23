import React from 'react'
import img from './img/miguelangel-miquelena-Rc-4YdHRrOs-unsplash.jpg'
import { Link } from 'react-router-dom'


const sectionOne = () => {
  return (
    <div className='SectionOne' >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-box">
              <h4>Biznesinizi sürətli, dəqiq və rahat
                <br />
                idarə edin
              </h4>
              <p>Davamiyyət, tapşırıqlar, əmək haqqları üçün vahid platforma.</p>
              <div>
              <Link to="/demo">
                Demo üçün müraciət edin 
              </Link>
              </div>
            </div>
          </div> 
          <div className="col-md-6">
            <div className='img-box'>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sectionOne