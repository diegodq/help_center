import { ReactElement } from 'react';
import { Form, Label, UpdateUserButton, Input, Select, Option, WarnForm, Bold,
	Error, Title, Container, CloseModal, Div, LoadingUpdateUser, DivButtonLoad,
	DivCheckboxText, P, Checkbox } from './styles';

const EditUserModal: React.FC = (): ReactElement => {
	return (
		<Container>
			<Form action='/update/user'>
				<Div>
					<Title>Editar Usuário</Title>
					<CloseModal title='Fechar' />
				</Div>
				<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>

				<Label>
					<Input type='text' name='userName' id='userName' placeholder='Nome de usuário *' />
					<Error>Campo obrigatório</Error>
				</Label>

				<Label>
					<Input type='email' name='email' id='email' placeholder='E-mail *' />
					<Error>Campo obrigatório</Error>
				</Label>

				<Label>
					<Input type='text' name='name' id='name' placeholder='Nome *' />
					<Error>Campo obrigatório</Error>
				</Label>

				<Label>
					<Input type='text' name='surname' id='surname' placeholder='Sobrenome *' />
					<Error>Campo obrigatório</Error>
				</Label>

				<Label>
					<Select>
						<Option value='nothing'>Função *</Option>
						<Option value='employee'>Colaborador</Option>
						<Option value='author'>Autor</Option>
						<Option value='editor'>Editor</Option>
						<Option value='administrator'>Administrador</Option>
					</Select>
					<Error>Campo obrigatório</Error>
				</Label>

				<DivCheckboxText>
					<Checkbox type='checkbox' />
					<P>Informar usuário sobre alterações</P>
				</DivCheckboxText>

				<DivButtonLoad>
					<UpdateUserButton type='submit'>Salvar</UpdateUserButton>
					<LoadingUpdateUser />
				</DivButtonLoad>

			</Form>
		</Container>
	)
}

export default EditUserModal;