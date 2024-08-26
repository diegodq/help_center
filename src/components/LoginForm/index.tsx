import React, { ReactElement } from 'react';
import {Form, Input, ImgLogo, Div, FaRegEyeSlashIcon, InputPassword,
  LinkForgotPassword, InputEmail, Paragraph, BoldStyle } from './styles';
const Logo = '/images/logo2.svg';

const LoginForm: React.FC = (): ReactElement => {
  return (
    <Div>
      <ImgLogo src={Logo} height={180}/>

      <Form action='' method='POST'>
	      <Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
        <InputEmail>
          <Input type='email' name='email' id='email' placeholder='E-mail *' />
        </InputEmail>

        <InputPassword>
          <Input type='password' name='password' id='password' placeholder='Senha *' />
          <FaRegEyeSlashIcon />
        </InputPassword>

        <Input type='submit' value='Entrar' />
	      <LinkForgotPassword to='/forgot-password'>Esqueceu sua senha?</LinkForgotPassword>
      </Form>
    </Div>
  )
}

export default LoginForm;