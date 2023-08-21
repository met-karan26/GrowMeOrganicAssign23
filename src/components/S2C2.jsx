import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';


export default function S2C2() {
  const [checked, setChecked] = React.useState([true, false]);
  const [checked3,setChecked3]=React.useState([false,false,false]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorEl);
const open2=Boolean(anchorE2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };



  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
     <MenuItem><FormControlLabel
        label="support"
        control={<Checkbox checked={checked[0]} onChange={(e)=>setChecked([e.target.checked, checked[1]])} />}
      /></MenuItem> 
    <MenuItem>   <FormControlLabel
        label="customer_success"
        control={<Checkbox checked={checked[1]} onChange={(e)=>{setChecked([checked[0], e.target.checked])}} />}
      /></MenuItem> 
    </Box>  );

     const children2 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <MenuItem> <FormControlLabel
            label="Graphic Design"
            control={<Checkbox checked={checked3[0]} onChange={(e)=>{setChecked3([e.target.checked,checked3[1],checked3[2]])}} />}
          /></MenuItem> 
          <MenuItem>   <FormControlLabel
            label="Product Design"
            control={<Checkbox checked={checked3[1]} onChange={(e)=>{setChecked3([checked3[0], e.target.checked,checked3[2]])}} />}
          /></MenuItem> 
          <MenuItem>    <FormControlLabel
            label="Web Design"
            control={<Checkbox checked={checked3[2]} onChange={(e)=>{setChecked3([checked3[0], checked3[1],e.target.checked])}} />}
          /></MenuItem> 
        </Box>
      );


  return (
    <div>
      <Stack direction="row" spacing={5}>
      <div>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Customer Service
       
      </Button>
      <Menu sx={{top:10}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
         <FormControlLabel
      label="Customer Service"
      control={
         <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={(event)=>{setChecked([event.target.checked, event.target.checked])}}
        />
      }
    />
 {children}
    </Menu>
    </div>
    <div>
    <Button
        id="basic-button2"
        aria-controls={open2 ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={(e)=>{ setAnchorE2(e.currentTarget);}}
      >Design
      
         </Button>
      <Menu sx={{top:30}}
        id="basic-menu2"
        anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
      > 
        <FormControlLabel
        label="Design"
        control={
          <Checkbox
            checked={checked3[0] && checked3[1] && checked3[2]}
            indeterminate={checked3[0] !== checked3[1] || checked3[0] !==checked3[2] || checked3[1] !==checked3[2]}
            onChange={(event)=>{setChecked3([event.target.checked, event.target.checked,event.target.checked])}}
          />
        }
      />
     {children2}
      </Menu>
      
      </div>
    
      
      </Stack>
    </div>
  );
}
