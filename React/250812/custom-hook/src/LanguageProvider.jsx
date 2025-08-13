import { createContext, useContext, useState } from "react";
// 수정(import)
import useLocalStorage from "./Hook/useLocalStorage";

const languages = {
    en: {
        title: "Multi-language App",
        greeting: "Hello, welcome to our app!",
        description: "This app supports multiple languages.",
        languageSelector: "Select Language:",
    },
    ko: {
        title: "다국어 앱",
        greeting: "안녕하세요, 우리 앱에 오신 것을 환영합니다!",
        description: "이 앱은 여러 언어를 지원합니다.",
        languageSelector: "언어 선택:",
    },
    ja: {
        title: "多言語アプリ",
        greeting: "こんにちは、私たちのアプリへようこそ！",
        description: "このアプリは複数の言語をサポートしています。",
        languageSelector: "言語を選択：",
    },
};

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    // useLocalStorage 훅을 사용하여 로컬 스토리지에서 저장된 언어 값을 가져옵니다.
    const { myLang } = useLocalStorage();
    // useState의 초기값으로 myLang을 사용해, 페이지 재로딩 시에도
    // 로컬 스토리지에 저장된 언어 설정이 유지되도록 합니다.
    const [languageState, setLanguageState] = useState(myLang);

    const changeLanguage = (lang) => {
        setLanguageState(lang);
    };
    return (
        <LanguageContext.Provider
            value={{ languageState, changeLanguage, languages }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageProvider, LanguageContext };
