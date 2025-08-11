import { createContext } from "react";

export const LoginContext = createContext();

export const users = createContext([
    { id: 1, username: "user1", password: "1234", name: "김철수" },
    { id: 2, username: "user2", password: "5678", name: "이영희" },
    { id: 3, username: "admin", password: "admin", name: "관리자" },
]);
