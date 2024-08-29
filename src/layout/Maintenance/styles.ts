import styled from 'styled-components';

export const Container = styled.div`
	background-color: #F5F8FA;
  height: 100vh;
`;

export const Div = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
`;

export const DivText = styled.div`

`;

export const Title = styled.h3`
	font: bold 1.1rem bahnschrift, sans-serif;
	text-align: center;
`;

export const Paragraph = styled.p`
	font: 1.1rem bahnschrift, sans-serif;
	text-align: center;
`;