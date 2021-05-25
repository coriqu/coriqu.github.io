import './App.css';
import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useRouteMatch
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop/ScrollToTop.js' //

import Home from './Home.js';
import Beerest from './beerest.js';
import Rebeauty from './Rebeauty.js';
import Explorest from './Explorest.js';
import PhotoWebsite from './PhotoWebsite.js';
import Spirits from './Spirits.js';
import About from './About.js';
import Jasper from './jasper.js';
import Astrobuddy from './Astrobuddy.js';

import Coding from './Coding.js';
import Photography from './Photography.js';




import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';


import 'animate.css';

class App extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            homepage: true
        }

    }
	
  	render() {
  		return (
  			<React.Fragment>
			<div className="mycontainer">
			    <main className="portfolio-menu flex">
				    	<Router>
				    	<Header></Header>
				    		<ScrollToTop>
				    		<Switch>
				    			<Route path="/Jasper" component={Jasper} />		
				    			<Route path="/Astrobuddy" component={Astrobuddy} />	
								<Route path="/Beerest" component={Beerest} />
								<Route path="/Rebeauty" component={Rebeauty} />
								<Route path="/Explorest" component={Explorest} />
								<Route path="/Spirits" component={Spirits} />
								<Route path="/About" component={About} />
								<Route path="/Coding" component={Coding} />
								<Route path="/Photography" component={Photography} />
								<Route path="/" component={Home} />
								<Redirect to="/" />
					        </Switch>
					        </ScrollToTop>
					    </Router>

			    </main>
			    <Footer></Footer>
			</div>
			</React.Fragment>
	  	);
  	}
}
// function Home() {
// 	let { path, url } = useRouteMatch();

// }
export default App;
