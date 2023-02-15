//주로 사용
//let list:number[] =[1,2,3];
//에러나는 경우 있으므로 주의 사용
//let list:Array<number> = [1,2,3];

let list:(number|string)[] = [1,2,3,"4"];
list.push("Mark");

console.log(list);