// 이하의 유형은 TS 에만 존재한다.
// 1. unknown - 뭐가올지 알 수 없는 타입.
// 들어올 값을 유동적으로 조절할 수 있다.
let a: unknown;

switch (typeof a) {
    case 'number' : {
        let b = a + 1
        break;
    }
    case 'string' : {
        let b = a.toUpperCase();
        break;
    }
    case 'boolean' : {
        let a = true;
    }
        break;
}


// 2. void - 아무 것도 return 하지 않는 함수의 type 을 정의할 때 사용 한다.

// 함수의 type 을 지정.
function returnNothing(): void;

// return 값이 없는 함수.
function returnNothing() {
    console.log("return nothing")
}

const asdf = returnNothing();

// void 타입에는 아무것도 return 하지 않으므로 toUpperCase 가 존재하지 않음.
asdf.toUpperCase()


// 3. never - 함수가 절대 실행되지 않음을(실행되서는 안되는) 알릴때 사용.
// 자주 사용하지는 않음.

function neverReturn(): never {
    throw new Error("Error!!!")
}

// param 은 string 이나 number 밖에 안들어오므로 그외는 전부 never 처리 될 것이다.
function neverReturn2(param: string | number) {
    if (typeof param === "number") {

    } else if (typeof param === "string") {

    }
    // 만약 param 이 지정한 값만 들어온다면, 이하는 절대 실행되지 않을 것이다
    else {
        param
    }
}
