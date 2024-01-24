import React from 'react'
import { Link } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import SwiperImg1 from '../../../assets/img/swiper-slide1.jpeg'
// import SwiperImg2 from '../../../assets/img/swiper-slide2.jpeg'
import SwiperImg3 from '../../../assets/img/swiper-slide3.png'
import SwiperImg4 from '../../../assets/img/swiper-slide4.png'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

register();

const sectionOne = () => {
  // const img = "https://res.cloudinary.com/djzudd6ub/image/upload/v1690714070/miguelangel-miquelena-Rc-4YdHRrOs-unsplash_ibzdjv.jpg"
  return (
    <div className='SectionOne' >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-box">
              <h4> Fast, accurate and growing business 
              
              </h4>
              <p>Framework to run your attendance,scheduling and payroll</p>
              <div>
              <Link to="/demo">
                Apply for a demo 
              </Link>
              </div>
            </div>
          </div> 
          <div className="col-md-6">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {/* <SwiperSlide>
                <div className='img-box'>
                  <img src={SwiperImg1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='img-box'>
                  <img src={SwiperImg2} alt="" />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className='img-box'>
                  <img src={SwiperImg3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='img-box'>
                  <img src={SwiperImg4} alt="" />
                </div>
              </SwiperSlide>
           </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sectionOne