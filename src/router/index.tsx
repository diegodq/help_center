import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../layout/login";
import ForgotPassword from "../layout/forgotPassword";
import ResetPasswordForm from "../components/resetPasswordForm";
import Painel from "../layout/painel";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPasswordForm />} />
				<Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;