import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
    background-color: #F5F8FA;
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
	transform: translate(-50%, -162%);
`;

export const Div = styled.div`

`;

export const InputEmail = styled.div`
  margin-bottom: 15px;
  width: 81%;
  height: 45px;
  display: flex;
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

export const LoginLink = styled(Link)`
	text-decoration: none;
  margin-top: 20px;
  font: 1.1rem bahnschrift, sans-serif;
  color: #3D194F;
	display: flex;
	align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginBackIcon = styled(MdKeyboardArrowLeft)`

`;