import React, {useEffect} from 'react';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import styled, { css } from 'styled-components'
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
// const imagesArr = ["visual_design2"]
// const images = imagesArr.map(item => require("./assets/img/beauty/" + item + ".png"))
// console.log(images);
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/beauty/', false, /\.(png|jpe?g|svg)$/));
// console.log(images['visual_design2.png']);

class Rebeauty extends React.Component{
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
		<Div className="flex" style={{position: "relative", top: "80px"}}>
	    	<PortfolioIntro className="flex">
	    		<div className="hero-img-box ">
    				<img src={images['visual_design2.png'].default} alt="" />
    			</div>
	    	</PortfolioIntro>
	    	<div className="portfolio-content flex-width-60">
	    		<h1>Rebeauty</h1>
	    		<div className="section-box brief">

					<div className="grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Role</h4>
							<ul>
								<li>Product Designer</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Duration</h4>
							<ul>
								<li>Feb - May 2020</li>
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
	    			<p>There are currently no mechanisms in place to perfectly trade second-hand beauty products. The trading and the experience can be much better and easier than current methods. This platform is aim to create a truthful and reliable environment that makes buying and selling second-hand makeup & beauty online easy and safe.</p>
	    		</div>

	    		<div className="section-box">
					<h3 className="section-title">Process</h3>
					<div className="zoom-img flex">
						<div className="flex-width-80">
							<img src={images['process.png'].default} alt="" />
						</div>
		    		</div>
		    	</div>



		    	<div className="section-box">
		    		<h3 className="section-title">Targeted  Market</h3>
	    			<p>The target audience were people that use makeup and consider themselves within the beauty life style.</p>
		    	</div>

		    	<div className="section-box">
		    		<h3 className="section-title">Leaning Goals</h3>
					<p>Why do people have so many useless beauty products?</p>
					<p>What do they do with products they no longer use?</p>
					<p>What's are some meaningful ways to dispose of products they no longer use?</p>
					<p>What hinder them from choosing those ways?</p>
		    	</div>




		    	<div className="section-box">
		    		<h3 className="section-title">User Research</h3>
					<p>The purpose of this research is to collect qualitative data to understand a user's emotions about when they buy or sell second-hand beauty products online and to listen to anecdotal stories related to this experience.</p>
					<p>For my research, I interviewed 8 users for problem discovery. And conducting a second round interview to dive deep for problem prioritization and user's needs.</p>
					<div className="col-12 divid-line"></div>
					<h5 className="title-indent">1ST ROUND OF INTERVIEWS</h5>
					<div className="interview-1 grid grid-gap-xs">
						<div className="col-xl-4 col-md-4 col-xs-12 col-12 flex flex-center">
							<p className="interview-num">8</p>
							<h5>Interview</h5>
						</div>
						<div className="col-xl-8 col-md-8 col-xs-12 col-12 flex flex-center">
							<p>I found that people end up with too many beauty products and are looking for a fast & easy way to sell them. I call these people the <span className="text-em">sellers</span>.</p>
							<p>I found that people end up with too many beauty products and are looking for a fast & easy way to sell them. I call these people the <span className="text-em">buyers</span>.</p>
						</div>
					</div>
					<div className="col-12 divid-line"></div>
					<h5 className="title-indent">2ND ROUND OF INTERVIEWS</h5>
					<div className="interview-2 grid grid-gap-xs">
						<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
							<p>7</p>
							<h5>Seller Interview</h5>
						</div>
						<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
							<p>5</p>
							<h5>Buyer Interview</h5>
							
						</div>
						<div className="col-xl-4 col-md-4 col-xs-4 col-4 flex flex-center">
							<p>37</p>
							<h5>Online Survey</h5>
						</div>
					</div>
					<div className="col-12 divid-line"></div>
		    	</div>
				







				<div className="section-box">
					<h3 className="section-title">User Quotes</h3>
					<div className="user-quote flex-center">
					<ul className="flex-width-80">
						<li>
						<span className="quote">“</span>
						I have lots of beauty items that I don't really use, I usually just keep them in the corner of my home or throw them away.
						<span className="quote">”</span>
						</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
					<ul className="flex-width-80">
						<li>
						<span className="quote">“</span>
						I want to try more beauty items and I prefer they’re cost-effective!
						<span className="quote">”</span>
						</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
					<ul className="flex-width-80">
						<li>
						<span className="quote">“</span>
							I would love to sell them if the trading process is easy and safe.
						<span className="quote">”</span>
						</li>
						</ul>
					</div>
					
