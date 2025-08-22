//5
let studentName: string = "김철수";
let studentAge: number = 20;
let isGraduated: bolean = false;
let scores: number[] = [90, 85, 92];

//6
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(1, 2));

//8. ID가 숫자 또는 문자열일 수 있는 변수를 선언해보세요.
// 유니언 타입을 사용하여 변수를 선언하세요*
let userId: number | string;
