/* eslint-disable react-refresh/only-export-components */
import  { useEffect,useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns=[
    {field:'id', headerName:'ID',width:90},
    {field:'title', headerName:'TITLE',width:250},
    {field:'body', headerName:'BODY',width:300}
]

const S2C1 = () => {
    const[info,setInfo]=useState([]);
    useEffect( () => {
       const fetchData=async()=>{
      const data=(await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
      setInfo(data);}
       fetchData();
      }, [])
    
  return (
    <>
     <Box sx={{height:400, width:'100%' ,top:2 }}>
<DataGrid
rows={info}
columns={columns}
initialState={{
    pagination: {
      paginationModel: {
        pageSize: 5,
      },
    },
  }}
  pageSizeOptions={[5]}
  checkboxSelection
  disableRowSelectionOnClick 
  />
    </Box>
   
    </>
  )
}

export default S2C1