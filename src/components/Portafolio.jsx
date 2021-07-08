import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Typography, Box} from '@material-ui/core';
import Arduino from './portaimages/Arduino'
import AppMixe from './portaimages/AppMixe'
import Pagina from './portaimages/Pagina'
import Tacos from './portaimages/Tacos'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
}));

function Portafolio() {
  const classes = useStyles();

  return (
    
      <header className="App-header  "  id="portafolio">
      <Grid container >
      <Grid item xs={12}>
          <Paper className={classes.paper}><Typography component="div" >
        
          <Typography variant='h3' >
           <Box className="about" fontWeight="fontWeightBold" letterSpacing={3}   p={3}>
            Proyectos
      </Box>  </Typography> 
   
          
          </Typography></Paper>
        </Grid>
       
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><AppMixe/>
          </Paper>
          
        </Grid>
        
        <Grid item xs={12}sm={3}>
          <Paper className={classes.paper}><Pagina/></Paper>
        </Grid>
       
        <Grid item xs={12}sm={3}>
          <Paper className={classes.paper}><Tacos/></Paper>
        </Grid>
        <Grid item xs={12} sm={3} >
          <Paper className={classes.paper}><Arduino/></Paper>
        </Grid>
        
      
      
        
      </Grid>
      </header>
    
  );
}

export default Portafolio;

