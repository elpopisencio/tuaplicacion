import React from 'react';
import styled from 'styled-components';

export default function Stick({ length, withPin, Margins }){
	const Stick = styled.div`
	position: absolute;
	margin-left: 1vh;
	width: 1vh;
	height: ${length}vh;
	background-image: url(http://www.clker.com/cliparts/1/6/2/0/11949852831754976415texturelegno.svg.med.png);
	border: 2px solid #b4825f;
	border-radius: 1vh;
	`;
	const Pin = styled.div`
	margin-top: ${(length / 2) - 1}vh;
	height: calc(3vh + 1px);
	width: calc(3vh + 1px);
	background-color: #f04d4e;
	border-radius: 2vh;
	position: absolute;
	border: 2px solid red;
	`;
	const Container = styled.div`
		position: absolute;
		width: 3vh;
		height: ${length}vh;
	`;
	if(withPin){
	return (
		<Container>
			<Stick/>
			<Pin/>
		</Container>
	);
	}
	return (
		<Container>
			<Stick/>
		</Container>
	);
}
