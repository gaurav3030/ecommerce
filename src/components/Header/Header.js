import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserContext from '../../context/UserContext'

function Header() {
  const {userData , setUserData} = useContext(UserContext);
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("auth-token","");
  }
  return (
    <div className="header">
        <div className="header-left">
            <div className="header-button">ABOUT</div>
            <div className="header-button">CONTACT</div>
        </div>
        <Link to="/"><div className="header-mid">HomeDecor</div></Link>
        
        <div className="header-right">
            <div className="header-button">CART</div>
            {
              userData.user ? <div className="header-button" onClick={logout}>LOGOUT</div> :
                <Link to="/login"><div className="header-button">LOGIN</div></Link>
              
            }
            
        </div>
    </div>
  );
}

export default Header;