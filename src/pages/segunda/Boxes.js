import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Stick from './Stick';
import Box from './Box';
import App from './App';
import WebApp from './WebApp';

const First = styled.div`
	position: absolute;
`;
const Second = styled.div`
	position: absolute;
	margin-top: 190vh;
	margin-left: 45vh;
	transform: rotate(180deg);
`;

const shake = keyframes`
  0% { transform: rotate(-1deg); }
  10% { transform: rotate(1deg); }
  16% { transform: rotate(-1deg); }
  22% { transform: rotate(1deg); }
  28% { transform: rotate(-1deg); }
  34% { transform: rotate(1deg); }
  40% { transform: rotate(-1deg); }
  46% { transform: rotate(1deg); }
  52% { transform: rotate(-1deg); }
  58% { transform: rotate(1deg); }
  64% { transform: rotate(-1deg); }
  100% { transform: rotate(-1deg); }
`;

const rotate = keyframes`
  0% { transform: rotate(-90deg); }
  10% { transform: rotate(-90deg); }
  13% { transform: rotate(-93deg); }
  19% { transform: rotate(0deg); }
  33% { transform: rotate(0deg); }
  42% { transform: rotate(93deg); }
  43% { transform: rotate(90deg); }
  60% { transform: rotate(90deg); }
  63% { transform: rotate(87deg); }
  69% { transform: rotate(180deg); }
  83% { transform: rotate(180deg); }
  92% { transform: rotate(273deg); }
  93% { transform: rotate(270deg); }
  100% { transform: rotate(270deg); }
`;

const Shaker = styled.div`
	//animation: ${shake} 5s 2s ease-in-out infinite;;
	position: absolute;
	width: 45vh;
	height: 190vh;
	margin-left: 60vw;
`;
const Container = styled.div`
	animation: ${rotate} 10s 2s linear infinite;
	position: absolute;
	width: 45vh;
	height: 190vh;
	//margin-left: 50vw;
	transform: rotate(-90deg);
`;

const Margins = styled.div`
	position: absolute;
	margin-top: 59.4vh;
	margin-left: 21vh;
`;

export default class People extends Component {
	render() {
		return (
			<Shaker>
			<Container>
				<Margins>
				<Stick length={70} withPin={true}/>
			</Margins>
				<First>
					<Box App={WebApp}/>
				</First>
				<Second>
					<Box App={App}/>
				</Second>
			</Container>
		</Shaker>
		);
	}
}
