import React, { Component } from 'react';
import clouds from'../../icons/clouds.svg';
import styled, { keyframes } from 'styled-components';

const wind = keyframes`
  0% { transform: rotate(-1deg);
	margin-left: 60vw;
  }
  50% { transform: rotate(1deg);
	margin-left: 80vw;
  }
  100% { transform: rotate(-1deg); 
	margin-left: 60vw;
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

const Cloud = styled.img`
	margin-top: -20vh;
	margin-left: -10vw;
	width: 17vw;
	position: absolute;
	@media all and (orientation: portrait) {
		width: 34vw;
  }
`;

const Container = styled.div`
	animation: ${wind} 26s ease-in-out infinite;
	position: absolute;
	width: 1vh;
	height: 100vh;
	background-image: url(http://www.clker.com/cliparts/1/6/2/0/11949852831754976415texturelegno.svg.med.png);
	margin-top: 40vh;
	margin-left: 15vw;
	border: 1px solid #b4825f;
`;

export default class Picture extends Component {
	render() {
		return (
			<Container>
					<Cloud src={clouds} alt="logo"/>
				</Container>
		);
	}
}
