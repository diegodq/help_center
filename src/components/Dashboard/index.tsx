import { ReactElement, useState } from 'react';
import { Container, Title, DivBoxes, Box, HeaderBox, BodyBox, TitleBox,
	ControlBoxButton, FormQuickDraft, Input, TextArea, RecentDraftDiv,
	TitleRecentDraft, DateRecentDraft, Li, Ul, ButtonSendQuickDraft,
	LinkDraft, WarnForm, Bold} from './styles';

type HandleSubmitFormQuickDraft = {
	(event: React.FormEvent): void;
}

type HandleVisibilityBox = {
	(boxName: BoxName): void;
}

type BoxName = 'activity' | 'quickDraft' | 'now';

const Dashboard: React.FC = (): ReactElement => {
	const [boxVisibility, setBoxVisibility] = useState({
		activity: true,
		quickDraft: true,
		now: true
	});

	const handleVisibilityBox: HandleVisibilityBox = (boxName: BoxName): void => {
		setBoxVisibility((prevState) => ({
			...prevState,
			[boxName]: !prevState[boxName],
		}))
	}

	const handleSubmitFormQuickDraft: HandleSubmitFormQuickDraft = (event: React.FormEvent): void => {
		event.preventDefault();
	}

	return (
		<Container>
			<Title>Dashboard</Title>

			<DivBoxes>
			<Box>
					<HeaderBox>
						<TitleBox>Agora</TitleBox>
						<ControlBoxButton title='Ocultar conteúdo do box' className={!boxVisibility.now ? 'rotate': ''}
							onClick={(): void => handleVisibilityBox('now')} />
					</HeaderBox>
					{boxVisibility.now &&
						<BodyBox>

						</BodyBox>
					}
				</Box>

				<Box>
					<HeaderBox>
						<TitleBox>Rascunho Rápido</TitleBox>
						<ControlBoxButton title='Ocultar conteúdo do box' className={!boxVisibility.quickDraft ? 'rotate' : ''}
							onClick={(): void => handleVisibilityBox('quickDraft')} />
					</HeaderBox>
					{boxVisibility.quickDraft &&
						<BodyBox>
							<FormQuickDraft action='/quick-draft' method='POST' onSubmit={handleSubmitFormQuickDraft}>
								<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>
								<Input type='text' name='title' id='title' placeholder='Título *' />
								<TextArea name='text' id='text' placeholder='O que você está pensando? *'></TextArea>
								<ButtonSendQuickDraft type='submit'>Salvar como rascunho</ButtonSendQuickDraft>
							</FormQuickDraft>

							<RecentDraftDiv>
								<TitleRecentDraft>Seus rascunhos recentes</TitleRecentDraft>
								<Ul>
									<Li><LinkDraft href='#'>(Sem título)</LinkDraft> <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
									<Li><LinkDraft href='#'>(Sem título)</LinkDraft> <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
									<Li><LinkDraft href='#'>(Sem título)</LinkDraft> <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
								</Ul>
							</RecentDraftDiv>
						</BodyBox>
					}
				</Box>

				<Box>
					<HeaderBox>
						<TitleBox>Atividade</TitleBox>
						<ControlBoxButton title='Ocultar conteúdo do box' className={!boxVisibility.activity ? 'rotate': ''}
							onClick={(): void => handleVisibilityBox('activity')} />
					</HeaderBox>
					{boxVisibility.activity &&
						<BodyBox>

						</BodyBox>
					}
				</Box>

			</DivBoxes>
		</Container>
	)
}

export default Dashboard;