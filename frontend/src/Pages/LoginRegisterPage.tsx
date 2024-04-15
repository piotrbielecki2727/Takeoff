import React from "react";
import LoginRegisterWindow from "../Components/RegisterAndLogin/LoginRegisterWindow";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

const LoginRegisterPage: React.FC = () => {

  const token = Cookies.get('token');

  if (token) {
    return <Navigate to="/" />;
  }

  return <LoginRegisterWindow />
};

export default LoginRegisterPage;
