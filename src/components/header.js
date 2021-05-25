import React from 'react';
import logo from './../logo.svg';

class Header extends React.Component {
	render() {
		return (
			<div className="">
				<a href="index.html" className="App-link">
	            	<img src={logo} className="App-logo" alt="logo" />
	            </a>

			</div>
		)
	}
}
export default Header;