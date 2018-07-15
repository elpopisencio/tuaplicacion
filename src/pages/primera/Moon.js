
import React, { Component } from 'react';
import moon from'../../icons/moon.svg';
import styled, { keyframes } from 'styled-components';

const Moon = styled.img`
	 -webkit-transform: scaleX(-1);
	 transform: scaleX(-1);
	margin-left: 25vh;
	margin-top: 5vh;
	height: 20vh;
	position: absolute;
	@media all and (orientation: portrait) {
		margin-left: 50vw;
		margin-top: 2vh;
		width: 20vw;
  }
`;

const Band = styled.div`
	margin-top: 12vh;
	margin-left: 36.5vh;
	width: 5vh;
	height: 16vh;
	background-color: brown;
	opacity: 0.1;
	position: absolute;
	transform: rotate(-45deg);
	z-index: 2;
`;

const Container = styled.div`
	margin-left: 60vw;
	margin-top: 5vh;
	position: absolute;
`;

export default class Picture extends Component {
	render() {
		return (
				<Container>
					<Band/>
					<Moon src={moon} alt="logo"/>
			</Container>
		);
	}
}
