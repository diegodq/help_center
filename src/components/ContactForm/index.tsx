import React, { ReactElement } from 'react';
import { Form, Input, TextArea, Select, Option, Div, Span, ErrorMessage} from './styles';

const ContactForm: React.FC = ():ReactElement => {
  return (
    <Form action='' method='POST'>
      <Div className='emailPhone'>
        <Div className='separator'>
          <Input type='text' placeholder='Nome *' />
          <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
        </Div>

        <Div className="separator">
          <Input type='tel' placeholder='Telefone *' />
          <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
        </Div>
      </Div>

      <Div>
        <Input type='email' placeholder='E-mail *' />
        <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
      </Div>

      <label>
        <TextArea placeholder='Mensagem *'></TextArea>
        <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
      </label>

      <Div className='divRadioWarning'>
        <Input type='radio' className='radioButton' />
        <Span className='readWarning'>Li e compreendi o Aviso de Privacidade</Span>
        <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
      </Div>

      <Div className='agreement'>
        <Span className='acceptAgreement'>Aceito receber e-mail marketing </Span>
        <Select>
          <Option value='1'>Sim</Option>
          <Option value='0'>Não</Option>
        </Select>
        <ErrorMessage>Este campo é obrigatório*</ErrorMessage>
      </Div>

      <Input type='submit' value='Enviar' className='inputSubmit' />
    </Form>
  )
}

export default ContactForm;