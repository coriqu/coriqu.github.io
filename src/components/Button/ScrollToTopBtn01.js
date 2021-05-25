import React, { useState, useEffect } from 'react';
import classes from './ScrollToTopBtn.css';
const ScrollToTopBtn = () => {
	const [btnStatus, setbtnStatus] = useState(false);
	useEffect(()=>{
		window.addEventListener('scroll', () => {
			const pageOffset = window.pageYOffset;
			console.log(pageOffset);
			if(pageOffset>1000) {
				console.log(true);
				setbtnStatus(true);
			} else {
				console.log(false);
				setbtnStatus(false);
			}
		})
	},[])
	
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
	<div className="scrollToTopBtn" style={{display: btnStatus?"flex":"none"}} onClick={goToTop}>

    </div>
)}
export default ScrollToTopBtn;


