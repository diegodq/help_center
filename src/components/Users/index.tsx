import { ReactElement } from 'react';
import { Container, DivTitle, H1, NewUserButton, Filters, InputFilter, TableMassActions, Table, THeader, TFooter, TBody, TR, TH, Checkbox,
	DivFiltersTable, DivMassOption, SelectMassOption, MassOptions, MassApplyButton, DivFilterSelect,
	SelectDate, OptionDate, ButtonFilters, LoadingSpinner } from './styles';

const Users: React.FC = (): ReactElement => {
	return (
		<Container>
			<DivTitle>
				<H1>Usuários</H1>
			</DivTitle>

			<NewUserButton>Adicionar novo Usuário</NewUserButton>

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
							<TH className='hide-on-mobile'>Posts</TH>
						</TR>
					</THeader>

					<TBody>

					</TBody>

					<TFooter>
					<TR>
							<TH><Checkbox type='checkbox' />Nome de usuário</TH>
							<TH>E-mail</TH>
							<TH className='hide-on-mobile'>Função</TH>
							<TH className='hide-on-mobile'>Posts</TH>
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