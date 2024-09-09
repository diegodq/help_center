import { ReactElement, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, DivTitle, H1, NewUserButton, Filters, InputFilter, TableMassActions, Table, THeader, TFooter, TBody, TR, TH, Checkbox,
	DivFiltersTable, DivMassOption, SelectMassOption, MassOptions, MassApplyButton, DivFilterSelect,
	SelectDate, OptionDate, ButtonFilters, LoadingSpinner, TRBody, TDBody,
	TD} from './styles';
import users from '../../mockData/users';

type HandleAddNewUser = () => void;

type UserType = {
	userName: string;
	email: string;
	role: string;
}

const Users: React.FC = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	const [colSpan, setColSpan] = useState<number>(3);
	const [listUsers, setListUsers] = useState<Array<UserType>>([]);

	const handleAddNewUser: HandleAddNewUser = (): void => {
		navigate('/panel/new-user');
	}

	const updateColSpan: HandleAddNewUser = (): void => {
		let columns: number = 3;

		if (window.innerWidth <= 600)
			columns -= 1;

		setColSpan(columns);
	}

	useEffect((): () => void => {
		updateColSpan();
		window.addEventListener('resize', updateColSpan);
		return (): void => {
			window.removeEventListener('resize', updateColSpan);
		}
	}, [listUsers]);

	useEffect((): void => {
		setListUsers(users);
	}, [])

	return (
		<Container>
			<DivTitle>
				<H1>Usuários</H1>
			</DivTitle>

			<NewUserButton onClick={handleAddNewUser}>Adicionar novo Usuário</NewUserButton>

			<Filters>
				<InputFilter type='text' name='filter' id='filter' placeholder='Pesquisar por usuários' />
			</Filters>

			<TableMassActions>
				<DivFiltersTable>
					<DivMassOption>
						<SelectMassOption>
							<MassOptions value='nothing'>Ações em massa</MassOptions>
							<MassOptions value='remove'>Excluir</MassOptions>
							<MassOptions value='forgotPassword'>Enviar redefinição de senha</MassOptions>
						</SelectMassOption>
						<MassApplyButton>Aplicar</MassApplyButton>
					</DivMassOption>

					<DivFilterSelect>
						<SelectDate>
							<OptionDate value='all-dates'>Alterar funções para...</OptionDate>
							<OptionDate value='2024-September'>Colaborador</OptionDate>
							<OptionDate value='2024-October'>Autor</OptionDate>
							<OptionDate value='2024-October'>Editor</OptionDate>
							<OptionDate value='2024-October'>Administrador</OptionDate>
						</SelectDate>

						<ButtonFilters>Alterar</ButtonFilters>
						<LoadingSpinner />
					</DivFilterSelect>
				</DivFiltersTable>
				<Table>
					<THeader>
						<TR>
							<TH><Checkbox type='checkbox' />Nome de usuário</TH>
							<TH>E-mail</TH>
							<TH className='hide-on-mobile'>Função</TH>

						</TR>
					</THeader>

					<TBody>
						{listUsers.length === 0 ? (
							<TRBody>
								<TDBody colSpan={colSpan}>Sem dados</TDBody>
							</TRBody>
						) : (
							listUsers.map((user, index) => (
								<TRBody key={index}>
									<TD><Checkbox type='checkbox' data-id={index} />{user.userName}</TD>
									<TD>{user.email}</TD>
									<TD>{user.role}</TD>
      					</TRBody>
							))
						)}
					</TBody>

					<TFooter>
					<TR>
							<TH><Checkbox type='checkbox' />Nome de usuário</TH>
							<TH>E-mail</TH>
							<TH className='hide-on-mobile'>Função</TH>
						</TR>
					</TFooter>
				</Table>

				<DivFiltersTable>
					<DivMassOption>
						<SelectMassOption>
							<MassOptions value='nothing'>Ações em massa</MassOptions>
							<MassOptions value='remove'>Excluir</MassOptions>
							<MassOptions value='forgotPassword'>Enviar redefinição de senha</MassOptions>
						</SelectMassOption>
						<MassApplyButton>Aplicar</MassApplyButton>
					</DivMassOption>

					<DivFilterSelect>
						<SelectDate>
							<OptionDate value='all-dates'>Alterar funções para...</OptionDate>
							<OptionDate value='2024-September'>Colaborador</OptionDate>
							<OptionDate value='2024-October'>Autor</OptionDate>
							<OptionDate value='2024-October'>Editor</OptionDate>
							<OptionDate value='2024-October'>Administrador</OptionDate>
						</SelectDate>

						<ButtonFilters>Alterar</ButtonFilters>
						<LoadingSpinner />
					</DivFilterSelect>
				</DivFiltersTable>
			</TableMassActions>
		</Container>
	)
}

export default Users;