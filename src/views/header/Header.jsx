import React from 'react'
import '../../styles/header/Header.css'

 const Header =()=> {
  return (
    <div className='header'>
      <div className='logo'>
        
      </div>

      <div className='menu-list'>
       <li><a href=''>about</a></li> 
       <li><a href=''>menu</a></li> 
       <li><a href=''>services</a></li> 
       <li><a href=''>register</a></li>
       <li><a href=''>login</a></li>
      </div>
    </div>
   
  );
}
export default Header
