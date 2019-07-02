import React, { Component } from 'react';
import Rocketo from './Rocket';
import Clouds from './Clouds';
import Moon from './Moon';
import Signal from './Signal';
import styled from 'styled-components';

const Pagina = styled.div`
	 height: 100vh;
	 width: 100vw;
	 overflow: hidden;
	 position: relative;
	     background-color: cadetblue
`;

export default class Primera extends Component {
	render() {
			return (
				<Pagina>
					<Signal/>
					<Moon/>
				<Clouds/>
				<Rocketo/>
			</Pagina>
			)
	}
}
