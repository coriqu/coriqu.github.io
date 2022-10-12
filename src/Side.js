import React from 'react';
import ProjectSideSection from './components/ProjectSideSection/ProjectSideSection.js';
import airterra from './assets/img/sides/airterra.png';
import email from './assets/img/sides/email.png';
import aspecta from './assets/img/sides/aspecta.png';
import motion from './assets/img/sides/motion.png';
import video from './assets/img/spirit/display.mp4';
const Side = (props) => {
	const controls = [
		
	    { 
	    	title: 'Email Design & Development (2022)',
			category: '',
			description: 'Created a design system for email marketing from scratch. Developed 30+ responsive emails using enterprise ESP tools (Salesforce Marketing Cloud) and front-end coding.',
			img: email,
		},
	    { 
	    	title: 'Aspecta (2022)',
			category: 'UI/UX Design | Design System',
			description: '',
			img: aspecta,
		},
		{ 
	    	title: 'Airterra (2021)',
			category: 'Pitch Deck Design',
			description: '',
			img: airterra,
		},
		{ 
	    	title: 'Spirits In The Sky (2021)',
			category: 'Branding | Motion Graphics',
			description: '',
			img: "",
		}

	];
	return (
	<div className="">
		<div className="project-box grid grid-gap-xs">
			<div className="col-12 flex flex-center">
				{/*s*/}</div>
    	</div>
		<div className="grid flex-width-80 grid-gap-xs">

		{controls.map(project => (
            <ProjectSideSection 
            	key = {project.title} 
                title={project.title} 
                category={project.category} 
                description={project.description}
                img = {project.img}
            />
        ))}
        		<div className="col-xl-12 col-md-12 col-xs-12 col-12">
		    		<div className="flex flex-center" style={{padding: '2em', backgroundColor: '#0a1f48',backgroundImage: `url(${motion})`,backgroundSize: 'cover',}}>
			    		<video controls style={{maxHeight: '500px', backgroundColor: '#0a1f48'}}>
							<source src={video} type="video/mp4" />
						</video>
		    		</div>
		    	</div>
        </div>
	</div>
)}
export default Side;