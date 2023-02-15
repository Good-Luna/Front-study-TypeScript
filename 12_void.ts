function returnVoid(message:string):void{
  console.log(message)
  return undefined;// undefined;만 void의 유일한 반환값
}

const r = returnVoid("리턴이 없다");

