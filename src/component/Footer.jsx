import React from 'react'

const Footer = () => {

  const date = new Date()

  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='box'>
              <h5> Edinify </h5>
              <div>
                <i className="fa-brands fa-facebook-f">  </i>
                <a href="https://instagram.com/ed_nify?igshid=MzRlODBiNWFlZA==" target='blank'>
                <i className="fa-brands fa-instagram"> </i>
                </a> 
              </div>
              <p> Copyright {date.getFullYear()} </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer