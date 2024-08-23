import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #F5F8FA;
  height: 100vh;
  position: relative;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`

  ${({type}) =>
    type === 'email' && `
      font: 1.1rem bahnschrift, sans-serif;
      border: none;
      background-color: #f5f5f5;
      outline: none;
    `}

  ${({type}) => 
    type === 'password' && `
      font: 1.1rem bahnschrift, sans-serif;
      border: none;
      background-color: #f5f5f5;
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
`;

export const Div = styled.div`
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

export const InputEmail = styled.div`
    margin-bottom: 15px;
    width: 81%;
    height: 45px;
    border: none;
    display: flex;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: #f5f5f5;
`;

export const InputPassword = styled.div`
    margin-bottom: 15px;
    width: 81%;
    height: 45px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: #f5f5f5;
`;

export const LinkForgotPassword = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  font: 1.1rem bahnschrift, sans-serif;
  color: #3D194F;

  &:hover {
    text-decoration: underline;
  }
`;