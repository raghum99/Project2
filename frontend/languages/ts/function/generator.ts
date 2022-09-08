function * laptop(){
    yield 1;
    yield 2;
    yield 3;
}

let lap=laptop()

console.log(lap.next().value)
console.log(lap.next().value)
console.log(lap.next().value)
console.log(lap.next().value)