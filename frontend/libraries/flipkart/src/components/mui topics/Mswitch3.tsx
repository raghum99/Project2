import { useState } from "react";
import styled from "styled-components";
import Aside_h1 from "../html topics/Aside";


var Swi1=styled.button`
background-color:red;
border-radious:50%;
`

var Swi:React.FC=()=>{
    return(<>
    <button style={{borderRadius:'50%'}}>Click Here</button>
    </>)
}

const Mswitch3:React.FC=()=>{
    var dis=true;
    var [dis, setDis]=useState(false)
    const label={inputProps:{'aria-label':'Switch Demo'} };
    return (<>
    <switch {...label} onClick ={(a)=>{setDis (true)}}/>
    <Swi/>
    {dis?<Swi1>Raghu</Swi1>:<h1>Not Displayed</h1>}
    
    
    </>)
}

export default Mswitch3