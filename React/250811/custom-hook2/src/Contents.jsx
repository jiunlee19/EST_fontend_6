import { useLang } from "./Hook/UseLang.js";

function Contents() {
    // Custom Hook을 통해 현재 언어의 텍스트를 가져옴
    const { currentLanguage } = useLang();

    return (
        <div>
            <h2>{currentLanguage.title}</h2>
            <p>{currentLanguage.greeting}</p>
            <p>{currentLanguage.description}</p>
        </div>
    );
}

export default Contents;
