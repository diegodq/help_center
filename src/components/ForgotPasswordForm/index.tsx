import React, { ReactElement } from "react"
import {Form, Input, ImgLogo, Div, InputEmail, Paragraph, BoldStyle, LoginLink, LoginBackIcon } from './styles';
const Logo = '/images/logo2.svg';

const ForgotPasswordForm: React.FC = (): ReactElement => {
	return (
		<Div>
			<ImgLogo src={Logo} height={180}/>

			<Form action='' method='POST'>
				<Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
				<InputEmail>
					<Input type='email' name='email' id='email' placeholder='E-mail *'/>
				</InputEmail>

				<Input type='submit' value='Entrar' />
				<LoginLink to='/login'><LoginBackIcon />Logar</LoginLink>
			</Form>
		</Div>
	)
}

export default ForgotPasswordForm;