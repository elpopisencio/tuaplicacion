import React from 'react';
import styled from 'styled-components';
import box from '../../icons/box.svg';

const Image = styled.img`
	position: absolute;
	height: 45vh;
	margin-top: 21vh;
`;

const Container = styled.div`
	position: absolute;
	height: 66vh;
	width: 45vh;
`;

const Margins = styled.div`
	position: absolute;
	margin-left: 12vh;
	margin-top: 16vh;
`;

export default function Box({ App }){
	return (
		<Container>
			<Margins>
				<App/>
			</Margins>
			<Image src={box} alt="logo"/>
		</Container>
	);
}
