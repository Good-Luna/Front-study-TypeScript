const person = {name:"Suyeon",age:31};

//person is not object type

//create object type
//primitive 타입이 아닌것을 나타내고 싶을때 사용하는 타입
// const person2 = Object.create(31);
const person2 = Object.create({name:"Suyeon", age:31});

//object 타입은 주로 오브젝트가 또는 널값이 아닌 경우의 값을 찾는데 사용된다.
declare function  create(oparams:object|null):void;