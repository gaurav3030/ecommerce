import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <div className="banner">
        <div className="bgcover">
            <div className="banner-text">An empty room is a story waiting to be happen, and you are the author.</div>
            <Link to="/shop"><div className="banner-button">Shop Furniture</div></Link>
        </div>
    </div>
  );
}

export default Banner;