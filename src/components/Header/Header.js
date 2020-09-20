import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="header-left">
            <div className="header-button">ABOUT</div>
            <div className="header-button">CONTACT</div>
        </div>
        <div className="header-mid">HomeDecor</div>
        <div className="header-right">
            <div className="header-button">CART</div>
            <div className="header-button">LOGIN</div>
            
        </div>
    </div>
  );
}

export default Header;