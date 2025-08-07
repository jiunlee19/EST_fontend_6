import { useState } from "react";

// 이렇게 부하가 걸리는 작업의 값을 저장해둔다면 useMemo를 사용해야 할까?
// 1. useState: 상태를 저장한다. 부하 함수의 결과를 저장하면 결과는 저장되지만 부하라는 함수는 여전히 실행돼야 한다. 그렇다고 useStatefmf tkdydgkwl ahtgksms rjtdms dkslek. useStae에 결과값이 있으면 함수를 실행하지 않아도 된다.
// = useMemo 대신 useState를 사용해도 된다.
// 2. useEffect: 변수를 감시하면서, 변수가 변경될 때마다 '기능'을 실행하는 훅입니다. 변수를 저장하는 용도로는 적합하지 않다.
// 3. useMemo: 부하가 걸리는 함수를 실행하고 그 결과를 저장하는 훅. 꼭 엄청난 부하가 거리는 함수를 저장하는 것은 아니고, 시스템상의 조그마한 부하라도 이렇게 걸리는 함수를 저장하는 것은 아니고, 시스템상의 조그마한 부하라도 이렇게 저장하는 경우가 많습니다. '메모리 좀 쓰면 어떤가요...'
function 부하() {
    console.log("부하 함수가 실행되었습니다.");
    return "부하 완료";
}
function File001() {
    const [count, setCount] = useState(0);
    const result = 부하();

    return (
        <>
            <h1>Hello World</h1>
            <p>Count: {count}</p>
            <p>result: {result}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </>
    );
}
export default File001;
