import React, { ReactElement } from "react";
import { Container, DivText, DivForm, LuHelpCircleIcon, H1, H2, Span, Paragraph } from "./styles";
import ContactForm from "../../components/ContactForm";


const Form: React.FC = (): ReactElement => {
  return (
    <Container id="contact">
      <DivText>
        <LuHelpCircleIcon />
        <H2>Está com alguma dúvida ou sugestão?</H2>
        <Span>Entre em contato conosco agora mesmo, <br />estamos prontos para te atender!</Span>
        <Paragraph>É só preencher o formulário!</Paragraph>
      </DivText>

      <DivForm>
        <H1>Ficamos Felizes em Ajudar</H1>
        <ContactForm />
      </DivForm>
    </Container>
  )
}

export default Form;