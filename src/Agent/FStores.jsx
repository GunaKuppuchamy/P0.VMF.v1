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
// import ANavbar from './ANavbar';
// import FNavbar from './FNavbar';
    const options=['aFarmer1','aFarmer2','aFarmer3','bFarmer4','bFarmer5','bFarmer6','aFarmer7','bFarmer7',];

function createData(name) {
  return { name };
}

const rows = [
  createData('Store1'),
  createData('Store2'),
  createData('Store3'),
  createData('Store4'),
 

];


function ListAddf(){
  const navigate=useNavigate();

  return(     
    rows.map((i)=>(
      <Stack spacing={0} sx={{backgroundColor:'lightgreen',marginTop:'5'}}>
      <ListItemButton   onClick={(()=>navigate('/Fdata'))}>{i.name}</ListItemButton>
           </Stack>
        //    onClick={(()=>navigate('/Aupdate'))}
  )))
}

export default function FStores() {





  // const array=[item1,item2,item3,item4];
  return (
   <>
  

<ANavbar1/>
   <Box sx={{marginTop:'5'}}>
    <Box margin={1}> <Box marginBottom={1} sx={{gap:'2'}}>
    <Autocomplete  sx={{width:'100'}} options={options} renderInput={(params)=><TextField  {...params} placeholder='Search Farmer' />}/>

    </Box>

<ListAddf/>
</Box>
</Box>
</>
    )



  
}
