// 시그니쳐 타입을 제작하여 함수 자체를 타입으로 지정할 수 있다.
// 이를 이용하면 원하는 타입의 함수를 먼저 type 으로 만들고
// 매 함수를 작성할 때 마다 원하는 함수를 골라다 타입으로 지정하면 된다.
// 일종의 interface 같은 역할을 할 수 있단 얘기.
type Add = (a: number, b: number) => number;


const add: Add = (a, b) => a + b;


// 다형성 1 - 오버로딩
// 자바의 그거랑 비슷함. 오버로딩은 같은 이름의 함수를 인자만 다르게 작성할 수 있던 그 기능임.
// 단, TS 에서는 타입을 지정할 때 이하와 같이 사용할 뿐.
type Add2 = { // 한 타입이 여러 시그니쳐 타입을 가질 수 있음.
    (a: number, b: number): number;
    (a: number, b: string): number;
    // 이처럼 타입 내에서 시그니처 타입의 인자 개수가 달라도 OK.
    // 단, param 의 개수가 상이하므로 긴쪽에서 인자에 ? 를 붙혀 선택사항으로 지정해주면
    // TS 가 시그니처를 혼동하지 않게 되므로 더 바람직하다.
    (a: number, b: number, c?:number, d?:number): number;
}

const add2: Add2 = (a,b) => {
    if (typeof b === 'string') {
        return a
    }
    return a+b;
}

type Config = {
    path:string,
    state:object
}

type Push = { // 한 타입이 여러 시그니쳐 타입을 가질 수 있음. config는 타입이 심지어 config
    (path:string) : void;
    (config:Config) :void;
}

const push:Push = (config) => {
    if (typeof config === 'string') {
        console.log(config)
    } else {
        console.log(config.path)
    }
}