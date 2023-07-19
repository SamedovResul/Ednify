import React from 'react'

const Main = () => {
  return (
    <section className="main" id="main">
        <div className="container">
          <div className="main-header-content">
            <h4>MODERN MINIMAL UI KIT <br/>
                FOR YOUR NEXT HTML5 APPLICATION</h4>
                <h1>octAdmin</h1>
                <p>Powerfull Ultimate Clean Modern looking All in One Bootstrap 4 Admin Teamplate
                </p>
          </div>
          <div className="main-header-demo-buttons">
            <a href="/" className="demo-btn">See The Demos</a>
            <a  href="/" className="doc-btn">Online Documentation</a>
          </div>
          <div className="main-header-content-img">
            {/* <img src="./assets//iPhone 12 Pro.png" alt="/content"> */}
            <img src="./assets//iPhone 12 Pro.png" alt="" />
          </div>
        </div>
      </section>
  )
}

export default Main