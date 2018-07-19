import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Primera from './pages/primera';
import Picture from './pages/primera/Picture';
import Segunda from './pages/segunda';
import Footer from './pages/Footer';

const Body = styled.div`
	font-family: 'Aldrich';
	height: 200vh;
	overflow: hidden;
`;

class App extends Component {
	render() {
		return (
			<Body>
				<Segunda/>
			</Body>
		);
	}
}

export default App;
