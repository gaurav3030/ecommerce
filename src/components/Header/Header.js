import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="header-left">
            <div className="header-button">ABOUT</div>
            <div className="header-button">CONTACT</div>
        </div>
        <Link to="/"><div className="header-mid">HomeDecor</div></Link>
        
        <div className="header-right">
            <div className="header-button">CART</div>
            <Link to="/login"><div className="header-button">LOGIN</div></Link>
        </div>
    </div>
  );
}

export default Header;