// TS 의 변수는 모두 : 다음 자료형을 선언한 뒤에 사용한다.
let a : number[] = [1,2,3,4];
let b : string[] = ["str1","str2"];
let c : boolean[] = [true];

// object 의 경우, : 다음 bracket 을 쓴 다음 object 내의 요소들의 자료형을 선언한다.
// 특정 변수가 없는 경우가 있을 경우를 표현하고 싶다면 변수명다음에 ? 를 붙힌다.
const player : {
    name : string,
    age? : number
} =  {
    name : "kdd"
}

console.log(player.name);
console.log(player.age);


// 같은 유형의 Object 를 여러 개 만들 때 Object 내 요소를 중복 작성해야 하는 불편함이 있는데,
// 이 경우에는 해당 요소를 마치 변수선언처럼 분리하여 재사용성을 높일 수 있다.
// 이 경우 type 을 사용하여 Object 를 정의한 다음 이하에서 타입을 정의한 타입으로 설정한다.
// 이를 alias 라고 한다.

type Player = {
    name : string,
    age? : number
}

const player1 : Player = {
    name:"player1"
}

const player2 : Player = {
    name:"player2",
    age:999
}

// 리턴 타입을 Player 로 지정한다.
// 이 경우 함수 내 return 값에 속성이 없는 경우가 있더라도
// Player 에 해당 속성이 존재한다면 그 속성을 그대로 가지고 와서
// 변형하는 등 사용이 가능하다.
function makePlayer(name:string) : Player {
    return {
        name
    }
}

// arrow function 을 이용하는 경우에도 마찬가지다.
const playerMaker = (name:string) : Player => ({name});

const noage = makePlayer("kdd");
noage.age = 12;


