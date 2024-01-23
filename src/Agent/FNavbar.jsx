import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Navigate, useNavigate,Outlet } from 'react-router-dom';
// import Ahome from './AHome';


const FNavbar = () => {
   const navigate=useNavigate();
  return (<>
    {/* <Toolbar> */}
{/* <AppBar> */}
    <Toolbar sx={{backgroundColor:'blue' ,position:'sticky'}} style={{position:'sticky',top:'0px'}}>
      <LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,color:'white'}}/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.0rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        VMF
      </Typography>
<Box sx={{marginRight:'auto'}}>
  <Button variant='contained' onClick={()=>navigate('/Fhome')} >Home</Button>
  {/* onClick={()=>navigate('/Fhome')} */}
  {/* <Outlet/> */}
{/* <Button variant='contained'  onClick={()=>navigate('/Add')}>Add Farmar</Button> */}

</Box>
{/* <Outlet/> */}
<Button sx={{marginLeft:'auto'}} variant='contained' onClick={()=>navigate('/')}>LogOut</Button>
{/* onClick={()=>navigate('/')} */}






    </Toolbar>
    {/* </AppBar> */}
    {/* </Toolbar> */}
    {/* <Ahome/> */}

    </>
  )
}

export default FNavbar
