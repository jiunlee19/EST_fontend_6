import { useContext, createContext, useState } from "react";

const languages = createContext({
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
});

const File015 = () => {
    return <LanguageSelector />;
};

const LanguageSelector = () => {
    const { en, ko, ja } = useContext(languages);
    const [currentLanguage, setCurrentLanguage] = useState(en);

    const handleLanguageChange = (lang) => {
        switch (lang) {
            case "en":
                setCurrentLanguage(en);
                break;
            case "ko":
                setCurrentLanguage(ko);
                break;
            case "ja":
                setCurrentLanguage(ja);
                break;
            default:
                setCurrentLanguage(en);
        }
    };

    return (
        <div>
            <p>언어선택:</p>
            <p>
                <button
                    onClick={(e) =>
                        handleLanguageChange(
                            e.target === "BUTTON"
                                ? "en"
                                : console.log("English Button clicked")
                        )
                    }
                >
                    English
                </button>
                <button
                    onClick={(e) =>
                        handleLanguageChange(
                            e.target === "BUTTON"
                                ? "ko"
                                : console.log("Korean Button clicked")
                        )
                    }
                >
                    한국어
                </button>
                <button
                    onClick={(e) =>
                        handleLanguageChange(
                            e.target === "BUTTON"
                                ? "ja"
                                : console.log("japan Button clicked")
                        )
                    }
                >
                    日本語
                </button>
            </p>

            <h1>{currentLanguage.title}</h1>
            <p>{currentLanguage.greeting}</p>
            <p>{currentLanguage.description}</p>
        </div>
    );
};

export default File015;
