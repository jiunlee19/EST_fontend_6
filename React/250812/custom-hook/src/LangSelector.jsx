import useLang from "./Hook/UseLang";
import useLocalStorage from "./Hook/UseLocalStorage";

export default function LangSelector() {
    const { languageData, currentLanguage, changeLanguage } = useLang();

    const { myLang, selectedLang } = useLocalStorage();
    // useLocalStorage 훅을 사용하여 로컬 스토리지에 저장된 언어 상태와 언어 변경 함수를 가져옵니다.

    return (
        <>
            <form action="#">
                <label htmlFor="myLang">기본 언어 설정</label>
                <select
                    name="languages"
                    id="myLang"
                    onChange={selectedLang}
                    // select 박스의 현재 선택된 value값을 로컬 스토리지 상태(myLang)와 동기화합니다.
                    value={myLang}
                >
                    <option value="en">English</option>
                    <option value="ko">한국어</option>
                    <option value="ja">日本語</option>
                </select>
            </form>
            <hr />
            <h2>{languageData.languageSelector}</h2>
            <button
                onClick={() => {
                    changeLanguage("en");
                }}
                disabled={currentLanguage === "en"}
            >
                English
            </button>
            <button
                onClick={() => {
                    changeLanguage("ko");
                }}
                disabled={currentLanguage === "ko"}
            >
                한국어
            </button>
            <button
                onClick={() => {
                    changeLanguage("ja");
                }}
                disabled={currentLanguage === "ja"}
            >
                日本語
            </button>
        </>
    );
}
