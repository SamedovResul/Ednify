import React from 'react'

const Demo = () => {
  return (
    <section className="demo" id="demo">
        <div className="container">
            <div className="demo-dashboard">
                <div className="dashboard-header">
                    <h5> Təkliflərimiz</h5>
                </div>
            </div>
            <div className="demo-dashboard-container">
                 <div className="demo-dash-card">
                    
                   <div className="demo-dash-card-container">
                    <h6 className="text-theme"> Davamiyyət  </h6>
                    <p> Tələbə davamiyyəti, uğurlu və uğursuz dərslər, ümumi cədvəllər </p>
                    
                    </div>
                </div>
                 <div className="demo-dash-card">
                    
                    <div className="demo-dash-card-container">
                    <h6 className="text-theme"> Əmək haqqları </h6>
                    <p> Saat hesabı və ya aylıq əmək haqqlarının hesablanması </p>
                    
                    </div>
                </div>
                <div className="demo-dash-card">
                    
                   <div className="demo-dash-card-container">
                    <h6 className="text-theme"> Tələbə </h6>
                    <p>Tələbə davamiyyətinin , ev tapşırıqlarının və qalıq dərslərin izlənməsi </p>
                    
                    </div>
                </div>
            </div>
          
        </div>
      </section>
  )
}

export default Demo