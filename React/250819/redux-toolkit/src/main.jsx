// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import App2 from "./App2.jsx";

console.log("Redux Store 초기 상태:", store.getState());

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
            <App2 />
        </Provider>
    </StrictMode>
);
