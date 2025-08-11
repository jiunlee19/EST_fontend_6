import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import FunctionalComp from "./FunctionalComp.jsx";
import HookFlow from "./HookFlow.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <FunctionalComp />
        <HookFlow />
    </StrictMode>
);
