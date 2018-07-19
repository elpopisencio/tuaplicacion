
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
	margin-top: 30vh;
	margin-left: 10vw;
	position: absolute;
	height: 40vh;
	width: 57vh;
	padding: 5vh;
	font-size: 3em;
	text-align: center;
`;

export default class Picture extends Component {
	render() {
		return (
				<Container>
					<p>¿Tenes un negocio o idea que necesita una aplicacion para despegar?</p>
			</Container>
		);
	}
}
