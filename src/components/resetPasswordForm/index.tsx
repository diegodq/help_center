import React, { ReactElement } from 'react';
import {Form, Input, ImgLogo, Div, FaRegEyeSlashIcon, InputPassword,
  Paragraph, BoldStyle } from './styles';
const Logo = '/images/logo2.svg';

const ResetPasswordForm: React.FC = (): ReactElement => {
  return (
    <Div>
      <ImgLogo src={Logo} height={180}/>
      <Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
      <Form action="" method="POST">
        <InputPassword>
          <Input type="password" name="password" id="password" placeholder="Senha *" />
          <FaRegEyeSlashIcon />
        </InputPassword>

        <InputPassword>
          <Input type="password" name="checkPassword" id="checkPassword" placeholder="Confirmar de senha *" />
          <FaRegEyeSlashIcon />
        </InputPassword>

        <Input type="submit" value="Enviar" />
      </Form>
  </Div>
  )
}

export default ResetPasswordForm;