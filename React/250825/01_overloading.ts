function greet(name: string): string;
function greet(age: number): string;
// 오버로딩: 같은 이름의 함수인데, 매개변수가 다름.
// 아래의 union 타입과 다른 이유
// 타입추론의 안정성 면에서 오버로딩이 union타입 보다 낫다.

function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old!`;
    }
}

console.log(greet("TypeScript")); // "Hello, TypeScript!"
console.log(greet(25)); // "You are 25 years old!"
