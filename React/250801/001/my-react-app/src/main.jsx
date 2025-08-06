import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Main() {
    return (
        <>
            <p>메인입니다.</p>
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <Main />
        <Footer />
    </StrictMode>
);

export default Main;
