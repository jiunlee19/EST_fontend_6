const fruits = ['apple','banana','mango']; //Array
console.log(fruits[1]);

const friend1 = {name:"ghost",age:1000}; //Object
const friend2 = {name:"ejey", age:500}; //Object
const friends = [friend1, friend2];
console.log(friends);

//원시타입 vs 객체타입

fruits[0] = 'orange';
console.log(fruits);
//const 인데, 값이 바뀜. => 객체타입이라 괜찮음

friend1.age =100;
console.log(friend1);
//객체타입 접근 방법