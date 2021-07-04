import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./Portafolios.css"

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 280,
    maxWidth: '100%',
  },
});

export default function AppMixe() {
  const classes = useStyles();

  return (
<div className="App ">
    <Card className={classes.root}>
      <CardActionArea>
      <div className="contenedor">
                <figure>
     <img className="columna" src="/images/traductor.jpg" alt="imagen" />        
               <div className="capa">
                 
                    <p>  App didáctica para aprender la lengua índigena Mixe variante de la comunidad 
            de Tamazulapam Del Espiritu Santo Mixe Oax. 
            </p>
            <a href="https://mixeweb.herokuapp.com/">Visitar</a> 
                </div>
                </figure>
      
         </div>
        <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
            App ëyuujk
            
          </Typography>
        </CardContent>
    
      </CardActionArea>
  
    </Card>
    </div>
  );
}
