import React, { useEffect, useState } from "react";

function getName() {
    console.log("사실은 겁나 오래기다리는중...");
    return "개리";
}

function App() {
    // const [name, setName] = useState(getName());
    // 콘솔 로그가 name 업데이트 되기 전에 매번 찍힘
    // getName이 복잡한 함수라고 가정하면, 부하가 일어날 것이다
    // getName()함수를 -> getName값으로
    const [name, setName] = useState(getName);
    // 리렌더링 돼도, 초기화가 진행되지 않는다.
    // => lazy-initialize
    // 컴포넌트 초기화 시에만 실행하고, 나머지는 실행하지 않고 미뤄버림.

    const [num, setNum] = useState(0);
    return (
        <>
            <div>
                안녕하세요 {name}! 현재 숫자는{num}입니다
            </div>
            <button onClick={() => setNum((prevNum) => prevNum + 1)}>
                {num}
            </button>
        </>
    );
}

export default App;
