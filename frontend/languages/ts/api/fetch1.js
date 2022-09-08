var data=fetch('https://fakestoreapi.com/products')
.then((a)=>{return a.json()})
.then((a)=>{
    var h1=document.createElement('h1')
    h1.innerHTML="Hello Am Fetch API"
    document.getElementById("root").appendChild(h1)
    console.log(a)
})