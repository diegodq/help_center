import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import Panel from "../layout/Panel";
import NotFound from "../components/NotFound";
import PrivateRoute from "./PrivateRoute";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
				<Route path="/reset-password" element={<ResetPasswordForm />} />
				<Route path="/panel/*" element={<PrivateRoute> <Panel /> </PrivateRoute>} />
				<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;