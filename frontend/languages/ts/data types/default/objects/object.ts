// var object:{1:'Bangalore', Two:'Mysore'}

// var arr1=[{a:'Bangalore', b:'mysore'}, {a:'Bangalore', b:'tumkur'}, {a:'Bangalore', c:'mangalore'}, {a:'Bangalore'}]
// var data2=arr1.filter((data)=>data.b==="mysore")
// console.log (data2)

// var data3=arr1.find((data)=>data.b==="mysore")
// console.log (data3)



var obj={a:"Mysore", b:{Zoo:"Has Animals", Wild:{Tiger:true}}, c:9}

console.log (obj.b.Wild)
// obj.d=1

interface Iobj{
    name:string
    [key:string]:any
}

var obj2:Iobj={
    name:"abcd"
}

console.log (obj2)

obj2.d="Hello"