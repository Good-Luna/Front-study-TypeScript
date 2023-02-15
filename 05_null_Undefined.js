"use strict";
//설정하지 않을시 모든 타입의 서브타입으로해당된다.
//number에 할당될 수 있게 된다는 뜻
//컴파일 옵션에 --strictNullcheck 사용하면 null과 undefined는 void나 자기자신에게만 할당가능
//이경우 null,undefined 할당하려면 union type 이용!
//let Myname : string = null;
let union = null; //합집합으로 사용하면 함께 사용 가능
union = "Mark";
