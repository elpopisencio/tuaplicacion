import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Stick from './Stick';

const apear = keyframes`
	0% { margin-top: 23vh; }
	20% { margin-top: 23vh; }
	21% { margin-top: 0; }
	33% { margin-top: 0; }
	34% { margin-top: -1vh; }
	35% { margin-top: 23vh; }
	70% { margin-top: 23vh; }
	71% { margin-top: 0; }
	83% { margin-top: 0; }
	84% { margin-top: -1vh; }
	85% { margin-top: 23vh; }
	100% { margin-top: 23vh; }
`;

const Image = styled.img`
	position: absolute;
	height: 20vh;
`;

const Container = styled.div`
	animation: ${apear} 10s 2s ease-in-out infinite;
	position: absolute;
	width: 20vh;
	height: 36vh;
	margin-top: 23vh;
`;

const Margins = styled.div`
	position: absolute;
	margin-left: 8.3vh;
	margin-top: 15vh;
`;

const Everything = styled.div`
	position: absolute;
//	border: 2px solid red;
	height: 66vh;
	width: 20vh;
`;

export default class WebApp extends Component {
	render() {
		return (
			<Everything>
			<Container>
				<Margins>
					<Stick length={10}/>
				</Margins>
				<Image src="https://image.flaticon.com/icons/svg/186/186270.svg" alt="logo"/>
			</Container>
		</Everything>
		);
	}
}
