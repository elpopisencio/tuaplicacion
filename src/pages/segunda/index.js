import React, { Component } from 'react';
import styled from 'styled-components';
import Boxes from './Boxes';
import People from './People';

const Pagina = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

const Margins = styled.div`
	margin-top: 30vh;
`;

export default class Segunda extends Component {
	render() {
		return (
			<Pagina>
				<Margins>
				<People/>
				<Boxes/>
			</Margins>
			</Pagina>
		);
	}
}
