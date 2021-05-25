import React from 'react';
import {
  Link
} from "react-router-dom";
import styles from './ProjectSection.css'
const ProjectSection = (props) => {
	// console.log(props.backgroundColor);
	return (
	<React.Fragment>

	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		<h2 className="project-index">0{props.index+1}</h2>
		<Link to={props.link}>
			<div className="pf-box"  style={{backgroundColor: props.backgroundColor}}>
				
				<img className="col-12" style={{width: props.size}} src={props.img} alt="" />
				<img className="col-12" style={{height: '100%', width: 'auto'}} src={props.img2} alt="" />
			</div>
		</Link>
	

	
		<div className="pf-intro flex-justify-between">
			<h3 className="">{props.title}</h3>
			<p className="">{props.description}</p>
		</div>
		{/**	
		<div className="pf-tag">
			{
				props.label.map((tag,i )=> (
					<span key={i} className="tag">{tag}</span>
				))
			}
		</div>
		**/}
	</div>
	{/**	
	<div className="project-box  project-box2  col-xl-6 col-md-6 col-xs-12 col-12">
		<div className="pf-intro">
			<h1>{props.title}</h1>
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
	**/}
	
	</React.Fragment>
)}
export default ProjectSection;