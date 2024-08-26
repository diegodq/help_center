import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export const Form = styled.form`
	width: 500px;
	box-shadow: 0 0 2px black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 9px;
	background-color: white;

	@media (max-width: 530px) {
		width: 93%;
	}
`;

export const Input = styled.input`

	${({type}) =>
		type === 'email' && `
      font: 1rem bahnschrift, sans-serif;
      padding-left: 5px;
      border: none;
      background-color: #F5F8FA;
      outline: none;
    `}

	${({type}) =>
		type === 'password' && `
      font: 1rem bahnschrift, sans-serif;
      padding-left: 5px;
      border: none;
			background-color: #F5F8FA;
      outline: none;
    `}

	${({type}) =>
		type === 'submit' && `
      border: 2px solid #3D194F;
      padding: 10px 18px;
      font: 1.1rem bahnschrift, sans-serif;
      background-color: white;
      border-radius: 7px;
      cursor: pointer;
      width: 81%;

      &:hover {
        background-color: #3D194F;
        color: white;
        transition: .2s;
      }
    `}
`;

export const ImgLogo = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -170%);
`;

export const Div = styled.div`

`;

export const FaRegEyeSlashIcon = styled(FaRegEyeSlash)`
	color: #3D194F;
	font-size: 1.6rem;
	cursor: pointer;
	margin-right: 14px;
`;

export const FaRegEyeOpenIcon = styled(FaRegEye)`
	color: #3D194F;
	font-size: 1.6rem;
	cursor: pointer;
	margin-right: 14px;
`;

export const InputPassword = styled.div`
	margin-bottom: 15px;
	width: 81%;
	height: 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid grey;
	border-radius: 5px;
	background-color: #F5F8FA;
`;

export const Paragraph = styled.p`
	font: 1.1rem bahnschrift, sans-serif;
	color: grey;
	margin-bottom: 10px;
`;

export const BoldStyle = styled.b`
	color: red;
`;