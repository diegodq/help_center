import React, { ReactElement, useState, useRef, RefObject } from 'react';
import {Form, Input, ImgLogo, Div, OpenEyeIcon, CloseEyeIcon, InputPassword,
  LinkForgotPassword, InputEmail, Paragraph, BoldStyle } from './styles';
const Logo = '/images/logo2.svg';

type HandleTogglePassword = () => void;

const LoginForm: React.FC = (): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const inputPassword: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const handleTogglePassword: HandleTogglePassword = (): void => {
		setShowPassword((prevState: boolean): boolean => {
			const newState: boolean = !prevState;

			if(inputPassword.current)
				inputPassword.current.setAttribute('type', newState ? 'text' : 'password');

			return newState;
		});
	}

  return (
    <Div>
      <ImgLogo src={Logo} height={180}/>

      <Form action='' method='POST'>
	      <Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
        <InputEmail>
          <Input type='email' name='email' id='email' placeholder='E-mail *' />
        </InputEmail>

        <InputPassword>
          <Input ref={inputPassword} type='password' name='password' id='password' placeholder='Senha *' />
					{showPassword ? <CloseEyeIcon onClick={handleTogglePassword} /> : <OpenEyeIcon onClick={handleTogglePassword} />}
        </InputPassword>

        <Input type='submit' value='Entrar' />
	      <LinkForgotPassword to='/forgot-password'>Esqueceu sua senha?</LinkForgotPassword>
      </Form>
    </Div>
  )
}

export default LoginForm;