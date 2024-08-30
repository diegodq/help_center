import React, { ReactElement } from 'react';
import {Form, Input, ImgLogo, Div, FaRegEyeSlashIcon, InputPassword, Paragraph, BoldStyle } from './styles';
const Logo = '/images/logo2.svg';

const LoginForm: React.FC = (): ReactElement => {
	return (
		<Div>
			<ImgLogo src={Logo} height={180}/>

			<Form action='' method='POST'>
				<Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
				<InputPassword>
					<Input type='password' name='password' id='password' placeholder='Senha *' />
					<FaRegEyeSlashIcon />
				</InputPassword>

				<InputPassword>
					<Input type='password' name='confirm_password' id='confirm_password' placeholder='Confirme a senha *' />
					<FaRegEyeSlashIcon />
				</InputPassword>

				<Input type='submit' value='Enviar' />
			</Form>
		</Div>
	)
}

export default LoginForm;