import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Thinker from './Thinker';
import Stick from './Stick';
import box from '../../icons/box.svg';

const apear = keyframes`
	0% { margin-top: 23vh; }
	1% { margin-top: 0; }
	23% { margin-top: 0; }
	24% { margin-top: -3vh; }
	25% { margin-top: 23vh; }
	50% { margin-top: 23vh; }
	51% { margin-top: 0; }
	73% { margin-top: 0; }
	74% { margin-top: -3vh; }
	75% { margin-top: 23vh; }
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