					<div className="user-quote flex-center">
					<ul className="flex-width-80">
						<li>
						<span className="quote">“</span>
							I'm concerned about the item conditions might be different from the seller's descriptions.
						<span className="quote">”</span>
						</li>
						</ul>
					</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Synthesis &  Clustering</h3>
					<p>After conducting a series of user interviews, I synthesized the user insights and each color represents each user.</p>
					<h4 className="col-12 title-center">Synthesis</h4>
					<div className="zoom-img grid " style={{gridTemplateRows:"10"}}>
		    			<img className="col-9" style={{gridRow: "span 10"}} src={images['synthesis.png'].default} alt="" />
		    			<div className="col-3 flex-center" style={{gridRow: "span 1"}}>
		    				<h6>EXAMPLES</h6>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight1.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight2.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight3.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-12 divid-line"></div>
		    		</div>
		    		<h4 className="col-12 title-center"> Clustering</h4>
					<div className="zoom-img grid " style={{gridTemplateRows:"10"}}>
		    			<img className="col-9" style={{gridRow: "span 10"}} src={images['clustering.png'].default} alt="" />
		    			<div className="col-3 flex-center" style={{gridRow: "span 1"}}>
		    				<h6>EXAMPLES</h6>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight1.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight2.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-3 flex-center" style={{gridRow: "span 3"}}>
		    				<div className="img-box img-box-synthesis">
		    					<img src={images['insight3.svg'].default} alt="" />
		    				</div>
		    			</div>
		    			<div className="col-12 divid-line"></div>
		    		</div>
		    	</div>





		    	<div className="section-box">
					<h3 className="section-title">Persona</h3>
					<div className="zoom-img grid grid-gap-xs persona">
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['persona1.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['persona2.png'].default} alt="" />
		    		</div>
		    	</div>



		    	<div className="section-box">
		    		<h3 className="section-title">Problem  Statements</h3>
		    		<div className="zoom-img grid grid-gap-xs persona">
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['problem_statement1.png'].default} alt="" />
		    			<img className="col-xl-6 col-md-6 col-xs-12 col-12" src={images['problem_statement2.png'].default} alt="" />
		    		</div>
		    	</div>



		    	<div className="section-box">
		    		<h3 className="section-title">Solution & Concept</h3>
		    		<h4>A truthful and reliable second-hand beauty items trading platform.</h4>
		    		<p>No one-on-one connection between seller and buyer.</p>
		    		<h4>Handle the trading process for users.</h4>
		    		<p>Courier will pick up items from seller's home. And sellers can choose to drop off items at local drop off zones or the company store.</p>
		    		<h4>Products identification, cleaning and evaluation.</h4>
		    		<p>Buyers don’t need to worry about buying fake products.</p>
		    		
		    	</div>

		    	<div className="section-box">
		    		<h3 className="section-title">Wireframes</h3>
		    		<div className="zoom-img gird">
		    			<img className="col-12" src={images['wireframes.svg'].default} alt="" />
		    		</div>
		    	</div>




	    		<div className="section-box">
					<h3 className="section-title">User Testing</h3>
					<p>Based on the feedback from 6 people, I made changes that drastically altered the flow and user interface.</p>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								I want to know the estimated price of my product, and then I can decide if I want to sell it or not.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								I skipped the tutorial and feeling confused about using the APP.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								I want to see the status of each item on the selling list page.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
				</div>


	    		<div className="section-box">
					<h3 className="section-title">Synthesis &  Clustering</h3>
		    		<p>After conducting a series of user interviews, I synthesized the user insights and each color represents each user.</p>
					<h4 className="col-12 title-center">Synthesis</h4>
					<div className="zoom-img gird">
		    			<img className="col-12" src={images['testing.jpg'].default} alt="" />
		    		</div>
				</div>


				<div className="section-box">
					<h3 className="section-title">Learnings</h3>
					<h4 className="col-12 title-center">Showing results of scanning</h4>
					<div className="zoom-img gird">
		    			<img className="col-12" src={images['learning1.svg'].default} alt="" />
		    		</div>
		    		<h4 className="col-12 title-center">Showing the tutorial</h4>
					<div className="zoom-img gird">
		    			<img className="col-12" src={images['learning2.svg'].default} alt="" />
		    		</div>
		    		<h4 className="col-12 title-center">Adding item to “Selling List”</h4>
					<div className="zoom-img gird">
		    			<img className="col-12" src={images['learning3.svg'].default} alt="" />
		    		</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Visual Design</h3>
					<h4 className="col-12 title-center">Color</h4>
					<div className="grid grid-gap-xs">
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#414B6B'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#5F5496'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#AAA1E1'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#E3DEF8'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#C668BC'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#0a1f48'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#414B6B</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#5F5496</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#AAA1E1</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#E3DEF8</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#C668BC</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#0a1f48</span>
						</div>
					</div>
					

					<h4 className="col-12 title-center">Icon</h4>
		    		<div className="grid grid-gap-xxs">
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['1.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['2.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['3.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['4.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['5.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['6.svg'].default} alt="" />

		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['7.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['8.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['9.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['10.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['11.svg'].default} alt="" />
		    			<img className="col-xl-1 col-md-2 col-xs-3 col-4" src={images['12.svg'].default} alt="" />
		    		</div>
		    	</div>

		    	<div className="section-box">
	    			<h3 className="section-title">Final Design</h3>
				</div>








			
			</div>	
	    	
	    	<div className="zoom-img gird" style={{margin: '0'}}>
    			<img className="col-12" src={images['visual_design.svg'].default} alt="" />
    		</div>
	    	


	    	
    		<ScrollToTopBtn></ScrollToTopBtn>
	    	
	    </Div>
	    )
	}
}
export default Rebeauty;