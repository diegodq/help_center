import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import Painel from "../layout/Panel";
import NotFound from "../components/NotFound";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
				<Route path="/reset-password" element={<ResetPasswordForm />} />
				<Route path="/panel/*" element={<Painel />} />
				<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;