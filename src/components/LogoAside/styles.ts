import styled from "styled-components";
import { BsPinAngleFill } from "react-icons/bs";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`;

export const Img = styled.img`

`;

export const Title = styled.span`
	font: 1rem bahnschrift, sans-serif;
	margin-top: -13px;
`;

export const BsPinAngleFillIcon = styled(BsPinAngleFill)`
	color: black;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	font-size: 1.2rem;
`;