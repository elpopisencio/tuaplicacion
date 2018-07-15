
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Signal = styled.img`
margin-left: -5vh;
	margin-top: 5vh;
	height: 80vh;
	position: absolute;
	@media all and (orientation: portrait) {
		margin-left: 50vw;
		margin-top: 2vh;
		width: 20vw;
  }
`;

const fall = keyframes`
	0% {margin-top: -100vh;}
	20% {margin-top: 7vh;}
	40% {margin-top: 3vh;}
	60% {margin-top: 6vh;}
	80% {margin-top: 4vh;}
	100% {
		margin-top: 5vh;
	}
`;

const Container = styled.div`
	animation: ${fall} 0.5s linear;
	margin-top: 5vh;
	margin-left: 5vh;
	position: absolute;
	height: 50vh;
	width: 67vh;
	background-color: #e4f2f9;
	border-radius: 6vh;
	border:1vh solid blue;
`;

export default class Picture extends Component {
	render() {
		return (
				<Container>
			</Container>
		);
	}
}
