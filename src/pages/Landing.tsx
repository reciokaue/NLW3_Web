import React from 'react';

import '../styles/pages/landing.css'
import logoImg from '../images/Logo.svg'

import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Landing(){
    return (
        <div id="pageLanding">
            <div className="contentWrapper">
                <img src={logoImg} alt="Happy"/>
    
                <main>
                  <h1>Leve felicidade para o mumndo</h1>
                  <p>Visite orfanatos e mude o dia de muitas crianças.</p>
    
                  <div className="location">
                    <strong>Sorocaba</strong>
                    <span>São Paulo</span>
                  </div>
    
                  <Link to="/app" className="enterApp">
                    <FiArrowRight size={26} color="0e0e0e"/>
                  </Link>
                </main>
            </div>
        </div>
      );
}

export default Landing;