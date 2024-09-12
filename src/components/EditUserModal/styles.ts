import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { IoReload } from "react-icons/io5";

export const Container =  styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, .5);
	display: none;

	&.showModal {
		display: block;
	}
`;

export const Form = styled.form`
	padding: 20px;
	width: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #F5F8FA;
	box-shadow: 0 0 5px black;
	border-radius: 5px;
`;

export const Div = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	font-size: 1.3rem;
`;

export const Title = styled.h4`
	font: 1.2rem bahnschrift, sans-serif;
	margin-bottom: 8px;
`;

export const CloseModal = styled(IoCloseSharp)`

`

export const Label = styled.label`
	display: block;

	& + & {
		margin-top: 10px;
	}
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	outline: none;
	border: 1px solid #4F4F4F;
	padding: 7px 0 7px 3px;
	font: 1rem bahnschrift, sans-serif;
`;

export const Checkbox = styled.input`

`;

export const P = styled.span`
	font: .9rem bahnschrift, sans-serif;
`;

export const Error = styled.span`
	font: 1rem bahnschrift, sans-serif;
	color: red;
	display: none;
`;

export const Select = styled.select`
	display: block;
	outline: none;
	width: 90%;
	outline: none;
	border: 1px solid #4F4F4F;
	padding: 7px 0 7px 3px;
	font: 1rem bahnschrift, sans-serif;
`;

export const Option = styled.option`

`;

export const UpdateUserButton = styled.button`
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

export const Bold = styled.b`
	font: 1rem bahnschrift, sans-serif;
	color: red;
`;

export const WarnForm = styled.span`
	font: 1rem bahnschrift, sans-serif;
	margin-bottom: 8px;
	display: block;
	color: grey;
`;

export const LoadingUpdateUser = styled(IoReload)`
	font-size: 1.6rem;
	display: inline-block;
	color: #135E96;
	margin-top: 15px;
	margin-left: 6px;
	display: none;
`;

export const DivButtonLoad = styled.div`
	display: flex;
	align-items: center;
`;

export const DivCheckboxText = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
`;