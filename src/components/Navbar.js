import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar-paper'>
        <Toolbar>
          <Box
          style = {{padding : '1rem'}}
            component="img"
            sx={{
              height: '5rem'
            }}
            alt="Bonial"
            src={"/logo_Bonial_new.webp"}
          />
        <Grid container display={'flex'} justifyContent = {'flex-end'} alignItems = {'center'}>
            <Typography className='navbar-typography'> Brochure search</Typography>
            <Box
          style = {{padding : '1rem'}}
            component="img"
            sx={{
              height: '5rem'
            }}
            alt="IBM Watson X"
            src={"/brochure-icon.png"}
          />
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}