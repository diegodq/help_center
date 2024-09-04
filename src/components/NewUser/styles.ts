import styled from 'styled-components';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin-top: 10px;
`;

export const Title = styled.span`
	font: 1.3rem bahnschrift, sans-serif;
	margin-right: 10px;
`;

export const SubTitle = styled.span`
	font: .9rem bahnschrift, sans-serif;
	margin: 10px 0 10px 0;
	display: block;
`;

export const Form = styled.form`

`;

export const Bold = styled.b`
	color: red;
`;

export const WarnForm = styled.span`
	font: .9rem bahnschrift, sans-serif;
	margin-bottom: 8px;
	display: block;
	color: grey;
`;

export const Input = styled.input`
	display: block;
	border: 1px solid #8C8F94;

	&.password {
		outline: none;
		border: none;
		width: 100%;
		padding: 1px;
		font: 1rem bahnschrift, sans-serif;
		background-color: none;
		padding-right: 8px;
	}

	${({type}) => type === 'text' && `
		border: 1px solid #8C8F94;
		width: 300px;
		padding: 6px;
		outline: none;
		font: .9rem bahnschrift, sans-serif;
	`}

	${({type}) => type === 'email' && `
		border: 1px solid #8C8F94;
		width: 300px;
		padding: 6px;
		outline: none;
		font: .9rem bahnschrift, sans-serif;
	`}

	${({type}) => type === 'checkbox' && `
		display: inline;
	`}

	${({type}) => type === 'password' && `
		outline: none;
		border: none;
		width: 100%;
		font: 1rem bahnschrift, sans-serif;
		background-color: none;
		padding-right: 8px;
	`}
`;

export const Label = styled.label`
	margin: 18px 0 18px 0;
	font: .9rem bahnschrift, sans-serif;
	display: flex;
	align-items: center;
`;

export const Span = styled.span`
	margin-top: 3px;
`;

export const SelectPosition = styled.select`
	display: block;
	padding: 6px;
	font: .9rem bahnschrift, sans-serif;
	margin: 18px 0 18px 0;
`;

export const OptionPosition = styled.option`

`;

export const CreateUserButton = styled.button`
	color: white;
	background-color: #135E96;
	border: none;
	padding: 0 17px;
	height: 34px;
	cursor: pointer;
	margin-top: 15px;
	font: 1rem bahnschrift, sans-serif;
	border: none;
`;

export const Div = styled.div`
	&.generatePassword {

	}

	&.passwordEye {
		display: flex;
		border: 2px solid #8C8F94;
		width: 300px;
		padding: 5px;
		background-color: white;
	}

	&.statusStrength {
		width: 300px;
		background-color: grey;
		padding: 5px 0;
		text-align: center;
		font: 1rem bahnschrift, sans-serif;
		color: white;
	}
`;

export const DivInputValidation = styled.div`
	& + & {
		margin-top: 15px;
	}
`;

export const GeneratePasswordButton = styled.button`
	font: 1rem bahnschrift, sans-serif;
	border: none;
	background-color: #f7f7f7;
	border: 1px solid #c4dbff;
	padding: 8px 10px;
	font: .9rem bahnschrift, sans-serif;
	cursor: pointer;
	margin-bottom: 8px;

	&:hover {
		color: #6277e3;
	}
`;

export const OpenEye = styled(FiEye)`
	font-size: 1.5rem;
	color: #0A4B78;
	cursor: pointer;
`;

export const CloseEye = styled(FiEyeOff)`
	font-size: 1.5rem;
	color: #0A4B78;
	cursor: pointer;
`;