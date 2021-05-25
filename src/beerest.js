import React,{createRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import video from './assets/img/beerest/concept.gif';
import walkthrough1 from './assets/img/beerest/video/Qu_c_walkthrough_1.mp4';
import walkthrough2 from './assets/img/beerest/video/Qu_c_walkthrough_2.mp4';
import walkthrough3 from './assets/img/beerest/video/Qu_c_walkthrough_3.mp4';
import styled, { css,keyframes } from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
const scroll = keyframes`
  0% {
    transform: translate(0,0);
  }

  // 80% {
  // 	top: auto;
  //   bottom: 0;
  // }
  100% {
  	transform: translate(0, -40%);
  }
`;
const OutcomeOverview = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
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
	
	.image .imgMockup {
		position: relative;
		width: 80%;
		border: 24px solid #111;
		border-radius: 16px;
		overflow: hidden;
	}
	.image .imgMockup::before {
	    content: '';
	    display: block;
	    padding-top: 65%;
	}
	.image img {
    	position: absolute;
    	top:0;
    	width: 100%;
		height: auto;
		animation: ${scroll} 10s ease-in-out infinite;
	}

	.image img.widthfixed {
		width: 90%;
		height: auto;
		border: 24px solid #111;
		border-radius: 8px;
	}
`;


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#E37041',
    'button': {
    	flex: 1,
    },
    '& > span': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#E37041',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: 'green',
  },
}));
// import './assets/css/beerest.css';
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
    height: 100vh;
`;
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/beerest/', false, /\.(png|jpe?g|svg)$/));



const personaCatalogs = [
	{
		thumb: images['userflow1.jpg'].default,
		image: images['Qu_c__POC_final-03.png'].default 
	},
	{
		thumb: images['userflow2.jpg'].default,
		image: images['Qu_c__POC_final-08.png'].default 
	},
	{
		thumb: images['userflow3.jpg'].default,
		image: images['Qu_c__POC_final-15.png'].default 
	}
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && children
      	// (
      	// <div>{children}</div>
       //  <Box p={3}>
       //    <Typography>{children}</Typography>
       //  </Box>
      	// )
      }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Beerest = (props) => {
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
		
		const classes = useStyles();
		const [value0, setValue0] = useState(0);
  		const [value1, setValue1] = useState(0);
  		const [value2, setValue2] = useState(0);
  		const [value3, setValue3] = useState(0);
  		const handleTabChange0 = (event, newValue) => {
		    setValue0(newValue);
		};
		const handleTabChange1 = (event, newValue) => {
		    setValue1(newValue);
		};
		const handleTabChange2 = (event, newValue) => {
		    setValue2(newValue);
		};
		const handleTabChange3 = (event, newValue) => {
		    setValue3(newValue);
		};
		const a11yProps = (index) => {
		  return {
		    id: `scrollable-prevent-tab-${index}`,
		    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
		  };
		}

		return (
		<Div className="flex" style={{position: "relative", top: "80px"}}>
			<PortfolioIntro className="flex">
				
				<div className="hero-img-box">
					<img src={images['hero1.png'].default} style={{backgroundColor: '#eee'}} alt="" />
				</div>

			</PortfolioIntro>

			<div className="portfolio-content flex-width-60">
				<h1>Beerest</h1>

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
								<li>Sep - Dec 2020</li>
							</ul>
							
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Deliverables</h4>
							<ul>
								<li>User Research</li>
								<li>Task flows</li>
								<li>Clickable Prototype</li>
								<li>Branding</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Tools</h4>
							<ul>
								<li>Figma</li>
								<li>D3.js</li>
								<li>Adobe Illustrator</li>
								<li>Adobe Photoshop</li>
							</ul>
							
						</div>
					</div>	
				</div>
				<div className="section-box">
					<h3 className="section-title">Overview</h3>
					<p>This project aims to create a fun and interactive data visualization website that helps the user to choose from the top-rated beers.</p>
				</div>
			</div>

				
			<div className="section-box fullscreen-container flex flex-center">
				
				{/*<OutcomeOverview className="grid">
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<div className="imgMockup">
							<img loading="lazy" src={images['homepage.png'].default} alt="" />
						</div>
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Pick from top-rated beers.</h1>
						<p>Users can interact with the beers chart and map to search and filter beers based on their interests.
						Providing a fun way to explore the top-rated beers and choose beers to try from the best.</p>
					</div>
					<div className="col-1"></div>
				</OutcomeOverview>*/}

				<OutcomeOverview className="grid">
					<div className="col-1"></div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Know beer better through interactive infographics.</h1>
						<p>Help users understand the beer basics including ABV, IBU, and other characters of beer. 
						Explore beers of different styles through the beer basics, which helps them identify what they need to know in choosing a beer.</p>

					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<div className="imgMockup">
							<img loading="lazy" src={images['basicpage.png'].default} alt="" />
						</div>
					</div>
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<div className="imgMockup">
							<img loading="lazy" src={images['profilepage.png'].default} alt="" />
						</div>
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Beer virtual collection.</h1>
						<p>Virtual Collections allow users to collect beer caps and bottles virtually, making it easier to help people saving their space and sharing their beer achievement.</p>

					</div>
					<div className="col-1"></div>
				</OutcomeOverview>
			</div>


			<div className="portfolio-content flex-width-60">	
				<div className="section-box">
					<h3 className="section-title">Process</h3>
					<div className="zoom-img flex">
						<div className="flex">
								<img loading="lazy" src={images['process.svg'].default} alt="" />
						</div>
					</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Project Goals</h3>
					<ul>
						<li>Discover the best beers and breweries through interactive data visualization.</li>
						<li>Present users' personal drinking experience through infographics.</li>
						<li>Help users understand the beer basics.</li>
					</ul>
				</div>

				<div className="section-box">
					<h3 className="section-title">Business Goals</h3>
					<ul>
						<li>Present users' personal drinking experience through infographics.</li>
						<li>Discover the best beers and breweries through data visualization.</li>
						<li>Help users understand the beer basics.</li>
					</ul>
				</div>



				<div className="section-box">
					<h3 className="section-title">Target  Market Research</h3>
					<StyledTabs value={value0} onChange={handleTabChange0} variant="fullWidth" aria-label="styled tabs">
				    	<StyledTab label="Research" {...a11yProps(0)}/>
				   		<StyledTab label="Target Audience" {...a11yProps(1)}/>
				  	</StyledTabs>
				  	<TabPanel value={value0} index={0}>
				        <div className="zoom-img grid grid-gap-xs">
							<img loading="lazy" className="col-12" src={images['research.png'].default} alt="" />
						</div>
				   	</TabPanel>
					<TabPanel value={value0} index={1}>
						<div className="zoom-img grid grid-gap-xs">
							<img loading="lazy" className="col-12" src={images['research1.png'].default} alt="" />
						</div>
					</TabPanel>					
				</div>

				<div className="section-box">
					<h3 className="section-title">Leaning Goals</h3>

					<div className="zoom-img grid grid-gap-xs">
						<div className="col-xl-6 col-md-6 col-xs-12 col-12">
							<h4>Buying Behavior</h4>
							<ul>
								<li>How do you choose beers?</li>
								<li>What the preconditions for you to choose a beer?</li>
								<li>What kind of media do you prefer to use(or hear about) as your source to know about beers? </li>
							</ul>
						</div>
						<div className="col-xl-6 col-md-6 col-xs-12 col-12">
							<h4>Drinking Preference</h4>
							<ul>
								<li>What taste/flavor do you prefer?</li>
								<li>Where do you like about beer?</li>
								<li>When and where do you usually drink?</li>
								<li>What do you want to know about beer?</li>
							</ul>
						</div>
						<div className="col-xl-6 col-md-6 col-xs-12 col-12">
							<h4>Pain Points</h4>
							<ul>
								<li>What kind of beer do you dislike?</li>
								<li>What's your worst experience of drinking?</li>
								<li>Do you have any difficulties in finding a beer that lives up to your expectations? </li>
							</ul>
						</div>
						<div className="col-xl-6 col-md-6 col-xs-12 col-12">
							<h4>Others</h4>
							<ul>
								<li>Anything else about beers you would like to share?</li>
							</ul>
						</div>
						
						
						
					</div>
				</div>


				<div className="section-box">
					<h3 className="section-title">User Research</h3>
					<p>I interviewed 5 people aged 21-34 who are considered my target audiences over the phone. It included 2 females and 3 males. I consider them as 2 beer beginner, 2 beer lovers, and 1 beer expert. </p>
				</div>
				







				<div className="section-box">
					<h3 className="section-title">User Quotes</h3>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								Whenever I travel to a new country or city, I want to drink the most worth trying beers.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								As a newbie in drinking, I cannot understand the beer basics.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								I do a beer bottle collection, but it takes up a lot of space in my room.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								I prefer beers that have good entrance and have an appropriate ABV.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="section-box highlight">
					<h3 className="section-title">Synthesis &  Clustering</h3>
					<p>After conducting a series of user interviews, I synthesized the user insights and each color represents each user.</p>
					<StyledTabs value={value1} onChange={handleTabChange1} variant="fullWidth" aria-label="styled tabs">
				    	<StyledTab label="Synthesis" {...a11yProps(0)}/>
				   		<StyledTab label=" Clustering" {...a11yProps(1)}/>
				  	</StyledTabs>
				  	<TabPanel value={value1} index={0}>
				        <div className="zoom-img grid grid-gap-xs">
							<img loading="lazy" className="col-12" src={images['synthesis.svg'].default} alt="" />
						</div>
				   	</TabPanel>
					<TabPanel value={value1} index={1}>
						<div className="zoom-img grid grid-gap-xs">
							<img loading="lazy" className="col-12" src={images['clustering.svg'].default} alt="" />
						</div>
					</TabPanel>
					{/*
					<h4 className="col-12 title-center">Synthesis</h4>
					<div className="zoom-img grid grid-gap-xs">
						<img loading="lazy" className="col-12" src={images['synthesis.svg'].default} alt="" />
					</div>
					<h4 className="col-12 title-center"> Clustering</h4>
					<div className="zoom-img grid grid-gap-xs">
						<img loading="lazy" className="col-12" src={images['clustering.svg'].default} alt="" />
					</div>
					*/}
				</div>

			{/*
				<div className="section-box">
					<h3 className="section-title">Finding & Learning</h3>
					<p></p>
				</div>
			*/}
		
					<div className='section-box'>
						<h3 className="section-title">Persona</h3>
						<p>Based on my interviews and online survey, I created three personas and identified them as beer beginner, beer lover, and beer expert.</p>
					  	<StyledTabs value={value2} onChange={handleTabChange2} variant="fullWidth" aria-label="styled tabs">
					    	<StyledTab label="Persona 1" {...a11yProps(0)}/>
					   		<StyledTab label="Persona 2" {...a11yProps(1)}/>
					    	<StyledTab label="Persona 3" {...a11yProps(2)}/>
					  	</StyledTabs>
					  	<TabPanel value={value2} index={0}>
					        <div className="zoom-img persona">
								<img loading="lazy" src={images['Qu_c__POC_final-03.png'].default} alt="" />
							</div>
					   	</TabPanel>
						<TabPanel value={value2} index={1}>
							<div className="zoom-img persona">
								<img loading="lazy" src={images['Qu_c__POC_final-08.png'].default} alt="" />
							</div>
						</TabPanel>
						<TabPanel value={value2} index={2}>
							<div className="zoom-img persona">
								<img loading="lazy" src={images['Qu_c__POC_final-15.png'].default} alt="" />
							</div>
						</TabPanel>
					  	<Typography className={classes.padding} />
					</div>

				{/**
				<div className="section-box">
					<h3 className="section-title">Persona</h3>
					<p>Based on my interviews and online survey, I created three personas and identified them as beer beginner, beer lover, and beer expert.</p>
					<div className="zoom-img persona flex flex-width-80">
						<img loading="lazy" src={images['Qu_c__POC_final-03.png'].default} alt="" />
					</div>
					<div className="zoom-img persona flex flex-width-80">
						<img loading="lazy" src={images['Qu_c__POC_final-08.png'].default} alt="" />
					</div>
					<div className="zoom-img persona flex flex-width-80">
						<img loading="lazy" src={images['Qu_c__POC_final-15.png'].default} alt="" />
					</div>
				</div>
					<h4>Limit knowledge of beer.</h4>

					<h4>Overchoice and excessive information about beers makes people hard to make a decision. </h4>

					<h4>Insufficient space for beer collection.</h4>

				**/}


				<div className="section-box">
					<h3 className="section-title">Problem  Statements</h3>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								As a beer beginner, I love beers that taste bright, crisp and with fruit flavor. I want to get a little liquored up to relax. I hope to learn more about beer basics.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								As a beer lover, I love to try the local beers while traveling to a new city! But so much choice can make me hesitant. I hope to get to know each beer quickly and make the best decision from the top-rated beers.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
					<div className="user-quote flex-center">
						<ul className="flex-width-80">
							<li>
								<span className="quote">“</span>
								As a senior beer lover, I collected many beer caps and bottles, which takes up a lot of space in my room. And it's hard to keep the beer bottles I drank in another country or city.
								<span className="quote">”</span>
							</li>
						</ul>
					</div>
				</div>



				<div className="section-box">
					<h3 className="section-title">Solution & Concept</h3>
					
					<div className="zoom-img grid grid-gap-xs">
						<div className="col-4">
							<h4>Learn beer basics through interactive infographics.</h4>                        
							<img loading="lazy" src={images['sketch1.jpg'].default} alt="" />
						</div>
						<div className="col-4">
							<h4>Discover the world's top-rated beers through the interactive map. </h4>
							<img loading="lazy" src={images['sketch2.jpg'].default} alt="" />
						</div>
						<div className="col-4">
							<h4>Beer caps and bottles' virtual collection.</h4>
							<img loading="lazy" src={images['sketch3.jpg'].default} alt="" />
						</div>
					</div>
				</div>




				


			{/** Wireframes **/}
				

			{/** 
				<div className="section-box">
					<h3 className="section-title">Wireframes</h3>
					<div className="zoom-img grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe0.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe1.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe2.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe3.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe4.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe5.svg'].default} alt="" />
						</div>
						<div className="col-xl-3 col-md-3 col-xs-3 col-12">
							<img loading="lazy" src={images['wireframe6.svg'].default} alt="" />
						</div>
					</div>
				</div>

			**/}

				{/** User Testing **/}

				{/** 
				<div className="section-box">
					<h3 className="section-title">User Testing</h3>
					<p>My user testing based on the three task flows I created for steps a user typically goes through to complete in Beerest:</p>
					<ul>
						<li>The user wants to learn more about beer basics.</li>
						<li>The user wants to find a top-rated beer and save it to the list.</li>
						<li>The user wants to do beer caps and bottles' virtual collection.</li>
					</ul>
					<p>After conducting a series of user testing, I synthesized and clustered the user insights, and each color represents each user.</p>
					<h4 className="col-12 title-center">Insights</h4>
					<div className="zoom-img grid grid-gap-xs">
						<img loading="lazy" className="col-12" src={images['testing.svg'].default} alt="" />
					</div>
				</div>

				 **/}
				{/** Learnings **/}

				{/** 
				<div className="section-box">
					<h3 className="section-title">Learnings</h3>
					<p>Based on the feedback from 7 people, I made two rounds of changes that drastically altered the flow and user interface.</p>
					<h4>Home Page</h4>
					<ul>    
						<li>Change the hierarchy of the home page.</li>
						<li>Click the expansion button to display more info. </li>
					</ul>
					<h4>Profile Page</h4>
					<ul>    
						<li>Using animation or pop-up to indicate the state of the operation results.</li>
					</ul>
					<h4>Beer Basics Page</h4>
					<ul>    
						<li>Break graphics into tabbed pages to simplify them.</li>
						<li>Use a few tick marks.</li>
					</ul>
				</div>

				**/}


				<div className="section-box highlight" id="Prototype">
					<h3 className="section-title">Final Prototype</h3>
					<p>Here are three prototype videos I made based on the three main user flows I created. You can also check out the clickable prototype.</p>
					<StyledTabs value={value3} onChange={handleTabChange3} variant="fullWidth" aria-label="styled tabs">
				    	<StyledTab label="Prototype 1" {...a11yProps(0)}/>
				   		<StyledTab label="Prototype 2" {...a11yProps(1)}/>
				    	<StyledTab label="Prototype 3" {...a11yProps(2)}/>
				  	</StyledTabs>
				  	<TabPanel value={value3} index={0} className="grid grid-gap-xl">
				       <div className="col-xl-5 col-md-5 col-xs-12 col-12">
							<h4>User Task</h4>
							<p>Go to the "Beer Basics" page to learn more about the beer color that is related to beer styles.</p>
							<h4>User Flow</h4>
							<ul>
								<li>Open BEEREST</li>
								<li>Tap on “Learn Beer Basics”</li>
								<li>Tap on "Color" tab</li>
							</ul>

						</div>
						<div className="col-xl-7 col-md-7 col-xs-12 col-12 flex flex-center" style={{paddingTop: '2em'}}>
							<video controls style={{maxHeight: '700px', width: '100%'}}>
								<source src={walkthrough1} type="video/mp4" />
							</video>
						</div>
				   	</TabPanel>
					<TabPanel value={value3} index={1} className="grid grid-gap-xl">
						<div className="col-xl-5 col-md-5 col-xs-12 col-12">
							<h4>User Task</h4>
							<p>Find a beer that you interest in in the "Top 100 Beer Chart" and save it to your beer list.</p>
							<h4>User Flow</h4>
							<ul>
								<li>Open BEEREST</li>
								<li>Tap on a beer in the "Top 100 Beer Chart"</li>
								<li>Tap on "Save" icon to save it</li>
								<li>Tap on "Me" icon</li>
								<li>Tap on "Saved" icon to saved beer</li>
							</ul>
						</div>
						<div className="col-xl-7 col-md-7 col-xs-12 col-12 flex flex-center" style={{paddingTop: '2em'}}>
							<video controls style={{maxHeight: '700px', width: '100%'}}>
								<source src={walkthrough2} type="video/mp4" />
							</video>
						</div>
					</TabPanel>
					<TabPanel value={value3} index={2} className="grid grid-gap-xl">
						<div className="col-xl-5 col-md-5 col-xs-12 col-12">
							<h4>User Task</h4>
							<p>Go to your profile and add the beer to the virtual collection.</p>
							<h4>User Flow</h4>
							<ul>
								<li>Open BEEREST</li>
								<li>Tap on Profile</li>
								<li>Tap on "Add" icon to add a new beer</li>
								<li>Tap on scanning beer bottle/QR code</li>
								<li>Scan the beer</li>
								<li>Tap on "YES" to confirm the result</li>
							</ul>

						</div>
						<div className="col-xl-7 col-md-7 col-xs-12 col-12 flex flex-center" style={{paddingTop: '2em'}}>
							<video controls style={{maxHeight: '700px', width: '100%'}}>
								<source src={walkthrough3} type="video/mp4" />
							</video>
						</div>
					</TabPanel>
				  	<Typography className={classes.padding} />
					
					{
					/*<div className="flex flex-center" style={{padding: '2em', backgroundColor: '#fff', borderRadius: '1em'}}>
						<video controls style={{maxHeight: '500px'}}>
							<source src={walkthrough1} type="video/mp4" />
						</video>
					</div>
					*/}
					
				</div>


				

				<div className="section-box">
					<h3 className="section-title">Data Visualization Design</h3>
					<div className="zoom-img grid grid-gap-xs">
						<img loading="lazy" className="col-xl-6 col-md-6 col-xs-12 col-12 img-box" src={images['dv-design1.png'].default} alt="" />
						<img loading="lazy" className="col-xl-6 col-md-6 col-xs-12 col-12 img-box" src={images['dv-design2.png'].default} alt="" />
					</div>
				</div>

				<div className="section-box">
					<h3 className="section-title">Visual Design</h3>
					<h4 className="col-12">Color</h4>
					<div className="grid grid-gap-xs">
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#0F2C2F'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#E37041'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#EEA84C'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#FFFFFF', border: '1px solid #eee'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#41E3D9'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4 img-box img-box-color" style={{backgroundColor: '#ffffff'}}></div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#0F2C2F</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#E37041</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#EEA84C</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#FFFFFF</span>
						</div>
						<div className="col-xl-2 col-md-2 col-xs-4 col-4">
							<span>#41E3D9</span>
						</div>
						
					</div>
					

					<h4 className="section-title">Logo</h4>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['logo.png'].default} alt="" />
					</div>


					<h4 className="section-title">Clear Space</h4>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['logo1.png'].default} alt="" />
					</div>


					<h4 className="section-title">Poster Design</h4>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['poster.jpg'].default} alt="" />
					</div>

					<h4 className="section-title">Brand Merchandise</h4>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['merchandise1.jpg'].default} alt="" />
					</div>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['merchandise2.jpg'].default} alt="" />
					</div>
					<div className="zoom-img img-box img-box-logotype">
						<img loading="lazy" src={images['merchandise3.jpg'].default} alt="" />
					</div>

					




				</div>

				<div className="section-box">
					<h3 className="section-title">Final Design</h3>
					
				</div>








			
			</div>  
			
			
			<div className="zoom-img grid grid-gap-xs" style={{backgroundColor: '#eee',fontSize:'0', marginTop:'2em'}}>
				<div className="col-12">
					<img loading="lazy" src={images['hero1.png'].default} alt="" />
				</div>
			</div>
			
			


			

			<ScrollToTopBtn></ScrollToTopBtn>
		</Div>
		)
	
}
export default Beerest;