import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const MainApp: React.FC = () => {

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode >
  );
}

root.render(<MainApp />);

reportWebVitals();
