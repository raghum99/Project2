import { ContentCut, ContentCopy, ContentPaste, Cloud } from "@mui/icons-material"
import { CircularProgress, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Switch, Typography } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"

var Swi:React.FC=()=>{
  return (<>
  <button style={{borderRadius:'50%'}}>Click</button>
  </>)
}

var Swi1=styled.button`
background-color:red;
border-radius:50%;
`

const Mtopics:React.FC=()=>{
  var dis=true;
  var [dis,setDis]=useState(false)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return(<>
  <Switch {...label} onClick={(a)=>{setDis(true)}}/>
  {/* <Switch {...label} defaultChecked />
  <Swi/> */}
  <Swi/>
  {dis? <Swi1>Raghu</Swi1>:<h1>not displayed</h1>}
  {/* <Swi1>Button</Swi1> */}
  <CircularProgress />
    
  </>)
}

export default Mtopics