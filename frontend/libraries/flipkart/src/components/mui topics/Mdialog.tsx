import { Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { blue } from "@mui/material/colors";
import { useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
const emails=["data1","data2","data3"]

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }
  
  function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value: string) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
          <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    );
  }
  

const Mdialog:React.FC=()=>{
    
    const [selectedValue,setselectedValue]=useState(emails[1])
    const [open, setopen]=useState(false)
    const handleClickOpen=()=>{
        setopen(true)
    }
    const handleClose=(value:string)=>{
        setopen(false)
        setselectedValue(value)
    }
    return (<>
    <Typography variant="subtitle1" component="div">
  Selected: {selectedValue}
</Typography>
<br />
<Button variant="outlined" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<SimpleDialog
  selectedValue={selectedValue}
  open={open}
  onClose={handleClose}
/>
    </>)
}

export default Mdialog