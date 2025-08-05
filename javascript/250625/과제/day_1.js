//quiz 제출

//quiz1
// 지문 : let, const로 각각 name과 age를 넣고 출력
// 출력결과 : Ghost, 1000

// let name = "Ghost,";
// const age = 1000;
// console.log(name);
// console.log(age);

//quiz2
// 지문 : let으로 age 25, 30으로 변경후, age변수 출력하기
// 출력결과 : 30

// let age = 25;
// age = 30;
// console.log(age);

// const country = "Korea";
// country = 'Japan';
// console.log(country);
//TypeError

//quiz6
// 지문 : 객체의 프로퍼티 변경
// const user = { name: 'Bob' } 후 user.name = 'Tom'
// 출력결과 : {name: 'Tom'}
const user = {name:'Bob'};
user.name = 'Tom'; //수정
console.log(user);
user.age = 1000; //추가
console.log(user);

//quiz7
// 지문 : 이름(name)과 나이(age) 변수를 선언하고, 템플릿 리터럴로 "안녕하세요, 저는 name이고 age살입니다."를 출력해보세요.
// 출력결과 : 안녕하세요, 저는 Ghost이고 1000살입니다.
const name = '이지언';
const age = '20';
const result = `안녕하세요. 저는 ${name}이고 ${age}살 입니다.`;
console.log(result);

//quiz8
let a=1, b=2, c=3;
const d=1, e=2, f=3;
console.log(a,b,c,d,e,f);
// 한 줄에 여러 개 변수 선언 가능

// quiz10
// 지문 : 배열요소의 값 변경하기
// const fruits = [ 'apple','banana'] 에서 배열의 첫번째 요소인 'qpple'을 'Orange'로 바꾼후, fruits 변수 출력하기
// 출력결과 [ 'Orange','banana']
const fruits = ['apple','banana'];
console.log(fruits[1]);

fruits[0] = 'Orange';
console.log(fruits);

// quiz11
// 지문 : name 변수에 자신의 이름을 넣고, 템플릿 리터럴로 "안녕하세요, name님!"을 출력해보세요.
// 출력결과 : 안녕하세요, Ghost 님
const name="이지언";1
console.log(`안녕하세요, ${name}님`);

//quiz12
// 지문 : 두수의 합구하기. num1, num2변수에 각각 숫자를 넣고, 두수의 합을 템플릿 리터럴로 출력해 보세요
// 출력결과 예 : 3 + 5 = 8

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

//quiz13. 곱셉과 나눗셈 출력
// 지문 : a, b 변수에 각각 6과 2를 할당하고, 곱셈결과와 나눗셈 결과를 템플릿 리터럴로 출력해보세요
// 출력결과 : 6 * 2 = 12 , 6 / 2 = 3

const a = 6;
const b = 2;
const multiplyResult = a*b;
console.log(`${a} * ${b} = ${multiplyResult}`);

const divideResult = a/b;
console.log(`${a} / ${b} = ${divideResult}`);

// 추가 :  더하기 함수, 곱하기 함수, 나누기 함수 만들어보기(sum(), multi(), div() )

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