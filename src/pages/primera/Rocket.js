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
  0% { transform: rotate(-45deg);
  }
  50% { transform: rotate(-49deg);
  }
  100% { transform: rotate(-45deg); 
  }
`;

const Image = styled.img`
margin-top: -23vh;
    margin-left: -9.5vmin;
	width: 25vmin;
	transform: rotate(45deg);
	z-index: -1;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(-90deg);
  }
  50% { transform: rotate(-90deg);
  }
  100% { transform: rotate(-45deg); 
  }
`;

const Container = styled.div`
animation: ${rotate} 3s ease-out 1, ${shake} 1.5s 3s ease-in-out infinite;
	position: absolute;
	width: 1vh;
	height: 100vh;
	transform: rotate(-45deg); 
	background-image: url(http://www.clker.com/cliparts/1/6/2/0/11949852831754976415texturelegno.svg.med.png);
	border: 1px solid #b4825f;
    margin-top: 30vh;
    margin-left: 90vw;
`;

const Stick = styled.div`
	position: absolute;
	transform: rotate(-90deg);
`;

const Pin = styled.div`
	margin-top: 45vh;
	margin-left: -1vh;
	height: 3vh;
	width: 3vh;
	background-color: #f04d4e;
	border-radius: 2vh;
`;

export default class Rocket extends Component {
	render() {
		return (
			<Container>
					<Image src={rocket} alt="logo" />
					<Pin/>
			</Container>
		);
	}
}
