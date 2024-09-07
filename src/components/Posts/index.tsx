import { ReactElement } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, DivTitle, H1, NewPostButton, Filters, LinkFilter,
	Div, InputFilter, Bold, TableMassActions, Table, THeader, TFooter, TBody, TR, TH, TD, Checkbox,
	DivFiltersTable, DivMassOption, SelectMassOption, MassOptions, MassApplyButton, DivFilterSelect,
	SelectDate, OptionDate, SelectCategories, OptionCategories, ButtonFilters, LoadingSpinner,
	TDBody,
	TRBody
 } from './styles';

type HandleNewFunction = () => void;

const Posts: React.FC = (): ReactElement => {
	const navigation: NavigateFunction = useNavigate();

	const HandleNewPost: HandleNewFunction = (): void => {
		navigation('/panel/new-post');
	}

	return (
		<Container>
			<DivTitle>
				<H1>Posts</H1>

			</DivTitle>

			<NewPostButton onClick={HandleNewPost}>Adicionar novo post</NewPostButton>

			<Filters>
				<Div>
					<LinkFilter href='#'>Todos<Bold> (5)</Bold></LinkFilter>
					<LinkFilter href='#'>Publicado<Bold> (5)</Bold></LinkFilter>
					<LinkFilter href='#'>Rascunho<Bold> (5)</Bold></LinkFilter>
					<LinkFilter href='#'>Lixo<Bold> (5)</Bold></LinkFilter>
				</Div>

				<InputFilter type='text' name='filter' id='filter' placeholder='Pesquisar posts' />
			</Filters>

			<TableMassActions>
				<DivFiltersTable>
					<DivMassOption>
						<SelectMassOption>
							<MassOptions value='nothing'>Ações em massa</MassOptions>
							<MassOptions value='edit'>Editar</MassOptions>
							<MassOptions value='trash'>Mover para lixeira</MassOptions>
						</SelectMassOption>
						<MassApplyButton>Aplicar</MassApplyButton>
					</DivMassOption>

					<DivFilterSelect>
						<SelectDate>
							<OptionDate value='all-dates'>Todas as Datas</OptionDate>
							<OptionDate value='September'>Setembro</OptionDate>
							<OptionDate value='October'>Outubro</OptionDate>
						</SelectDate>

						<SelectCategories>
							<OptionCategories value='all-categories'>Todas as Categorias</OptionCategories>
							<OptionCategories value='no-categories'>Sem categorias</OptionCategories>
						</SelectCategories>

						<ButtonFilters>Filtrar</ButtonFilters>
						<LoadingSpinner />
					</DivFilterSelect>
				</DivFiltersTable>
				<Table>
					<THeader>
						<TR>
							<TH><Checkbox type='checkbox' />Título</TH>
							<TH>Autor</TH>
							<TD className='hide-on-mobile'>Categoria</TD>
							<TD className='hide-on-mobile'>Data</TD>
						</TR>
					</THeader>

					<TBody>
						<TRBody>
							<TDBody colSpan={4}>Sem dados</TDBody>
						</TRBody>
					</TBody>

					<TFooter>
						<TR>
							<TD><Checkbox type='checkbox' />Título</TD>
							<TD>Autor</TD>
							<TD className='hide-on-mobile'>Categoria</TD>
							<TD className='hide-on-mobile'>Data</TD>
						</TR>
					</TFooter>
				</Table>

				<DivFiltersTable>
					<DivMassOption>
						<SelectMassOption>
							<MassOptions value='nothing'>Ações em massa</MassOptions>
							<MassOptions value='edit'>Editar</MassOptions>
							<MassOptions value='trash'>Mover para lixeira</MassOptions>
						</SelectMassOption>
						<MassApplyButton>Aplicar</MassApplyButton>
					</DivMassOption>

					<DivFilterSelect>
						<SelectDate>
							<OptionDate value='all-dates'>Todas as Datas</OptionDate>
							<OptionDate value='2024-September'>Setembro</OptionDate>
							<OptionDate value='2024-October'>Outubro</OptionDate>
						</SelectDate>

						<SelectCategories>
							<OptionCategories value='all-categories'>Todas as Categorias</OptionCategories>
							<OptionCategories value='no-categories'>Sem categorias</OptionCategories>
						</SelectCategories>

						<ButtonFilters>Filtrar</ButtonFilters>
						<LoadingSpinner />
					</DivFilterSelect>
				</DivFiltersTable>
			</TableMassActions>
		</Container>
	)
}

export default Posts;