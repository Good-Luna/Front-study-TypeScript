//Any : 어떤 아무거나 사용할 수 있다.
//최대한 쓰지 않는것이 좋다
//컴파일 타임에 타입체크가 정상적으로 이뤄지지 않음
//컴파일 옵션중 any 써야하는데 쓰지 않으면 오류 뱉는 옵션도 있음 : nolmplicitAny
function returnAny(message : any):any{
  console.log(message);
}


const any1 = returnAny("리턴 아무거나");

//any1.toString();

// let looselyTyped : any = {};

// const d = looselyTyped.a.b.c.d;

function leakingAny(obj:any){
  const a = obj.num;
  const b = a+1;
  return b;
}

const c = leakingAny({num:0});
console.log(c);
//c.indexOf("0");