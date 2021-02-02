//import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Links= styled(Link)`
  list-style:none;
  display:flex;
  flex-flow: row nowrap;
  text-decoration: none;
 

  .nav-link{
      padding: 18px 10px;
  }

  @media (max-width: 768px){
    //display: none;
        flex-flow: column nowrap;
        background-color: #002538;
        position: fixed;
        transform: ${({ open })=>open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        .nav-link{
          color: #ffffff;
        }
  }
`;

const RightNav=({open})=>{
  return(
    <Links open={open}>
      <Link className="nav-link" to='/About'>about me</Link>
      <Link className="nav-link" to='/MySkills'>skills</Link>
      <Link className="nav-link" to='/Projects'>projects</Link>
    </Links>
   )
 }
 export default RightNav;
    