import React, {useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {GridList,GridListTile} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '558px'
  },
  gridList: {
    flexWrap: 'nowrap',
 	height: '558px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0.8)',
  }
}));
const Div = styled.div`
  	--color-header: #191919 !important; 
    --color-text: #323232 !important;
    --color-text-dark: #666666 !important;
    --color-neutral-light: #405379 !important;
    --color-main-light:#ccc !important;
    --color-main-medium:#444 !important;
    --color-main-dark:#ccc !important;
    --color-black: black !important;
    --color-gray-light: #eee !important;
    --color-gray-dark: #222 !important;
    --color-white: white !important;
    --color-highlight: #0F2C2F !important;
    --gradient: linear-gradient(90deg, #ee6352, purple, #ee6352) !important;
    --header-height:3rem !important;
    background-color: #fff;
`;
const PortfolioIntro = styled.div`
    height: calc(100vh-120px);
`;
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/explorest/', false, /\.(png|jpe?g|svg)$/));

const Explorest = (props) => {
	const classes = useStyles();
	useEffect(()=> {

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
	    
	})
	
		return (
			<Div className="explorest flex" style={{position: "relative", top: "80px"}}>
		    	<PortfolioIntro className="flex">
			    	<div className="hero-img-box">
	    				<img src={images['hero.png'].default} alt="" />
	    			</div>
		    	</PortfolioIntro>
		    	<div className="portfolio-content flex-width-60">
		    		<h1>Explorest</h1>

		    		<div className="section-box brief">
						<div className="grid grid-gap-xs">
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Role</h4>
								<ul>
									<li>UX Designer</li>
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
									<li>User Research</li>
									<li>Task flows</li>
									<li>clickable Prototype</li>
									
								</ul>
							</div>
							<div className="col-xl-3 col-md-3 col-xs-12 col-12">
								<h4>Tools</h4>
								<ul>
									<li>Figma</li>
									<li>Adobe Illustrator</li>
									<li>Adobe Photoshop</li>
								</ul>
								
							</div>
						</div>	
					</div>


		    		<div className="section-box">
			    		<h3 className="section-title">Overview</h3>
			    		<p>Explorest is an app that discovering the world's greatest photo locations, and offering lots of useful information that an explorer needs to know.</p>
			    	</div>

			    	<div className="section-box">
			    		<h3 className="section-title">Process</h3>
						<div className="zoom-img flex">
							<div className="">
								<img src={images['process.png'].default} alt="" />
							</div>
			    		</div>
			    	</div>




					



			    	<div className="section-box">
						<h3 className="section-title">Leaning Goals</h3>
						<h5>What do people care about when it's come to photography?</h5>

						<h5>What do they want to know about a photo?</h5>

						<h5>What's their usual behavier in finding and recording a spot?</h5>

						<h5>What do user want to get from Explorest?</h5>

						<h5>What do people say about Explorest?</h5>
					</div>





					<div className="section-box">
						<h3 className="section-title">User Research</h3>
						<p>The purpose of this research is to collect qualitative data to understand a user's emotions about when they using this APP and to listen to anecdotal stories related to the experience of finding a photo spot.</p>
						<p>For my research, I collecting the user reviews from App Store's ratings and reviews, and also interviewed 4 users for problem discovery. They are people who love taking photos and some of them had been using this APP before. </p>
						<div className="interview-2 grid grid-gap-xs">
							<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
								<p>31</p>
								<h5>Survey</h5>
								
							</div>
							<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
								<p>4</p>
								<h5>Interview</h5>
								
							</div>
							<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
								<p>2</p>
								<h5>Personas</h5>
							</div>
						</div>
					</div>


					<div className="section-box">
						<h3 className="section-title">User Quotes</h3>
						<div className="user-quote flex-center">
							<ul className="flex-width-80">
								<li>
									<span className="quote">“</span>
									So much information on one page, I have to scroll up and down.
									<span className="quote">”</span>
								</li>
							</ul>
						</div>
						<div className="user-quote flex-center">
							<ul className="flex-width-80">
								<li>
									<span className="quote">“</span>
									Icon of 'add to favorites' is quite confusing because it's a bookmark icon and there's only a few differences between tab before and after.
									<span className="quote">”</span>
								</li>
							</ul>							
						</div>
						<div className="user-quote flex-center">
							<ul className="flex-width-80">
								<li>
									<span className="quote">“</span>
									When I go to the map function, I expect to see my favorites on the map directly.
									<span className="quote">”</span>
								</li>
							</ul>
						</div>
						
						<div className="user-quote flex-center">
							<ul className="flex-width-80">
								<li>
									<span className="quote">“</span>
									Scenery is everything. If the view is great, I would like to go there whatever.
									<span className="quote">”</span>
								</li>
							</ul>
						</div>
					</div>


					<div className="section-box">
						<h3 className="section-title">Finding & Learning</h3>
					{/*
						<p>After conducting a series of user interviews, I synthesized the user insights and each color represents each user.</p>
						<h4 className="col-12 title-center">Synthesis</h4>
						<div className="zoom-img grid " style={{gridTemplateRows:'10'}}>
			    			<img className="col-9" style={{gridRow: 'span 10'}} src={images['synthesis.png'].default} alt="" />
			    			<div className="col-3 flex-center" style={{gridRow: 'span 1'}}>
			    				<h6>EXAMPLES</h6>
			    			</div>
			    			<div className="col-3 flex-center" style={{gridRow: 'span 3'}}>
			    				<div className="img-box img-box-synthesis">
			    					<img src={images['insight1.png'].default} alt="" />
			    				</div>
			    			</div>
			    			<div className="col-3 flex-center" style={{gridRow: 'span 3'}}>
			    				<div className="img-box img-box-synthesis">
			    					<img src={images['insight2.png'].default} alt="" />
			    				</div>
			    			</div>
			    			<div className="col-3 flex-center" style={{gridRow: 'span 3'}}>
			    				<div className="img-box img-box-synthesis">
			    					<img src={images['insight3.png'].default} alt="" />
			    				</div>
			    			</div>
			    		</div>
			    		<div className="col-12 divid-line"></div>
			    	



			    		<h4 className="col-12 title-center"> Clustering</h4>
						<div className="zoom-img grid " style={{gridTemplateRows:'10'}}>
			    			<img className="col-8" style={{ gridRow: 'span 3'}} src={images['insight3.png'].default} alt="" />
			    			<div className="col-4" style={{ gridRow: 'span 1', backgroundColor: '#ddd'}}></div>
			    			<div className="col-4" style={{ gridRow: 'span 1', backgroundColor: '#ddd'}}></div>
			    			<div className="col-4" style={{ gridRow: 'span 1', backgroundColor: '#ddd'}}></div>
			    		</div>
			    		<div className="col-12 divid-line"></div>
					

			    		<h4 className="col-12 title-center">Survey</h4>

			    	*/}
			    		<p>To learn about users' photography preferences, I used a 5 point Likert scale in my survey research. I asked users to rank the importance on a 1 to 5 basis with 1 indicating it is the least important(least concerned) element and 5 being the most important(most concerned) element in the photography <span className="text-em">decision-making process</span>.</p>
			    		<p>Here's the 5 point Likert scale results visualization I made by D3.js.</p>

						<div className="zoom-img grid">
							
			    			<img className="col-10" src={images['analyze1.png'].default} alt="" />
			    			<img className="col-2" src={images['analyze0.png'].default} alt="" />
			    		</div>

			    		<p>From the results, I found that the most important 4 elements for photography lovers are <span className="text-em">Scenery</span>, <span className="text-em">Weather</span>, <span className="text-em">Type of photos</span> and <span className="text-em">People</span> who go with you.</p>

			    		<div className="col-12 divid-line"></div>
						



			    		<h4 className="col-12 title-center">Insights</h4>
			    		<p>Here are some findings and learning I collect from my research which effect my redesign.</p>
			    		<ol type="i">
			    			<li>Scenery is the most important element for photography lovers.</li>
			    			<li>Most people considered  people who go with them as the most important element. Photography lovers usually prefer to go shoot with photography friends and models.</li>
			    			<li>Vehicle and weather may impose restrictions on travel and shooting.</li>
			    			<li>Type of photos and photographic equipment are related to user interests. People are using different photographic equipment when taking different types of photos.</li>
			    			<li>Many people are concerned about flying a drone because they are unsure about the rules. Different cities/countries have different rules in the height, range(distance) and time.</li>
			    		
			    		</ol>
		    		</div>

					

		    		<div className="section-box">
						<h3 className="section-title">Persona</h3>
						<div className="zoom-img grid grid-gap-xs persona">
			    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['persona1.png'].default} alt="" />
			    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['persona2.png'].default} alt="" />
			    		</div>
			    	</div>



					<div className="section-box">
			    		<h3 className="section-title">Heuristic Evaluation</h3>
			    		{/**
			    		<GridList className={classes.gridList} cols={2.5}>
			    			{[images['1.svg'].default,images['1.svg'].default,images['2.svg'].default,images['3.svg'].default,images['4.svg'].default,images['5.svg'].default]
			    			.map((tile) => (
			    				<GridListTile>
	            					<img src={tile} alt=''/>
	            				</GridListTile>
			    			))}
			    		
			    		</GridList>
			    		**/}
			    		<div className="grid">
			    			<img className="col-2" src={images['1.svg'].default} alt="" />
			    			<img className="col-2" src={images['2.svg'].default} alt="" />
			    			<img className="col-2" src={images['3.svg'].default} alt="" />
			    			<img className="col-2" src={images['4.svg'].default} alt="" />
			    			<img className="col-2" src={images['5.svg'].default} alt="" />
			    		</div>
			    		<ol type="i">
			    			<li>Only focus on a few cities in the world.</li>
			    			<li>When adding more locations from all over the world, the top filter bar needs to be changed.</li>
			    			<li>No ratings and reviews of locations.</li>
			    			<li>The biggest button on the home page is useless cause this button is only used for taking photos</li>
			    			<li>All the locations on the map are marked in the same color(except the currently selected location).</li>
			    			<li>Duplicate conten.</li>
			    			<li>Open in Amazon without a hint.</li>
			    			<li>Too many contents on a scrolling page</li>
			    			<li>Misunderstand what the 'request+' mains</li>
			    			<li>Icons confused people</li>
			    		</ol>
			    	</div>



					<div className="section-box">
			    		<h3 className="section-title">Redesign Goals</h3>
						<p>Making this app more intuitive to use and letting users easier to pursue their goals. Making improvements in the user interface to providing a cleaner presentation of the content.</p>
						<div className="redesign-goals grid grid-gap-xs">
							<div className="col-xl-6 col-md-6 col-xs-12 col-12">
								<h4>Functionality</h4>
								<ul>
									<li><span className="list-circle"></span>Improve the connection between users.</li>
									<li><span className="list-circle"></span>Adding the function of sending direct messages.</li>
									<li><span className="list-circle"></span>Ratings and reviews of locations.</li>
									<li></li>
								</ul>
							</div>			
							<div className="col-xl-6 col-md-6 col-xs-12 col-12">
								<h4>Usability</h4>
								<ul>
									<li><span className="list-circle"></span>When adding more locations from all over the world, the top filter bar needs to be changed.</li>
									<li><span className="list-circle"></span>Too many contents on a scrolling page</li>
									<li><span className="list-circle"></span>Duplicate content</li>
									<li><span className="list-circle"></span>The biggest button on the home page is useless</li>
								</ul>
							</div>			
							<div className="col-xl-6 col-md-6 col-xs-12 col-12">
								<h4>Accessibility</h4>
								<ul>
									<li><span className="list-circle"></span>Misunderstand what the 'request+' mains.</li>
									<li><span className="list-circle"></span>Open in Amazon without a hint</li>
									<li><span className="list-circle"></span>All the locations on the map are marked in the same color (except the currently selected location).</li>
									<li></li>
								</ul>
							</div>			
							<div className="col-xl-6 col-md-6 col-xs-12 col-12">
								<h4>Visual Design</h4>
								<ul>
									<li><span className="list-circle"></span>Icons confused people.</li>
									<li><span className="list-circle"></span>Title of the location is too long (is it designed for a easy search? People who looks for photo location don't care about what's in the photo, they care about where they can take this photo)</li>
									<li></li>
								</ul>
							</div>				
						</div>
					</div>


					<div className="section-box">
			    		<h3 className="section-title">Low Fidelity Prototype</h3>
			    		<div className="zoom-img grid grid-gap-xs">
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-3" src={images['low3.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-3" src={images['low2.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-3" src={images['low4.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-3" src={images['low5.png'].default} alt="" />
			    		</div>
			    	</div>



			    	<div className="section-box">
			    		<h3 className="section-title testing">Testing</h3>
			    		<p>I wanted to try two different layouts for 3 pages and decided to A/B test these layouts on my users. I wanted to understand how efficient it was for users to find something they were looking for.</p>
			    		<div className="zoom-img grid grid-gap-xs">
			    			<div className="divid-line col-12"></div>
							<h5 className="title-center col-12">Showing locations on the map</h5>
			    			<div className="col-xl-2 col-md-2 col-xs-2 col-12 flex flex-center test-num">
			    				<img src={images['num1.png'].default} alt="" />
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test1.png'].default} alt="" />
			    				<h3>A</h3>
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test2.png'].default} alt="" />
			    				<h3>B</h3>
			    			</div>
			    			<div className="col-xl-4 col-md-4 col-xs-4 col-12 flex flex-center">
			    				<h4>Results: A</h4>
			    				<h5>Feedback</h5>
			    				<ol>
			    					<li>A bottom navigation bar that includes all important functions.</li>
			    					<li>Feels intuitive to find the map function on the Home page navigation bar.</li>
			    				</ol>
			    			</div>
			    		</div>

			    		<div className="zoom-img grid grid-gap-xs">
			    			<div className="divid-line col-12"></div>
							<h5 className="title-center col-12">Filtering Locations on the map</h5>
			    			<div className="col-xl-2 col-md-2 col-xs-2 col-12 flex flex-center test-num">
			    				<img src={images['num2.png'].default} alt="" />
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test3.png'].default} alt="" />
			    				<h3>A</h3>
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test4.png'].default} alt="" />
			    				<h3>B</h3>
			    			</div>
			    			<div className="col-xl-4 col-md-4 col-xs-4 col-12 flex flex-center">
			    				<h4>Results: A</h4>
			    				<h5>Feedback</h5>
			    				<ol>
			    					<li>The bigger size filter makes more sense.</li>
			    					<li>Users would like to get access to the whole map.</li>
			    					<li>Make the filter more clear and specific.</li>
			    				</ol>
			    			</div>
			    		</div>


			    		<div className="zoom-img grid grid-gap-xs">
			    			<div className="divid-line col-12"></div>
							<h5 className="title-center col-12">Photo location details on the map</h5>
			    			<div className="col-xl-2 col-md-2 col-xs-2 col-12 flex flex-center test-num">
			    				<img src={images['num3.png'].default} alt="" />
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test5.png'].default} alt="" />
			    				<h3>A</h3>
			    			</div>
			    			<div className="col-xl-3 col-md-3 col-xs-3 col-6 flex flex-center">
			    				<img src={images['test6.png'].default} alt="" />
			    				<h3>B</h3>
			    			</div>
			    			<div className="col-xl-4 col-md-4 col-xs-4 col-12 flex flex-center">
			    				<h4>Results: A</h4>
			    				<h5>Feedback</h5>
			    				<ol>
			    					<li>Bigger images are better.</li>
			    					<li>Bigger images are waste spaces, users want to see the full map.</li>
			    				</ol>
			    			</div>
			    		</div>
			    	</div>

			    	<div className="section-box">
			    		<h3 className="section-title">High Fidelity Prototype</h3>
			    		<div className="zoom-img grid grid-gap-xs">
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-12" src={images['high1.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-12" src={images['high2.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-12" src={images['high3.png'].default} alt="" />
			    			<img className="col-xl-3 col-md-3 col-xs-3 col-12" src={images['high4.png'].default} alt="" />
			    		</div>
			    		
			    	</div>


			    	
		    		

		    	</div>
		    	<div className="zoom-img">
    				<img src={images['mockup.png'].default} alt="" />
    			</div>
		    	<ScrollToTopBtn></ScrollToTopBtn>
		    </Div>
		)
	

}
export default Explorest;