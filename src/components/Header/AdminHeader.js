import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AdminContext from '../../context/AdminContext'

function Header() {
  const {adminData , setAdminData} = useContext(AdminContext);
  const logout = () => {
    setAdminData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("auth-admin-token","");
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
              adminData.admin ? <div className="header-button" onClick={logout}>LOGOUT</div> :
                <Link to="/admin/login"><div className="header-button">LOGIN</div></Link>
              
            }
            
        </div>
    </div>
  );
}

export default Header;