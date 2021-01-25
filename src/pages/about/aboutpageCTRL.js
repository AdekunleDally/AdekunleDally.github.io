import React from 'react';
import {Link} from 'react-router-dom';
import './about.styles.scss';


class AboutPage extends React.Component{

  constructor(){
    super();

    this.state={
      image: "../../assets/udacity.svg",
      imag: "../../assets/udacity.png"
    }
  }
  
    render(){
      const {image, imag} =this.state;
      return(
        <div className="about">
      <div className="details-by-the-left">

      <h4 className="name">Lukman Adeokun</h4>
      <div className="social-links">
        <Link className="social-nav-link LinkedIn" to="https://www.linkedin.com/in/lukmon-adeokun-731b8939/">LinkedIn</Link>
        <Link className="social-nav-link  Github" to='https://github.com/AdekunleDally'>Github</Link>
      </div>
      </div>

      <div className="profile">

       <div className="about-me">
       <h2>About Me</h2>
       <div className="sub-profile">
         <p>
           I am a Front-End Developer with keen interest in software Development. With Intermediate level skills
           javascript and ReactJs as well as good knowledge of testing using Jest.
           When I'm not coding, I like jogging, watching the English premier league and making new friends
         
         </p>
         <hr />
       </div>
      
       </div> 

      
      <div className="Education">
        <h2>Education</h2>
        <div className="school">
          <div style={{
            backgroundImage:`url(${image})`
          }}  className="udacity" />
          <div>
            <h4>Udacity</h4>
            <h3>Front-End Nanodegree Program</h3>
            <p>2020</p>
          </div>
        </div>

        <div className="school">
        <div style={{
           backgroundImage: `url(${imag})`
          }} className="funaab"
            alt="myImage" />
        <div>
          <h4>Federal University of Agriculture, Abeokuta, Ogun State, Nigeria</h4>
          <h3>Electrical Electronics Engineering</h3>
          <p>2015</p>
        </div>
      </div>
        
      </div>

      </div>
      
      

    </div>
      )
    }
}

export default AboutPage;