// TS 의 변수는 모두 : 다음 자료형을 선언한 뒤에 사용한다.
let a : number[] = [1,2,3,4];
let b : string[] = ["str1","str2"];
let c : boolean[] = [true];

// object 의 경우, : 다음 bracket 을 쓴 다음 object 내의 요소들의 자료형을 선언한다.
// 특정 변수가 없는 경우가 있을 경우를 표현하고 싶다면 변수명다음에 ? 를 붙힌다.
const player : {
    name : string;
    age? : number;
} =  {
    name : "kdd"
}

console.log(player.name);
console.log(player.age);