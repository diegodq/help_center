import React, { ReactElement } from 'react';
import { Container } from './styles';

const Map: React.FC = (): ReactElement => {
  const iframeStyles = {
    width: '100%',
    height: '450px',
    border: 0,
  }

  return (
    <Container>
      <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.398993766079!2d-48.01928192378824!3d-15.835613423973562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3315b59892b5%3A0xfd42f46d132ac78!2sCowmeia%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1724168412138!5m2!1spt-BR!2sbr'
      style={iframeStyles}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade' />
    </Container>
  )
}

export default Map;