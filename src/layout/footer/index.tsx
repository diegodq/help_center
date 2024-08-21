import { ReactElement } from "react";
import { Container, DivFooter, TfiHelpAltIcon, Div, TitleHelpCenter, EmailLink, Link,
  FaLinkedinIcon, RiInstagramFillIcon
 } from "./styles";

const Footer: React.FC = (): ReactElement => {
  return (
    <Container>
      <DivFooter>
        <TfiHelpAltIcon />
        <Div>
          <TitleHelpCenter>Atendimento suporte</TitleHelpCenter>
          <EmailLink href="mailto:contato@automatizafacil.com.br">contato@automatizafacil.com.br</EmailLink>
        </Div>
      </DivFooter>

      <DivFooter>
        <Link href="#">
          <FaLinkedinIcon />
        </Link>
        <Link href="#">
          <RiInstagramFillIcon />
        </Link>
      </DivFooter>
    </Container>
  )
}

export default Footer;