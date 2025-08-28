import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "login":
            return { ...state, user: null };
        default:
            return state;
    }
};

// 회원정보가 담겨있는 context를 객체를 구독할 컴포넌트의 묶음 범위를 설정합니다.
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    // useReducer 가 관리하는 state 가 잘 업데이트가 되었는지 콘솔로 찍어봅시다!
    console.log("context : ", state);

    return (
        // { ...state, dispatch } 이 두 가지 값이 context객체를 통해 접근할 수 있는 값이 됩니다.
        <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>
    );
};
