// var num9=0
// setInterval(()=>{
//     console.log (num9++)
// },1000)

function Currenttime(){
    let date=new Date();
    let hh:number|string=date.getHours();
    let mm:number|string=date.getMinutes();
    let ss:number|string=date.getSeconds();
    let session="AM";

    if (hh===0) {
        hh=12;
    }
    if (hh>12){
        hh=hh - 12;
        session= "PM"
    }

    hh = (hh<10)? "0" + hh:hh;
    mm = (mm<10)? "0"+ mm:mm;
    ss = (ss<10)? "0"+ ss:ss;

    let time = hh+":"+mm+":"+ss+":"+session

    document.getElementById("clock").innerText=time;
    let t=setTimeout(function(){
        Currenttime()}, 1000)
    }
    Currenttime();


