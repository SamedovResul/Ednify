import React from 'react'

const Section_Four = () => {
  return (
    <div className="SectionFour">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-sm-6 ">
            <div className="text-box">
              <span>4</span>
              <div>
              <i className="fa-solid fa-building-columns"></i>
                <p>Təhsil mərkəzləri</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="text-box">
              <span>1</span>
              <div>
              <i className="fa-solid fa-school"></i>
                <p>Məktəbə qədər təhsil müəssisəsi</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="text-box">
              <span>400</span>
              <div>
                <i className="fa-solid fa-chalkboard-user"></i>
                <p>Tələbə və Müəllim</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="text-box">
              <span>1000</span>
              <div>
              <i className="fa-solid fa-clock"></i>
                <p>Aylıq dərs saatı</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Section_Four