import React, { ReactElement } from "react";
import { Container } from './styles';
import LoginForm from "../../components/loginForm";

const Login: React.FC = (): ReactElement => {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

export default Login;