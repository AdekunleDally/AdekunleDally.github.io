import React from 'react';
import {Redirect} from 'react-router-dom';
import './about.styles.scss';
import udacity from '../../assets/udacity.png';
import Funaab from  '../../assets/Funaab.png';
import lukman from '../../assets/lukman.jpeg';
import {ReactComponent as GithubLogo} from '../../assets/github.svg'
import {ReactComponent as LinkedInLogo} from '../../assets/LinkedIn7.svg'



const AboutPage=()=>(
  <div className="about">
    <div className="details-by-the-left">
      <img src={lukman} alt="lukman"  className="lukman"/>
      <h4 className="name">Lukman Adeokun </h4> 
      <div className=" social-links"> 
      <div className=" social-links-Github"> 
      <Redirect className="logo-container" to='/https://github.com/AdekunleDally'> <GithubLogo  className="GithubLogo"/> </Redirect>
        <Redirect className="social-nav-link" to='https://github.com/AdekunleDally'>Github</Redirect>
      </div>

      <div className=" social-links-LinkedIn">
        <Redirect className="logo-container" to='https://www.linkedin.com/in/lukmon-adeokun-731b8939/'> <LinkedInLogo  className="LinkedInLogo"/> </Redirect>
        <Redirect className="social-nav-link" to="https://www.linkedin.com/in/lukmon-adeokun-731b8939/">LinkedIn</Redirect>
      </div>
      </div>
    </div>
    <div className="profile">
      <div className="about-me">
        <h2>About Me</h2>
        <div className="sub-profile">
           <p>
             I am a Front-End Developer with keen interest in software Development. With Intermediate level skills
             in javascript and ReactJs as well as good knowledge of testing using Jest.
             When I'm not coding, I like jogging, watching the English premier league and making new friends
           </p>
           <hr />
        </div>
      </div> 
      <div className="Education">
        <h2>Education</h2>
        <div className="school">
          <div>
            <img src={udacity} alt="udacity" className="udacity"/>
          </div>
          <div className="school-details">
            <h3>Udacity</h3>
            <h4>Front-End Nanodegree Program</h4>
            <p>2020</p>
          </div>
        </div>
        <div className="school">
          <div>
            <img src={Funaab} alt="funaab"  className="funaab"/>
          </div>
          <div className="school-details">
            <h3>Federal University of Agriculture, Abeokuta, Ogun State, Nigeria</h3>
            <h4>Electrical Electronics Engineering</h4>
            <p>2015</p> 
          </div> 
        </div>
      </div>  
      <h2><hr />Get In Touch</h2>
      </div>
    </div>
)

export default AboutPage;

