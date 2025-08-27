interface User = {
  name:string,
  age:number,
  email?:string,
}
//
interface Admin extends User = {
  name:string,
  age:number,
  email?:string,
  permissions:[string],
}
//
// 성공/실패를 나타내는 응답 타입
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

// 제네릭 함수 createResponse를 완성하세요
// 성공시: success: true, data 포함
// 실패시: success: false
function createResponse<T>(/* 매개변수를 정의하세요 */) {
  // 함수 내용을 구현하세요
}

// 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
const userResponse = createResponse({ name: "홍길동", age: 20 }, true);
const errorResponse = createResponse<User>(null, false, "사용자를 찾을 수 없습니다");