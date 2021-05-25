import styled,{keyframes} from 'styled-components';
export const H4 = styled.h4`
	opacity: 0.3;
	margin: 0 0 -100px 0;
	font-weight: 800;
    font-size: 10em;
    color: #fff;
    @media (max-width: 992px) {
	    font-size: 5em;
	    margin: 0 0 -50px 0;
	}
`;

/* The typing effect */
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
/* The typewriter cursor effect */
const blinkCaret = keyframes `
  from, to { border-color: transparent }
  50% { border-color: rgba(255,255,255,.5); }
`;
export const Typewriter = styled.div`
	margin-bottom: 2em;
	h4 {
		position: relative;
		
		font-size: 16px;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: .15em solid orange; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: auto; /* Gives that scrolling effect as the typing happens */
		animation: 
	    ${typing} 2.5s steps(40, end),
	    ${blinkCaret} .75s step-end infinite;
	}
`;

export const Skills = styled.div`
	margin-top: 5rem;
	background-color: rgba(255,255,255,0.15);
	padding: 20px;
	border-radius: 5px;
	h5 {
		position: relative;
		font-family: monospace;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		margin: auto; /* Gives that scrolling effect as the typing happens */
	}
`;
const circling = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const circlingReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;
export const Aboutme = styled.div`
	position: absolute;
	top: 58vh;
	right: -20%;
	width: 200px;
	height: 200px;
	img {
		position: absolute;
	    animation-duration: 12s;
	    animation-timing-function: linear;
	    animation-iteration-count: infinite;
	    width: 100%;
	    height: 100%;
	    cursor: pointer;
	&.outer {
		animation-name: ${circling};
	}
	&.inner {
		width: 60%;
	    height: 60%;
	    left: 20%;
	    top: 20%;
		animation-name: ${circlingReverse};
	}
	&.inner:hover,
	&.outer:hover {
		animation-play-state: paused;
		opacity: 0.5;
	}
`;