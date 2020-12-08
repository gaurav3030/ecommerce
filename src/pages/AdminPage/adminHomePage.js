import React, { useContext, useEffect } from 'react';
import '../Homepage/Homepage.css';

import Banner from '../../components/Banner/Banner';

import AdminContext from '../../context/AdminContext';
 
function AdminHomepage(props) {
  const { adminData } = useContext(AdminContext);
  useEffect(() => {
    
    if (!adminData.admin) props.history.push("/admin/login");
  });
  return (
    <div>
      <Banner />
    </div>
  );
}

export default AdminHomepage;
