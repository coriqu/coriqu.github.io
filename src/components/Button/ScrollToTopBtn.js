import React, { useState, useEffect } from 'react';
import classes from './ScrollToTopBtn.css';
const ScrollToTopBtn = () => {
	const [btnStatus, setbtnStatus] = useState(false);
	
	useEffect(()=>{
		window.addEventListener('scroll', () => {
			const pageOffset = window.pageYOffset;
			// console.log(pageOffset);
			if(pageOffset>1000) {
				console.log(true);
				setbtnStatus(true);
			} else {
				console.log(false);
				setbtnStatus(false);
			}
			const progressPath = document.querySelector('.progress-wrap path');
			const pathLength = progressPath?progressPath.getTotalLength():0;
			// progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
			if(progressPath) {
				progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
				progressPath.style.strokeDashoffset = pathLength;
				progressPath.getBoundingClientRect();
				progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';	
				updateProgress(progressPath, pathLength);
			}
		})

	},[])
	const updateProgress = (progressPath, pathLength) => {
		var scroll = window.pageYOffset;
		var height = document.documentElement.scrollHeight - window.innerHeight;
		// console.log(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.clientHeight,window.innerHeight);
		var progress = pathLength - (scroll * pathLength / height);
		console.log(scroll,height,progress);
		progressPath.style.strokeDashoffset = progress;
	}
	const goToTop = () => {
		var scrollOptions = {
			left: 0,
			top: 0,
			behavior: 'smooth'
		}
		window.scrollTo(scrollOptions)
		return setbtnStatus(false);
	}


	return (
    <div class={btnStatus?("progress-wrap active-progress"):("progress-wrap")} onClick={goToTop}>
		<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
		</svg>
		<svg class="svg-icon" viewBox="0 0 20 20">
			<path d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
			L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
			c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
			c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
			S18.707,9.212,18.271,9.212z"></path>
		</svg>
	</div>
)}
export default ScrollToTopBtn;


