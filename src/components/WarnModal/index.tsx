import { ReactElement } from 'react';
import { Container, Controls, ModalContent, Text, AcceptButton, CancelButton } from './styles';

type Message = {
	text: string;
}

const WarnModal: React.FC<Message> = ({text}: Message): ReactElement => {
	return (
		<Container>
			<ModalContent>
				<Text>{text}</Text>
				<Controls>
					<AcceptButton>Excluir</AcceptButton>
					<CancelButton>Cancelar</CancelButton>
				</Controls>
			</ModalContent>
		</Container>
	)
}

export default WarnModal;