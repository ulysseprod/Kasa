import React from 'react'
import  "../styles/Errorpage.css";
import {Link} from "react-router-dom"



function Errorpage() {
  return (
          <div className="page_not_found">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
              <div className="error_link">
                  <Link to="/">Retourner sur la page d’accueil</Link>
              </div>
                
         </div>  
  );
}

export default Errorpage