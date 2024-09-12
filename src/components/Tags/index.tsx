import { ChangeEvent, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import FormCategoriesTags from '../FormCategoriesTags';
import { Container, AddCategoriesDiv, TitleDivCategory, Title, TableDiv, Table, THead,
	TBody, TFooter, TR, TD, Checkbox, DivFilters, SelectFilter,
	OptionFilter, ApplyButtonFilter, LoadingSpinner, TRBody, TDBody, DivAction, ButtonAction} from './styles';
import tags from '../../mockData/tags';

type handleSelectAllCheckbox = {
	(event: ChangeEvent<HTMLInputElement | null>): void;
}

type TagsType = {
	name: string;
	slug: string
}

const Tags: React.FC = (): ReactElement => {
	const location: Location<{from: string}> = useLocation();

	const [actualRoute, setActualRoute] = useState<string>('');
	const [listTags, setListTags] = useState<Array<TagsType>>([]);
	const listCheckboxRef: MutableRefObject<(HTMLInputElement | null)[]> = useRef<Array<HTMLInputElement | null>>([]);
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleSelectAllCheckbox: handleSelectAllCheckbox = (event: ChangeEvent<HTMLInputElement | null>): void => {
		setIsChecked(event.target.checked);

		if (!isChecked) {
			listCheckboxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.setAttribute('checked', 'checked');
			});
		} else {
			listCheckboxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.removeAttribute('checked');
			});
		}
	}

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
							<TD><Checkbox type='checkbox' onChange={handleSelectAllCheckbox} />Nome</TD>
							<TD>Slug</TD>
						</TR>
					</THead>

					<TBody>
						{listTags.length === 0 ? (
							<TRBody>
								<TDBody colSpan={2}>Sem dados</TDBody>
							</TRBody>
						) : (
							listTags.map((tag: TagsType, index: number) => (
								<TRBody key={index}>
									<TD>
										<Checkbox ref={(checkbox: HTMLInputElement | null): HTMLInputElement | null =>
											(listCheckboxRef.current[index] = checkbox)} type='checkbox' data-id={index} />
										{tag.name}

										<DivAction>
											<ButtonAction>Editar</ButtonAction>
											<ButtonAction>Excluir</ButtonAction>
										</DivAction>
									</TD>
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