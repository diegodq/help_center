import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, .5);
	display: none;
`;

export const ModalContent = styled.div`
	padding: 13px;
	width: 320px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 0 5px black;
`;

export const Text = styled.p`
	font: 1rem bahnschrift, sans-serif;
	text-align: center;
	padding: 15px 0;
`;

export const Controls = styled.div`
	display: flex;
	justify-content: center;
`;

export const AcceptButton = styled.button`
	border: 0;
	background-color: #135E96;
	color: white;
	font: .9rem bahnschrift, sans-serif;
	cursor: pointer;
	padding: 7px 20px;
	border-radius: 4px;
	margin-right: 6px;
`;

export const CancelButton = styled.button`
	border: 0;
	background-color: #e04c31;
	color: white;
	font: .9rem bahnschrift, sans-serif;
	cursor: pointer;
	padding: 7px 20px;
	border-radius: 4px;
`;