import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Boxes from './Boxes';
import People from './People';

const Pagina = styled.div`
	height: 100vh;
`;

const Titulo = styled.h1`
	position: absolute;
	padding-top: 20vh;
	padding-left: 50vw;
	font-size: 4em;
	width: 40vw;
	text-align: center;
`;

const shake = keyframes`
  0% { transform: rotate(-3deg);
  }
  50% { transform: rotate(3deg);
  }
  100% { transform: rotate(-3deg); 
  }
`;

const Dibujo = styled.div`
	margin: 10vh 10vw;
	position: absolute;
	width: 60vh;
	height: 80vh;
`;

const nubeIdea = 7;
const x = 20;
const y = 43;

const apear = keyframes`
	0% { opacity: 0; }
	20% {opacity: 0; }
	30% {opacity: 1; }
	45% {opacity: 1; }
	60% {opacity: 0; }
	0% {opacity: 0; }
`;

const Idea = styled.div`
	opacity: 0;
	animation: ${apear} 3s linear infinite;
`;

const Foco = styled.img`
	animation: ${shake} 1s linear infinite;
	position: absolute;
	height: ${nubeIdea*2}vh;
	margin-top: ${x-nubeIdea*1}vh;
	margin-left: ${y-nubeIdea*1}vh;
`;

const Nube = styled.img`
	position: absolute;
	height: ${nubeIdea*6}vh;
	margin-top: ${x-nubeIdea*2.5}vh;
	margin-left: ${y-nubeIdea*3}vh;
`;

const fromLeft = keyframes`
	0% { margin-left: -30vw; }
	20% {margin-left: -10vh }
	70% {margin-left: -10vh;
		opacity: 1;}
	100% {margin-left: 50vw;
		opacity: 0;}
`;

const Persona = styled.img`
	animation: ${fromLeft} 3s ease-out infinite;
	position: absolute;
	height: 40vh;
	padding-top: 35vh;
	margin-left: -10vh;
`;

const build = keyframes`
  0% {
		height: 0;
  }
  50% { 
		height: 0;
  transform: skew(10deg);
  }
  55% {
  height: 40vh;
  }
  70% {
  opacity: 1;
  }
  100% { transform: skew(-10deg); 
  opacity: 0;
  }
`;

const Web = styled.img`
	animation: ${build} 3s ease-out infinite;
	position: absolute;
	height: 40vh;
	padding-top: 50vh;
	margin-left: 70vh;
`;

const Phone = styled.img`
	position: absolute;
	height: 50vh;
	padding-top: -40vh;
	margin-left: -70vh;
`;

/*
while(true){
setTimeout(function(){
console.log('before');
},500);
setTimeout(function(){
	 console.log('after');
},500);
}
*/

export default class Segunda extends Component {
	render() {
		if(true){
			return (
				<div>
					<People/>
				<Boxes/>
			</div>
			);
		}
		return (
			<Pagina id="next">
				<Dibujo>
					<Idea>
						<Nube src="https://image.flaticon.com/icons/svg/522/522939.svg" alt="logo"/>
						<Foco src="https://image.flaticon.com/icons/svg/167/167745.svg" alt="logo"/>
					</Idea>
					<Persona src="https://image.flaticon.com/icons/svg/843/843278.svg" alt="logo"/>
				</Dibujo>
				<Web src="https://image.flaticon.com/icons/svg/186/186270.svg" alt="logo"/>
				<Phone src="https://image.flaticon.com/icons/svg/186/186239.svg" alt="logo"/>
				<Titulo>
					Te ayudamos a mostrarle tus ideas al mundo
				</Titulo>
			</Pagina>
		);
	}
}
