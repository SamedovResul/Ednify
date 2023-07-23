import React from 'react'

const Section_Two = () => {
  return (
    <div className="SectionTwo">
      <div className="head_text">
        <h4>  Təkliflərimiz </h4>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-12">
            <div className="head_text">
              <h4>  Təkliflərimiz </h4>
            </div>
          </div> */}

          <div className="col-md-4">
            <div className="text-box">
              <p>Davamiyyət</p>
              <ul>
                <li>Tələbə davamiyyəti</li>
                <li>uğurlu və uğursuz dərslər</li>
                <li> ümumi cədvəllər </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-box">
              <p>Əmək haqları</p>
              {/* <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
              <p>Saat hesabı və ya aylıq əmək haqqlarının hesablanması</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-box">
              <p>Tələbə</p>
              <ul>
                <li>Tələbə davamiyyətinin</li>
                <li>ev tapşırıqlarının və qalıq dərslərin izlənməsi</li>
              </ul>
              {/* <p>Tələbə davamiyyətinin , ev tapşırıqlarının və qalıq dərslərin izlənməsi</p> */}
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Section_Two