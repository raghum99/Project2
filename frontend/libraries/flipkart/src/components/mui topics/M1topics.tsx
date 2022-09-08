import { CircularProgress } from "@mui/material";
import Switch from "@mui/material/Switch"
import { useState } from "react";
import styled from "styled-components";
const label = { inputProps: { 'aria-label': 'Switch demo' } };


var Mys:React.FC=()=>{
    return(<>
    <button style={{borderRadius:'50%'}}>New Click</button>
    </>)
}

var Myys1=styled.button`
background-clor:blue;
border-radius:50%
`

const M1topics:React.FC=()=>{
    var dis=true;
    var [dic, setDis]=useState(false)
    const label={inputProps:{'aria-label': 'Switch demo'}};
    return (<>
    <Switch {...label} onClick={(a)=>{setDis(true)}}/>
    <Mys/>
    {dis? <Myys1>From Raghu</Myys1>:<h1>not displayed on 11th Aug</h1>}    
    <CircularProgress/>
    </>)
}

export default M1topics