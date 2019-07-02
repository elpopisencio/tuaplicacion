
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 30vh;
	margin-left: 10vw;
	position: absolute;
	height: 40vh;
	width: 57vh;
	padding: 5vh;
	font-size: 3em;
	text-align: center;
`;

export default class Picture extends Component {
	render() {
		return (
				<Container>
					<p>¿Necesitas una aplicacion para despegar?</p>
			</Container>
		);
	}
}
