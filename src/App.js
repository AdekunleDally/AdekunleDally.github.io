import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage  from './pages/home/homepage.component.jsx';
import AboutPage  from './pages/about/aboutpage.component.jsx';
import MySkills from './pages/myskills/myskills.component.jsx';
import Projects from './pages/Projects/projects.component.jsx';
import Header from  './components/header/header.component';

//import {LinkedInPopUp} from 'react-linkedin-login-oauth2';
//import  LinkedInPage from './components/custom-linkedin-button/linkedin-button.component.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/MySkills" component={MySkills} />
        <Route exact path="/Projects" component={Projects} />

     </Switch>
    </div>
  );
}

export default App;
