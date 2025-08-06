// 눌러도 증가되지 않는 미스터리!!
// 일반 변수는 변경이 되어도 리렌더링 하지 않습니다.
// 리액트에 성능을 높이기 위한 조치입니다.
// 만약 일반 변수가 변할 때 마다 매번 리렌더링 해버리면 성능이 현저히 떨어집니다.
// 그래서 필요한 변수를 감시합니다.
// 감시한 변수가 수정되면, 렌더링합니다. => useState

import { useState } from "react";

function File008() {
    // legacy code
    // let count = 0;
    // const increment = () => {
    //     count += 1;
    //     console.log("Count:", count);
    // };
    // return (
    //     <div>
    //         <div>{count}</div>
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // );

    // modern code
    // let count = useState(0);
    // count[0] => 0
    // count[1] => setCount 값을 변경하는 함수
    // 구조분해할당 하여 사용
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log("Count:", count);
    };
    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default File008;

// 변수를 관리하는 방법과 함수를 관리하는 방법이 특수하다.
// 왜 둘 다 특수하게 관리할까? -> 이해 못 함
