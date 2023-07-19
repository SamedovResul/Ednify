import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing" id="pricing" >
      <div className="pricing-container">
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>30</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p>COLOR THEMES</p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>800</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p>COLOR THEMES</p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>300</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p>COLOR THEMES</p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>500</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p>COLOR THEMES</p>
            </div>
        </div>
        </div>
      </div>
      <div className="price-exclusive">
          <div className="price-exc-container">
          <h3 className="text-theme">EXCLUSIVE ONLY ON ENVATO MARKETPLACE.</h3>
          <p>SEE THEMEFOREST STANDARD LICENSES & EXTENDED LICENSES FOR LICENSING.</p>
          <div className="price-exc-btn">
            <a href="/">License Details</a>
            <a href="/">Buy Now ($14)</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing