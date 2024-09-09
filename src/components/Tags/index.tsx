import { ReactElement, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import FormCategoriesTags from '../FormCategoriesTags';
import { Container, AddCategoriesDiv, TitleDivCategory, Title, TableDiv, Table, THead,
	TBody, TFooter, TR, TD, Checkbox, DivFilters, SelectFilter,
	OptionFilter, ApplyButtonFilter, LoadingSpinner,
	TRBody,
	TDBody} from './styles';
import tags from '../../mockData/tags';

type TagsType = {
	name: string;
	slug: string
}

const Tags: React.FC = (): ReactElement => {
	const location: Location<{from: string}> = useLocation();
	const [actualRoute, setActualRoute] = useState<string>('');
	const [listTags, setListTags] = useState<Array<TagsType>>([]);

	useEffect((): void => {
		setActualRoute(location.pathname.substring('/panel/'.length));
	}, [location]);

	useEffect((): void => {
		setListTags(tags);
	}, [listTags]);

	return (
		<Container>
			<Title>Tags</Title>

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
						{listTags.length === 0 ? (
							<TRBody>
								<TDBody colSpan={2}>Sem dados</TDBody>
							</TRBody>
						) : (
							listTags.map((tag, index) => (
								<TRBody key={index}>
									<TD><Checkbox type='checkbox' data-id={index} />{tag.name}</TD>
									<TD>{tag.slug}</TD>
      					</TRBody>
							))
						)}
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