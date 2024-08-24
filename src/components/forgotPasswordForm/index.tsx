import React, { ReactElement } from "react"
import {Form, Input, ImgLogo, Div, InputEmail, Paragraph, BoldStyle } from './styles';
const Logo = '/images/logo2.svg';

const ForgotPasswordForm: React.FC = (): ReactElement => {
  return (
    <Div>
      <ImgLogo src={Logo} height={180}/>
      <Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
      <Form action="" method="POST">
        <InputEmail>
          <Input type="email" name="email" id="email" placeholder="E-mail * "/>
        </InputEmail>

        <Input type="submit" value="Enviar" />
      </Form>
  </Div>
  )
}

export default ForgotPasswordForm;