


import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {  makeStyles, Box,  Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: '2px solid currentColor',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className="App " id="home">
      <header className="App-header">
      <Box  
        justifyContent="center"
        p={2}
       m={1}
        textAlign="center"
      >
       
        <Typography variant='h5' >
        <Box className="uno" fontWeight="fontWeightBold" p={2}>
        Hola mi nombre es
      </Box>  
          </Typography> </Box>
          <Typography variant='h4' >
           <Box className="dos" fontWeight="fontWeightBold"  p={3}>
             Leobardo Antunez Cayetano
      </Box>  </Typography> 
          <Avatar  alt="Trevor Henderson" src="./images/yo.jpg" className={classes.large}  />
          <Typography variant='h3' >
          <Box className="tres"  fontWeight="fontWeightBold" p={2}  >
             Desarrollador de software
      </Box> </Typography>
      </header>
    </div>
  )
}

export default Home;
