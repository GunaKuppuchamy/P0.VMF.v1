import * as React from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
function Addf() {
    const options=['Farmer1','Farmer2','Farmer3','Farmer4'];
  return (
    <div>
      <Autocomplete sx={{maxWidth:'xl',maxHeight:'',backgroundColor:'GrayText', marginTop:'2', marginBottom:'2'}} options={options} renderInput={(params)=><TextField  {...params} label="Search id" />}/>
      <Box sx={{marginTop:'5'}}>
    <Box margin={1}> <Box marginBottom={1}>
    <Autocomplete sx={{maxWidth:'xl',maxHeight:'',backgroundColor:'GrayText', marginTop:'2', marginBottom:'2'}} options={options} renderInput={(params)=><TextField  {...params} label="Search id" />}/>
    </Box>

</Box>
</Box>
    
    
    </div>
  )
}

export default Addf




