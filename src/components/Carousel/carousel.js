import "./carousel.css"
import React, { useState, useEffect} from 'react';
import Placeholder from './../../assets/img/wyndham/Placeholder.png';

const Checkbox = ({checked}) => (
  <div>
      <input type="checkbox" checked={checked} />
  </div>
);

const UncontrolledExample = (props) => {
	const [isSubscribed, setIsSubscribed] = useState(true);
	const handleChange = () => {
    	setIsSubscribed(current => !current);
  	};
    return (
    // <div className="carousel">
	    <div className="carousel-inner">
	        {/*<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" 
	        	defaultChecked={true}
	          	value={isSubscribed}
	          	onChange={handleChange}/>
	        <div className="carousel-item">
	            <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without"/>
	        </div>
	        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
	        <div className="carousel-item">
	            <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"/>
	        </div>
	        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
	        <div className="carousel-item">
	            <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"/>
	        </div>*/}
	        {props.controls.map((item,index) => { 
	        	if(index==0) return (
	        	<React.Fragment>

	        		<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" 
		        	defaultChecked={true}
		          	value={isSubscribed}
		          	onChange={handleChange}/>
			        <img className="carousel-item widthfixed" src={item.src}/>
		        </React.Fragment>
	        	)      	
	        	return (
	        	<React.Fragment>
	        		<input className="carousel-open" type="radio" id={`carousel-${index+1}`} name="carousel" aria-hidden="true" hidden=""/>
			        <img className="carousel-item widthfixed" src={item.src}/>
			       
			    </React.Fragment>
			    )
   			}
   			)}
   			{props.controls.map((item,index) => (
	        	<React.Fragment>
			        <label for={index==0?`carousel-${props.controls.length}`:`carousel-${index}`} className={`carousel-control prev control-${index+1}`}>◀︎</label>
	       			<label for={index+1==props.controls.length?"carousel-1":`carousel-${index+2}`} className={`carousel-control next control-${index+1}`}>▶︎</label>
			    </React.Fragment>
   			))}

	        {/*<label for="carousel-3" className="carousel-control prev control-1">◀︎</label>
	        <label for="carousel-2" className="carousel-control next control-1">▶︎</label>
	        <label for="carousel-1" className="carousel-control prev control-2">◀︎</label>
	        <label for="carousel-3" className="carousel-control next control-2">▶︎</label>
	        <label for="carousel-2" className="carousel-control prev control-3">◀︎</label>
	        <label for="carousel-1" className="carousel-control next control-3">▶︎</label>*/}
	        <ol className="carousel-indicators">
		        {props.controls.map((item,index) => (
		        	<React.Fragment>
				        <li>
			                <label for={`carousel-${index+1}`} className="carousel-bullet">•</label>
			            </li>
				    </React.Fragment>
	   			))}
	           {/* <li>
	                <label for="carousel-1" className="carousel-bullet">•</label>
	            </li>
	            <li>
	                <label for="carousel-2" className="carousel-bullet">•</label>
	            </li>
	            <li>
	                <label for="carousel-3" className="carousel-bullet">•</label>
	            </li>*/}
	        </ol>
	    </div>
	// </div>
  )
};


export default UncontrolledExample;