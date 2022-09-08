var number=new Array(1,2,3,4,5)
console.log (number)

number.push(6,7)
console.log (number)


var nums:number[]=[1,2,3,4,5,6,7]
var all=nums.map((numb)=>{
    console.log (numb)
})

const adder=((Previous:any,Current:any)=> Previous+Current)
console.log (nums.reduce (adder))