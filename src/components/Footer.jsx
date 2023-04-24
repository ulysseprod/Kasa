import React from 'react'
import  "./Footer.css";

function footer() {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src="footerLogo.png" alt="logo of footer"/>
        </div>
        <div className="footer_text">
        © 2020 kasa. All rights reserved
        </div>
    </div>
  )
}

export default footer