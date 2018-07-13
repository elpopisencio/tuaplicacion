import React, { Component } from 'react';
import rocket from'../../icons/startup.svg';
import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  from { 
		margin-left: 0vh; 
		margin-top: 50vh;
	}
  to { 
	margin-left: 25vmin;
	margin-top: 25vh;
  }
`;

const flyV = keyframes`
  from { 
		margin-left: 10vw; 
		margin-top: 25vh;
	}
  to { 
		margin-left: 28vw;
		margin-top: 15vh;
  }
`;

const Fly = styled.div`
	overflow: hidden;
	animation: ${fly} 3s ease-out 1;
	position: absolute;
	margin-left: 25vmin;
	margin-top: 25vh;
  }
`;
const shake1 = keyframes`
  0% { transform: rotate(-44.7deg);
  }
  50% { transform: rotate(-45.3deg);
  }
  100% { transform: rotate(-44.7deg); 
  }
`;

const shake = keyframes`
  0% { 
	padding-left: 0;
	margin-top: 89vh;
  }
  50% { 
	padding-left: 3px;
	margin-top: calc(89vh + 2px);
  }
  100% { 
	padding-left: 0;
	margin-top: 89vh;
  }
`;

const Image = styled.img`
	margin-top: -15vh;
	margin-left: -12.5vmin;
	width: 25vmin;
	transform: rotate(-45deg);
	z-index: -1;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg);
  }
  50% { transform: rotate(0deg);
  }
  100% { transform: rotate(45deg); 
  }
`;

const Container = styled.div`
	animation: ${rotate} 3s ease-out 1, ${shake} 1s linear infinite;
	margin-left: 60vw;
	margin-top: 89vh;
	position: absolute;
	width: 150vh;
	height: 1vh;
	transform: rotate(45deg); 
	background-color: brown;

	@media all and (max-aspect-ratio: 8/7) {
		margin-left: 0;
		width: 100vw;
		background-color: red;
	}
`;

export default class Rocket extends Component {
	render() {
		return (
			<Container>
					<Image src={rocket} alt="logo" />
			</Container>
		);
	}
}
