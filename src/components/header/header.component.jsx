import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/L5.svg'

const Header=()=>(
    <div className="header">
      <Logo  className="logo"/>
      <div className="nav-links">
        <Link className="nav-link" to='/About'>About Me</Link>
        <Link className="nav-link" to='/MySkills'>My Skills</Link>
        <Link className="nav-link" to='/Projects'>Projects</Link>
        </div>
    </div>
)
 
export default Header;