import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { Container, AddCategoriesDiv, TitleDivCategory, Title, TableDiv, Table, THead, TBody, TFooter,
	TR, TD, Checkbox, DivFilters, SelectFilter, OptionFilter,
	ApplyButtonFilter, LoadingSpinner,
	TRBody,
	TDBody} from './styles';

import FormCategoriesTags from '../FormCategoriesTags';

type ElementEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

const NewCategory: React.FC = (): ReactElement => {
	const [massAction, setMassAction] = useState<string>('nothing');
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
					<SelectFilter value={massAction} onChange={(event: ElementEvent): void => setMassAction(event.target.value)}>
						<OptionFilter value={massAction}>Ações em massa</OptionFilter>
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
						<TRBody>
							<TDBody colSpan={2}>Sem dados</TDBody>
						</TRBody>
					</TBody>

					<TFooter>
						<TR>
							<TD><Checkbox type='checkbox' name='filter' id='filter' />Nome</TD>
							<TD>Slug</TD>
						</TR>
					</TFooter>
				</Table>
				<DivFilters>
					<SelectFilter value={massAction} onChange={(event: ChangeEvent<HTMLSelectElement>): void => setMassAction(event.target.value)}>
						<OptionFilter value={massAction}>Ações em massa</OptionFilter>
						<OptionFilter value='remove'>Excluir</OptionFilter>
					</SelectFilter>

					<ApplyButtonFilter>Aplicar</ApplyButtonFilter>
					<LoadingSpinner />
				</DivFilters>
			</TableDiv>
		</Container>
	)
}

export default NewCategory;