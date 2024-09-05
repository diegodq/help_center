import { ReactElement } from 'react';
import {LightIcon, DarkIcon, DivLight, DivDark, Div, Text, Container} from './styles';


const Theme: React.FC = (): ReactElement => {

	return (
		<Container>
			<DivLight>
				<LightIcon />
				<Div className='footer'>
					<Text>Claro</Text>
				</Div>
			</DivLight>

			<DivDark>
				<DarkIcon />
				<Div className="footer">
					<Text>Escuro</Text>
				</Div>
			</DivDark>
		</Container>
	)
}

export default Theme;