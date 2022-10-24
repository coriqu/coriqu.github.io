import React from 'react';
import Me from './assets/img/about/me0.jpg';
import Resume from './assets/resume/CoriQu_ProductDesigner_Resume.pdf';
import styled from 'styled-components';
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
`;
const SectionTitle = styled.p` 
	color: #00B2BF;
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	margin-top:80px;
`;		
const SectionContainer = styled.div`
	color: #fff;
	margin: 8px 0;
	.title1 {
		color: #eee;
		font-size: 16px;
		font-weight: 600;
		margin-top: 16px;
	}
	.title2 {
		color: #999;
		font-size: 14px;
		font-weight: 500;
		margin-top: 0;
	}
	p {
		color: #999;
		font-size: 12px;
		font-weight: 400;
		margin: 0 auto;
	}
`;
const Dot = styled.div`
	height: 12px;
	width: 12px;
	background-color: #ccc;
	border-radius: 50%;
	display: inline-block;
	margin: 0 8px;
	margin-left: -20px;
`;

class About extends React.Component{
	
	render() {
		const Contents = (props) => {
		return (
				props.contents.map((a)=> (
					<p>{a}</p>
				))
			)
		}
		return (
			<main className="flex" style={{position: "relative", top: "80px"}}>
		    	<div className="about-intro flex-width-70 align-item-center">
		    		<div className="grid">
			    		<div className="profile-photo-box col-xl-4 col-md-4 col-sm-12 col-12 ">
							<div className="profile-photo flex flex-center animate__animated animate__pulse">
								<img src={Me} alt="" />
							</div>
						</div>
						
						<div className="profile-description col-xl-8 col-md-8 col-sm-12 col-12">
							<h2>Hello! I'm Cori</h2>
							<p>I’m a <strong>product designer</strong> who also does <strong>front-end</strong> coding. <strong>I'm a design system enthusiast, problem solver, and facilitator. </strong> 
							My passion lies in solving complex problems by putting design thinking into practice in real-world projects 
							and making an impact on society through the Human-centered design approach.</p>
							<p>Outside the world of design and coding, I love traveling and taking photos. 
							I share my adventure and photography works on Instagram as <a href="https://www.instagram.com/coriq_/" rel="noreferrer" target="_blank">@coriq_</a>.</p>
							<p>I'm actively looking for new opportunities! Check out my <a href={Resume} rel="noreferrer" target="_blank">RESUME</a>.</p>
						</div>
					</div>
		    	</div>		

		    	<div className="flex-width-70" style={{marginBottom: "80px"}}>	
					<div className="">
						
						<div className="grid">
							<div className="col-xl-6 col-md-6 col-xs-12 col-12">
								<SectionTitle>Experience</SectionTitle>
								{
					              [{ 
					                  title: "UI/UX Designer",
					                  company: "Wyndham Destination - New York, NY",
					                  description: '',
					                  time: "Nov 2021 – Now"
					              },
					              { 
					                  title: "UI/UX Designer",
					                  company: "360 Design - New York, NY",
					                  description: '',
					                  time: "Jul 2021 – Oct 2021"
					              },
					              { 
					                  title: "UI/UX Designer & Front-End Developer",
					                  company: "Jasper Financial - New York, NY",
					                  description: '',
					                  time: "Feb 2021 – Jun 2021"
					              },
					              /*{
					                  title: "Product Designer ",
					                  company: "NASA (Sponsorship Project) San Francisco, CA",
					                  description: '',
					                  time: "Feb 2021 – May 2021"
					              },*/
					              { 
					                  title: "Graphic Designer",
					                  company: "AnnaClaire Studio - Sydney, Australia",
					                  description: '',
					                  time: "Apr 2019 – Jul 2019"
					              },
					              { 
					                  title: "Front-End Development Intern",
					                  company: "Lenovo - Beijing, China",
					                  description: '',
					                  time: "Mar 2018 – Jun 2018"
					              }
					            ].map((item,i) => (
					              <SectionContainer key = {i}>
										<div className="flex-justify-between">
											<span className="title1">{item.title}</span>
											<span className="title1">{item.time}</span>
										</div>
										<p className="title2">{item.company}</p>
										<div className="text-center">
											<p>{item.description}</p>
										</div>
					              </SectionContainer>
					            ))}
								<SectionTitle>Education</SectionTitle>
								{
					              [{ 
					                  title: "M.A. Web Design & New Media",
					                  company: "Academy of Art University - San Francisco, CA",
					                  description: '',
					                  time: "Sep 2019 - May 2021"
					              },
					              { 
					                  title: "B.E. Software Engineering",
					                  company: "Beijing Institute of Technology - Beijing, China",
					                  description: '',
					                  time: "Sep 2014 - May 2018"
					              }
					            ].map((item,i) => (
					              <SectionContainer key = {i}>
										<div className="flex-justify-between">
											<span className="title1">{item.title}</span>
											<span className="title1">{item.time}</span>
										</div>
										<p className="title2">{item.company}</p>
										<div className="text-center">
											<p>{item.description}</p>
										</div>
					              </SectionContainer>
					            ))}
				            </div> 
				            <div className="col-xl-2 col-md-2 col-xs-12 col-12"></div>
				            <div className="col-xl-2 col-md-2 col-xs-12 col-12">
								<SectionTitle>Skills</SectionTitle>
								{
					              [{ 
					                  title: "Design",
					                  contents: ["Product Design",
												"Interaction Design",
												"Visual Design",
												"Design Systems",
												"Brand Design",
												"Motion Graphics",
												"Photography",
												"Videography",
												"Illustration"]
					              },
					              { 
					                  title: "User Experience",
					                  contents: [
					                  "Heuristic Evaluation",
										"Survey Design",
										"User Interviews",
										"Wireframing",
										"Testing",
										"Prototyping",
										"User Flow"]
					              }
					            ].map((item,i) => (
					              <SectionContainer key = {i}>
										<div className="flex-justify-between">
											<span className="title1">{item.title}</span>
										</div>
										<Contents 
								        	contents = {item.contents} 
								        />
										
										
					              </SectionContainer>
					            ))}
					        </div>
					         <div className="col-xl-2 col-md-2 col-xs-12 col-12">
								<SectionTitle style={{opacity: "0"}}> .</SectionTitle>
								{
					              [
					              { 
					                  title: "Tools",
					                  contents: [
					                  "Adobe Creative Suite",
										"Figma | Sketch Principle | InVision",
										"Final Cut Pro"]
					              },
					              { 
					              	title: "Web Development",
					                contents: [
					                  "HTML",
										"CSS | SASS",
										"JavaScript | ES6",
										"Bootstrap | jQuery",
										"React.js | Redux",
										"D3.js",
										"Node.js | Express | socket.io PHP | SQL | NoSQL",
										"MySQL | MongoDB",
										"Git | Github"
										]
					              }
					            ].map((item,i) => (
					              <SectionContainer key = {i}>
										<div className="flex-justify-between">
											<span className="title1">{item.title}</span>
										</div>
										<Contents 
								        	contents = {item.contents} 
								        />
										
										
					              </SectionContainer>
					            ))}
					        </div>
			            </div>
					</div>    	
				</div>
		    </main>
	    	
	    )
	}
}
export default About;