import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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

export default function Cards() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
      <div className="contenedor">
                <figure>
                <img className="columna" src="/images/carrito.png" alt="imagen" />
               <div className="capa">
                    <p>Proyecto de práctica para
            Programación de microcontroladores de componentes arduino. </p>
                    
                </div>
                </figure>
        
         </div>
        <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
            Programación Arduino
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}




