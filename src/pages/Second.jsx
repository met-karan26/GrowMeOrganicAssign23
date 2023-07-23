import React from 'react'
import S2C1 from '../components/S2C1';
import S2C2 from '../components/S2C2';
import { Box } from '@mui/material';

const Second = () => {
  return (
   <>
   <Box sx={{ height:'100%',top:0}} mb={20}>
   <S2C1 />
   <S2C2 />
   </Box>
   </>
  )
}

export default Second