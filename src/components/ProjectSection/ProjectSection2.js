import React from 'react';
import {
  Link
} from "react-router-dom";
import styles from './ProjectSection.css'
import styled from 'styled-components';
const ProjectContainer = styled.div`
	position: relative;
	height: 100%;
	padding: 0;
	margin: 0;
	border-radius: 0;
	overflow: hidden;
	
`;
const ImgContainer = styled.div`
	img:first-child {
	    opacity: 0;
	}
	img:last-child {
	    opacity: 1;
	}
	&:hover img:first-child {
	    opacity: 1;

	}
	&:hover img:last-child {
	    opacity: 0;
	}
	&::before {
	    content: '';
	    display: block;
	    padding-top: 60%;
	}
	a {
	    position: absolute;
	}
	img{
	    position: absolute;
	    margin: auto;
	    width: 100%;

	}
	img:hover {
	}
	
`;
const ImgDescription = styled.div`
	padding:  8px 10%;
`;
const H2 = styled.h2`
	z-index: 100;
	opacity: 0.08;
    position: absolute;
    top: -20px;
    left: -50px;
    margin: -50px;
    font-size: 10em;
    color: var(--color-black);
    font-weight: 800;
    &:nth-child(2n+1) h2 {
	    left: 0;
	}
	&:nth-child(2n) h2 {
	    right: 0;
	}
`;
const ProjectSection = (props) => {
	// console.log(props.backgroundColor);
	return (
	<React.Fragment>
	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		{/*<H2>0{props.index+1}</H2>*/}
		<h3>{props.title}</h3>

	</div>

	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		<p>{props.description}</p>
		<div className="pf-tag">
			{
				props.label.map((tag,i )=> (
					<span key={i} className="tag">{tag}</span>
				))
			}
		</div>
	</div>
	<ProjectContainer className="col-xl-12 col-md-12 col-xs-12 col-12" style={{backgroundColor: props.backgroundColor}}>

		
		<Link to={props.link}>
			<ImgContainer className="pf-box">
				<img className="col-12" style={{width: props.size}} src={props.img} alt="" />
				<img className="col-12" style={{height: '100%', width: 'auto'}} src={props.img2} alt="" />
			</ImgContainer>
		</Link>
		{/*<ImgDescription className="pf-intro flex-justify-between">
			<h3 style={{color: props.fontColor}}>{props.title}</h3>
			<p   style={{color: props.fontColor}}>{props.description}</p>
		</ImgDescription>*/}

	
		
	</ProjectContainer>
	
	
	</React.Fragment>
)}
export default ProjectSection;