// Storage 는 Js 의 웹 스토리지 API 를 위해 사용되는 인터페이스이므로
// 여기서는 해당 이름으로 interface 내용을 추가하지 않고
// 이름을 조금 다르게 하여 새 interface 를 생성한다.
interface SStorage<T> {
   [key:string]: T
}

// 제네릭을 사용하여 dynamic SQL 처럼 T에 타입 인자를 넣어
// 이하에 포함된 메서드들의 형태를 자유로이 바꿀 수 있다.
class LocalStorage<T> {
    private storage:SStorage<T> = {}
    //
    set(key:string, value:T) {
        this.storage[key] = value;
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}


const stringStorage = new LocalStorage<string>()

stringStorage.get("key")

const booleanStorage = new LocalStorage<boolean>()

booleanStorage.set("key", true)
booleanStorage.get("key")