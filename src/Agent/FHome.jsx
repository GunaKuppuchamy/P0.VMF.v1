import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, ListItemButton } from '@mui/material';
import Virtualize from './Search';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import ANavbar1 from './ANavbar1';
import ANavbar from './ANavbar';
import FNavbar from './FNavbar';
    const options=['aFarmer1','aFarmer2','aFarmer3','bFarmer4','bFarmer5','bFarmer6','aFarmer7','bFarmer7',];

function createData(name) {
  return { name };
}

const rows = [
  createData('Oddanchatram'),
  createData('Palani'),
  createData('madurai'),
  createData('Dindigul'),
  createData('Nilakottai'),
  createData('dharapuram'),
  createData('coimbed'),

];


function ListAddf(){
  const navigate=useNavigate();

  return(     
    rows.map((i)=>(
      <Stack spacing={0} sx={{backgroundColor:'golden',marginTop:'5'}}>
      <ListItemButton   onClick={(()=>navigate('/FStores'))}>{i.name}</ListItemButton>
           </Stack>
          
  )))
}

export default function Fhome() {





  // const array=[item1,item2,item3,item4];
  return (
   <>
   <FNavbar/><></>
   <Box sx={{marginTop:'5'}}>
    <Box margin={1}><Box marginBottom={1}>
    <Autocomplete  sx={{maxWidth:'xl'}} options={options} renderInput={(params)=><TextField  {...params} placeholder="Search MarketPlace" />}/>
    </Box>

<ListAddf/>
</Box>
</Box>
</>
    )



  
}
