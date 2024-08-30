import { ReactElement } from 'react';
import {LightIcon, DarkIcon, DivLight, DivDark,
	RadioLight, RadioDark, Div, Text, Container} from './styles';

const Theme: React.FC = (): ReactElement => {
	return (
		<Container>
			<DivLight>
				<LightIcon />
				<Div className='footer'>
					<RadioLight type='radio' name='themeType' />
					<Text>Claro</Text>
				</Div>
			</DivLight>

			<DivDark>
				<DarkIcon />
				<Div className="footer">
					<RadioDark type='radio' name='themeType' />
					<Text>Escuro</Text>
				</Div>
			</DivDark>
		</Container>
	)
}

export default Theme;''