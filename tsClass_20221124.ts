// 추상클래스
// TS 에도 추상클래스가 존재한다.
// 자바처럼 직접 인스턴스를 가질 수 없지만 이 클래스를 상속하는 것으로 인스턴스의 상세를 구현할 수 있게 하는 클래스.
// 즉, 어떤 클래스의 기본 설계도가 되어 class 에서 상속하여 사용할 수 있다. 자바와 동일한 기능.
abstract class User {
    // 생성자
    constructor(
        protected firstName:string, // 이 추상클래스와 이 추상클래스를 상속하는 클래스들만 사용 가능하게 제한하는 protected
        protected lastName:string,
        protected nickname:string
    ) {}
    // 메서드
    // 추상 메서드를 만들고자 하면 이하처럼 메서드를 구현하지 않고
    // 메서드의 호출 시그니처(call signature) 만 적는다.
    getFullName(){ // 일반적 메서드
        return `${this.firstName} ${this.lastName}`
    }

    abstract getNickName():void // 추상 메서드. 여기선 그냥 뼈대만 만드는 것이라고 보면 된다. 실제구현은 이 추상클래스를 상속한 곳에서.
}

// class 를 만들고 혹은 추상클래스를 extends 하여 사용할 수 있다.
// JAVA 와 완전히 동일함.
class Player extends User {
    getNickName(): void {
        console.log(this.nickname)
    }
}

const kdd = new Player("dd","k", "kdd");

kdd.getFullName()