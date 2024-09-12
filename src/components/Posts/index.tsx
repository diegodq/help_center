import { ChangeEvent, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, DivTitle, H1, NewPostButton, Filters, LinkFilter,
	Div, InputFilter, Bold, TableMassActions, Table, THeader, TFooter, TBody, TR, TH, TD, Checkbox,
	DivFiltersTable, DivMassOption, SelectMassOption, MassOptions, MassApplyButton, DivFilterSelect,
	SelectDate, OptionDate, SelectCategories, OptionCategories, ButtonFilters, LoadingSpinner, TDBody,
	TRBody, DivAction, ButtonAction } from './styles';

import mockData from '../../mockData/posts';
import WarnModal from '../WarnModal';

type HandleNewFunction = () => void;

type CheckBoxChange = ChangeEvent<HTMLInputElement>;

type SelectAllCheckbox = {
	(event: CheckBoxChange): void;
}

type PostType = {
	title: string;
	author: string;
	category: string;
	date: string;
}

const Posts: React.FC = (): ReactElement => {
	const navigation: NavigateFunction = useNavigate();

	const [colSpan, setColSpan] = useState<number>(4);
	const [listDataPosts, setListDataPosts] = useState<Array<PostType>>([]);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const checkBoxRef: MutableRefObject<(HTMLInputElement | null)[]> = useRef<Array<HTMLInputElement | null>>([]);

	const HandleNewPost: HandleNewFunction = (): void => {
		navigation('/panel/new-post');
	}

	const updateColSpan: HandleNewFunction = (): void => {
		let columns: number = 4;

		if (window.innerWidth <= 600)
			columns -= 2;

		setColSpan(columns);
	}

	const selectAllCheckbox: SelectAllCheckbox = (event: CheckBoxChange): void => {
		setIsChecked(event.target.checked);

		if (!isChecked) {
			checkBoxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.setAttribute('checked', 'checked');
			});
		} else {
			checkBoxRef.current.map((checkbox: HTMLInputElement | null): void => {
				checkbox!.removeAttribute('checked');
			});
		}
	}

	useEffect((): () => void => {
		updateColSpan();
		window.addEventListener('resize', updateColSpan);
		return (): void => {
			window.removeEventListener('resize', updateColSpan);
		};
	}, []);

	useEffect((): void => {
		setListDataPosts(mockData);
		checkBoxRef.current = listDataPosts.map((_: PostType, index: number): HTMLInputElement | null =>
			checkBoxRef.current[index] ?? null);
	}, [listDataPosts]);

	return (
		<Container>
			<DivTitle>
				<H1>Posts</H1>
			</DivTitle>

			<NewPostButton onClick={HandleNewPost}>Adicionar novo post</NewPostButton>

			<Filters>
				<Div>
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
							<TH><Checkbox type='checkbox' onChange={selectAllCheckbox} />Título</TH>
							<TH>Autor</TH>
							<TD className='hide-on-mobile'>Categoria</TD>
							<TD className='hide-on-mobile'>Data</TD>
						</TR>
					</THeader>

					<TBody>
						{listDataPosts.length === 0 ? (
							<TRBody>
								<TDBody colSpan={colSpan}>Sem dados</TDBody>
							</TRBody>
						) : (
							listDataPosts.map((post: PostType, index: number) => (
								<TRBody key={index}>
									<TD>
										<Checkbox ref={(checkbox: HTMLInputElement | null): HTMLInputElement | null =>
											(checkBoxRef.current[index] = checkbox)} type='checkbox' data-id={index} />

											{post.title}

										<DivAction>
											<ButtonAction>Editar</ButtonAction>
											<ButtonAction>Excluir</ButtonAction>
											<ButtonAction>Visualizar</ButtonAction>
										</DivAction>
									</TD>
									<TD>{post.author}</TD>
									<TD className='hide-on-mobile'>{post.category}</TD>
									<TD className='hide-on-mobile'>{post.date}</TD>
      					</TRBody>
							))
						)}
					</TBody>

					<TFooter>
						<TR>
							<TD><Checkbox type='checkbox' onChange={selectAllCheckbox} />Título</TD>
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
			<WarnModal text={'Deseja remover este Post?'} />
		</Container>
	)
}

export default Posts;