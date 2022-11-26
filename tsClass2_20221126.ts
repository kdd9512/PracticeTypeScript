// property 의 타입을 지정하고 그 타입만을 갖는 Object 를 설정.
// 제한된 양의 property 혹은 key 를 갖는 타입을 정의한다.
type Words = {
    [key: string]: string // Object 자체의 타입 string, 해당 Object 가 갖는 key 값도 string
    // [key:number]:string // Object 자체의 타입 string, 해당 Object 가 갖는 key 값은 number
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term:string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const asdf = new Word("asdf", "1234");

const dict = new Dict()

dict.add(asdf);
let printDef = dict.def("asdf");

console.log(printDef);