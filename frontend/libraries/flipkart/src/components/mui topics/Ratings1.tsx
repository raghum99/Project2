// Here we will be createing our own code for ratings insted of copying the entire code 
// will use only required from MUI, code is as mentioned

import { Rating } from "@mui/material";
import { useState } from "react";

const Ratings1:React.FC=()=>{
    var [value,setVal]=useState<number|null>(3)
    alert(value)
    return (<>
    <h1>Controled</h1>
<Rating
  name="simple-controlled"
  value={value}
  onChange={((a,newval)=>{
    setVal(newval)
  })}
    />
    </>)

}

export default Ratings1

// const a=()=>{
//     var num=0;
//     function setNum(newnum)=>{
//         num=newnum
//     }
// return [num,setnum]

// }
// const b=()=>{
//     a()
//     return "Hello"
    
//     }