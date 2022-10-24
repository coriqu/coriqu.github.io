import React, {useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import ProjectSection from './components/ProjectSection/ProjectSection.js';
import ProjectSection2 from './components/ProjectSection/ProjectSection2.js';
import Moreaboutme from './assets/img/home/Moreaboutme.svg';
import bg from './assets/img/home/bg-03.svg';
import {Aboutme} from './components/Styled/StyledComponents.js';

import beerest_logo from './assets/img/beerest/logo.svg';
import explorest_logo from './assets/img/explorest/explorest_logo.png';
import beauty_logo from './assets/img/beauty/logo.svg';
import photography_logo from './assets/img/photography/cover.png';
import spirit_logo from './assets/img/spirit/logo.svg';
import Jasper_logo from './assets/img/jasper/logo-j.svg';
import Astro_logo from './assets/img/astrobuddy/nasa.svg';
import Wyndham_logo from './assets/img/wyndham/logo-wyndham-destinations.svg';



// import beerest_hover from './assets/img/beerest/concept.gif'
import beerest_hover from './assets/img/beerest/hero2.png';
// import explorest_hover from './assets/img/explorest/mockup.png'
import beauty_hover from './assets/img/beauty/visual_design5.png';
import spirits_hover from './assets/img/spirit/hero1.png';
import jasper_hover from './assets/img/jasper/landing.png';
import astro_hover from './assets/img/astrobuddy/cover02.png';
import Wyndham_hover from './assets/img/wyndham/hero.png';

import logo from './assets/img/logo/logo-s-white.svg';
const controls = [
	{ 
    	title: 'Wyndham Destinations',
		description: 'I led multi-brand design systems in different stages as a design system thinker, advocate, and maintainer.',
		// NASA Sponsorship Project
		label:['Design System'] ,
		img: Wyndham_logo,
		img2: Wyndham_hover,
		size: '30%',
		backgroundColor: '#000',
		fontColor: "#fff",
		link: '/wyndham'
	},
	{ 
    	title: 'Astro Buddy',
		description: 'Astro Buddy is a modular robot that helps astronauts in space.',
		// NASA Sponsorship Project
		label:['Interaction Design','Concept Design'] ,
		img: Astro_logo,
		img2: astro_hover,
		size: '25%',
		backgroundColor: '#000',
		fontColor: "#fff",
		link: '/Astrobuddy'
	},
	{ 
    	title: 'Jasper Financial',
		description: 'UX Design and Front-End Development at Jasper Financial.' ,
		label:['UI/UX Design', 'Front-End Development','Design System'] ,
		img: Jasper_logo,
		img2: jasper_hover,
		size: '5%',
		backgroundColor: '#0F2C2F',
		fontColor: "#fff",
		// backgroundColor: 'rgb(234, 238, 238)',
		link: '/jasper'
	},
	
    { 
    	title: 'Beerest',
		description: 'Data visualization project that discovers great beers in California.' ,
		label:['Data visualization', 'Case Study', 'Coding'] ,
		img: beerest_logo,
		img2: beerest_hover,
		size: '30%',
		// backgroundColor: '#0F2C2F', 
		backgroundColor: '#dedede',
		fontColor: "#222",
		link: '/beerest'
	},
 //    { 
 //    	title: 'Rebeauty',
	// 	description: 'Designing a safer experience for people to buy and sell second-hand beauty products online.' ,
	// 	label:['Case Study', 'UI/UX Design'] ,
	// 	img: beauty_logo,
	// 	img2: beauty_hover,
	// 	size: '18%',
	// 	// backgroundColor: '#5F5496',
	// 	backgroundColor: '#4D3C71',
	// 	fontColor: "#fff",
	// 	link: '/Rebeauty'
	// },
 //    { 
 //    	title: 'Explorest',
	// 	description: 'Explorest APP User Experience Redesign.',
	// 	label:['UX', 'Case Study'] ,
	// 	img: explorest_logo,
	// 	img2: explorest_hover,
	// 	size: '40%',
	// 	backgroundColor: '#00B2BF',
	// 	link: '/Explorest'
	// },
 //    { 
 //    	title: 'Spirits In The Sky',
	// 	description: 'Cocktail bar branding.',
	// 	label:['Branding', 'Visual Design', 'Web Design', 'Motion Graphics'],
	// 	img: spirit_logo,
	// 	img2: spirits_hover,
	// 	size: '30%',
	// 	backgroundColor: '#0a1f48',
	// 	fontColor: "#fff",
	// 	link: '/Spirits'
	// },
	// { 
 //    	title: 'Gallery',
	// 	description: 'Motion graphics',
	// 	label:['Branding', 'Visual Design', 'Web Design', 'Motion Graphics'],
	// 	img: null,
	// 	img2: null,
	// 	size: '85%',
	// 	backgroundColor: '#111',
	// 	fontColor: "#fff",
	// 	link: '/Spirits'
	// }
    
	
];
const Home = (props) => {
	useEffect(()=>{
		const canvas = document.querySelector('canvas');
		const c = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		// canvas.width = 560;
		canvas.height = window.innerHeight;

		const mouse = {
			x: window.innerWidth / 2,
			y: 0 
		};

		window.addEventListener("mousemove", function(event) {
			mouse.x = event.clientX*2/3;
			mouse.y = event.clientY;
		});

		canvas.addEventListener("touchmove", function(event) {
			event.preventDefault();
			mouse.x = event.touches[0].pageX*2/3;
			mouse.y = event.touches[0].pageY;
		});

		window.addEventListener("resize", function() {
			canvas.width = window.innerWidth;	
			canvas.height = window.innerHeight;
		});

		function Particle(x, y, radius, color) {
			this.x = x;
			this.y = y;
			this.dx = (Math.random() - 0.5) * 1;
			this.dy = (Math.random() - 0.5) * 1;
			this.radius = radius;
			this.color = color;
			this.ttl = 0.65; 
			this.opacity = 0.5;

			this.update = function() {

		    var diffX = mouse.x - (canvas.width / 2) - this.x;
		    var diffY = mouse.y - (canvas.height / 2) - this.y;
		    var dist2 = diffX * diffX + diffY * diffY + 1;
		    var ddx = 0.06 * Math.abs(diffX) * diffX / dist2;
		    var ddy = 0.06 * Math.abs(diffY) *diffY / dist2;
		    this.dx += ddx;
		    this.dy += ddy;

				this.x += this.dx;
				this.y += this.dy;
				// c.fillStyle = "rgba(255, 255, 255," + this.opacity + ")";
				// c.fillStyle = "rgba(24, 176, 179," + this.opacity + ")";
				// var gradient = c.createRadialGradient(50,0,90, 0,0,220);
				var gradient = c.createLinearGradient(-200,0, 180,0)

				// Add three color stops
				gradient.addColorStop(0, '#E9B8AF');
				gradient.addColorStop(0.5, '#7538EB');
				gradient.addColorStop(0.6, '#7538EB');
				gradient.addColorStop(1, '#A8ECE2');
				c.fillStyle = gradient;
				c.fill();

				this.draw();
				this.radius -= this.radius / (this.ttl / 0.005);
				this.ttl -= 0.015;
			};

			this.draw = function() {
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
				c.fillStyle = this.color;
				c.fill();
				c.closePath();
			};
		}

		function ExplosionPoint(x, y) {
			this.x = x;
			this.y = y;
			this.particles = [];
			this.timer = 0;

			this.update = function() {
				this.timer += 1;

				if (this.timer % 4 === 0) {
					let radius = 6; 
					this.particles.push(new Particle(this.x, this.y, radius, "rgba(255,255,255,0)"));
				}

				for (let i = 0; i < this.particles.length; i++) {

					if (this.particles[i].ttl < 0) {
						this.particles.splice(i, 1);
					} else {
		        this.particles[i].update();
					} 
		      
				}
			}
		}

		/**
		 * Creates 8 explosion points across a line
		 *
		 *
		 * @return Void | Creates 8 points, returns nothing
		*/
		const drawLine = (x1, y1, x2, y2, points) => {
			// y = mx + b
			let x, y;
			let m = (y2 - y1) / (x2 - x1);
			let explosionAmount = points;
			let travelInterval = (x2 - x1) / explosionAmount;
			
			for (let i = 1; i <= explosionAmount; i++) {

				// Determine where the y intercept lies
				// b = y intercept
				let b=y2-m*x2||y1-m*x1;
				if (x1 === 0)
					b = y1;

				if (x2 === 0)
					b = y2;

				// Get even interval x coordinate should change at 
				x = (i * travelInterval) + x1;
				y = (m * x) + b; 
				// console.log(x,y,m,b);
				// If vertical or horizontal line
				if (!isFinite(m)) {
					let yTravelInterval = (y2 - y1) / explosionAmount;
					y = (i * yTravelInterval) + y1;
				}

				explosionPoints.push(new ExplosionPoint(x, y));
			}
		}
		const drawCurve = (angle1, angle2, radius ,explosionAmount) => {
			let x, y;
			let travelInterval = (angle2 - angle1) / explosionAmount;
			
			for (let i = 1; i <= explosionAmount; i++) {

				// Get even interval x coordinate should change at 
				x = Math.cos( (i * travelInterval) + angle1) * radius;
				y = Math.sin( (i * travelInterval) + angle1) * radius;


				explosionPoints.push(new ExplosionPoint(x, y));
			}
		}



		var webpackImage = new Image();
		webpackImage.src = "";

		let explosionPoints = [];


		c.save();
		c.translate(canvas.width / 2, canvas.height / 2);
	

		// Top box
		// drawLine(-115, -64, 0, -127);
		drawCurve(0, -1.63*Math.PI, 180, 16);
		drawCurve(0.1*Math.PI, -1.4*Math.PI, 90, 8);
		drawLine(90, 0, 180, 90, 3);
		// drawLine(0, 0, 90, -90);
		drawLine(90, 180, 70, 160, 1);
		drawLine(90, 180, 180, 90, 3);
		// drawLine( 360, -90, 90, -360);
		// drawLine(0, 0, 115, -64);
		// drawLine(0, 0, -115, -64);

		// Bottom box
		// drawLine(0, 135, 120, 70);
		// drawLine(0, 135, -120, 70);

		// Outside lines that make up box height
		// drawLine(-120, -64, -120, 70);
		// drawLine(120, -64, 120, 70);

		// Middle lines
		// drawLine(0, -10, 0, 135);


		
		c.restore();


		const animate = () => {
			window.requestAnimationFrame(animate);
			c.clearRect(0, 0, canvas.width, canvas.height);

		  c.save();
			c.translate(canvas.width / 2, canvas.height / 2);
			// c.drawImage(webpackImage, - 175, - 130, 350, 391);
			for (let i = 0; i < explosionPoints.length; i++)
			    explosionPoints[i].update();  
			c.restore();
		}

		animate();
	},[])
	return (
	<React.Fragment>
	
	<div className="portfolio-intro flex-width-80 align-item-center" style={{position: "relative"}}>
		<img src={logo} style={{position: 'absolute',opacity: '0.05', height:"240%"}} alt="" />
		<canvas style={{position: 'absolute',opacity: '1', left:"15%"}}></canvas>
		<div className="animate__animated animate__fadeInUp content">
			<h1>Hello! I'm Cori.</h1>
			{/*<h2 className="oneLiner"><span style={{opacity:"1"}}>A passionate UI/UX Designer with working experience in 
			 Front-end Development</span> who believes design is a never-ending process.</h2>*/}
			<h2 className="oneLiner">I'm a developer-turned-product designer with both in-house and agency experience. 
			I'm a system thinker, problem solver, and facilitator. 
			I believe design is a never-ending process.  </h2>
		</div>
		<div className="mouse">
            <div className="scroll"></div>
        </div>
	</div>
	

	<div className="portfolio-content grid flex-width-80 grid-gap-md" id={"/#project"} style={{marginTop: "120px"}}>

	{controls.map((project,index) => (
        <ProjectSection2 
        	key = {project.title} 
            title={project.title} 
            description={project.description}
            label = {project.label}
            img = {project.img}
            img2 = {project.img2}
            size = {project.size}
            link = {project.link}
            backgroundColor = {project.backgroundColor}
            fontColor = {project.fontColor}
            index = {index}
        />
    ))}
    </div>

    {/*<div className="portfolio-content grid" id={"/#project"}>

	{controls.map((project,index) => (
        <ProjectSection2 
        	key = {project.title} 
            title={project.title} 
            description={project.description}
            label = {project.label}
            img = {project.img}
            img2 = {project.img2}
            size = {project.size}
            link = {project.link}
            backgroundColor = {project.backgroundColor}
            fontColor = {project.fontColor}
            index = {index}
        />
    ))}
    </div>*/}
	</React.Fragment>
)}
export default Home;