import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Thinker from './Thinker';
import Idea from './Idea';
import Stick from './Stick';
import Box from './Box';
import App from './App';
import WebApp from './WebApp';

const First = styled.div`
	position: absolute;
`;
const Second = styled.div`
	position: absolute;
	margin-top: 170vh;
	margin-left: 45vh;
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
  0% { transform: rotate(1deg);
  }
  5% { transform: rotate(-1deg);
  }
  10% { transform: rotate(1deg); 
  }
  15% { transform: rotate(-1deg);
  }
  20% { transform: rotate(1deg); 
  }
  25% { transform: rotate(-1deg);
  }
  50% { transform: rotate(181deg);
  }
  55% { transform: rotate(179deg);
  }
  60% { transform: rotate(181deg); 
  }
  65% { transform: rotate(179deg);
  }
  70% { transform: rotate(181deg); 
  }
  75% { transform: rotate(179deg);
  }
  100% { transform: rotate(361deg);
  }
`;

const Container = styled.div`
	animation: ${rotate} 2s linear 1, ${shake} 10s 2s ease-in-out infinite;;
	position: absolute;
	width: 45vh;
	height: 170vh;
	margin-left: 50vw;
`;

const Margins = styled.div`
	position: absolute;
	margin-top: 59.4vh;
	margin-left: 21vh;
`;

export default class People extends Component {
	render() {
		return (
			<Container>
				<Margins>
				<Stick length={50} withPin={true}/>
			</Margins>
				<First>
					<Box App={WebApp}/>
				</First>
				<Second>
					<Box App={App}/>
				</Second>
			</Container>
		);
	}
}
