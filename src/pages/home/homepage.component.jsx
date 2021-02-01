import React from 'react';
import './homepage.styles.scss'
import {Link} from 'react-router-dom';
import  rocket from '../../assets/FE4.gif';
//import bckgrdImg from '../../assets/bckgrdImg1.jpg' ;

const HomePage=({history})=>(
    <div className="homepage">
    <div className="body">
    <h1 className="name">Lukmon <span>Adeokun</span></h1>
    <h3 className="job-title">Front-End Developer</h3>
    <div>
      <img src={rocket} className="rocket" alt="rocket" />
    </div>
    
    </div>
     
      <footer className="footer">
        <Link className="social-nav-link LinkedIn" to="https://www.linkedin.com/in/lukmon-adeokun-731b8939/">LinkedIn</Link>
        <Link className="social-nav-link  Github" to='https://github.com/AdekunleDally'>Github</Link>
      </footer>
      
    </div>
)

export default HomePage;
