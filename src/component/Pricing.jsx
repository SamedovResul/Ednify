import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing" id="pricing" >
      <div className="pricing-container">
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>4</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p> Təhsil mərkəzləri </p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>1</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p> Məktəbə qədər təhsil müəssisəsi </p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span>400</span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p> Tələbə və Müəllim </p>
            </div>
            </div>
        </div>
        <div className="pricing-content">
            <div className="pricing-content-container">
            <span> 1000 </span>
            <div className="color-theme">
                <i className="fa-solid fa-gear"></i>
                <p> Aylıq dərs saatı </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing