// ## 문제 7: 객체 타입
// 다음 객체에 적절한 타입을 지정해보세요.

// 타입을 지정하세요
let book = {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
} : {
    title: "TypeScript 입문",
    author: "홍길동",
    pages: 300,
    isAvailable: true,
};

// 9
interface User {
    name: string;
    email?: string;
    age: number;
}
let user: User = {
    name: "이영희",
    email: "lee@email.com",
    age: 25,
};

// 10
function getInfo(
  name: string, 
  age: number, 
  isStudent: boolean) 
  : {
    name: string;
    age: number;
    status: string;
} {
    return{
      name,
      age,
      status:isStudent ? "학생" : "일반",
    };
};
