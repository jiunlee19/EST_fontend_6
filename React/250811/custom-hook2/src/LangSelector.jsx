import { useLang } from "./Hook/UseLang.js";

function LangSelector() {
    // Custom Hook을 통해 Context 값과 함수를 가져옴
    const { currentLanguage, setLanguage } = useLang();

    return (
        <>
            <div>{currentLanguage.languageSelector}</div>
            <button onClick={() => setLanguage("en")}>English</button>
            <button onClick={() => setLanguage("ko")}>한국어</button>
            <button onClick={() => setLanguage("ja")}>日本語</button>
        </>
    );
}

export default LangSelector;
