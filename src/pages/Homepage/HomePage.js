import React, { useContext, useEffect } from 'react';
import './Homepage.css';

import Banner from '../../components/Banner/Banner';

import UserContext from '../../context/UserContext';
 
function Homepage(props) {
  
  const { userData } = useContext(UserContext);
  useEffect(() => {
    
    if (!userData.user){ 
      props.history.push("/login");
      console.log(userData.user);
    }
    
  });
  return (
    <div>
      <Banner />
    </div>
  );
}

export default Homepage;