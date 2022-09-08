var raghupromise= new Promise ((full,notfull)=>{
    var statuspro=false
    if (!statuspro){
        setTimeout(()=>{
            full ("thanks for treat")
        },2000)
    }else{
        notfull("very bad")
    }
})
raghupromise.then((a)=>{console.log(a)})
console.log(raghupromise)