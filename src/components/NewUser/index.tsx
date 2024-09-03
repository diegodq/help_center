import { ReactElement, useState } from 'react';
import { Container, CreateUserButton, Div, Form, GeneratePasswordButton, H1, Input, Label,
	OptionPosition, SelectPosition, Span, SubTitle, CloseEye, OpenEye, DivInputValidation} from './styles';

type HandleShowPassword = () => void;

const NewUser: React.FC = (): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(true);

	const handleShowPassword: HandleShowPassword = (): void => {
		setShowPassword((prevStatus: boolean): boolean => {
			const newStatus: boolean = !prevStatus;
			return newStatus;
		})
	}

	return (
		<Container>
			<H1>Novo usuário</H1>
			<SubTitle>Crie um usuário novinho em folha e o adicione a este site.</SubTitle>

			<Form action='' method='POST'>
				<DivInputValidation>
					<Input type='text' name='user_name' id='user_name' placeholder='Nome de usuário' />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='email' name='email' id='email' placeholder='E-mail' />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='name' id='name' placeholder='Nome'  />
				</DivInputValidation>

				<DivInputValidation>
					<Input type='text' name='surname' id='surname' placeholder='Sobrenome' />
				</DivInputValidation>

				<Label>
					<Input type='checkbox' name='send_notification' id='send_notification' checked />
					<Span>Enviar para o novo usuário um e-mail com informações sobre a conta</Span>
				</Label>

				<SelectPosition>
					<OptionPosition value='nothing'>Função</OptionPosition>
					<OptionPosition value='employee'>Colaborador</OptionPosition>
					<OptionPosition value='author'>Autor</OptionPosition>
					<OptionPosition value='editor'>Editor</OptionPosition>
					<OptionPosition value='administrator'>Administrador</OptionPosition>
				</SelectPosition>

				<Div className='generatePassword'>
					<GeneratePasswordButton>Gerar Senha</GeneratePasswordButton>
					<Div className='passwordEye'>
						<Input className='password' type='text' name='password' id='password' />
						{showPassword ? <OpenEye onClick={handleShowPassword} />  : <CloseEye onClick={handleShowPassword} />}
					</Div>
				</Div>

				<CreateUserButton type='submit'>Adicionar novo usuário</CreateUserButton>
			</Form>
		</Container>
	)
}

export default NewUser;