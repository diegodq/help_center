import React, { ReactElement } from 'react';
import { Container, Div, Title, Ul, Li, LinkShowAllPosts } from './styles';

const Articles: React.FC = (): ReactElement => {
  return (
    <Container>
      <Div>
        <Title>Artigos mais recentes</Title>
        <Ul>
          <Li>LinearDBAdmin - Ferramenta para Acesso à Banco de Dados</Li>
        </Ul>

        <LinkShowAllPosts href="#">Exibir todos os artigos dessa seção</LinkShowAllPosts>
      </Div>
      <Div>
        <Title>Artigos mais populares</Title>
        <Ul>
          <Li>LinearDBAdmin - Ferramenta para Acesso à Banco de Dados</Li>
        </Ul>
        <LinkShowAllPosts href="#">Exibir todos os artigos dessa seção</LinkShowAllPosts>
      </Div>
      <Div>
        <Title>Suas últimas leituras</Title>
        <Ul>
          <Li>LinearDBAdmin - Ferramenta para Acesso à Banco de Dados</Li>
        </Ul>
        <LinkShowAllPosts href="#">Exibir todos os artigos dessa seção</LinkShowAllPosts>
      </Div>
    </Container>
  )
}

export default Articles;