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
const shake = keyframes`
  0% { transform: rotate(-0.3deg);
  }
  50% { transform: rotate(0.3deg);
  }
  100% { transform: rotate(-0.3deg); 
  }
`;

const Image = styled.img`
	animation: ${shake} 1s linear infinite;
	width: 25vmin;
	z-index: -1;
  }
`;

const Container = styled.div`
	overflow: hidden;
	margin-left: 50vw;
	position: absolute;
	width: 50vw;
	height: 100vh;
	background-color: orange;
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
				<Fly>
					<Image src={rocket} alt="logo" />
				</Fly>
			</Container>
		);
	}
}
