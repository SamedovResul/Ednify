import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-content-container">
                <h2>OCTADMIN</h2>
                <div className="social-media-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                </div>
            </div>
            <div className="footer-menu">
                <a href="/">About</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Contact</a>
            </div>
            <div className="copy-text">
                <p>Copyright ©2018 octadmin. Designed by</p>
                <a href="/" target="_blank" >Octa Themes</a>
            </div>
        </div>
      </footer>
  )
}

export default Footer