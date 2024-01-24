import React from 'react'
import img1 from '../../../assets/img/img1.jpg'
import img2 from '../../../assets/img/img2.jpg'
import img3 from '../../../assets/img/img3.jpg'


const Section_Two = () => {
  return (
    <div className="SectionTwo">
      <div className="head_text">
        <h4> Three-way use </h4>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-4 col-4 ">
            <div className="img-box ">
              <p>Manager</p>
              <div className='teacher'>
                {/* <img src={img1} alt="" /> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-4">
            <div className="img-box ">
              <p> Employee </p>
              <div className='ceo'>
                {/* <img src={img2} alt="" /> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-4">
            <div className="img-box ">
              <p> Customer </p>
              <div className='student'>
                {/* <img src={img3} alt="" /> */}
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Section_Two