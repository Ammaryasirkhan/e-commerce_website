import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo_big.png'
import instgramIcon from '../Assets/instagram_icon.png'
import pintesterIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

 const Footer = () => {
  return (
    <div  className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p>AmmarYasir</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Prodcuts</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instgramIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintesterIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsappIcon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p> Copyright @2024 -All Rights Reserved</p>
        </div>

    </div>
  )
}
export default Footer;