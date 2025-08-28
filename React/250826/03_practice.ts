class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    bark() {
        return "멍멍!";
    }
}

class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    meow() {
        return "야옹!";
    }
}

function getLength(value: string | number): number {
    // value의 타입이 문자열이면
    if (typeof value === "string") {
        return value.length; // .length 속성 사용
    }
    // value의 타입이 숫자이면
    else {
        return value.toString().length;
    }
}

// Dog나 Cat을 받아서 각각 알맞은 소리를 반환해야 합니다.
function makeSound(animal: Dog | Cat) {
    // animal 객체가 Dog 클래스의 인스턴스(객체)인지 확인
    if (animal instanceof Dog) {
        console.log(animal.bark());
    } else {
        console.log(animal.meow());
    }
}

//
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

// 도형의 면적을 계산하는 함수를 작성하세요.
function calculateArea(shape: Shape): number {
    // 여기에 구현
    if (shape instanceof Square) {
        return shape[size] ** 2;
    } else if (shape instanceof Rectangle) {
        return shape[width] * shape[height];
    } else {
      return shape[radius] * 
    }
}
