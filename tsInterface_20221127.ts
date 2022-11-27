// 특정 값으로만 변수를 만들고 싶은 경우 이하와 같이 해당 옵션을 나열하는 것으로 가능하다.
// 이 타입으로 지정된 변수는 옵션으로 나열된 값만 가질 수 있다.
// 옵션1 | 옵션2 | ....
type Team = "red" | "blue" | "yellow";
type Health = 0 | 1 | 5 | 10;

// 인터페이스.
// 특정한 오브젝트의 모양을 설정하는데 사용한다.
// 객체지향 방식으로 프로그래밍 할때 사용되며 type 보다는 용도가 제한된다.
type Player = {
    nickName:string,
    healthBar:Health,
    team:Team
}

const kdd:Player = {
    nickName: "KDD",
    healthBar: 10,
    team:"red"
}

interface User {
    name:string
}

interface Player1 extends User{ }

// type 의 경우 특정 type 이나 interface 를 상속한다면 이하처럼 쓰는 것도 가능하다.
type Player2 = User & {}

