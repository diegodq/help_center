import styled from "styled-components";

export const Form = styled.form`
  width: 580px;

  @media (max-width: 625px) {
    width: 90%;
  }
`;

export const Span = styled.span`
  &.acceptAgreement {
    display: block;
    font: 1rem Arial, sans-serif;
  }

  &.radioButton {

  }

  &.readWarning {
    font: 1rem Arial, sans-serif;
  }
`;

export const Input = styled.input`
  outline: none;

  &.inputSubmit {
    background-color: #3D194F;
    color: white;
    border: none;
    padding: 12px 35px;
    margin-top: 20px;
    cursor: pointer;
  }

  ${({ type }) =>
    type === 'text' &&`
      width: 48%;
      height: 34px;
      border: 1px solid grey;

      @media (max-width: 625px) {
        width: 100%;
        margin-bottom: 20px;
      }
    `}

  ${({type}) => 
    type === 'tel' && `
      width: 48%;
      height: 34px;
      border: 1px solid grey;

      @media (max-width: 625px) {
        width: 100%;
      }
    `}

  ${({type}) => 
    type === 'email' && `
      width: 99%;
      height: 34px;
      margin-top: 20px;
    `}
`;

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  width: 99%;
  height: 100px;
  border: 1px solid grey;
  margin-top: 20px;
`;

export const Select = styled.select`
  border: 1px solid grey;
  width: 100%;
  height: 34px;
`;

export const Option = styled.option`

`;

export const Div = styled.div`
  &.emailPhone {
    display: flex;
    justify-content: space-between;

    @media (max-width: 625px) {
      flex-direction: column;
    }
  }

  &.agreement {
    margin-top: 20px;
  }

  &.divRadioWarning {
    margin-top: 20px;
  }
`;