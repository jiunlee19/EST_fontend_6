function File001() {
    return (
        <>
            <h1>Hello, React!</h1>
            {/* 이것은 동작하지 않고 */}
            {/* a 태그는 페이지를 새로고침합니다. React의 SPA 특성과 충돌합니다. */}
            {/*SPA 특성과 충돌하지 않으려면, JS에서 마치 preventDefault()를 호출한 것처럼 동작하게 해야 합니다. 그래서 별도의 라우팅 라이브러리 사용해야 합니다. */}
            <a href="/about">눌러</a>
            {/* 이것은 이동합니다 */}
            <a href="https://weniv.co.kr">Weniv</a>
        </>
    );
}
export default File001;
