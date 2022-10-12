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
				
				{/*<div className="hero-img-box">
					<img src={images['cover02.png'].default} style={{backgroundColor: '#222', height:"100%", width:"auto"}} alt="" />
				</div>*/}
				
			</portfolio-intro>

			<div className="portfolio-content flex-width-60">
				<h1>Wyndham Destination</h1>
				<div className="section-box brief">
					<div className="grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-6 col-6">
							<h4>My Role</h4>
							<ul>
								<li>Product Designer, Design System</li>
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
					<h3 className="section-title">Coming soon</h3>
				</div>
				{/*<div className="section-box">
					<h3 className="section-title">Overview</h3>
					<p>Astro Buddy is a robot designed for the next generation for <strong>NASA's Astrobee Robot</strong>. 
					It aims to help improve and hasten human space exploration missions to new destinations by <strong>taking routine, highly repetitive, dangerous, or long-duration tasks out of human hands.</strong></p>
				</div>
				<div className="section-box">
					<h3 className="section-title">The challenge</h3>
					<p>There's <strong>no gravity</strong> so everything is floating in space, 
					both the astronauts in space and the operator on the earth can't have a <strong>direct view</strong> of the robot. 
					So the challenge for me will be how to design the interfaces 
					that can handle all the <strong>interactions</strong> between people and the Astro Buddy.</p>
				</div>*/}
				
			</div>

			
			



			<ScrollToTopBtn></ScrollToTopBtn>
		</div>
		)
	
}
export default Wyndham;