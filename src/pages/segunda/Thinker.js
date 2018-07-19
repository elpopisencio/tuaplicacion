import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Idea from './Idea'

const Person = styled.img`
	position: absolute;
	height: 40vh;
	margin-top: 26vh;
`;

const Container = styled.div`
	position: absolute;
	height: 66vh;
	width: 40vh;
`;

const Margins = styled.div`
	position: absolute;
	margin-left: 10vh;
	margin-top: 10vh;
`;

export default function Thinker({ url }){
	return (
		<Container>
			<Margins>
				<Idea/>
			</Margins>
			<Person src={url} alt="logo"/>
		</Container>
	);
}
