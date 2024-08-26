import { ReactElement } from "react";
import { Container, Div, Img, Title, BsPinAngleFillIcon } from "./styles";
const ImgLogo = '/images/logo2.svg';

const LogoAside: React.FC = (): ReactElement => {
	return (
		<Container>
			<Div>
				<Img src={ImgLogo} alt="Logo Help Center" height={100} />
				<Title>Help Center</Title>
			</Div>
			<BsPinAngleFillIcon title="Fixar Menu"/>
		</Container>
	)
}

export default LogoAside;