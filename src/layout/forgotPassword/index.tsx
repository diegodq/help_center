import { ReactElement } from "react";
import { Container } from "./styles";
import ForgotPasswordForm from "../../components/forgotPasswordForm";

const ForgotPassword: React.FC = (): ReactElement => {
  return (
    <Container>
      <ForgotPasswordForm />
    </Container>
  )
}

export default ForgotPassword;