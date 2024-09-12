import { ChangeEvent, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { Container, AddCategoriesDiv, TitleDivCategory, Title, TableDiv, Table, THead, TBody, TFooter,
	TR, TD, Checkbox, DivFilters, SelectFilter, OptionFilter, ApplyButtonFilter, LoadingSpinner,
	TRBody, TDBody,
	DivAction,
	ButtonAction} from './styles';

import FormCategoriesTags from '../FormCategoriesTags';
import categories from '../../mockData/categories';

type ElementEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

type HandleCheckboxChecked = {
	(event: ChangeEvent<HTMLInputElement>): void;
}

type CategoriesType = {
	category: string;
	slug: string;
}

const NewCategory: React.FC = (): ReactElement => {
	const location: Location<{from: string}> = useLocation();

	const [massAction, setMassAction] = useState<string>('nothing');
	const [actualRoute, setActualRoute] = useState<string>('');
	const [listCategories, setListCategories] = useState<Array<CategoriesType>>([]);
	const [checkBoxChecked, setCheckBoxChecked] = useState<boolean>(false);

	const checkBoxRef: MutableRefObject<(HTMLInputElement | null)[]> = useRef<Array<HTMLInputElement | null>>([]);

	const handleCheckboxChecked: HandleCheckboxChecked = (event: ChangeEvent<HTMLInputElement>): void => {
		setCheckBoxChecked(event.target.checked);

		if (!checkBoxChecked) {
			checkBoxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.setAttribute('checked', 'checked');
			})
		} else {
			checkBoxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.removeAttribute('checked');
			})
		}
	}

	useEffect((): void => {
		setActualRoute(location.pathname.substring('/panel/'.length));
	}, [location]);

	useEffect((): void => {
		setListCategories(categories);
		checkBoxRef.current = listCategories.map((_: CategoriesType, index: number): HTMLInputElement | null =>
			checkBoxRef.current[index] ?? null);
	},[listCategories]);

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
							<TD><Checkbox type='checkbox' name='filter' id='filter' onChange={handleCheckboxChecked} />Nome</TD>
							<TD>Slug</TD>
						</TR>
					</THead>

					<TBody>
						{listCategories.length === 0 ? (
							<TRBody>
								<TDBody colSpan={2}>Sem dados</TDBody>
							</TRBody>
						) : (
							listCategories.map((category: CategoriesType, index: number) => (
								<TRBody key={index}>
									<TD>
										<Checkbox ref={(checkbox: HTMLInputElement | null): HTMLInputElement | null =>
											(checkBoxRef.current[index] = checkbox)} type='checkbox' data-id={index} />

											{category.category}

											<DivAction>
												<ButtonAction>Editar</ButtonAction>
												<ButtonAction>Excluir</ButtonAction>
										</DivAction>
									</TD>
									<TD>{category.slug}</TD>
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