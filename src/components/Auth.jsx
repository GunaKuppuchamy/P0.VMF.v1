import React from 'react'

const Auth = () => {
  return (
    <div>
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
      <FormLabel id="path">Choose</FormLabel>
      <RadioGroup
        row
        aria-labelledby="path"
        name="path"
      >
        <FormControlLabel value="Register" control={<Radio />} label="Register" />   
        <FormControlLabel value="Login"  control={<Radio />} label="Login" />
        
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
                      navigate('/App1')
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
    </div>
  )
}

export default Auth
