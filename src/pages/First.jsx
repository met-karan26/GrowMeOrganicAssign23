import React, {useState} from 'react'
import {Stack,TextField,Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
const First = () => {
    
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const navigate = useNavigate();
    const handelClick=()=>{
      
        const data={
            name:name,
            phone:phone,
            email:email
        }
        const user = localStorage.setItem("User",JSON.stringify(data));
        console.log(user);
        setEmail('');
        setName('');
        setPhone('');
        
    }

  return (
    <Stack component='form' spacing={2}>
        
            <TextField id='standard-basic' label='Name' value={name} onChange={(e)=>setName(e.target.value)} variant='standard' type='text'/>

        <TextField id='standard-basic' label='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} variant='standard' type='tel' />

            <TextField id='standard-basic' label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} variant='standard' type='email' />

            <Button variant='contained' onClick={()=>{handelClick(); (name && phone && email)? navigate("/second") :alert("Please Enter user Credentials.") } } >Submit</Button>
       
    </Stack>
  )
}

export default First