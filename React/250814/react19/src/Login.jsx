import { useState, useEffect } from "react";

export default function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/src/data/loginData.json");
                if (!response.ok) {
                    throw new Error("네트워크 문제");
                }
                const loginData = await response.json();
                setData(loginData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    });

    function AuthCheck(inputId, inputPw) {
        return data.some((d) => d.id === inputId && d.pw === inputPw);
    }

    function loginAction(e) {
        e.preventDefault(); // form 제출 시 페이지가 새로고침되는 것을 방지
        const id = document.querySelector("#id").value;
        const pw = document.querySelector("#pw").value;
        console.log(id, pw);
        const loginSuccess = AuthCheck(id, pw);
        // 자꾸 undefined
        // return 값이 없어서
        // data.find => return data.find라고 안 했을 뿐더러
        // data.find의 출려값은 boolean이 아니고, 해당하는 값을 출려해줌.
        // data.some이 적합함.
        if (loginSuccess) {
            alert("성공적으로 로그인 됐습니다!");
            setId("");
            setPw("");
        } else {
            alert("아이디 또는 비밀번호가 잘못 입력됐습니다.");
        }
    }

    return (
        <>
            <h2>로그인</h2>
            <form onSubmit={loginAction}>
                <div className="id-group">
                    <label htmlFor="id">아이디</label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div className="pw-group">
                    <label htmlFor="pw">비밀번호</label>
                    <input
                        type="text"
                        name="pw"
                        id="pw"
                        onChange={(e) => setPw(e.target.value)}
                    />
                </div>

                <div className="btn-group">
                    <button type="submit">로그인</button>
                    <button type="reset">초기화</button>
                </div>
            </form>
        </>
    );
}
