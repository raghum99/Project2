// import { FormControlLabel, FormGroup, Switch } from "@mui/material";
// import {};
// const Mswitch1:React.FC=()=>{
   
    

// function Mswitch1() {
//     return (
//       <FormGroup>
//         <FormControlLabel control={<Switch defaultChecked />} label="Label" />
//         <FormControlLabel disabled control={<Switch />} label="Disabled" />
//       </FormGroup>
//     );

// }
// default export Mswitch1

  
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
