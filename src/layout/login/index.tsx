import React, { ReactElement } from "react"
import { Container, Form, Input } from './styles';

const Login: React.FC = (): ReactElement => {
  return (
    <Container>
      <Form action="" method="POST">
        <Input type="text" name="email" id="email" />
        <Input type="password" name="password" id="password" />

        <Input type="submit" value="Login" />
      </Form>
    </Container>
  )
}

export default Login;