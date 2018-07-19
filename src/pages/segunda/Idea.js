import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Thinker from './Thinker';
import Stick from './Stick';

const apear = keyframes`
  0% { margin-top: 20vh;
  }
  1% { margin-top: -10vh;
  }
  23% { margin-top: -10vh;
  }
  24% { margin-top: -13vh;
  }
  25% { margin-top: 20vh;
  }
  50% { margin-top: 20vh;
  }
  51% { margin-top: -10vh;
  }
  73% { margin-top: -10vh;
  }
  74% { margin-top: -13vh;
  }
  75% { margin-top: 20vh;
  }
  100% { margin-top: 20vh;
  }
`;

const Image = styled.img`
	position: absolute;
	height: 20vh;
`;

const Container = styled.div`
	animation: ${apear} 10s 2s ease-in-out infinite;
	position: absolute;
	width: 20vh;
	height: 20vh;
	margin-top: 20vh;
`;

const Margins = styled.div`
	position: absolute;
	margin-left: 8.3vh;
	margin-top: 15vh;
`;

export default class Idea extends Component {
	render() {
		return (
			<Container>
				<Margins>
				<Stick length={20}/>
			</Margins>
				<Image src="https://image.flaticon.com/icons/svg/167/167745.svg" alt="logo"/>
			</Container>
		);
	}
}
