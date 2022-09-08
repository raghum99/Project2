

function test<T>(a:T):T{
    console.log(1)
    console.log(2)
    console.log(3)
    return a
}
console.log(test("Hi How are you"))
console.log(test("678"))


var test1=function (){return "Hi Whats is name"}
console.log (test1())