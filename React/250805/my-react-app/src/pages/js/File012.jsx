// 1. CSS 파일을 import 합니다.
// 2. scss 파일을 import 합니다.
// 모듈이 설치가 안되어 있으면 읽어오지 못합니다.
// npm install -D sass-embedded

// 1,2번 문제점: CSS를 전역으로 적용하기 때문에 컴포넌트 단위로 스타일 관리하기 어렵다

// 3. tailwindcss 적용 (강사님 권장)
// 제가 자주 사용합니다. 개인적 호불호가 크기 때문에 회사에서 사용할 때는 팀원들과 상의하세요.
// 지금은 index.html에 tailwindcss를 CDN으로 추가했습니다.
// <script src="https://cdn.tailwindcss.com"></script>

import "../css/File012.css";
import SectionTest from "./SectionTest";

function File012() {
    return (
        <>
            <section>
                <h2>안녕하세요</h2>
            </section>
            <SectionTest />
        </>
    );
}

export default File012;
