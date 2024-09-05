import styled from "styled-components";

export const Form = styled.form`
	margin-top: 15px;
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

export const AddCategoriesDiv = styled.div`

`;

export const TitleDivCategory = styled.h2`
	font: 1rem bahnschrift, sans-serif;
	margin-top: 15px;
`;

export const Div = styled.div`
	& + & {
		margin-top: 14px;
	}
`;

export const Text = styled.p`
	font: .9rem bahnschrift, sans-serif;
	margin-top: 8px;
`;

export const Input = styled.input`
	outline: none;
	height: 25px;
	font: .9rem bahnschrift, sans-serif;
	padding-left: 6px;

	${({type}) => type === 'text' && `
		width: 500px;
	`}


	${({type}) => type === 'submit' && `
		color: white;
		background-color: #135E96;
		border: none;
		padding: 0 17px;
		height: 34px;
		cursor: pointer;
		margin-top: 15px;
	`}
`;