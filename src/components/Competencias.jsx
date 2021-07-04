import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Box} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Competencias() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        
          <Grid container spacing={3}>
          
            <Grid item xs > 
            
            
            <Typography ><Box  fontWeight="fontWeightBold" m={1} className="compe">
                      JAVA SCRIPT </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/js.png" />
            </Grid>
  
            <Grid item xs> 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
             REACT </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/react.png" />
            </Grid>
  
            <Grid item xs> 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
                  HTML  </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/html.png" />
            </Grid>

            <Grid item xs > 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
              BOOTSTRAP </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/bootstrap.png" />
            </Grid>
  
            <Grid item xs > 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
                  CSS </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/css.png" />
            </Grid>
  
          
            <Grid item xs > 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
                  FIREBASE  </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/firebase.png" />
            </Grid>
  
            <Grid item xs > 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
                  JAVA  </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/java.png" />
            </Grid>
  
            <Grid item xs> 
            <Typography ><Box fontWeight="fontWeightBold" m={1} className="compe">
                  C++  </Box></Typography>
                <img className={classes.img} alt="complex" src="./images/cmas.png" />
            </Grid>
  
            
          </Grid>
        
      </div>
    );
  }

export default Competencias;
