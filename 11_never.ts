// 모든 타입의 서브타입/ 모든타입에 할당 할 수 있습니다
// 하지만 never에는 그 어떤것도 할당 할 수 없음
// any 조차도 never에는 할당 불가능
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용


function error(message:string):never{
  throw new Error(message);
}

function fail(){
  return error("failed");
}

function infinitedLoop():never{
  while(true){}
}

declare const aa  : string|number;

if(typeof aa !=="string"){
  aa;
}
//T타입이 string이면 스트링으로 보내고 아니면 never
//잘못된 타입을 넣는 것을 막는 용도로 사용된다.
type Indexable<T> = T extends string ? T &{[index:string]:any}:never;

