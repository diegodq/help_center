import { ReactElement } from "react";
import { Container, Div, ImgNotFound, Title, SubTitle, TextNotFound } from "./styles";

const NotFoundImg = '/images/404.png';

const NotFound: React.FC = (): ReactElement => {
	return (
		<Container>
			<Div>
				<ImgNotFound src={NotFoundImg} height={300}/>
				<TextNotFound>
					<Title>Página não Encontrada</Title>
					<SubTitle>A página de que você está tentando acessar <br />
						não está acessível ou não existe.
					</SubTitle>
				</TextNotFound>
			</Div>
		</Container>
	)
}

export default NotFound;