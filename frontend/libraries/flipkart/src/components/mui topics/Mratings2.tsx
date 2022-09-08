import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useAccordionButton } from "react-bootstrap";

const Mratings2:React.FC=()=>{
  var [value, setvalue]=useState<number | null> (3)

  // const [value, setValue] = React.useState<number | null>(2);
  return (<>
  <h1>Controlled Ratings</h1>
  <Rating
  name="simple-controlled"
  value={value}
  onChange={(a, newval) => {
    setvalue(newval);
  }}
/>
  </>)

}

export default Mratings2

// const a=()=>{
//   return "Hello"
// }

// const b=()=>{
//   a()
//   return "Hello"
// }
