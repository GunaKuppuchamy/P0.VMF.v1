import * as React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import { Button, ListItemButton } from '@mui/material';
// import Virtualize from './Search';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import ANavbar1 from './ANavbar1';




const options=['Farmer1','Farmer2'];

function createData(name) {
  return { name };
}

const rows = [
  createData('Farmer2'),
  createData('Former3'),
];



function ListAdd(){
  const navigate=useNavigate();
  return(     
    rows.map((i)=>(
      <Stack spacing={0} sx={{backgroundColor:'lightgreen',marginTop:'5'}}>
      <ListItemButton  >{i.name}<Button sx={{marginLeft:'auto'}} variant='contained' >Add</Button></ListItemButton>
           </Stack>
  )))
}


export default function Add() {
 





  // const array=[item1,item2,item3,item4];
  return (
    <>
      

      <ANavbar1/>
   <Box sx={{marginTop:'5'}}>
    <Box margin={1}> <Box marginBottom={1}>
    <Autocomplete  sx={{width:'100'}} options={options} renderInput={(params)=><TextField  {...params} placeholder='Search Farmer' />}/>
    </Box>

    <ListAdd/>
</Box>
</Box>

       </>
    
   
    )



  
}
 