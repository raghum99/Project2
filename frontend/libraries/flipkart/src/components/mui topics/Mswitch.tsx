import { FormControlLabel, FormGroup, Switch } from "@mui/material"
import styled from "styled-components";
export {};
var Swi:React.FC=()=>{
    return(<>
    <button style={{borderRadius:'50%'}}>click Here</button>
    
    </>)
}

var Swi1=styled.button`
background-color:yellow;
border-radius:30%'
`
const Mswitch:React.FC=()=>{
     const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return(<>
    <Switch {...label} defaultChecked />
    <Switch {...label} />
    <Swi/>
    <Swi1>Button</Swi1>
        
    </>)
}




export default Mswitch