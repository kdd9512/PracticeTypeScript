// type 과 interface 의 공통점
// 어떠한 Object 의 모양을 알리기 위해 해당 Object 의 모양을 정의한다.
// TS 에서는 상술한 object 의 모양을 정의하려면 interface 를 사용하고
// 이외의 상황에서는 type 을 사용하는 것을 기본으로 한다.
// interface 가 더 직관적이고 JS 로 컴파일 시 컴파일되지 않는다는 장점(= 코드가 가벼워짐) 이 있으므로.
type PlayerA = {
    name:string
}

interface PlayerB {
    name:string
}

// 어떠한 타입을 상속하려면 & 연산자로 이어준다
type PlayerAA = PlayerA & {
    age:number
}

// type 과는 달리 interface 는 extends 를 이용하여 상속시킨다.
interface PlayerBB extends PlayerB {
    age:number
}

// type 의 경우, property 를 추가하려면 만들어져 있는 type 에 추가해야 한다.
// 이하와 같은 방식은 이미 동명의 type 이 정의되어 있으므로 불가능.
type PlayerAA = {
    health:number
}

// 반면 interface 는 interface 의 이름을 다시 써주고 추가할 property 를 작성해도 동작한다.
interface PlayerBB {
    health:number
}

const playerA:PlayerAA = {
    age: 999,
    name:"kdd"
}

const playerB:PlayerB = {
    name:"kdd"
}