import { useActionState } from "react";

export default function Login() {
    const [state, formAction, isPending] = useActionState(
        async (previousState, formData) => {
            const userName = formData.get("userName");
            const password = formData.get("password");
            try {
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userName, password }),
                });
                if (!response.ok) throw new Error("에러발생!!비사앙!!!");
                const result = await response.json();
                return {
                    success: true,
                    message: `로그인 성공! ${result.user.userName}님 환영합니다.`,
                };
            } catch (error) {
                return {
                    success: false,
                    message: error.message || "로그인에 실패하였습니다.",
                };
            }
        },
        { success: false, message: "" }
    );
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
                            name="userName"
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
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type="submit" disabled={isPending}>
                        {isPending ? "전송 중..." : "전송하기"}
                    </button>
                    <button type="reset" disabled={isPending}>
                        초기화
                    </button>
                </div>
            </form>
            {state.message && (
                <div>
                    <p>{state.message}</p>
                </div>
            )}
        </div>
    );
}
