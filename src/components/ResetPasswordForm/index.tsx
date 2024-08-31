import React, { ReactElement, useState, useRef, RefObject } from 'react';
import {Form, Input, ImgLogo, Div, OpenEyeIcon, CloseEyeIcon, InputPassword, Paragraph,
	BoldStyle, LoginLink, LoginBackIcon, ConfirmCloseEyeIcon, ConfirmOpenEyeIcon } from './styles';

const Logo = '/images/logo2.svg';

type ConfirmHandleTogglePassword = (inputRef: RefObject<HTMLInputElement>) => void;

const LoginForm: React.FC = (): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

	const inputPassword: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
	const confirmPassword: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const handleTogglePassword: ConfirmHandleTogglePassword = (inputRef: RefObject<HTMLInputElement>): void => {
		if (inputRef.current!.getAttribute('name') === 'password') {
			setShowPassword((prevState: boolean): boolean => {
				const newState: boolean = !prevState;

				if(inputRef.current)
					inputRef.current.setAttribute('type', newState ? 'text' : 'password');

				return newState;
			});
		} else {
			setShowConfirmPassword((prevState: boolean): boolean => {
				const newState: boolean = !prevState;

				if(inputRef.current)
					inputRef.current.setAttribute('type', newState ? 'text' : 'password');

				return newState;
			});
		}
	}

	return (
		<Div>
			<ImgLogo src={Logo} height={180}/>

			<Form action='' method='POST'>
				<Paragraph>Campos com <BoldStyle>*</BoldStyle> são obrigatórios.</Paragraph>
				<InputPassword>
					<Input ref={inputPassword} type='password' name='password' id='password' placeholder='Senha *' />
					{showPassword ?
						<OpenEyeIcon onClick={() => handleTogglePassword(inputPassword)} /> :
						<CloseEyeIcon onClick={() => handleTogglePassword(inputPassword)} /> }
				</InputPassword>

				<InputPassword>
					<Input ref={confirmPassword} type='password' name='confirm_password' id='confirm_password' placeholder='Confirme a senha *' />
					{showConfirmPassword ?
						<ConfirmOpenEyeIcon onClick={() => handleTogglePassword(confirmPassword)} /> :
						<ConfirmCloseEyeIcon onClick={() => handleTogglePassword(confirmPassword)} />}
				</InputPassword>

				<Input type='submit' value='Enviar' />
				<LoginLink to='/login'><LoginBackIcon />Logar</LoginLink>
			</Form>
		</Div>
	)
}

export default LoginForm;