import React,{createRef, useState, useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import styled, { css } from 'styled-components';
// import Home from './Jasper/landing-page-demo.js';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import MyCube from "./components/Cube/cube.js";
import View01 from './assets/img/astrobuddy/video/AB-view.gif';
import View02 from './assets/img/astrobuddy/video/Following-view.gif';
import View03 from './assets/img/astrobuddy/video/Omniscient-view.gif';
import Module from './assets/img/astrobuddy/video/Astrobuddy.gif';
import Module2D from './assets/img/astrobuddy/video/2D-view.gif';
import Task from './assets/img/astrobuddy/video/Astrobuddy.gif';
import ManageTask from './assets/img/astrobuddy/video/ManageTask.gif';
import CreateTask from './assets/img/astrobuddy/video/CreateTask.gif';
import PositionControl from './assets/img/astrobuddy/video/PositionControl.gif';

import Point from './assets/img/astrobuddy/video/point.gif';
import Line from './assets/img/astrobuddy/video/line.gif';
import S2d from './assets/img/astrobuddy/video/2d.gif';
import S3d from './assets/img/astrobuddy/video/3d.gif';
// const Div = styled.div`
//   	--color-header: #191919 !important; 
//     --color-text: #323232 !important;
//     --color-text-dark: #666666 !important;
//     --color-neutral-light: #405379 !important;
//     --color-main-light:#ccc !important;
//     --color-main-medium:#444 !important;
//     --color-main-dark:#ccc !important;
//     --color-black: black !important;
//     --color-gray-light: #eee !important;
//     --color-gray-dark: #222 !important;
//     --color-white: white !important;
//     --color-highlight: #0F2C2F !important;
//     --gradient: linear-gradient(90deg, #ee6352, purple, #ee6352) !important;
//     --header-height:3rem !important;
//     background-color: #fff;
// `;
const H2 = styled.h4`
	opacity: 0.2;
	// margin: 0 0 -100px 0;
	font-weight: 800;
    font-size: 4em;
    color: #fff;
    margin-top: 80px;
    margin-bottom: 0;
    @media (max-width: 992px) {
	    font-size: 5em;
	    margin: 0 0 -50px 0;
	}
`;
const OutcomeOverview = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
	background-color: #000;
	color: var(--color-white);
	// padding: 0 5rem;
	:nth-child(2n+1) {
		background-color: #222;
	}
	:nth-child(2n+1) h3,
	:nth-child(2n+1) .description h1,
	:nth-child(2n+1) .description p {
		color: #fff;
	}
	:nth-child(2n+1) .description .tag {
		background-color: #fff;
		color: var(--color-text);
    }
    .description {
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	padding: 2rem;
    }
    .description h1 {
    	font-size: 32px;
    	font-weight: 300;
    	color: var(--color-text);
    }
    .description p {
    	line-height: 1.5;
    	margin-bottom: 32px;
    }
    .description .tag {
    	font-size: 14px;
	    letter-spacing: .5px;
	    margin: 10px 0;
    }
    .image {

		display: flex;
	    align-items: center;
	    justify-content: center;
	    position: relative;
	    box-sizing: border-box;
	}
	.image::before {
	    content: '';
	    display: block;
	    padding-top: 60%;
	}
	.image img {
    	position: absolute;
		height: 100%;
	}
	.image img.widthfixed {
		width: 90%;
		height: auto;
		border: 24px solid #111;
		border-radius: 8px;
	}
	h4 {
		margin: 0;
	}
`;
const DesignGoal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: 10px;
	padding: 20px 0;
	// border-radius: 10px;
	// background-color: #eee;
	// border-bottom: 2px solid #eee;
	height: 100%;
	>* {
		margin: 0 auto;
	}
	>img {
		display: inline-block;
		position: relative;
		width: 80px;
		height: auto;
	}
	>img:before {
		position: absolute:
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 30px;
		
	}
	>h3 {
		text-align: center;
		margin-top: 20px;
		font-weight: 300;
	}
	>p {
		margin: 10px 0;
		padding: 10px;
		font-weight: 300;
		line-height: 1.3;
		font-size: 0.9;
		color: #aaa;
	}
`
const Dot = styled.div`
	height: 12px;
	width: 12px;
	background-color: #FFCC46;
	border-radius: 50%;
	display: inline-block;
	margin: 0 8px;
	margin-left: -20px;
`;
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/astrobuddy/', false, /\.(png|jpe?g|svg)$/));

const Astrobuddy = (props) => {
	useEffect(()=>{
		const faders = document.querySelectorAll(".section-box");

		const appearOptions = {
			threshold: 0,
			rootMargin: "0px 0px -150px 0px"
		};

		const appearOnScroll = new IntersectionObserver(function(
			entries,
			appearOnScroll
		) {
			entries.forEach(entry => {

				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add("appear");
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__fadeInUp");
					appearOnScroll.unobserve(entry.target);
				}
			});
		},
		appearOptions);

		faders.forEach(fader => {
			appearOnScroll.observe(fader);
		});



	},[])
	

		return (
		<div className="flex nasa" style={{position: "relative", top: "80px"}}>
			<portfolio-intro className="flex">
				
				<div className="hero-img-box">
					<img src={images['cover02.png'].default} style={{backgroundColor: '#222', height:"100%", width:"auto"}} alt="" />
				</div>
				
			</portfolio-intro>

			<div className="portfolio-content flex-width-60">
				<h1>Astro Buddy</h1>
				<div className="section-box brief">
					<div className="grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>My Role</h4>
							<ul>
								<li>UI/UX Design</li>
								<li>Interaction Design</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Team</h4>
							<ul>
								<li>Tyson Cromwell</li>
								<li>Guanchao Qiu</li>
								<li>Cori Qu</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Duration</h4>
							<ul>
								<li>Feb 2021 - May 2021</li>
							</ul>
							
						</div>
						{/*<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Deliverables</h4>
							<ul>
								<li>User flow</li>
								<li>Interaction Design</li>
							</ul>
						</div>*/}
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Tools</h4>
							<ul>
								<li>Figma</li>
								<li>Adobe Effect</li>
								<li>Adobe Illustrator</li>
								<li>Adobe Photoshop</li>
							</ul>
							
						</div>
					</div>	
				</div>
				<div className="section-box">
					<h3 className="section-title">What is Astro buddy?</h3>
					<p>Astro Buddy is a robot designed for the next generation for <strong>NASA's Astrobee Robot</strong>. 
					It aims to help improve and hasten human space exploration missions to new destinations by <strong>taking routine, highly repetitive, dangerous, or long-duration tasks out of human hands.</strong></p>
				</div>
				<div className="section-box">
					<h3 className="section-title">The challenge</h3>
					<p>There's <strong>no gravity</strong> so everything is floating in space, 
					both the astronauts in space and the operator on the earth can't have a <strong>direct view</strong> of the robot. 
					So the challenge for me will be how to design the interfaces 
					that can handle all the <strong>interactions</strong> between people and the Astro Buddy.</p>
				</div>
				<div className="section-box">
					<h3 className="section-title">Define the users</h3>
					<div className="hero-img-box">
						<img src={images['User.png'].default} alt="User" />
					</div>
					
				</div>
				{/*<div className="section-box">
					<h3 className="section-title">Outcome overview</h3>
				</div>*/}
			</div>
{/*-----------------------------------Brainstorming & Sketches-----------------------------------*/}
			<div className="flex-width-60">
				<div className="section-box">
					<H2>Ideation</H2>
					<h3 className="section-title">Brainstorming & Sketches</h3>
				</div>
			</div>
			<div className="flex-width-80">
				<div className="section-box">
					<div className="hero-img-box">
						<img src={images['Brainstorm.png'].default} alt="jasper landing page" />
					</div>
				</div>
			</div>
			<div className="flex-width-60">
				<div className="section-box">
					<h3 className="section-title">What is the best way to interact with Astro Buddy?</h3>
				</div>
				<div className="section-box">
					<p style={{fontWeight:"600"}}>The priority of the metric:</p>
					<p> A. Remote control (From earth)<br/>
						B. Direct view<br/>
						C. No physical contact (Astronauts)<br/>
						D. Short response time<br/>
						E. Low cost of learning
					</p>
				</div>
			</div>
			<div className="flex-width-80">
				<div className="section-box">
					<div className="grid">
					<div className="col-xl-1 col-md-1 col-xs-1 col-12"></div>
					{
		              [{ 
		                  title: "Devices",
		                  icon: images['DeviceTabletCamera.svg'].default,
		                  description: 'A B - D e'
		              },
		              { 
		                  title: "Voice",
		                  icon: images['Microphone.svg'].default,
		                  description: 'A - C d E'
		              },
		              { 
		                  title: "Astro Buddy",
		                  icon: images['Circle.svg'].default,
		                  description: 'A - - D E'
		              },
		              { 
		                  title: "Controller",
		                  icon: images['GameController.svg'].default,
		                  description: 'a B C d e'
		              },
		              { 
		                  title: "Gesture",
		                  icon: images['HandPalm.svg'].default,
		                  description: '- - C d e'
		              }
		            ].map((item,i) => (
		              <DesignGoal key = {i} className="col-xl-2 col-md-2 col-xs-2 col-4">
		                	{<img src={item.icon} alt="" />}
							<h3>{item.title}</h3>
							<div className="text-center">
								<p>{item.description}</p>
							</div>
		              </DesignGoal>
		            ))}
					</div>
				</div>
			</div>

			
			{/*<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview className="grid">
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img src={images['cover01.png'].default} className="widthfixed" alt="jasper landing page" />
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Checkout flow redesigned</h1>
						<p>Jasper aims to helps patients get affordable care by choosing flexible pay overtime plans. 
						My job is designing an elegant checkout flow that let patient walk through the online payment process effortless. </p>
					</div>
					{<div className="col-1">
					</div>}
				</OutcomeOverview>
			</div>
*/}
{/*-----------------------------------Modular design system-----------------------------------*/}
			<div className="flex-width-60">
				<div className="section-box">
					<H2>Concept</H2>
					<h3 className="section-title">Modular design system</h3>
					<p>Our Astro Buddy is a 6-sided cube sphere with a port on each of the 6 sides, which allows Astro Buddy to be inserted up to 6 different modules into these ports at a time.</p>
					<p>This modular design system allows Astro Buddy to have different fulfill different roles, 
						and those modules can be rearranged, customized, and reused. This gives Astro Buddy flexibility and multi-functionality.
						</p>
				</div>
			</div>
			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview style={{backgroundColor: "#27272B", minHeight: "0"}} className="text-center">
					<img style={{width: "90%"}} src={images['Modulardesignsystem.svg'].default} alt="Modular design system" />
				</OutcomeOverview>
			</div>



{/*-----------------------------------Define-----------------------------------*/}


			<div className="flex-width-60">
				<div className="section-box">
					<p style={{fontWeight:"600"}}><Dot/>Module</p>
					<p>Each module has its own <strong>mission</strong>. For example, we have modules that can help with Verbal Data Entry Access and Operation, 3D Scanning and Printing, Procedure Creator and Instructor, and Video Recording and Display.</p>
				</div>
				<div className="section-box">
					<p style={{fontWeight:"600"}}><Dot/>Function</p>
					<p>Each module is compose of various tools, giving them <strong>multiple</strong> functions. For example, Assistant module has several perching arms, and each arm can help with a different task.</p>
					{/*<div style={{backgroundColor: "#27272B", minHeight: "0"}} className="text-center">
						<img style={{width: "100%"}} src={images['Perching.png'].default} alt="Perching arm" />
					</div>*/}
				</div>
				<div className="section-box">
					<p style={{fontWeight:"600"}}><Dot/>Task</p>
					<p>Tasks can be <strong>manually created</strong> by operators and astronauts based on their needs. 
					They can <strong>customize</strong> the task based on different functions and tools that each module provides 
					and set the different <strong>range of movement</strong> for Astro Buddy when processing the task.</p>
				</div>
				<div className="section-box">
					<div className="grid">
					{
		              [{ 
		                  title: "Point (1)",
		                  icon: images['Point.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Line (2+)",
		                  icon: images['Line.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Plane (3+)",
		                  icon: images['Plane.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "3D (4+)",
		                  icon: images['3D.svg'].default,
		                  description: ''
		              }
		            ].map((item,i) => (
		              <DesignGoal style={{width: "150px"}} key = {i} className="col-xl-3 col-md-3 col-xs-3 col-6">
		                	{<img src={item.icon} alt="" />}
							<h3>{item.title}</h3>
		              </DesignGoal>
		            ))}
		            {
		              [{ 
		                  title: "Point (1)",
		                  gif: Point,
		              },
		              { 
		                  title: "Line (2+)",
		                  gif: Line,
		              },
		              { 
		                  title: "Plane (3+)",
		                  gif: S2d,
		              },
		              { 
		                  title: "3D (4+)",
		                  gif: S3d,
		              }
		            ].map((item,i) => (
		            	<DesignGoal style={{padding: "4px"}} key = {i} className="col-xl-3 col-md-6 col-xs-6 col-12">
		                	<img src={item.gif} style={{width: "100%"}} alt="" />
		              </DesignGoal>
		              ))}
					</div>
				</div>
				<div>

					<p style={{fontWeight:"600"}}><Dot/>Task flow</p>
					<p>A task flow contains sequential tasks. After astronauts add tasks to a task flow, Astro Buddy can take those tasks out of human hands and do all the tasks <strong>in order automatically</strong>.</p>
				</div>
			</div>

{/*-----------------------------------point of views-----------------------------------*/}
			<div className="flex-width-60">
				<div className="section-box">
					<H2></H2>
					<h3>Point of views</h3>
				</div>
			</div>
			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview className="grid" style={{backgroundColor: "transparent",minHeight: "0"}}>
					{
		              [{ 
		                  title: "Astro Buddy View(FPV)",
		                  icon: images['View01.png'].default,
		                  description: 'A first-person view. The viewer sees what the Astrobuddy sees.'
		              },
		              { 
		                  title: "Following View",
		                  icon: images['View02.png'].default,
		                  description: 'A third-person camera view, from a behind-the-robot perspective.'
		              },
		              { 
		                  title: "Omniscient View",
		                  icon: images['View03.png'].default,
		                  description: 'A third-person camera view without limit, can access all kind of perspectives to the position along with the space station.'
		              }
		            ].map((item,i) => (
		              <DesignGoal style={{width: "100%"}} key = {i} className="col-xl-4 col-md-4 col-xs-4 col-12">
							<h3>{item.title}</h3>
							{<img style={{width: "80%", margin:"20px auto"}} src={item.icon} alt="" />}
							<p style={{padding: "0 10%"}}>{item.description}</p>
		              </DesignGoal>
		            ))}
				</OutcomeOverview>


				{/*<div className="flex-width-60">
					<div className="section-box">
						<H2>To be continued...</H2>
						<h3 className="section-title">This project is still in the process of iteration. Just some placeholders below to show my current state! 😄</h3>
					</div>
				</div>*/}
				
			</div>
			{/*-----------------------------------Design system-----------------------------------*/}
			<div className="flex-width-60">
				<div className="section-box">
					<h3 className="section-title">Design system</h3>
				</div>
			</div>
			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview style={{backgroundColor: "#27272B", minHeight: "0", padding: "36px 0"}} className="text-center">
					<img style={{width: "60%"}} src={images['DesignSystem.png'].default} alt="Modular design system" />
				</OutcomeOverview>
			</div>
{/*-----------------------------------Overview-----------------------------------*/}

			<div className="section-box fullscreen-container flex flex-center">
				<div className="flex-width-60">
					<div className="section-box">
						<H2>Outcome</H2>
						{/*<h3 className="section-title">Overview</h3>*/}
					</div>
				</div>
				<div className="col-1">
				</div>
				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={Module} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Everything Modules</h1>
						<p>This modular design system allows Astro Buddy to have different fulfill different roles, 
						and those modules can be rearranged, customized, and reused. This gives Astro Buddy flexibility and multi-functionality.</p>
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>2D & 3D view of Astro Buddy</h1>
						<p>2D view of Astro Buddy is an unfolded cube view that shows the six ports at a time. 
						Operators can easily see the availability of each port.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={Module2D} alt="" />
					</div>
				</OutcomeOverview>


				{/*<OutcomeOverview className="grid">
					<div className="description col-12 text-center" style={{paddingBottom: "0"}}>
						<h1 style={{margin: "0"}}>2D & 3D view of Astro Buddy</h1>
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img className="widthfixed" src={images['2D.png'].default} alt="" />
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img className="widthfixed" src={images['3D.png'].default} alt="" />
					</div>
				</OutcomeOverview>*/}



				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={ManageTask} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Easily manage the tasks</h1>
					</div>

				</OutcomeOverview>




				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Create the task</h1>
						<p>Tasks can be <strong>manually created</strong> by operators and astronauts based on their needs. 
					They can <strong>customize</strong> the task based on different functions and tools that each module provides 
					and set the different <strong>range of movement</strong> for Astro Buddy when processing the task.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={CreateTask} alt="" />
					</div>

					
					
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					

					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={PositionControl} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Position control</h1>
						<p></p>
					</div>

				</OutcomeOverview>


				{/*<OutcomeOverview className="grid">
					<div className="description col-12 text-center">
						<h1>Easily manage the tasks</h1>
					</div>
					<div className="col-2"></div>
					<div className="image col-8">
						<img className="widthfixed" src={images['TaskCreate.png'].default} alt="" />
					</div>
					<div className="col-2"></div>
					<div className="description col-12 text-center">
					</div>
					<div className="col-2"></div>
					<div className="image col-8">
						<img className="widthfixed" src={images['Task.png'].default} alt="" />
					</div>
					<div className="col-2"></div>
					<div className="description col-12 text-center">
					</div>
				</OutcomeOverview>
*/}

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h4>Point of view</h4>
						<h1>Astro Buddy View(FPV)</h1>
						<p>A first-person view. The viewer sees what the Astro Buddy sees.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={View01} alt="" />
					</div>
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={View02} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h4>Point of view</h4>
						<h1>Following View</h1>
						<p>A third-person camera view, from a behind-the-robot perspective.</p>
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h4>Point of view</h4>
						<h1>Omniscient View</h1>
						<p>A third-person camera view without limit, can access all kind of perspectives to the position along with the space station.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={View03} alt="" />
					</div>
				</OutcomeOverview>
			</div>
			
			



			<ScrollToTopBtn></ScrollToTopBtn>
		</div>
		)
	
}
export default Astrobuddy;