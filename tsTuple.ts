// 한 array 에 다양한 종류의 값이 들어가야 하는 경우가 있는데,
// 이런 때는 이하와 같이 타입을 array 로 맞추고 그 값들의 type 을 변수의 type 으로 선언한다.
// 이때 타입의 역할을 하는 게 tuple.

const player : [string, number, boolean] = ["kdd", 999, false];

player[0] = "kdd1"

// 미정 & 빈값 이라는 type 역시 가지고 있다.
let a : undefined = undefined // 선택적 type
let b : null = null


// 어떤 값도 들어올 수 있음을 표현할 때에는 any 라는 type 을 사용한다.
// 즉, typeScript 가 비활성화된다.. 별로 좋은 방법은 아님.

const anything : any[] = [1,"23",4,"5",false,null] // 보이다시피 뭐가 들어가도 신경 안쓴다. TS 가 비활성화되어 JS 가 되었기 때문.