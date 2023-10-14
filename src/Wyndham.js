import React,{createRef, useState, useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import styled, { css } from 'styled-components';
// import Home from './Jasper/landing-page-demo.js';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Placeholder from './assets/img/wyndham/Placeholder.png';
import video from './assets/img/wyndham/interaction.mp4';

import UncontrolledExample from './components/Carousel/carousel.js'; 

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
    // margin-top: 80px;
    line-height: 100%;
    margin-bottom: 0;
    @media (max-width: 992px) {
	    font-size: 5em;
	    
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
	.image video {
    	position: absolute;
		height: 100%;
	}
	.image img.widthfixed {
		width: 100%;
		height: auto;
		border: 8px solid #111;
		border-radius: 4px;
	}
	.image video.widthfixed {
		width: 100%;
		height: auto;
		border: 8px solid #111;
		border-radius: 4px;
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

const images = importAll(require.context('./assets/img/wyndham/', false, /\.(png|jpe?g|svg)$/));


const controls = [
		{ 
	    	src: images['token-1.png'].default,
	    	class: ''
		},
		{ 
	    	src: images['token-2.png'].default,
	    	class: ''
		}
];
const Wyndham = (props) => {
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
					<img src={images['hero.png'].default} style={{backgroundColor: '#222', height:"auto", width:"100%"}} alt="" />
				</div>
				
			</portfolio-intro>

			<div className="portfolio-content flex-width-60">
				<h1>Wyndham Destination</h1>
				<div className="section-box brief">
					<div className="grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>My Role</h4>
							<ul>
								<li>Product Designer</li>
								<li>Front-End Developer</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Duration</h4>
							<ul>
								<li>Nov 2021 - Present</li>
							</ul>
							
						</div>
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Deliverables</h4>
							<ul>
								<li>Design system</li>
								<li></li>
							</ul>
						</div>
						
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>Tools</h4>
							<ul>
								<li>Figma</li>
								<li>Sketch</li>
								<li>Adobe Creative Suite</li>
							</ul>
							
						</div>
					</div>	
				</div>
				
				<div className="section-box">
					<h3 className="section-title">Overview</h3>
					<p>My team has been using Sketch and Abstract as the primary design tools. 
					We have noticed challenges with our design process. We decided to migrate from Sketch to Figma. 
					To enable a trustfulness of collaboration, creating and maintaining guidelines and libraries of the Design System are essential. </p>
				</div>
				<div className="section-box">
					<h3 className="section-title">My Role</h3>
					<p>I led multi-brand design systems migration from Sketch to Figma as a design system thinker, advocate, and maintainer. 
					I managed and refined the design system’s foundations, components, and patterns in Figma. 
					As I also working on maintaining and updating the design system on the front-end side, I aim to bridge the gaps between design and development. 
					The target audiences are the designers and developers at our company who use the Design System.</p>
				</div>
				{/*<div className="section-box">
					<h3 className="section-title">The Users</h3>
					<p>The target audiences are the designers and developers at our company who use the Design System.</p>
				</div>*/}
				
				
				{/*<div className="section-box">
					<h3 className="section-title">The Approach</h3>
					<p>I started the redesign process by conducting an audit of the current design system and design files in Abstract and Sketch. I gathered the thoughts from the designers on UX Team and the developers who implement the design.</p>
					<p>At the same time, I started to build the styles that design tokens in Figma. Playing around with the components and transferring design files from Sketch to Figma. Then I start to notice the challenges we are facing.</p>
				</div>
*/}
{/*----------------------------------- The Challenge -----------------------------------*/}				
				<div className="section-box">
					<h3>The Challenge</h3>
					<p></p>
			

					<h4>Migration from Sketch to Figma</h4>
					<div className="grid">
					{
		              [{ 
		                  title: "",
		                  icon: images['styles.png'].default,
		                  description: "Switching from Sketch to Figma, styles can't be brought over"
		              },
		              { 
		                  title: "",
		                  icon: images['organization.png'].default,
		                  description: "Restructuring team, project, and file organization"
		              },
		              { 
		                  title: "",
		                  icon: '',
		                  description: ''
		              }
		            ].map((item,i) => (
		              <DesignGoal key = {i} className="col-xl-4 col-md-4 col-xs-4 col-6">
		                	<img src={item.icon} alt="" />
							<h3>{item.title}</h3>
							<p>{item.description}</p>
		              </DesignGoal>
		            ))}
					</div>


					<h4>Building design system</h4>
					<div className="grid">
					{
		              [{ 
		                  title: "",
		                  icon: images['auto.png'].default,
		                  description: 'Add auto-layout and convert components to variants. '
		              },
		              { 
		                  title: "",
		                  icon: images['naming.png'].default,
		                  description: 'Keep consistency in naming variants, properties, and values.'
		              },
		              { 
		                  title: "",
		                  icon: images['create.png'].default,
		                  description: 'Create documents and guidelines from 0 to 1.'
		              }
		            ].map((item,i) => (
		              <DesignGoal key = {i} className="col-xl-4 col-md-4 col-xs-4 col-6">
		              		<img src={item.icon} alt="" />
		                	<h3>{item.title}</h3>
							<p>{item.description}</p>
		              </DesignGoal>
		            ))}
					</div>
				</div>




			
				{/*<div className="section-box">
					<h3 className="section-title">The Solution</h3>
					<p>I started the redesign process by conducting an audit of the current design system and design files in Abstract and Sketch. I gathered the thoughts from the designers on UX Team and the developers who implement the design.</p>
					<p>At the same time, I started to build the styles that design tokens in Figma. Playing around with the components and transferring design files from Sketch to Figma. Then I start to notice the challenges we are facing.</p>
				</div>*/}


			</div>
{/*----------------------------------- The Solution -----------------------------------*/}	

			<div className="section-box fullscreen-container flex flex-center">
				<div className="flex-width-80">
					<div className="section-box">
						<H2>The Solution</H2>
						<h3>Migration from Sketch to Figma.</h3>
					</div>
				</div>
				<div className="col-1">
				</div>
				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>A plan for migration</h1>
						<p>I created a project checklist with all the brands and design files that our team wants to transfer to Figma.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['plan.png'].default} alt="" />
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['restructure.png'].default} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Restructure organization and naming conventions</h1>
						<p></p>
					</div>
				</OutcomeOverview>







				<div className="flex-width-80">
					<div className="section-box">
						<H2>The Building Process</H2>
						<h3>Building design system</h3>
					</div>
				</div>

		
				{/*<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={Placeholder} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Single source of truth</h1>
						<p>Upload custom fonts to team organization so everyone is using the same fonts with the same naming conventions</p>
					</div>
				</OutcomeOverview>*/}

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Start with the Foundations</h1>
						<p>I started to build the styles that design tokens in Figma. Add a color system to the library, creating rules and a source of color picking, and syncing Figma properties with code properties.</p>
						{/*
							<p>Own a color system</p>
							<p>Rules and source of color picking</p>
							<p>Sync Figma properties with code properties</p>
						*/}
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['design-token.png'].default} alt="" />
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Bring in alias tokens</h1>
						<p>Alias tokens are semantic tokens that come from base tokens. They indicate the functionality of this token and are created based on the components. After bringing in alias tokens, we can just make changes in the foundation library instead of clicking through the component itself and selecting the specific part of the component to assign a new color. When making changes to the alias tokens in the foundation library, the components linked to those tokens will update automatically.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<UncontrolledExample controls={controls} />
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['component.png'].default} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Thinking in Components</h1>
						<p>I align my front-end knowledge with the design when building components, I always make sure to start from the smallest pieces, and ideally one component only does one thing. If it ends up growing, it should be decomposed into smaller subcomponents.</p>
					</div>

				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Built-in variant interactions</h1>
						<p></p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<video controls className="widthfixed" loop="" muted="" playsinline="" autoplay="" poster={images['interaction.png'].default} style={{height:"auto", width:"100%"}} >
						<source src={video} type="video/mp4" />
						</video>
					</div>
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
						<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['improvement.png'].default} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Dedication to details</h1>
						<p>I take the time to assign relevant names to design tokens and component layers, which reduces the communication cost and makes collaborate effectively between designers and developers.</p>
					</div>
				
				</OutcomeOverview>



				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Component-based templates</h1>
						<p>Component-based templates provide designers with an easy and flexible way to start their designs.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['template.png'].default} alt="" />
					</div>
				</OutcomeOverview>



				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['document.png'].default} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Documentation</h1>
						<p>Document files display all the variants and properties of each of the components. Designers and developers can have a clear view of how the components work.</p>
					</div>

				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Power of plugins</h1>
						<p>"Don't Work Hard, Work Smart."</p>
						<p>Pick the right plugins can help increase working efficiency. Here are some plugins I use often at work.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['plugin.png'].default} alt="" />
					</div>
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['guidance.png'].default} alt="" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Design System Guidance</h1>
					</div>
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Developer Handoff</h1>
						<p>For developer handoff, I always create a page in the file named "For development" to guide them to the right place. For the design system update, I locked all the main components and gathered all the instances into the document. So developers can have an overview of the variants and easily inspect the code by looking into the instances.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img className="widthfixed" src={images['handoff.png'].default} alt="" />
					</div>
				</OutcomeOverview>


{/*
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-8 col-md-8 col-xs-12 col-12">
						<h2 className="section-title">To Be Continued...</h2>
						<p>I'm still building this page. For more details of my work, please contact <a href="mailto:coriqco@gmail.com">coriqco@gmail.com</a></p>
					</div>
					<div className="col-2">
					</div>
				</OutcomeOverview>*/}


			</div>



			{/*<div className="flex-width-60">
				<div className="section-box">
					<h2 className="section-title">Outcome</h2>
				</div>
			</div>


			<div className="flex-width-60">
				<div className="section-box">
					<h2 className="section-title">Take Away</h2>
					<p></p>
				</div>
			</div>*/}

			

			







			
			



			<ScrollToTopBtn></ScrollToTopBtn>
		</div>
		)
	
}
export default Wyndham;