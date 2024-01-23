import React from 'react'
import ANavbar1 from './ANavbar1'
import { Box, FormControl, FormGroup, Grid, Input, InputLabel, MenuItem, Paper, Select, TextField, Typography, styled } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { lightBlue } from '@mui/material/colors'
import Aut from './AUT'



// import { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";




function Aupdate(){
  const [vegetable, setVegetable] = React.useState('');
  const handleChange = (event) => {
    setVegetable(event.target.value);
  };
  
    // const [startDate, setStartDate] = useState(new Date());
  return (
   <div>
    <ANavbar1/>
    <Box margin={2} sx={{backgroundColor:'transparent'}}>
<FormGroup>
  <Box margin={2}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box margin={2}> <DatePicker required label="Date" defaultValue={dayjs()} format='DD/MM/YYYY'/></Box>
    </LocalizationProvider>


    
    <Box>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
<Grid xs={4}><Box margin={2} ><Typography>Vegetable</Typography><Select   value={vegetable} sx={{display:'flex'}}  onChange={handleChange}>
  <MenuItem value={"Brinjal"}>Brinjal</MenuItem>
  <MenuItem value={"Lady's Finger"}>Lady's Finger</MenuItem>
  </Select></Box></Grid>
<Grid xs={4}><Box margin={2} ><Typography>No. of Bags/kgs</Typography><TextField sx={{display:'flex'}} required id="outlined-required"   placeholder='No. of Bags/kgs'/></Box></Grid>
<Grid xs={4}><Box margin={2}><Typography>&#8377; per Bag/kg</Typography><TextField sx={{display:'flex'}} required id="outlined-required"  placeholder='&#8377; per Bag/kg' /></Box></Grid>
<Grid xs={4}><Box margin={2}><Typography>&#8377; Extras</Typography><TextField sx={{display:'flex'}} required id="outlined-required"  placeholder='&#8377; Extras'/></Box></Grid>
<Grid xs={4}><Box margin={2}><Typography>&#8377; commission</Typography><TextField sx={{display:'flex'}} required id="outlined-required"  placeholder='&#8377; commission'/></Box></Grid>
<Grid xs={4}><Box margin={2}><Typography>&#8377; Transport charge</Typography><TextField sx={{display:'flex'}} required id="outlined-required"  placeholder='&#8377; Transport charge'/></Box></Grid>
<Grid xs={4}><Box margin={2}></Box></Grid>
<Grid xs={4}><Box margin={2}></Box></Grid>
<Grid xs={4}><Box margin={2}><Typography>&#8377; Total</Typography><TextField sx={{display:'flex'}} required id="outlined-required"  placeholder='&#8377; Transport charge'/></Box></Grid>


</Grid>
</Box>

</Box>
<Aut/>
</FormGroup>



</Box> 
    </div>
  )
}

export default Aupdate
