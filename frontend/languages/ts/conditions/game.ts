function ran(){
    var random=Math.floor(Math.random()*6+1)
    document.getElementById('root1')!.innerHTML=random as any
    // alert(random)
}


function days(){
    var random=Math.floor(Math.random()*7+1)
    document.getElementById('root2')!.innerHTML=random as any
    // alert(random)
    switch(random){
        case 1:
            document.getElementById('root2')!.innerHTML="Monday"
            break;
            case 2:
            document.getElementById('root2')!.innerHTML="Tuesday"
            break;
            case 3:
            document.getElementById('root2')!.innerHTML="Wednesday"
            break;
            case 4:
            document.getElementById('root2')!.innerHTML="Thrusday"
            break;
            case 5:
            document.getElementById('root2')!.innerHTML="Friday"
            break;
            case 6:
            document.getElementById('root2')!.innerHTML="Saturday"
            break;
            case 7:
            document.getElementById('root2')!.innerHTML="Sunday"
            break;
    }
}