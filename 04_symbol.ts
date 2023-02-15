console.log(Symbol("foo")===Symbol('foo'));

//프리미티브 타입의 값을 담아서 사용
//고유한 값


const sym = Symbol();

const obj = {
  [sym]:"value",
}

//접근을 막거나 필요할때 사용하는 방법
obj[sym]

//함수로 사용할때는 대문자 Symbol
//타입으로 사용할때는 소문자 symbol