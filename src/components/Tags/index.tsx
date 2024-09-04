import { ReactElement, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import FormCategoriesTags from '../FormCategoriesTags';
import { Container, AddCategoriesDiv, TitleDivCategory, Title, TableDiv, Table, THead,
	TBody, TFooter, TR, TD, Checkbox, DivFilters, SelectFilter,
	OptionFilter, ApplyButtonFilter, LoadingSpinner} from './styles';

const Tags: React.FC = (): ReactElement => {
	const [actualRoute, setActualRoute] = useState<string>('');
	const location: Location<{from: string}> = useLocation();

	useEffect((): void => {
		setActualRoute(location.pathname.substring('/panel/'.length));
	}, [location]);

	return (
		<Container>
			<Title>Categorias</Title>

			<AddCategoriesDiv>
				<TitleDivCategory>Adicionar nova categoria</TitleDivCategory>

				<FormCategoriesTags actualRoute={actualRoute} />
			</AddCategoriesDiv>

			<TableDiv>
				<DivFilters>
					<SelectFilter>
						<OptionFilter value='nothing'>Ações em massa</OptionFilter>
						<OptionFilter value='remove'>Excluir</OptionFilter>
					</SelectFilter>

					<ApplyButtonFilter>Aplicar</ApplyButtonFilter>
					<LoadingSpinner />
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
					<LoadingSpinner />
				</DivFilters>
			</TableDiv>
		</Container>
	)
}

export default Tags;