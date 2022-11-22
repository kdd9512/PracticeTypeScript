// 다형성 2 - Generic 제네릭
// 매 다른 인자가 들어올 때 마다 시그니쳐 타입을 작성한다는건 말이 안된다.
// 이럴 때에는 제네릭을 활용하여 일종의 가변 인자를 받아 TS 가 알아서 해당 타입으로 변환하여
// 시그니처 타입을 만든다.
// <T> 부분이 제네릭이다. 이 부분에 값이 들어오면 자동으로 값의 타입을 인지하고 그 값으로 변형된다.
type arr = {

    <T>(arr: T[]): T
}

// 배열의 첫 번째 값을 return.
const Print: arr = (arr) => arr[0]

const a = Print([1,2,3,4])
const b = Print(["a","b","c"])
const c = Print([true,true,false,false])
const d = Print([true,2,"asdf",false])