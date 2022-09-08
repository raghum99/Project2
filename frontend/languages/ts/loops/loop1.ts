for(var counter:number = 1; counter<10; counter++){
    console.log("for loop executed : " + counter)
}


var N = 4
var i = 0
 
while(i<N){
    // set of statement in while loop
    console.log(i)
 
    i++ // updating control variable
}


var N = 6
var i = 1
var factorial = 1
 
while(i<=N){
    factorial = factorial * i
    i++ // updating control variable
}
 
console.log("factorial of "+N+" is : "+factorial)