import React, {useState} from 'react';
//import './hamburger.styles.scss';

const Hamburger=()=>{
    const[open, setOpen]=useState(false);
    return(
  <div className="hamburger" open={open} onClick={()=> setOpen(!open)}>
    <div className="horizontal-line"/>
    <div className="horizontal-line"/>
    <div className="horizontal-line"/>
  </div>
    )
}

export default Hamburger;