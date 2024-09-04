import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { Container, AddCategoriesDiv, TitleDivCategory, Input, Div,
	Text, Form, Title, TableDiv, Table, THead, TBody, TFooter,
	TR, TD, Checkbox, DivFilters, SelectFilter, OptionFilter,
	ApplyButtonFilter, LoadingSpinner, WarnForm, Bold} from './styles';

type ElementEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

const NewCategory: React.FC = (): ReactElement => {
	const [massAction, setMassAction] = useState<string>('nothing');
	const [category, setCategory] = useState<string>('');
	const [slug, setSlug] = useState<string>('');
	const [actualRoute, setActualRoute] = useState<string>('');

	const location: Location<unknown> = useLocation();

	useEffect((): void => {
		setActualRoute(location.pathname.substring('/panel/'.length));
	}, [location]);

	return (
		<Container>
			<Title>Categorias</Title>

			<AddCategoriesDiv>
				<TitleDivCategory>Adicionar nova categoria</TitleDivCategory>

				<Form action={actualRoute === 'new-category' ? '/new-category' : '/new-tag'} method='POST'>
					<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>

					<Div>
						<Input type='text' name='category' id='category' placeholder='Nome *' value={category}
							onChange={(event: ElementEvent) => setCategory(event.target.value)} />
					</Div>

					<Div>
						<Input type='text' name='slug' id='slug' placeholder='Slug *' value={slug}
							onChange={(event: ElementEvent) => setSlug(event.target.value)} />
						<Text>O “slug” é uma versão amigável do URL. Normalmente é todo em minúsculas <br />e contém apenas letras, números e hifens.</Text>
					</Div>

					<Input type='submit' value={actualRoute === 'new-category' ? 'Adicionar nova categoria': 'Adicionar nova tag' } />
				</Form>
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