type Name = string;
type Age = number;


// 속성에 readonly 라는 속성을 추가하면 type 외부로부터의 변조를 막을 수 있다.
type Player = {
    readonly name : Name,
    age?:Age
}

const playerMaker = (name:string) : Player => ({name})
const kdd = playerMaker('kdd');
kdd.age = 999
// kdd.name = "asdf" // readonly 설정되어있는 요소는 변형할 수 없다.

// readonly 속성은 다양한 곳에 추가가 가능하다.
const numberArray : readonly number[] = [1,2,3,4,5];
// numberArray.push(1) // readonly number[] 타입에는 push 라는 메서드가 존재하지 않는다. readonly 를 지우면 작동가능.

const strArray: readonly string[] = ["1","2"];