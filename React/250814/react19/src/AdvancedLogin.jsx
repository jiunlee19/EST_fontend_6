import { useActionState } from "react";

async function loginAction(previousState, formData) {
    const userName = formData.get("userName");
    const password = formData.get("password");

    if (!userName || !password) {
        return "아이디와 비밀번호를 모두 입력해주세요.";
    }

    try {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            return `로그인 성공! ${result.user.userName}님 환영합니다.`;
        } else {
            return result.message || "로그인에 실패했습니다.";
        }
    } catch (error) {
        return `서버 연결 실패: ${error.message}`;
    }
}

export default function Login() {
    // 2.
    const [message, formAction, isPending] = useActionState(loginAction, "");

    return (
        <div>
            <h2>로그인</h2>
            <form action={formAction}>
                <div>
                    <label htmlFor="userName">
                        아이디:
                        <input
                            id="userName"
                            type="text"
                            name="userName" // 매우 중요
                            placeholder="아이디를 입력하세요"
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        비밀번호:
                        <input
                            id="password"
                            type="password"
                            name="password" // 매우 중요
                            placeholder="비밀번호를 입력하세요"
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>
                <div>
                    {/* 로딩 상태를 'isLoading' 대신 'isPending'으로 확인 */}
                    <button type="submit" disabled={isPending}>
                        {isPending ? "로그인 중..." : "로그인"}
                    </button>
                    {/* type="reset"을 사용해 간단하게 폼을 초기화 */}
                    <button type="reset" disabled={isPending}>
                        초기화
                    </button>
                </div>
            </form>
            {message && (
                <div>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
}
