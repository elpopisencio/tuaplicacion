
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Body = styled.div`
	padding: 10vh;
	height: 1em;
	background-color: #606060;
	text-align: center;
	font-size: 1em;
	color: #f3f3f3;
`;
 
const Link = styled.a`
	text-decoration: none;
	color: white;
	margin: 1em;
`;

export default class Footer extends Component {
	render() {
		return (
			<Body>
					Icons made by 
					<Link href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">
						Dimitry Miroliubov
					</Link>
					from 
					<Link href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</Link>
					is licensed by 
					<Link href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">
						CC 3.0 BY
					</Link>
			</Body>
		);
	}
}
