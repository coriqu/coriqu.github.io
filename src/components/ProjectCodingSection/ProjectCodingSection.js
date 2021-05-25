import React from 'react';
import video from './../../assets/img/beerest/concept.gif'
import {
  Link
} from "react-router-dom";
// import classes from './BuildControl.css';
// import beerest_logo from './../../assets/img/beerest/logo.svg';
const ProjectCodingSection = (props) => {
	console.log(props.backgroundColor);
	return (
	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		<a href={props.link} rel="noreferrer" target="_blank">
			<div className="pf-box"  style={{backgroundColor: props.backgroundColor}}>
				<img className="col-12" style={{width: props.size}} src={props.img2} alt="" />
				<img className="col-12" style={{width: props.size}} src={props.img} alt="" />
			</div>
		</a>
		<div className="pf-intro">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
		<div className="pf-tag">
			{
				props.label.map((tag,i )=> (
					<span key={i} className="tag">{tag}</span>
				))
			}
		</div>
	</div>
)}
export default ProjectCodingSection;