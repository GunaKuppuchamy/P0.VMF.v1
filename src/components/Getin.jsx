import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//import ResponsiveAppBar from './Navbar';
import loginimage from "../Agent/Acomponents/pxfuel.jpg"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import App1 from '../App1';
import App from '../App';
import GetUp from './Getup';



function Copyright(props) {
  // const navigate=useNavigate();
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const [choice, setChoice]=React.useState();
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
       
          item
          xs={false}
          sm={4}
          md={7}
         
          sx={{
            //  backgroundImage: Pxfuel,
            
            backgroundImage:`url(${loginimage})` ,display:'flex',
            // backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* <img src={loginimage} alt="image" /> */}
        


        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ width: '100%' }}>
      */}






        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
         sx={{
          my: 2,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ><LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
            VMF
          </Typography>
        </Box>

       
        


          <Box
            sx={{
              my: 0,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, color:'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Get in
            </Typography>

            <Box
            sx={{
              my: 0,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FormControl>
      <FormLabel id="choice" name="choice"required>Choose</FormLabel>
      <RadioGroup
        row
        aria-labelledby="choice"
        name="choice"
      >
        <FormControlLabel name="choice" value="Farmer" control={<Radio />} label="Farmer" onChange={(e)=>setChoice(e.target.value)} />   
        <FormControlLabel name="choice" value="Commision agent"  control={<Radio />} label="Commision agent"  onChange={(e)=>setChoice(e.target.value)} />
        
      </RadioGroup>
     
    </FormControl>
            
            </Box>










            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                 autoComplete='email'
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            //  onSubmit={hadleRoute()}   document.getElementById('choice')=='Farmer'    navigate('/AHome')
            // onSubmit={()=>{
            //   if (document.getElementsByName('choice').value=='Farmer') {
            //     console.log(document.getElementById('choice').value);
            //     navigate('/App1')
            //   }else if(document.getElementByName('choice').value=='Commision agent'){
            //     navigate('/AHome')
            //   }}
            // }
                  //  onClick={    ()=>navigate('/AHome')}
                  onClick={    ()=>{
                    if (choice=='Commision agent') {
                      navigate('/AHome')
                    }else if(choice=='Farmer'){
                      navigate('/Fhome')
                    }
                  }}
              >
                Get In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/GetUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>




     
    {/* </Box>

    </Grid> */}


      </Grid>
    </ThemeProvider>
  );
}