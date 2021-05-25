
import React from 'react';
import ProjectCodingSection from './components/ProjectCodingSection/ProjectCodingSection.js';
import photography_logo from './assets/img/photography/cover.png';
import drinkingbuddy from './assets/img/Coding/drinkingbuddy.png';
import logo from './assets/img/logo/logo-lw.svg';
import {Typewriter,Skills} from './components/Styled/StyledComponents.js';
const Coding = (props) => {
	const controls = [
		// { 
	 //    	title: 'My Portfolio',
		// 	description: 'It is what you are just looking at!',
		// 	label:['React','React Router',"Node.js","Javascript","CSS"],
		// 	img: logo,
		// 	img2: logo,
		// 	size: '25%',
		// 	backgroundColor: '#222',
		// 	link: '/'
		// },
		{ 
	    	title: 'Mobile Application Development',
			description: 'Mobile App for Alcohol Lovers. Implemented functions of multiple users signing up, signing in, creating, editing memories.',
			label:['PHP','MySQL',"JQuey","Google Map","Javascript","CSS"],
			img: drinkingbuddy,
			img2: drinkingbuddy,
			size: '100%',
			backgroundColor: '#222',
			link: 'http://coriqu.com/drinkingbuddy/'
		},
	    { 
	    	title: 'Responsive Website for Photography Works',
			description: 'Responsive Website design and development for my photography works.',
			label:['PHP','MySQL',"JQuey","Javascript","CSS"],
			img: photography_logo,
			img2: photography_logo,
			size: '100%',
			backgroundColor: '#222',
			link: 'http://coriqu.com/photography/'
		}
	];
	return (
	<div className="project-box">
		<div className="img-container grid grid-gap-xs">
			<Typewriter className="col-12 flex flex-center">
				<div>
				<h4>I code websites.</h4>
				</div>
			</Typewriter>
			<div className="col-12 flex flex-center">
				<p>Previously Front-end Engineer Intern <a href="">@Lenovo</a></p>
				<Skills>
					<h5><strong>Front-end: </strong> React.js | Redux | React-Router | JavaScript(ES6) | HTML | CSS | Bootstrap | jQuery | D3.js</h5>
					<h5><strong>Back-end: </strong> Node.js | PHP | SQL(MySQL) | NoSQL (MongoDB) | Express | socket.io</h5>
				</Skills>
			</div>
    	</div>
		<div className="portfolio-content portfolio-content-coding grid flex-width-80 grid-gap-md">

		{controls.map(project => (
            <ProjectCodingSection 
            	key = {project.title} 
                title={project.title} 
                description={project.description}
                label = {project.label}
                img = {project.img}
                img2 = {project.img2}
                size = {project.size}
                link = {project.link}
                backgroundColor = {project.backgroundColor}
            />
        ))}
        </div>
	</div>
)}
export default Coding;