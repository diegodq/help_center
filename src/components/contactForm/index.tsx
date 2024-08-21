import { ReactElement } from "react";
import { Form, Input, TextArea, Select, Option, Div, Span } from "./styles";

const ContactForm: React.FC = ():ReactElement => {
  return (
    <Form action="" method="POST">
      <Div className="emailPhone">
        <Input type="text" placeholder="Nome*" />
        <Input type="tel" placeholder="Telefone*" />
      </Div>

      <Input type="email" placeholder="E-mail*" />

      <TextArea placeholder="Mensagem*"></TextArea>

      <Div className="divRadioWarning">
        <Input type="radio" className="radioButton" /> 
        <Span className="readWarning">Li e compreendi o Aviso de Privacidade</Span>
      </Div>

      <Div className="agreement">
        <Span className="acceptAgreement">Li e compreendi o Aviso de Privacidade*</Span>
        <Select>
          <Option value="1">Sim</Option>
          <Option value="0">Não</Option>
        </Select>
      </Div>

      <Input type="submit" value="Enviar" className="inputSubmit" />
    </Form>
  )
}

export default ContactForm;