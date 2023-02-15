"use strict";
//튜플은 대괄호 안에 다른 타입 넣기 가능
let x;
x = ["hello", 21];
//x=[33,"geaa"]; //순서 바뀌면 넣기 X
//x[2] = "woda" //튜플은 고정된 길이값을 갖으므로 넣기 X
const person3 = ["Marl", 22];
const [first, second] = person3;
