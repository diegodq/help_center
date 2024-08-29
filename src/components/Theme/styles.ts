import styled from "styled-components";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;

	@media (max-width: 440px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const DivLight = styled.div`
	width: 200px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	border-radius: 5px;
	overflow: hidden;
	margin-right: 8px;
	position: relative;
	background-color: #ededed;
	box-shadow: 0 0 2px black;

	@media (max-width: 440px) {
		margin-right: 0;
		margin-bottom: 10px;
	}
`;

export const DivDark = styled.div`
	width: 200px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	background-color: #ededed;
	box-shadow: 0 0 2px black;
`;

export const LightIcon = styled(PiProjectorScreenChartDuotone)`
	font-size: 2rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -95%);
`;

export const DarkIcon = styled(PiProjectorScreenChartFill)`
	font-size: 2rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -95%);
`;

export const Div = styled.div`
	padding: 6px 0;

	&.footer {
		background-color: #F5F8FA;
	}
`;

export const Text = styled.span`
	font: 1.1rem bahnschrift, sans-serif;
`;

export const RadioLight = styled.input`

`;

export const RadioDark = styled.input`

`;