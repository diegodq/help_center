import React, { ReactElement } from 'react';
import { Container, Div, Img, DivText, Title, Paragraph } from './styles';

const maintenanceImg = '/images/maintenance.png';

const Maintenance: React.FC = (): ReactElement => {
	return (
		<Container>
			<Div>
				<Img src={maintenanceImg} />

				<DivText>
					<Title>VOLTAREMOS EM BREVE.</Title>
					<Paragraph>Desculpe o transtorno. Nossos sistemas estão em manutenção no momento.</Paragraph>
				</DivText>
			</Div>
		</Container>
	)
}

export default Maintenance;