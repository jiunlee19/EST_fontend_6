import { StrictMode, getState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store";
import App from "./App.jsx";

console.log("Redux Store 초기 상태:", store.getState());

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
