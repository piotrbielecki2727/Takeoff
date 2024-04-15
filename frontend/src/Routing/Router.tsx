import React from "react";
import LoginRegisterPage from "../Pages/LoginRegisterPage"
import NavigateBar from "../Components/Navigation/NavigateBar";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import AdminPage from "../Pages/AdminPage";

const Router: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <NavigateBar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/adminPage" element={<AdminPage />} />
          </Route>
          <Route path="/login_register" element={<LoginRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
