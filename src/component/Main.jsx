import React from 'react'
import headimg from './img/miguelangel-miquelena-Rc-4YdHRrOs-unsplash.jpg'


const Main = () => {
  return (
    <section className="main" id="main">
        <div className="container">
          <div className="main-header-content">
            <h4> Biznesinizi sürətli, dəqiq və rahat     
              <br /> <span > idarə edin</span>  </h4>
                <p> Davamiyyət, tapşırıqlar, əmək haqqları üçün vahid platforma. </p>
                <div className="main-header-demo-buttons">
                <a href="/" className="demo-btn"> Demo üçün müraciət edin </a>
              </div>
          </div>
          <div className="main-header-content-img">
            <img src={headimg} alt="ednify" />
          </div>
          
        </div>
      </section>
  )
}

export default Main