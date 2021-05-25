import React,{createRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ScrollToTopBtn from './components/Button/ScrollToTopBtn.js';
import styled, { css } from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
// import Home from './Jasper/landing-page-demo.js';
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import {H4} from './components/Styled/StyledComponents.js';
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
		width: 100px;
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
		color: #444;
	}
`
const H2 = styled.h4`
	opacity: 0.2;
	// margin: 0 0 -100px 0;
	font-weight: 800;
    font-size: 4em;
    color: #111;
    margin-top: 80px;
    margin-bottom: 0;
    @media (max-width: 992px) {
	    font-size: 5em;
	    margin: 0 0 -50px 0;
	}
`;
const Dot = styled.div`
	height: 8px;
	width: 8px;
	background-color: #005B55;
	border-radius: 50%;
	display: inline-block;
	margin: 0 8px;
`;
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/img/jasper/', false, /\.(png|jpe?g|svg)$/));

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

const Jasper = (props) => {
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
			<div className="flex">
				<div className="hero-img-box">
					<img src={images['hero.png'].default} style={{backgroundColor: '#eaeeee'}} alt="" />
				</div>
			</div>

			<div className="portfolio-content flex-width-60">
				<h1>Jasper Financial</h1>
				<div className="section-box brief">
					<div className="grid grid-gap-xs">
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Role</h4>
							<ul>
								<li>Product Designer</li>
								<li>Frontend Developer</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Duration</h4>
							<ul>
								<li>Feb 2021 - Present</li>
							</ul>
							
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Deliverables</h4>
							<ul>
								<li>Landing page</li>
								<li>Checkout flow</li>
								<li>Design system</li>
								<li>Icons</li>
							</ul>
						</div>
						<div className="col-xl-3 col-md-3 col-xs-12 col-12">
							<h4>Tools</h4>
							<ul>
								<li>Figma</li>
								<li>React.js</li>
								<li>Adobe Illustrator</li>
								<li>Adobe Photoshop</li>
							</ul>
							
						</div>
					</div>	
				</div>
				<div className="section-box">
					<h3 className="section-title">About Jasper</h3>
					<p>Jasper is the web platform for office managers to give their patients the best checkout experience, simplify their workflow, and increase collection success. 
				On the other hand, Jasper aims to helps patients get affordable care by providing flexible pay overtime plans.</p>

				</div>
				<div className="section-box">
					<h3 className="section-title">Outcome overview</h3>
				</div>
			</div>

			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Landing page designed and implemented</h1>
						<p>I worked with the marketing team to provide landing page design for both patient and office sides. 
						In order to create a better holistic user experience and makes users know Jasper Financial quicker, 
						I draw on all aspects of web design—<strong>information architecture, responsive layouts, motion</strong>—
						to deliver consistent and balanced layouts, through typography, color, and visual hierarchy.</p>
						<div><span className="tag">Launched</span></div>
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img src={images['hero.png'].default} alt="jasper landing page" />
					</div>
				</OutcomeOverview>


				<OutcomeOverview className="grid">
					{/*<div className="col-1">
					</div>*/}
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img src={images['overview-checkout.png'].default} className="widthfixed" alt="jasper landing page" />
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Checkout flow redesigned</h1>
						<p>Jasper aims to helps patients get affordable care by choosing flexible pay overtime plans. 
						My job is designing an elegant checkout flow that let patient walk through the online payment process effortless. </p>
						<div><span className="tag">Coming soon...</span></div>
					</div>
					{<div className="col-1">
					</div>}
				</OutcomeOverview>

				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Design system</h1>
						<p>Building a design system for Jasper cross-platform SaaS App.</p>
						<div><span className="tag">Coming soon...</span></div>
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img src={images['cover.svg'].default} alt="jasper landing page" />
					</div>
				</OutcomeOverview>
			</div>


			<div className="portfolio-content flex-width-60">
				<div className="section-box">
					<h1 style={{marginBottom: "-4rem"}}>Checkout flow</h1>
				</div>
				
				<div className="section-box">
					<H2>Beginning</H2>
					<h3 className="section-title">What is the context?</h3>
					<p>Jasper aims to helps patients get affordable care by providing flexible pay overtime plans. My job is designing an elegant checkout flow that let patient walk through the online payment process effortless. </p>
					{/*<h3>The challenge</h3>*/}
					<h3>Problem statement</h3>
					<div>
						<p><Dot/>The checkout flow requests a lot of information from the user at a time which hampers users from finishing the checkout process.
						<br/><Dot/>The information architecture is not clear enough for the user.
						<br/><Dot/>Add a new feature of reviews to promote patients to leave positive reviews for our providers. </p>
					</div>
					<h3>Design goals</h3>
					<p>
						<Dot/>Checkout flow should be simple and streamlined.<br/>
						<Dot/>Request information only when needed.<br/>
						<Dot/>Encourage users to complete their payment and leave a review for the offices.
					</p>
				</div>
			</div>

{/*-----------------------------------The approach-----------------------------------*/}
			<div className="section-box fullscreen-container flex flex-center">
				<div className="flex-width-60">
					<H2>The approach</H2>
				</div>
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Competitive analysis</h1>
						<p>I started with collecting competitor's checkout flow which provides a similar function. 
						By walking through each flow step by step helps me dive deeper into the checkout process - 
						from creating an account to review the payment plan and get a better understanding of how to collect user information.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img src={images['competitors.png'].default} className="widthfixed" alt="Competitive analysis" />
					</div>
				</OutcomeOverview>

				
			</div>
{/*-----------------------------------Insights & Solution-----------------------------------*/}			
			<div className="flex-width-60">
				<div className="section-box">
					<h3>Empathy map</h3>
					<p>By exploring the patient's behaviors and thoughts at the checkout process. 
					I created an empathy map to understand and prioritize the user needs.</p>
				</div>
				<div className="section-box">	
					<img loading="lazy" className="col-12" src={images['Empathy.svg'].default} style={{width: '100%'}} alt="" />
				</div>
				<div className="section-box">
					<h3>Solution</h3>
				</div>
			</div>
			<div className="flex-width-70">
				<div className="section-box">
					<div className="grid">
					{
		              [{ 
		                  title: "Simplify the process",
		                  icon: images['Simple.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Mobile design first",
		                  icon: images['Mobile.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Offer guest checkout",
		                  icon: images['Onetime.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Restructure the layout",
		                  icon: images['Restructure.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Add tokenization",
		                  icon: images['Save.svg'].default,
		                  description: ''
		              },
		              { 
		                  title: "Review after checkout",
		                  icon: images['Smile.svg'].default,
		                  description: ''
		              }
		            ].map((item,i) => (
		              <DesignGoal key = {i} className="col-xl-4 col-md-4 col-xs-4 col-6">
		                	<img src={item.icon} alt="" />
							<h3>{item.title}</h3>
		              </DesignGoal>
		            ))}
					</div>
				</div>
			</div>

{/*-----------------------------------The process-----------------------------------*/}
			{/*<div className="section-box fullscreen-container flex flex-center">
				<div className="flex-width-60"><H2>The Process</H2></div>
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Ideation</h1>
						<p>The initial stage in the ideation process was rough wireframes of screens. 
						I created several user-flows to understand the process and collecting feedback.</p>
						<p>After determined the initial version checkout flow, 
						I started to design the mid-fidelity prototype including several layouts 
						for the screens that comprise complex information.</p>
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
					</div>
				</OutcomeOverview>
			</div>*/}
			<div className="portfolio-content flex-width-60">
				<H2>The Process</H2>
				<div className="section-box">
					<h3 className="section-title">Ideation</h3>
					<p>The initial stage in the ideation process was rough wireframes of screens. 
					I created several user-flows to understand the process and collecting feedback.</p>
					<p>After determined the initial version checkout flow, 
					I started to design the mid-fidelity prototype including several layouts 
					for the screens that comprise complex information.</p>
				</div>
				<div className="section-box">	
					<img loading="lazy" className="col-12" src={images['Ideation.png'].default} style={{width: '100%'}} alt="" />
				</div>	
				
				<div className="section-box">
					<h3 className="section-title">The Solution</h3>
				</div>
			</div>


{/*-----------------------------------The Solution-----------------------------------*/}
			
			<div className="section-box fullscreen-container flex flex-center">
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>SMS registration and login</h1>
						<p>"Don’t make users remember information." With a phone number and verification code to enter the Jasper system, makes it easier for patients to make the payment.</p>
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img src={images['Login.png'].default} className="" alt="Competitive analysis" />
					</div>
					<div className="col-1">
					</div>
				</OutcomeOverview>	

				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img src={images['Info.png'].default} className="" alt="Competitive analysis" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Break tasks into chunks</h1>
						<p></p>
					</div>
					<div className="col-1">
					</div>
				</OutcomeOverview>	
				<OutcomeOverview className="grid">
					<div className="col-2">
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>One time payment</h1>
						<p>Rearranged the priority of the payment methods based on the several layouts I create at first.</p>
					</div>
					<div className="image col-xl-4 col-md-4 col-xs-12 col-12">
						<img src={images['Onetime.png'].default} className="" alt="One time payment" />
					</div>
					<div className="col-2">
					</div>
				</OutcomeOverview>	
				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="image col-xl-7 col-md-7 col-xs-12 col-12">
						<img src={images['Payovertime.png'].default} className="" alt="Pay over time plans" />
					</div>
					<div className="description col-xl-3 col-md-3 col-xs-12 col-12">
						<h1>Future features</h1>
						<p>Provide affordable payment plans.</p>
					</div>
					<div className="col-1">
					</div>
				</OutcomeOverview>	
				<OutcomeOverview className="grid">
					<div className="col-1">
					</div>
					<div className="description col-xl-4 col-md-4 col-xs-12 col-12">
						<h1>Review after checkout</h1>
						<p></p>
					</div>
					<div className="image col-xl-6 col-md-6 col-xs-12 col-12">
						<img src={images['Review.png'].default} className="" alt="Reviews" />
					</div>
					<div className="col-1">
					</div>
				</OutcomeOverview>	

				<div className="flex-width-60">
					<h3 className="section-title">Iteration</h3>
					<h3 className="section-title"></h3>
					<p style={{fontWeight:"600"}}>Improved information hierarchy</p>
					<p><Dot/>Made our perference payment method more noticeable.
					<br/><Dot/>Rearranged the priority of payment methods.
					</p>
				</div>
				<div className="flex-width-70">	
					<div className="grid">
						<img loading="lazy" className="col-12" src={images['Iteration01.png'].default} style={{width: '100%'}} alt="" />
					</div>
				</div>	
				<div className="flex-width-60">
					<h3 className="section-title"></h3>
					<p style={{fontWeight:"600"}}>More intuitive way for users to leave a review</p>
					<p><Dot/>Directly shows the review section on the screen after pay successfully instead of showing as the pop-up.
					<br/><Dot/>Replaced the five-star rating with emojis including text description.
					<br/><Dot/>Provide possible options for users to simply tap to choose.
					</p>
					{/*<h3 className="section-title">Prototype</h3>*/}
				</div>	
				<div className="flex-width-70">	
					<div className="grid">
						<img loading="lazy" className="col-12" src={images['Iteration02.png'].default} style={{width: '100%'}} alt="" />
					</div>
				</div>	
			</div>
{/*-----------------------------------Design Principles-----------------------------------*/}
			<div className="flex-width-60">
				<h3 className="section-title">Design Principles</h3>
			</div>
			<div className="flex-width-80">
				<div className="section-box">
					<div className="grid">
					{
		              [{ 
		                  title: "Less is more",
		                  icon: images['Less.svg'].default,
		                  description: 'Less but essential information and steps can reduce the operational and cognitive costs of the users. In placing value on this, the design’s usability and consistency improve.'
		              },
		              { 
		                  title: "Have a clear hierarchy",
		                  icon: images['Hierarchy.svg'].default,
		                  description: 'Have a clear hierarchy can help users understand the content clearly. The priority of content can prompt users more likely to make a decision that fits the business. On the other hand, we should also provide other options for users.'
		              },
		              { 
		                  title: "Be trustworthy and credible",
		                  icon: images['Trustworthy.svg'].default,
		                  description: 'Provide all the information that users may want to know through the checkout process. Ensure users can easily make actions and understand the reason for the information request.'
		              },
		              
		            ].map((item,i) => (
		              <DesignGoal key = {i} className="col-xl-4 col-md-4 col-xs-4 col-12">
		                	<img src={item.icon} alt="" />
							<h3>{item.title}</h3>
							<p>{item.description}</p>	
		              </DesignGoal>
		            ))}
					</div>
				</div>
			</div>
			<div className="flex-width-60">
				<h3 className="section-title"></h3>
			</div>
			<ScrollToTopBtn></ScrollToTopBtn>
		</Div>
		)
	
}
export default Jasper;