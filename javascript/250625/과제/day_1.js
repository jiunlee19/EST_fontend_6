//quiz 제출

//quiz1
// let, const로 각각 name과 age를 넣고 출력
// let name = "이지언";
// const age = "26";
// console.log(name);
// console.log(age);

//quiz2
// let age = 25;
// age = 30;
// console.log(age);

// const country = "Korea";
// country = 'Japan';
// console.log(country);
//TypeError

//quiz6
const user = {name:'Bob'};
user.name = 'Tom'; //수정
console.log(user);
user.age = 1000; //추가
console.log(user);

//quiz7
const name = '이지언';
const age = '20';
const result = `안녕하세요. 저는 ${name}이고 ${age}살 입니다.`;
console.log(result);

//quiz8
let a=1, b=2, c=3;
const d=1, e=2, f=3;
console.log(a,b,c,d,e,f);
// 한 줄에 여러 개 변수 선언 가능

//quiz12
const num1 = 3;
const num2 = 5;
const resultVal = num1+num2;
console.log(`${num1}+${num2}=${resultVal}`);

let input1;
let input2;
function sum(input1, input2){
    const resultVal = input1+input2;
    console.log(`${input1}+${input2}=${resultVal}`);
}
sum(1,2);

//quiz13
function multiply(input1, input2){
    const resultVal = input1*input2;
    console.log(`${input1}x${input2}=${resultVal}`);
}
multiply(1,2);

function divide(input1, input2){
    const resultVal = input1/input2;
    console.log(`${input1}/${input2}=${resultVal}`);
}
divide(1,2);