import { createContext, useReducer, useEffect } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };

        case "logout":
            return { ...state, user: null };
        case "authIsReady":
            return { ...state, user: action.payload, isAuthReady: true }; // 왜 다른 곳에는 isAuthReady가 안 필요할까?
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false, // user정보가 준비됐는지 확인
    });

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: "authIsReady", payload: user });
        });
        return () => {
            unsubscribe(); // 감시중단
        };
    }, []); // 렌더링 시에 한 번만 실행되면 됨. ([])

    console.log("state =", state);

    return <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>;
};

export { AuthContextProvider, AuthContext };
