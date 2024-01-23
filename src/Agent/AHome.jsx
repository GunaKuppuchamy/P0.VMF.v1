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
    const options=['aFarmer1','aFarmer2','aFarmer3','bFarmer4','bFarmer5','bFarmer6','aFarmer7','bFarmer7',];

function createData(name) {
  return { name };
}

const rows = [
  createData('Farmer1'),
  createData('Farmer4'),
  createData('Farmer5'),
  createData('Farmer6'),
  createData('Farmer7'),
  createData('Farmer8'),
  createData('Farmer9'),
  createData('Farmer10'),
  createData('Farmer11'),
  createData('Farmer12'),
];


function ListAddf(){
  const navigate=useNavigate();

  return(     
    rows.map((i)=>(
      <Stack spacing={0} sx={{backgroundColor:'lightgreen',marginTop:'5'}}>
      <ListItemButton  onClick={(()=>navigate('/Aupdate'))}>{i.name}</ListItemButton>
           </Stack>
  )))
}

export default function Ahome() {





  // const array=[item1,item2,item3,item4];
  return (
   <>
   <ANavbar1/>
   <Box sx={{marginTop:'5'}}>
    <Box margin={1}> <Box marginBottom={1}>
    <Autocomplete  sx={{width:'100'}} options={options} renderInput={(params)=><TextField  {...params} placeholder='Search Farmer' />}/>
    </Box>

<ListAddf/>
</Box>
</Box>
</>
    )



  
}
