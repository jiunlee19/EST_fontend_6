const a = 3>5;
console.log(a, typeof a); //false boolean

const b= 5;
console.log(typeof b); //number

const c="5";
console.log(typeof c) //string

const d=undefined;
console.log(typeof d); //undefined

const e = null;
console.log(typeof e); //object

const f = 1+'1'; //string+number= string
console.log(`${f}는 ${typeof f}이다.`); //(자동형변환)11는 string이다.

const g = 2 * "2"; //string * number = number
console.log(`${g}는 ${typeof g}이다.`); //4는 number이다.
//연산자에 따라 자동형변환 결과가 다름. 결과값은 찍어서 알아보기. 

const number = "15";
const result = Number(number)+3;//명시적 형변환
console.log(result);

console.log(+number);

const baseFont = 16;
const targetFont = 24;
const emFont = targetFont / baseFont;
console.log(`${targetFont}px은 ${baseFont}px의 ${emFont}em 입니다.`);