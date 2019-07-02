import React, { Component } from 'react';
import styled from 'styled-components';
import Primera from './pages/primera';
import Segunda from './pages/segunda';
import Footer from './pages/Footer';

const Body = styled.div`
	font-family: 'Aldrich';
	overflow: hidden;
`;

class App extends Component {
	render() {
		return (
			<Body>
				<Primera/>
				<Segunda/>
			</Body>
		);
	}
}

export default App;
