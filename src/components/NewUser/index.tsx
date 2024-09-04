import { ChangeEvent, FormEvent, ReactElement, useEffect, useState} from 'react';
import { Container, CreateUserButton, Div, Form, GeneratePasswordButton, Title, Input, Label,
	OptionPosition, SelectPosition, Span, SubTitle, CloseEye, OpenEye, DivInputValidation,
	WarnForm,
	Bold} from './styles';

type HandleVoidReturn = () => void;

type HandleSubmit = {
	(event: FormEvent<HTMLFormElement>): void;
}

type HandleGeneratePassword = () => void;

type ElementEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

const NewUser: React.FC = (): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(true);
	const [isChecked, setIsChecked] = useState<boolean>(true);

	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [role, setRole] = useState<string>('nothing');
	const [newPassword, setNewPassword] = useState<string>('');

	const handleShowPassword: HandleVoidReturn = (): void => {
		setShowPassword((prevStatus: boolean): boolean => {
			const newStatus: boolean = !prevStatus;

			return newStatus;
		})
	}

	const handleCheckedChange: HandleVoidReturn = (): void => {
		setIsChecked((prevState: boolean): boolean => {
			const newState: boolean = !prevState;
			return newState;
		})
	}

	const handleSubmit: HandleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
	}

	const handleGeneratePassword: HandleGeneratePassword = (): void => {
		const newPassword: string = Math.random().toString(36).substring(1, 20).replace('.', '');
		setNewPassword(newPassword);
	}

	useEffect((): void => {
		handleGeneratePassword();
	},[]);

	return (
		<Container>
			<Title>Novo usuário</Title>
			<SubTitle>Crie um usuário novinho em folha e o adicione a este site.</SubTitle>
			<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>

			<Form action='' method='POST' onSubmit={handleSubmit}>
				<DivInputValidation>
					<Input type='text' name='userName' id='userName' placeholder='Nome de usuário *' value={userName}
						onChange={(event: ElementEvent): void => setUserName(event.target.value)} />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='email' name='email' id='email' placeholder='E-mail *' value={email}
						onChange={(event: ElementEvent): void => setEmail(event.target.value)} />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='name' id='name' placeholder='Nome *' value={name}
						onChange={(event: ElementEvent): void => setName(event.target.value)} />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='surname' id='surname' placeholder='Sobrenome *' value={surname}
						onChange={(event: ElementEvent): void => setSurname(event.target.value)} />
				</DivInputValidation>

				<Label>
					<Input type='checkbox' name='send_notification' id='send_notification'
						checked={isChecked} onChange={handleCheckedChange} />
					<Span>Enviar para o novo usuário um e-mail com informações sobre a conta</Span>
				</Label>

				<SelectPosition value={role} onChange={(event: ElementEvent): void => setRole(event.target.value)}>
					<OptionPosition value={role}>Função *</OptionPosition>
					<OptionPosition value='employee'>Colaborador</OptionPosition>
					<OptionPosition value='author'>Autor</OptionPosition>
					<OptionPosition value='editor'>Editor</OptionPosition>
					<OptionPosition value='administrator'>Administrador</OptionPosition>
				</SelectPosition>

				<Div className='generatePassword'>
					<GeneratePasswordButton onClick={handleGeneratePassword}>Gerar Senha</GeneratePasswordButton>
					<Div className='passwordEye'>
						<Input className='password' type='text' name='password' id='password' value={newPassword}
							onChange={(event: ElementEvent): void => setNewPassword(event.target.value)} />
						{showPassword ? <OpenEye onClick={handleShowPassword} />  : <CloseEye onClick={handleShowPassword} />}
					</Div>
					<Div className='statusStrength'>Forte</Div>
				</Div>

				<CreateUserButton type='submit'>Adicionar novo usuário</CreateUserButton>
			</Form>
		</Container>
	)
}

export default NewUser;