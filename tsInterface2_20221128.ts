// 추상클래스
// 어떤 클래스를 만들 때 상속으로 설정할 수 있는 일종의 설계양식.
/*abstract class User {
    constructor(
        protected fname:string,
        protected lname:string
    ) {}
    abstract sayHi(name:string) :string
    abstract fullName():string
}*/

// interface 의 특징 :
// TS 에서 인터페이스 설정을 하더라도 실제 컴파일 될 때에는 이 부분은 JS 로 컴파일되지 않고 사라진다.
// 즉, 추상클래스보다 코드를 덜 쓰게 된다.
interface User {
    fname:string,
    lname:string,
    sayHi(name:string):string,
    fullName():string
}

interface Human {
    health:number
}

// interface 를 상속할 때에는 extends 가 아니라 implements 를 사용한다.
// 물론 하나 이상의 interface 를 상속하는 것도 가능하다.
// 하지만, 이 경우 생성자 내부의 변수들이 반드시 public 이어야 한다는 단점이 있다.
class Player implements User, Human {
    constructor(
        public fname:string,
        public lname:string,
        public health:number
    ) {}

    fullName(): string {
        return `${this.fname} ${this.lname}`;
    }

    sayHi(name: string): string {
        return `Hello ${name}, your full name is ${this.fullName()}`;
    }
}