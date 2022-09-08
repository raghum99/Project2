var data=fetch('https://fakestoreapi.com/products')
.then((a)=>{return a.json()})
.then((a)=>{
    a.map((prd,i)=>{
        var h1= document.createElement('h1')
        h1.innerHTML=a[i].description
        document.getElementById("root").appendChild(h1)
        var img=document.createElement('img')
        img.src=a[i].image
        document.getElementById("root").appendChild(img)
        img.style.height="100px"
        var pri=document.createElement('pri')
        pri.innerHTML=a[i].price
        document.getElementById("root").appendChild(pri)
        var catg=document.createElement('catg')
        catg.innerHTML=a[i].category
        document.getElementById("root").appendChild(catg)
    })
    // var h1= document.createElement('h1')
    // h1.innerHTML=a[0].description
    // document.getElementById("root").appendChild(h1)
    // var img=document.createElement('img')
    // img.src=a[0].image
    // document.getElementById("root").appendChild(img)
    // img.style.height="300px"
    console.log(a[0])
})
console.log(data)