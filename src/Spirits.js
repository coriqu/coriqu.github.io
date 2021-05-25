import React, {useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import video from './assets/img/spirit/display.mp4';
import styled from 'styled-components';
const OutcomeOverview = styled.div`
	width: 100%;
	height: auto;
	min-height: 85vh;
	background-color: #efefef;
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
		width: 80%;
		height: auto;
	}
`;
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/spirit/', false, /\.(png|jpe?']}|svg)$/));

class Spirits extends React.Component{
	componentDidMount() {

		const faders = document.querySelectorAll(".section-box");

		const appearOptions = {
			threshold: 0,
			rootMargin: "0px 0px -250px 0px"
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
	    
	}
	render() {
		return (
		<div className="flex" style={{position: "relative", top: "80px"}}>
	    	<div className="Hero-image flex" style={{backgroundColor: '#0a1f48'}}>
	    		<div className="hero-img-box">
    				<img src={images['hero1.png'].default} alt="" />
    			</div>
	    	</div>
	    	<div className="portfolio-content flex-width-60">
	    		<h1>Spirits In The Sky</h1>
	    		<div className="section-box brief">
						<div className="grid grid-gap-xs">
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Role</h4>
								<ul>
									<li>Graphic Designer</li>
								</ul>
							</div>
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Duration</h4>
								<ul>
									<li>Sep - May 2019</li>
								</ul>
								
							</div>
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Deliverables</h4>
								<ul>
									<li>Brand Design</li>
									<li>Website Design</li>
									<li>Motion Graphic</li>
									
								</ul>
							</div>
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Tools</h4>
								<ul>
									<li>Sketch</li>
									<li>Adobe Illustrator</li>
									<li>Adobe After Effects</li>
								</ul>
								
							</div>
						</div>	
					</div>
	    		<div className="section-box">
		    		<h3 className="section-title">Logotype</h3>
		    		<div className="zoom-img img-box img-box-logotype">
						<img src={images['logotype1.png'].default} alt="" />
					</div>
				</div>

				<div className="section-box">
		    		<h3 className="section-title">Responsive Logo</h3>
		    		<div className="zoom-img img-box img-box-logotype">
						<img src={images['logotype2.png'].default} alt="" />
					</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Brand Colors</h3>
					<div className="grid grid-gap-xs">
						<div className="col-3 img-box img-box-color" style={{backgroundColor: '#b0b8c3'}}></div>
						<div className="col-3 img-box img-box-color" style={{backgroundColor: '#b8cdde'}}></div>
						<div className="col-3 img-box img-box-color" style={{backgroundColor: '#235B9E'}}></div>
						<div className="col-3 img-box img-box-color" style={{backgroundColor: '#0a1f48'}}></div>
						<div className="col-3">
							<span>#b0b8c3</span>
						</div>
						<div className="col-3">
							<span>#b8cdde</span>
						</div>
						<div className="col-3">
							<span>#235B9E</span>
						</div>
						<div className="col-3">
							<span>#0a1f48</span>
						</div>
					</div>
				</div>
				



				<div className="section-box">
					<h3 className="section-title">Brand Type</h3>
					<div className="zoom-img img-box img-box-type">
						<img src={images['type.png'].default} alt="" />
					</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Brand Patterns</h3>
					<div class="zoom-img grid grid-gap-xs patterns">
						<img class="col-xl-3 col-md-3 col-xs-3 col-3" src={images.["pattern00.svg"].default} alt="" />
						<img class="col-xl-3 col-md-3 col-xs-3 col-3" src={images.["pattern01.svg"].default} alt="" />
						<img class="col-xl-3 col-md-3 col-xs-3 col-3" src={images.["pattern02.svg"].default} alt="" />
						<img class="col-xl-3 col-md-3 col-xs-3 col-3" src={images.["pattern03.svg"].default} alt="" />
					</div>
				</div>
				

				<div className="section-box">
					<h3 className="section-title">Business Card</h3>
					<div className="zoom-img grid grid-gap-xs">
		    			<img style={{border: '1px solid #ccc'}} className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['bcard1.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['bcard2.png'].default} alt="" />
		    		</div>
		    	</div>

		    	<div className="section-box">	
					<h3 className="section-title">Physical Collateral</h3>
					<div className="zoom-img flex-center">
						<img className="col-xl-4 col-md-4 col-xs-12 col-12" src={images['collateral.png'].default} alt="" />
					</div>
				</div>
				<div className="section-box">	
					<h3 className="section-title">Website</h3>
				</div>



			</div>

			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview className="grid">

					<div className="image col-xl-12 col-md-12 col-xs-12 col-12">
						<img src={images['showcase.png'].default} className="" alt="Competitive analysis" />
					</div>
				</OutcomeOverview>	
			</div>


			<div className="portfolio-content flex-width-60">
				{/*<div className="section-box">
		    		<h3 className="section-title">Website</h3>
		    		<div className="zoom-img grid grid-gap-xs">
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['1.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['2.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['3.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['4.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['5.png'].default} alt="" />
		    		</div>
		    	</div>*/}

		    	<div className="section-box">
		    		<h3 className="section-title">In-Restaurant Screen Display</h3>
		    		<div className="zoom-img grid grid-gap-xxs">
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion1.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion2.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion3.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion4.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion5.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion6.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion7.png'].default} alt="" />
		    			<img className="col-xl-3 col-md-3 col-xs-6 col-6" src={images['motion8.png'].default} alt="" />
		    		</div>
		    	</div>

		    	<div className="section-box">
		    		<div className="flex flex-center" style={{padding: '2em', backgroundColor: '#0a1f48', borderRadius: '1em'}}>
			    		<video controls style={{maxHeight: '500px', backgroundColor: '#0a1f48'}}>
							<source src={video} type="video/mp4" />
						</video>
		    		</div>
		    	</div>

	    		
	   			

	    	</div>
	    	<ScrollToTopBtn></ScrollToTopBtn>
	    	
	    </div>
	    )
	}
}
export default Spirits;