import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import HomePage from "./Pages/HomePage";
import NavigateBar from "./Components/Navigation/NavigateBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const MainApp: React.FC = () => {

  return (
    <React.StrictMode>
        <BrowserRouter>
          <NavigateBar />
          <Routes>
            <Route path="/login_register" element={<LoginRegisterPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode >
  );
}

root.render(<MainApp />);

reportWebVitals();
