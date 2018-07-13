import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Primera from './pages/primera';
import Picture from './pages/primera/Picture';
import Segunda from './pages/segunda';
import Footer from './pages/Footer';

const Body = styled.div`
	font-family: 'Aldrich';
`;

class App extends Component {
	render() {
		return (
			<Body>
				<Primera/>
			</Body>
		);
	}
}

export default App;
