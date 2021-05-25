import React, { useState } from 'react';
import './Header.css';
import logo from './../../assets/img/logo/logo-l.svg';
import logowhite from './../../assets/img/logo/logo-s-white.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkMobile,
  NavMenuMobile
} from './NavbarElements';

const Header = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		return setSidebar(!sidebar);
	}
	return (
	<div className="menu">
		
        	<a href="/" >
            	<span className="menu-logo flex-center">
            		<img src={logowhite} alt="" />
            		<span>Cori Qu</span>
            	</span>
            	
            </a>
            <ul className="menu-link laptop topBotomBordersOut flex flex-center">
        		<li><NavLink exact={true} activeClassName='active' to='/'>UX/Ui</NavLink></li>
        		<li><NavLink exact={true} activeClassName='active' to="/Coding">Coding</NavLink></li>
        		<li><NavLink exact={true} activeClassName='active' to="/Photography">Photography</NavLink></li>
            	<li><NavLink exact={true} activeClassName='active' to="/About">ABOUT</NavLink></li>
            </ul>
            {sidebar&&(
            <ul className="menu-link">
        		<li><NavLink exact={true} activeClassName='active' to="/" onClick={showSidebar}>UX/UI</NavLink></li>
        		<li><NavLink exact={true} activeClassName='active' to="/Coding" onClick={showSidebar}>Coding</NavLink></li>
        		<li><NavLink exact={true} activeClassName='active' to="/Photography" onClick={showSidebar}>Photography</NavLink></li>
            	<li><NavLink exact={true} activeClassName='active' to="/About" onClick={showSidebar}>ABOUT</NavLink></li>
            </ul>
            )}
        {!sidebar&&(
        <div className="burger" id="menu_open" onClick={showSidebar} >
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		)}
		{sidebar&&(
		<div className="burger" id="menu_close" onClick={showSidebar}>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		)}
    </div>
)}
export default Header;


