import { ReactElement } from 'react';
import { Container, Title, DivBoxes, Box, HeaderBox, BodyBox, TitleBox,
	ControlBoxButton, FormQuickDraft, Input, TextArea, RecentDraftDiv,
	TitleRecentDraft, DateRecentDraft, Li, Ul, ButtonSendQuickDraft } from './styles';

type HandleSubmitFormQuickDraft = {
	(event: React.FormEvent): void;
}

const Dashboard: React.FC = (): ReactElement => {
	const handleSubmitFormQuickDraft: HandleSubmitFormQuickDraft = (event: React.FormEvent): void => {
		event.preventDefault();
	}

	return (
		<Container>
			<Title>Dashboard</Title>

			<DivBoxes>
				<Box>
					<HeaderBox>
						<TitleBox>Atividade</TitleBox>
						<ControlBoxButton />
					</HeaderBox>
					<BodyBox>

					</BodyBox>
				</Box>

				<Box>
					<HeaderBox>
						<TitleBox>Rascunho Rápido</TitleBox>
						<ControlBoxButton />
					</HeaderBox>
					<BodyBox>
						<FormQuickDraft action='' method='POST' onSubmit={handleSubmitFormQuickDraft}>
							<Input type='text' name='title' id='title' placeholder='Título' />
							<TextArea name='text' id='text' placeholder='O que você está pensando?'></TextArea>
							<ButtonSendQuickDraft type='submit'>Salvar como rascunho</ButtonSendQuickDraft>
						</FormQuickDraft>

						<RecentDraftDiv>
							<TitleRecentDraft>Seus rascunhos recentes</TitleRecentDraft>
							<Ul>
								<Li>(Sem título) <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
								<Li>(Sem título) <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
								<Li>(Sem título) <DateRecentDraft>2 de setembro de 2024</DateRecentDraft></Li>
							</Ul>
						</RecentDraftDiv>
					</BodyBox>
				</Box>

				<Box>
					<HeaderBox>
						<TitleBox>Agora</TitleBox>
						<ControlBoxButton />
					</HeaderBox>
					<BodyBox>

					</BodyBox>
				</Box>
			</DivBoxes>
		</Container>
	)
}

export default Dashboard;