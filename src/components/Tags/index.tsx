import { ReactElement } from 'react';
import { Container, AddCategoriesDiv, TitleDivCategory, Input, Div,
	Text, Form, Title, TableDiv, Table, THead, TBody, TFooter,
	TR, TD, Checkbox,
	DivFilters,
	SelectFilter,
	OptionFilter,
	ApplyButtonFilter} from './styles';

const Tags: React.FC = (): ReactElement => {
	return (
		<Container>
			<Title>Categorias</Title>

			<AddCategoriesDiv>
				<TitleDivCategory>Adicionar nova categoria</TitleDivCategory>

				<Form action='' method='POST'>
					<Div>
						<Input type='text' name='category' id='category' placeholder='Nome' />
					</Div>

					<Div>
						<Input type='text' name='slug' id='slug' placeholder='Slug' />
						<Text>O “slug” é uma versão amigável do URL. Normalmente é todo em minúsculas <br />e contém apenas letras, números e hifens.</Text>
					</Div>
					<Input type='submit' value='Adicionar nova tag' />
				</Form>
			</AddCategoriesDiv>

			<TableDiv>
				<DivFilters>
					<SelectFilter>
						<OptionFilter value='nothing'>Ações em massa</OptionFilter>
						<OptionFilter value='remove'>Excluir</OptionFilter>
					</SelectFilter>

					<ApplyButtonFilter>Aplicar</ApplyButtonFilter>
				</DivFilters>
				<Table>
					<THead>
						<TR>
							<TD><Checkbox type='checkbox' name='filter' id='filter' />Nome</TD>
							<TD>Slug</TD>
						</TR>
					</THead>

					<TBody>

					</TBody>

					<TFooter>
						<TR>
							<TD><Checkbox type='checkbox' name='filter' id='filter' />Nome</TD>
							<TD>Slug</TD>
						</TR>
					</TFooter>
				</Table>
				<DivFilters>
					<SelectFilter>
						<OptionFilter value='nothing'>Ações em massa</OptionFilter>
						<OptionFilter value='remove'>Excluir</OptionFilter>
					</SelectFilter>

					<ApplyButtonFilter>Aplicar</ApplyButtonFilter>
				</DivFilters>
			</TableDiv>
		</Container>
	)
}

export default Tags;