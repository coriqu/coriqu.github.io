import React from 'react';
import classes from './Footer.css';
import {
	HashRouter as Router
} from "react-router-dom";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}
const icons = importAll(require.context('./../../assets/img/icon/', false, /\.(png|jpe?g|svg)$/));

const Footer = () => {
	
	return (
	<div className="footer flex flex-center">
		<address>
    {/**
            <a className="icons" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/coriqu/">
            	<img src={icons['linkedin.svg'].default} alt="" />
            </a>
            <a className="icons" rel="noreferrer" target="_blank" href="https://www.instagram.com/coriq_/">
            	<img src={icons['instagram.svg'].default} alt="" />
            </a>
            <a className="icons" rel="noreferrer" target="_blank" href="mailto:coriqco@gmail.com">
            	<img src={icons['gmail.svg'].default} alt="" />
            </a>
      **/}
            <a className="icons" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/coriqu/">
              <div className="icon"></div>
            </a>
            <a className="icons" rel="noreferrer" target="_blank" href="https://www.instagram.com/coriq_/">
              <div className="icon"></div>
            </a>
            <a className="icons" rel="noreferrer" target="_blank" href="mailto:coriqco@gmail.com">
              <div className="icon"></div>
            </a>
          
	    </address>
        <p>Designed & Coded by Cori. &#169; 2021</p>
    </div>
)}
export default Footer;