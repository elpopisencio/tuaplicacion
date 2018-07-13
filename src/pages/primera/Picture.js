import React, { Component } from 'react';
import startup from'../../icons/startup.svg';
import clouds from'../../icons/clouds.svg';
import moon from'../../icons/moon.svg';
import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  from { 
		margin-left: 0vw; 
		margin-top: 45vh;
	}
  to { 
	margin-left: 14vw;
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

const wind = keyframes`
  0% { transform: rotate(-1deg);
	margin-left: 0vw;
  }
  50% { transform: rotate(1deg);
	margin-left: 20vw;
  }
  100% { transform: rotate(-1deg); 
	margin-left: 0vw;
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

const RocketFly = styled.div`
	overflow: hidden;
	animation: ${fly} 3s ease-out 1;
	position: absolute;
	margin-left: 14vw;
	margin-top: 25vh;
	@media all and (orientation: portrait) {
		animation: ${flyV} 3s ease-out 1;
		margin-left: 28vw;
		margin-top: 15vh;
  }
`;

const Moon = styled.img`
	 -webkit-transform: scaleX(-1);
	 transform: scaleX(-1);
	margin-left: 25vw;
	margin-top: 5vh;
	width: 10vw;
	position: absolute;
	@media all and (orientation: portrait) {
		margin-left: 50vw;
		margin-top: 2vh;
		width: 20vw;
  }
`;
const Cloud = styled.img`
	animation: ${wind} 26s ease-in-out infinite;
	margin-top: 10vh;
	width: 17vw;
	position: absolute;
	@media all and (orientation: portrait) {
		width: 34vw;
  }
`;
const Rocket = styled.img`
	animation: ${shake} 1s linear infinite;
	width: 15vw;
	z-index: -1;
	@media all and (orientation: portrait) {
		width: 30vw;
  }
`;

const Pregunta = styled.div`
	margin-left: 20vmin;
	width: 70vmin;
	padding-top: 10vmin;
	position: relative;
	text-align: center;
`;

const Title = styled.h1`
	z-index: 2;
	color: #d7edf9;
	margin-top: 8vw;
	padding-top: 5vh;
	margin-bottom: 0px;
	font-size: 6vh;
	position: absolute;
	@media all and (orientation: portrait) {
		padding-top: 0;
		font-size: 8vw;
  }
`;

const Boton = styled.div`
	position: absolute;
	background-color: #f17116;
	 border-radius: 6vmin;
	 padding: 2vmin;
	 width: 30vmin;
	 font-weight: bold;
	 color: black;
	 text-align: center;
	 font-size: 5vmin;
	 margin-top: 80vh;
	 margin-left: calc(48vw - 15vmin);
`;

const Text = styled.div`
	 background-color: #4F9BD9;
	width: 45vw;
	height: 65vh;
	margin-top: 10vh;
	margin-left: 10vw;
	position: absolute;
	text-align: center;
	@media all and (orientation: portrait) {
		margin-top: 0;
		width: 80vw;
		margin-left: 10vw;
		height: 30vh;
  }
}
`;

const Pictur = styled.div`
	overflow: hidden;
	background-color: #4F9BD9;
	width: 100vw;
	height: 100vh;
	position: absolute;
	@media all and (max-aspect-ratio: 4/3) {
		width: 60vh;
		margin-left: calc((100vw - 60vh) / 2);
		height: 80vh;
		margin-top: 10vh;
  }
	@media all and (max-aspect-ratio: 3/4) {
		width: 100vw;
		height: 100vh;
		margin-top: 0;
		margin-left: 0;
  }
`;

export default class Picture extends Component {
	render() {
		return (
				<Pictur>
					<Moon src={moon} alt="logo"/>
					<Cloud src={clouds} alt="logo"/>
					<RocketFly>
						<Rocket src={startup} className="Startup" alt="logo" />
					</RocketFly>
				</Pictur>
		);
	}
}
