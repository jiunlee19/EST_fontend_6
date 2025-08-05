import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import NavBar from "./components/NavBar";
import App from "./App";
import styles from "styled-components";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
