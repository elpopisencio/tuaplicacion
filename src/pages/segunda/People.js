import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Thinker from './Thinker';
import Idea from './Idea';
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
const rotate = keyframes`
  0% { transform: rotate(-90deg);
  }
  50% { transform: rotate(-92deg);
  }
  100% { transform: rotate(0deg); 
  }
`;
const shake = keyframes`
  0% { transform: rotate(1deg); }
  3% { transform: rotate(-1deg); }
  6% { transform: rotate(1deg); }
  9% { transform: rotate(-1deg); }
  12% { transform: rotate(1deg); }
  15% { transform: rotate(-1deg); }
  18% { transform: rotate(1deg); }
  21% { transform: rotate(-1deg); }
  24% { transform: rotate(1deg); }
  27% { transform: rotate(-1deg); }
  30% { transform: rotate(1deg); }
  33% { transform: rotate(-1deg); }
  50% { transform: rotate(181deg); }
  53% { transform: rotate(179deg); }
  56% { transform: rotate(181deg); }
  59% { transform: rotate(179deg); }
  62% { transform: rotate(181deg); }
  65% { transform: rotate(179deg); }
  68% { transform: rotate(181deg); }
  71% { transform: rotate(179deg); }
  74% { transform: rotate(181deg); }
  77% { transform: rotate(179deg); }
  80% { transform: rotate(181deg); }
  83% { transform: rotate(179deg); }
  100% { transform: rotate(361deg); }
`;

const Container = styled.div`
	animation: ${rotate} 2s linear 1, ${shake} 10s 2s ease-in-out infinite;;
	position: absolute;
	width: 40vh;
	height: 170vh;
`;

const Margins = styled.div`
	position: absolute;
	margin-top: 59.4vh;
	margin-left: 18.5vh;
`;

export default class People extends Component {
	render() {
		return (
			<Container>
				<Margins>
				<Stick length={50} withPin={true}/>
			</Margins>
				<First>
					<Thinker url="https://image.flaticon.com/icons/svg/843/843278.svg"/>
				</First>
				<Second>
					<Thinker url="https://image.flaticon.com/icons/svg/843/843297.svg"/>
				</Second>
			</Container>
		);
	}
}
