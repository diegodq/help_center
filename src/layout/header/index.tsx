import { ReactElement } from "react";
import { Container, LinkHome, ImgLogo, DivTitleLinks, TitlePage, DivTitleLink, Link } from "./styles";

const Logo = '/images/logo2.svg';

const Header: React.FC = (): ReactElement => {
  return (
    <Container>
      <DivTitleLink>
        <LinkHome href="/">
          <ImgLogo src={Logo} alt="Logo Automatiza fácil" height={100} />
        </LinkHome>

        <TitlePage>Central de Ajuda</TitlePage>
      </DivTitleLink>

      <DivTitleLinks>
        <Link href="https://app.automatizafacil.com.br">Área do cliente</Link>
        <Link href="#contact">Contato</Link>
      </DivTitleLinks>
    </Container>
  )
}

export default Header;