import React, { ReactElement } from "react"
import { Container, Form, Input, ImgLogo, Div, FaRegEyeSlashIcon, InputPassword, 
  LinkForgotPassword, InputEmail } from './styles';
const Logo = '/images/logo2.svg';


const Login: React.FC = (): ReactElement => {
  return (
    <Container>
      <Div>
        <ImgLogo src={Logo} height={180}/>
        <Form action="" method="POST">
          <InputEmail>
            <Input type="email" name="email" id="email" placeholder="E-mail "/>
          </InputEmail>

          <InputPassword>
            <Input type="password" name="password" id="password" placeholder="Senha" />
            <FaRegEyeSlashIcon />
          </InputPassword>

          <Input type="submit" value="Entrar" />
          
        </Form>
        <LinkForgotPassword to="/forgot-password">Esqueceu sua senha?</LinkForgotPassword>
      </Div>
    </Container>
  )
}

export default Login;