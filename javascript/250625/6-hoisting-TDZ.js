//호이스팅

// console.log(a);
//ReferenceError: Cannot access 'a' before initialization
//TDZ 호이스팅은 일어났지만, 값 선언 전까지 접근/사용 불가
let a =5;
console.log(a);

console.log(b);
//TDZ 호이스팅은 일어났지만, 값 선언 전까지 접근/사용 불가
var b =5;
console.log(b);