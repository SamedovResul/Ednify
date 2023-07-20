import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-content-container">
                <h2> Edinify </h2>
                <div className="social-media-icons">
                    <i className="fa-brands fa-facebook-f">  </i>
                     <a href="https://instagram.com/ed_nify?igshid=MzRlODBiNWFlZA==" target='blank'>
                     <i className="fa-brands fa-instagram"> </i>
                    </a> 
                </div>
            </div>
            <div className="copy-text">
                <p>Copyright ©2023</p>
            </div>
        </div>
      </footer>
  )
}

export default Footer