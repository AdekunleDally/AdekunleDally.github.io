import React from 'react';
import './header.styles.scss';
//import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/L5.svg'
import Hamburger from '../hamburger/hamburger.styles'
//import RightNav from '../header/rightNav.styles'

const Header=()=>(
    <div className="header">
      <div className="logo-container">
        <Logo  className="logo" />
      </div>
      <Hamburger />
     
    </div>
)
 
export default Header;