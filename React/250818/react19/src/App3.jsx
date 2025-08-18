import { use, useState, Suspense } from "react";

function fetchTodo(id) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const todos = {
                1: { id: 1, title: "리액트 공부하기", done: false },
                2: { id: 2, title: "운동하기", done: true },
                3: { id: 3, title: "책 읽기", done: false },
            };
            resolve(
                todos[id] || {
                    id: userId,
                    title: "알 수 없음",
                    done: false,
                }
            );
        }, 1000);
    });
}

function TodoInfo({ todoPromise }) {
    const todo = use(todoPromise);
    console.log(todoPromise);

    return (
        <div>
            <h3>{todo.title}</h3>
            <p>상태: {todo.done ? "완료" : "미완료"}</p>
        </div>
    );
}

function TodoApp() {
    const [selectedId, setSelectedId] = useState(null);
    const [todoPromise, setTodoPromise] = useState(null);

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
                    <Suspense fallback={<p>로딩 중...</p>} />
                    <TodoInfo todoPromise={todoPromise} />
                </>
            ) : (
                // 초기 렌더링
                <p>👆 위에서 할 일을 선택해주세요!</p>
            )}
        </div>
    );
}
export default TodoApp;
