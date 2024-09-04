import { FormEvent, ReactElement, useState} from 'react';
import { Container, CreateUserButton, Div, Form, GeneratePasswordButton, Title, Input, Label,
	OptionPosition, SelectPosition, Span, SubTitle, CloseEye, OpenEye, DivInputValidation,
	WarnForm,
	Bold} from './styles';

type HandleShowPassword = () => void;

type HandleCheckedChange = () => void;

type HandleSubmit = {
	(event: FormEvent<HTMLFormElement>): void
}

type HandleGeneratePassword = () => void;

const NewUser: React.FC = (): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(true);
	const [isChecked, setIsChecked] = useState<boolean>(true);

	const handleShowPassword: HandleShowPassword = (): void => {
		setShowPassword((prevStatus: boolean): boolean => {
			const newStatus: boolean = !prevStatus;
			return newStatus;
		})
	}

	const handleCheckedChange: HandleCheckedChange = (): void => {
		setIsChecked((prevState: boolean): boolean => {
			return !prevState;
		})
	}

	const handleSubmit: HandleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
	}

	const handleGeneratePassword: HandleGeneratePassword = (): void => {
		const newPassword: string = Math.random().toString(36).substring(1, 20).replace('.', '');
		console.log(newPassword);
	}

	return (
		<Container>
			<Title>Novo usuário</Title>
			<SubTitle>Crie um usuário novinho em folha e o adicione a este site.</SubTitle>
			<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>

			<Form action='' method='POST' onSubmit={handleSubmit}>
				<DivInputValidation>
					<Input type='text' name='user_name' id='user_name' placeholder='Nome de usuário *' />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='email' name='email' id='email' placeholder='E-mail *' />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='name' id='name' placeholder='Nome *'  />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='surname' id='surname' placeholder='Sobrenome *' />
				</DivInputValidation>

				<Label>
					<Input type='checkbox' name='send_notification' id='send_notification'
						checked={isChecked} onChange={handleCheckedChange} />
					<Span>Enviar para o novo usuário um e-mail com informações sobre a conta</Span>
				</Label>

				<SelectPosition>
					<OptionPosition value='nothing'>Função *</OptionPosition>
					<OptionPosition value='employee'>Colaborador</OptionPosition>
					<OptionPosition value='author'>Autor</OptionPosition>
					<OptionPosition value='editor'>Editor</OptionPosition>
					<OptionPosition value='administrator'>Administrador</OptionPosition>
				</SelectPosition>

				<Div className='generatePassword'>
					<GeneratePasswordButton onClick={handleGeneratePassword}>Gerar Senha</GeneratePasswordButton>
					<Div className='passwordEye'>
						<Input className='password' type='text' name='password' id='password' />
						{showPassword ? <OpenEye onClick={handleShowPassword} />  : <CloseEye onClick={handleShowPassword} />}
					</Div>
					<Div className='statusStrength'>
						Forte
					</Div>
				</Div>

				<CreateUserButton type='submit'>Adicionar novo usuário</CreateUserButton>
			</Form>
		</Container>
	)
}

export default NewUser;