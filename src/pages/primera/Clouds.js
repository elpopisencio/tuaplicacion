import React, { Component } from 'react';
import clouds from'../../icons/clouds.svg';
import styled, { keyframes } from 'styled-components';
import Stick from '../segunda/Stick';

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

const Cloud = styled.img`
	width: 35vh;
	position: absolute;
	@media all and (orientation: portrait) {
		width: 34vw;
  }
`;

const Container = styled.div`
	animation: ${wind} 26s ease-in-out infinite;
	position: absolute;
	width: 35vh;
	height: 100vh;
	margin-top: 20vh;
	margin-left: 5vw;
`;

const Margins = styled.div`
	position: absolute;
	margin-top: 20vh;
	margin-left: 15vh;
`;

export default class Picture extends Component {
	render() {
		return (
			<Container>
				<Margins>
					<Stick length={60}/>
				</Margins>
				<Cloud src={clouds} alt="logo"/>
			</Container>
		);
	}
}
