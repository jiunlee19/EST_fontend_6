import { createContext, useState } from "react";

// Context 생성
export const LanguageContext = createContext();

// 다국어 텍스트 데이터
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

// Provider 컴포넌트
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("ko");
    const currentLanguage = languages[language];

    // Context가 제공할 value
    const value = { currentLanguage, language, setLanguage };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
