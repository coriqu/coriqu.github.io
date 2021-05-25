import './Photography.scss';
import React, { useState, useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
// import LazyLoad from 'react-lazyload';
import '@rmwc/image-list/styles';
import {ImageList,ImageListItem,ImageListImageAspectContainer,ImageListImage} from '@rmwc/image-list';
import {H4,div} from './components/Styled/StyledComponents.js';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./assets/img/photography/cityscape/', false, /\.(jpg|png|jpe?']}|svg)$/));
const portrait = importAll(require.context('./assets/img/photography/portrait/', false, /\.(jpg|png|jpe?']}|svg)$/));
const life = importAll(require.context('./assets/img/photography/life/', false, /\.(jpg|png|jpe?']}|svg)$/));

const Photography = (props) => {
	useEffect(()=>{
		const faders = document.querySelectorAll(".img-box");

		const appearOptions = {
			threshold: 0,
			rootMargin: "0px 0px -50px 0px"
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
					entry.target.classList.add("animate__fadeIn");
					appearOnScroll.unobserve(entry.target);
				}
			});
		},
		appearOptions);

		faders.forEach(fader => {
			appearOnScroll.observe(fader);
		});
	},[])

	const controls = [
		
		{ 
	    	src: images['22.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['23.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: images['cityscape4.jpg'].default,
	    	class: ''
		},
		

		{ 
	    	src: images['25.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['cityscape0.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: images['cityscape2.jpg'].default,
	    	class: ''
		},

		{ 
	    	src: images['landscape5.jpg'].default,
	    	class: ''
		},		
		{ 
	    	src: images['2.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['26.jpg'].default,
	    	class: ''
		},

		
		{ 
	    	src: images['3.jpg'].default,
	    	class: ''
		},

		{ 
	    	src: images['landscape2.jpg'].default,
	    	class: ''
		},
		
		{ 
	    	src: images['12.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: images['16.jpg'].default,
	    	class: 'horizontal'
		},

		{ 
	    	src: images['cityscape1.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['07.jpg'].default,
	    	class: ''
		},
		
		{ 
	    	src: images['03.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['14.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['21.jpg'].default,
	    	class: 'horizontal'
		},
		
		
		{ 
	    	src: images['06.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: images['02.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: images['17.jpg'].default,
	    	class: 'horizontal'
		}

	];
	const portraitControls = [
		{ 
	    	src: portrait['1.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['2.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['12.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['5.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['portrait1.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['portrait2.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['6.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: images['04.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['24.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['13.jpg'].default,
	    	class: ''
		},
		{ 
	    	src: portrait['14.jpg'].default,
	    	class: ''
		},
		
		{ 
	    	src: portrait['7.jpg'].default,
	    	class: ''
		}
	]
	const lifeControls = [
		
		{ 
	    	src: life['4.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: life['5.jpg'].default,
	    	class: 'horizontal'
		},
		{ 
	    	src: life['6.jpg'].default,
	    	class: 'horizontal'
		}
	]
	const controlsAll = [...controls, ...portraitControls, ...lifeControls];

	const [currentIndex, setcurrentIndex] = useState(0);
	const [currentSrc, setcurrentSrc] = useState('');
	const [currentControls, setcurrentControls] = useState(controls);
	const [catalogActive, setcatalogActive] = useState(false);
	// animateControls
	const [animateControls, setanimateControls] = useState('');

    const onImageSelect = (index,item,con)=>{
		setcurrentIndex(index);
		setcatalogActive(true);
		setcurrentSrc(item.src);
		setcurrentControls(con);
		setanimateControls('animate__animated animate__fadeIn animate__faster');
    }
    const closeCatalog = ()=>{
    	console.log('close');
    	setanimateControls('animate__animated animate__fadeOut animate__faster');
    	setTimeout(() => {
	    	setcatalogActive(false);
    	
		}, 200)
    	
	}
	const previousClick = () => {
		console.log('-1',currentIndex);
		let nowIndex = currentIndex;
		if(nowIndex === -1 || nowIndex === 0) {
		  	nowIndex = currentControls.length;
		}
		

		setanimateControls('animate__animated animate__slideOutRight animate__faster');
	    setTimeout(() => {
	    	setcurrentIndex(nowIndex-1);
			setcurrentSrc(currentControls[nowIndex-1].src);
			setanimateControls('animate__animated animate__slideInLeft animate__faster');
		}, 100)
	}
  	const nextClick = () => {
  		console.log('+1');
	    let nowIndex = currentIndex;
	    if(nowIndex === currentControls.length-1) {
	      	nowIndex = -1;
	    }
	    
	    setanimateControls('animate__animated animate__slideOutLeft animate__faster');
	    setTimeout(() => {
	    	setcurrentIndex(nowIndex+1);
	    	setcurrentSrc(currentControls[nowIndex+1].src);
			setanimateControls('animate__animated animate__slideInRight animate__faster');
		}, 100)
	    
	 
  	}


	return (
	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		{/*<div className="catalog-outer flex-center" style={{display: catalogActive ? "flex" : "none"}}>*/}
		<div className="catalog-outer flex-center" style={{visibility: catalogActive ? "visible" : "hidden"}}>
			<img className={animateControls} src={currentSrc} alt=""/>
			<div className="img-cover">
				<div className="left" id="left" onClick={previousClick}></div>
				<div className="middle" id="middle" onClick={closeCatalog}></div>
				<div className="right" id="right" onClick={nextClick}></div>
			</div>
			
		</div>
		
		<div className="img-container grid grid-gap-xs">

			<div className="col-12 flex-center">
				<div>
				<h4 style={{fontSize: "16px", marginBottom: "1em", fontWeight: "400"}}>I take photos sometimes.</h4>
				</div>
			</div>
			
			{/**
			<ImageList className="col-12"
				masonry
				style={{
					columnCount: 3,
					columnGap: '16px',
				}}>
		  		{controlsAll.map((item,i) => (
		    		<ImageListItem
				      	key={item.src}
				      	style={{ margin: '16px 0'}}
				      	item={item}
				      	onClick={e=>onImageSelect(i,item,controls)}
		   			>
		        		<ImageListImage loading="lazy" src={item.src} />
		    		</ImageListItem>
		  		))}
			</ImageList>
			 **/}
			
			<H4 className="col-12">Cityscape</H4>
			{controls.map((item,i) => (
	            <div key = {i} item={item} className="img-box col-xxl-3 col-xl-4 col-md-4 col-sm-6 col-12" onClick={e=>onImageSelect(i,item,controls)}>
					<img loading="lazy" className={item.class} src={item.src} alt="" />
				</div>
	        ))}
	        <H4 className="col-12">Portrait</H4>
			{portraitControls.map((item,i) => (
	            <div key = {i} item={item} className="img-box col-xxl-3 col-xl-4 col-md-4 col-sm-6 col-12" onClick={e=>onImageSelect(i,item,portraitControls)}>
					<img loading="lazy" className={item.class} src={item.src} alt="" />
				</div>
	        ))}
	        <H4 className="col-12">Life</H4>	
	        {lifeControls.map((item,i) => (
	            <div key = {i} item={item} className="img-box col-xxl-3 col-xl-4 col-md-4 col-sm-6 col-12" onClick={e=>onImageSelect(i,item,lifeControls)}>
					<img loading="lazy" className={item.class} src={item.src} alt="" />
				</div>
	        ))}			
		</div>
		<ScrollToTopBtn></ScrollToTopBtn>
	</div>
)}
export default Photography;