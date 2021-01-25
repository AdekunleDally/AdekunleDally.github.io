import React from 'react';
import './projects.styles.scss'
import { withRouter } from "react-router-dom";

import ShoppingImage from "../../assets/shoppingImage2.jpg"
import ShoppingImage1 from "../../assets/covid19.jpg"
import Travels from "../../assets/travels.jpg"
import NLP from "../../assets/NLP.jpg"


const Projects=({history})=>(
    <div className="projects">
      <div className="project">
        <div>
          <img src={ShoppingImage} alt="shoppingImage" className="shoppingImage" />
        </div>
        <div className="project-details">
          <h2> E-commerce WebApp</h2>
          <span>A ReactJs website that allows users to browse through</span>
          <span>a collection of their shopping items of choice,</span>
          <span>add to cart, and make payment</span>
          <div className="btn-details">
            <button type='button' className="btn-link" onClick={(e)=>(window.location='https://www.dallyapp.herokuapp.com')}>Live</button>
            <button type='button' onClick={(e)=>(window.location='https://github.com/AdekunleDally/ecommerce-website')} className="btn-link" >Github</button>
          </div>
        </div>
      </div>

      <div className="project">
        <div>
          <img src={ShoppingImage1} alt="shoppingImage" className="shoppingImage" />
        </div>
        <div className="project-details">
          <h2 className="project-title"> COVID-19 APP</h2>
          <span>This  Javascript quiz  App serves to educate and enlighten people </span>
          <span>about the dreaded pandemic</span>
          <div className="btn-details">
            <button className="btn-link" onClick={(e)=>(window.location='https://covid-19-app-4a369.web.app')}>Live</button>
            <button className="btn-link" onClick={(e)=> (window.location='https://github.com/AdekunleDally/COVID-19-QUIZ')}>Github</button>
          </div>
        </div>
      </div>

      <div className="project">
        <div>
          <img src={Travels} alt="shoppingImage" className="shoppingImage" />
        </div>
        <div className="project-details">
          <h2 className="project-title"> DALLY TRAVEL APP</h2>
          <span>This  javascript App utilizes multiple APIs to present a </span>
          <span>user with all they need to know about their upcoming trip </span>
          <div className="btn-details">
          <button className="btn-link" onClick={(e)=> (window.location='https://travel-app-5b612.web.app')}>Live</button>
          <button className="btn-link" onClick={(e)=> (window.location='https://github.com/AdekunleDally/Travel-App')}>Github</button>
          </div>
        </div>
      </div>

      <div className="project">
        <div>
          <img src={NLP} alt="shoppingImage" className="shoppingImage" />
        </div>
        <div className="project-details">
          <h2 className="project-title"> Natural Language Processing</h2>
          <span>This  App is a web tool that allows users run Natural Language </span>
          <span> Processing (NLP)on articles or blogs found on other websites</span>
          <div className="btn-details">
            <button className="btn-link">Live</button>
            <button className="btn-link" onClick={(e)=> (window.location='https://github.com/AdekunleDally/NLP')}>Github</button>
          </div>
        </div>
      </div>

    </div>
)

export default withRouter(Projects)