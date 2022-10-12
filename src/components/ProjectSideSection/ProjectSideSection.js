import React from 'react';
import {
  Link
} from "react-router-dom";
const ProjectSideSection = (props) => {
	return (
	<React.Fragment>

	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		<h3 className="">{props.title}</h3>
		<p className="">{props.category}</p>
	</div>

	<div className="project-box col-xl-6 col-md-6 col-xs-12 col-12">
		<p className="">{props.description}</p>
	</div>

	<div className="col-xl-12 col-md-12 col-xs-12 col-12">
		<img className="col-12" style={{height: 'auto', width: '100%'}} src={props.img} alt="" />
	</div>
	</React.Fragment>
)}
export default ProjectSideSection;