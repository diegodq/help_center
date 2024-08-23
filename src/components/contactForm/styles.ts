import styled from "styled-components";

export const Form = styled.form`
  width: 580px;
  position: relative;

  @media (max-width: 625px) {
    width: 97%;
  }
`;

export const Span = styled.span`
  &.acceptAgreement {
    display: block;
    font: 1rem bahnschrift, sans-serif;
  }

  &.radioButton {
    
  }

  &.readWarning {
    font: 1rem bahnschrift, sans-serif;
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
    font-family: bahnschrift;
    font-size: 1rem;

    @media (max-width: 625px) {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }

  ${({ type }) =>
    type === 'text' &&`
      width: 100%;
      height: 34px;
      border: 2px solid grey;

      @media (max-width: 625px) {
        width: 100%;
      }
    `}

  ${({type}) => 
    type === 'tel' && `
      width: 100%;
      height: 34px;
      border: 2px solid grey;

      @media (max-width: 625px) {
        width: 100%;
      }
    `}

  ${({type}) => 
    type === 'email' && `
      width: 99%;
      height: 34px;
      border: 2px solid grey;
    `}
`;

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  width: 99%;
  height: 100px;
  border: 2px solid grey;
  margin-top: 20px;
`;

export const Select = styled.select`
  border: 2px solid grey;
  width: 100%;
  height: 34px;
  appearance: none;
  font-family: bahnschrift;
  outline: none;
`;

export const Option = styled.option`
  font-family: bahnschrift;
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

  &.separator {
    width: 48%;
    margin-bottom: 20px;

    @media (max-width: 625px) {
      width: 99%;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: bahnschrift;
  font-size: .9rem;
  margin-top: 6px;
  display: none;

  &.showMessageError {
    display: block;
  }
`;