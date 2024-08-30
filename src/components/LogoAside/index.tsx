import { ReactElement } from 'react';
import { Container, Div, Img, Title, BsPinAngleFillIcon,
	Link} from './styles';
const ImgLogo = '/images/logo2.svg';

const LogoAside: React.FC = (): ReactElement => {

	return (
		<Container>
			<Div>
				<Link href='/panel'>
					<Img src={ImgLogo} alt='Help Center' height={100} />
				</Link>
				<Title>Help Center</Title>
			</Div>
			<BsPinAngleFillIcon title='Fixar Menu'/>
		</Container>
	)
}

export default LogoAside;