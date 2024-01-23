import { AppBar, Menu, MenuItem, Tab, Tabs, Toolbar, Typography,IconButton, Box,Button, Tooltip } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import {TabList,TabContext} from '@mui/material'



import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BasicStack from './AHome';


import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Virtualize from './Search';
import Addf from './AddF';
import Add from './Add';
import SignInSide from '../components/Getin';
import Ahome from './AHome';
import Aupdate from './Aupdate';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function ANavbar() {
  const navigate=useNavigate();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
    
    <Box sx={{ bgcolor: 'background.paper', mx:'100'}}>
      <AppBar position="static">
        <Toolbar>
        <LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}/>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TNVMF
          </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Home"  />
          <Tab label="Add Farmer" />
          <Tab label="WorkSpace " />
         
        </Tabs> <Button sx={{marginLeft:'auto'}} variant='contained' onClick={()=>navigate('SignInSide')}>LogOut</Button>
        
        </Toolbar>
      </AppBar>
      
        <TabPanel value={value} index={0}  >
          <Typography sx={{backgroundColor:'primary', margin:'0'}}>
      <Virtualize/>
          <Ahome/>
          </Typography>

        </TabPanel>
        <TabPanel value={value} index={1} >
        
          <Addf/>
          <Add/>
        </TabPanel>
      
    </Box>
    
      {/* <AppBar>

        <Toolbar>
          <LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}/>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TNVMF
          </Typography>

<Tabs sx={{background:"primary"}}>
  <Tab label='Home' sx={{color: 'inherit'}}/>  
  <Tab label='Add Farmer' sx={{color: 'inherit'}}/>  
</Tabs>
<Button sx={{marginLeft:'auto'}} variant='contained'>LogOut</Button>






        </Toolbar>
      
      </AppBar>
      <Typography><h6>TNVMF</h6></Typography> */}

      
     
 

     </>
  )

    }export default ANavbar
    ;
    



    
    
    