import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Thinker from './Thinker';
import Stick from './Stick';

const First = styled.div`
	position: absolute;
`;
const Second = styled.div`
	position: absolute;
	margin-top: 170vh;
	margin-left: 40vh;
	transform: rotate(180deg);
`;
const shake = keyframes`
  0% { transform: rotate(1deg); }
  6% { transform: rotate(-1deg); }
  12% { transform: rotate(1deg); }
  18% { transform: rotate(-1deg); }
  24% { transform: rotate(1deg); }
  30% { transform: rotate(-1deg); }
  36% { transform: rotate(1deg); }
  42% { transform: rotate(-1deg); }
  48% { transform: rotate(1deg); }
  54% { transform: rotate(-1deg); }
  60% { transform: rotate(1deg); }
  66% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`;

const rotate = keyframes`
  0% { transform: rotate(-90deg); }
  1% { transform: rotate(-90deg); }
  2% { transform: rotate(-93deg); }
  9% { transform: rotate(0deg); }
  33% { transform: rotate(0deg); }
  42% { transform: rotate(93deg); }
  43% { transform: rotate(90deg); }
  51% { transform: rotate(90deg); }
  52% { transform: rotate(87deg); }
  59% { transform: rotate(180deg); }
  83% { transform: rotate(180deg); }
  91% { transform: rotate(273deg); }
  92% { transform: rotate(270deg); }
  100% { transform: rotate(270deg); }
`;

const Shaker = styled.div`
	//animation: ${shake} 5s 2s ease-in-out infinite;;
	position: absolute;
	width: 40vh;
	height: 170vh;
`;

const Rotater = styled.div`
	animation: ${rotate} 10s 2s ease-in-out infinite;;
	position: absolute;
	width: 40vh;
	height: 170vh;
	transform: rotate(-90deg);
	margin-left: 15vw;
`;

const Margins = styled.div`
	position: absolute;
	margin-top: 59.4vh;
	margin-left: 18.5vh;
`;

export default class People extends Component {
	render() {
		return (
			<Rotater>
			<Shaker>
				<Margins>
				<Stick length={50} withPin={true}/>
			</Margins>
				<First>
					<Thinker url="https://image.flaticon.com/icons/svg/843/843273.svg"/>
				</First>
				<Second>
					<Thinker url="https://image.flaticon.com/icons/svg/843/843297.svg"/>
				</Second>
			</Shaker>
		</Rotater>
		);
	}
}
