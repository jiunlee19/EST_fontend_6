import { use, useState, Suspense } from "react";

// 데이터를 가져오는 비동기 함수 (Promise를 반환)
function fetchTodo(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos = {
                1: { id: 1, title: "리액트 공부하기", done: false },
                2: { id: 2, title: "운동하기", done: true },
                3: { id: 3, title: "책 읽기", done: false },
            };
            resolve(
                todos[id] || {
                    id: id,
                    title: "알 수 없음",
                    done: false,
                }
            );
        }, 1000);
    });
}

 * 데이터를 실제로 소비하고 화면에 그리는 자식 컴포넌트입니다.
 * use()를 사용하기 위해 컴포넌트를 분리하는 것이 일반적입니다.
 */
function TodoInfo({ todoPromise }) {
    // [핵심 변경점 1] use(promise)
    // 이 한 줄이 useEffect 내의 .then() 로직과 데이터 상태 저장을 모두 대체합니다.
    // - Promise가 pending 상태일 때: React는 렌더링을 '일시 중단'하고 가장 가까운 <Suspense>의 fallback을 보여줍니다.
    // - Promise가 resolve되면: resolve된 값을 반환하고 컴포넌트 렌더링을 재개합니다.
    // - useEffect 버전의 setLoading(false), setTodo(data) 과정이 모두 여기에 포함됩니다.
    const todo = use(todoPromise);

    return (
        <div>
            <h3>{todo.title}</h3>
            <p>상태: {todo.done ? "완료" : "미완료"}</p>
        </div>
    );
}

function TodoApp() {
    const [selectedId, setSelectedId] = useState(null);

    // [핵심 변경점 2] 상태 관리의 변화
    // useEffect 버전에서는 로딩, 데이터, 에러 상태를 각각 관리했습니다.
    // (예: const [todo, setTodo] = useState(null); const [loading, setLoading] = useState(false);)
    // use() 버전에서는 Promise 객체 자체를 상태로 관리합니다.
    const [todoPromise, setTodoPromise] = useState(null);

    // [핵심 변경점 3] 데이터 패칭 로직의 위치
    // useEffect는 selectedId가 변경될 때마다 부수 효과로 데이터를 패칭했습니다.
    // 이제는 버튼 클릭이라는 이벤트 발생 시점에 직접 데이터 패칭을 시작하고, 그 결과(Promise)를 상태에 저장합니다.
    const handleTodoSelect = (selectedId) => {
        setSelectedId(selectedId);
        setTodoPromise(fetchTodo(selectedId));
    };

    return (
        <div>
            <h2>할 일 앱</h2>
            <button onClick={() => handleTodoSelect(1)}>할 일 1</button>
            <button onClick={() => handleTodoSelect(2)}>할 일 2</button>
            <button onClick={() => handleTodoSelect(3)}>할 일 3</button>

            {todoPromise ? (
                <>
                    {/* [핵심 변경점 4] 로딩 UI 처리 방식 */}
                    {/* useEffect 버전의 {loading && <p>로딩 중...</p>} 와 같은 조건부 렌더링을 Suspense가 대체합니다. */}
                    {/* TodoInfo 컴포넌트가 렌더링을 '일시 중단'하면 fallback에 지정된 UI가 자동으로 렌더링됩니다. */}
                    <Suspense fallback={<p>로딩 중...</p>}>
                        {/* Promise 자체를 prop으로 자식 컴포넌트에 넘겨줍니다. */}
                        <TodoInfo todoPromise={todoPromise} />
                    </Suspense>
                </>
            ) : (
                <p>👆 위에서 할 일을 선택해주세요!</p>
            )}
        </div>
    );
}
export default TodoApp;
